const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');
const crypto = require('crypto');



const getSiteName = () => {

  try {

    const baseConfigContent = fs.readFileSync(path.resolve(__dirname, 'src/utils/baseConfig.js'), 'utf-8');

    const siteNameMatch = baseConfigContent.match(/siteName:\s*['"]([^'"]+)['"]/);

    return siteNameMatch ? siteNameMatch[1] : 'EZ THEME USER';

  } catch (err) {

    return 'EZ THEME USER';

  }

};



const siteName = getSiteName();



// 生成随机种子，每次打包混淆结果不同
const randomSeed = crypto.randomBytes(8).toString('hex');



module.exports = defineConfig({

  publicPath: './',

  

  outputDir: 'dist',

  

  assetsDir: 'static',

  

  lintOnSave: false,

  

  productionSourceMap: false,

  

  configureWebpack: config => {

    config.experiments = {

      ...config.experiments,

      asyncWebAssembly: true,

      syncWebAssembly: true

    };

    

    config.resolve = {

      ...config.resolve,

      alias: {

        '@': path.resolve(__dirname, 'src')

      }

    };

    

    config.module = {

      ...config.module,

      rules: [

        ...config.module.rules,

        {

          test: /\.wasm$/,

          type: 'asset/resource',

          generator: {

            filename: 'static/modules/core/[name][ext]'

          }

        }

      ]

    };

    

    config.plugins.push(

      new webpack.DefinePlugin({

        __VUE_OPTIONS_API__: JSON.stringify(true),

        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),

        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)

      })

    );

    

    config.ignoreWarnings = [

      {

        module: /sass-loader/,

        message: /The legacy JS API is deprecated/

      }

    ];

    

    // 性能优化
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 512000,
      },
      minimize: true
    };

    if (process.env.NODE_ENV === 'production') {

      // 适度混淆，主要防止结构特征被识别
      const obfuscateOptions = {

        compact: true,                       

        controlFlowFlattening: false,        

        deadCodeInjection: false,            

        debugProtection: false,              

        disableConsoleOutput: true,          

        identifierNamesGenerator: 'mangled', // 变量名混淆

        renameGlobals: false,                

        selfDefending: false,                

        simplify: true,                      

        splitStrings: true, // 拆分字符串

        splitStringsChunkLength: 5,

        stringArray: true,                   

        stringArrayEncoding: ['base64'],

        stringArrayThreshold: 0.8, // 大部分字符串混淆

        transformObjectKeys: true, // 对象key混淆

        unicodeEscapeSequence: false,

        seed: randomSeed

      };



      const excludePatterns = [

        '**/chunk-vendors*.js',  

        '**/runtime*.js',        

      ];



      config.plugins.push(new WebpackObfuscator(obfuscateOptions, excludePatterns));

    }

  },

  

  css: {

    loaderOptions: {

      sass: {

        implementation: require('sass'),

        sassOptions: {

          outputStyle: 'expanded',

          fiber: false,

          indentedSyntax: false,

          includePaths: ['node_modules']

        },

        additionalData: `

          @use "@/assets/styles/base/variables.scss" as *;

        `

      }

    }

  },

  

  pages: {

    index: {

      entry: 'src/main.js',

      template: 'public/index.html',

      filename: 'index.html',

      title: siteName

    }

  },



  devServer: {

    client: {

      overlay: false

    }

  }

});
