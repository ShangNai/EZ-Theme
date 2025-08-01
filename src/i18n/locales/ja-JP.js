﻿
import { SITE_CONFIG } from '../../utils/baseConfig';

export default {
  common: {
    appName: SITE_CONFIG.siteName,
    welcome: `${SITE_CONFIG.siteName}へようこそ`,
    login: 'ログイン',
    register: '登録',
    logout: 'ログアウト',
    email: 'メール',
    password: 'パスワード',
    confirmPassword: 'パスワード確認',
    forgotPassword: 'パスワードを忘れた？',
    resetPassword: 'パスワードリセット',
    rememberMe: 'ログイン情報を記憶',
    submit: '送信',
    cancel: 'キャンセル',
    save: '保存',
    delete: '削除',
    edit: '編集',
    add: '追加',
    search: '検索',
    filter: 'フィルタ',
    refresh: '更新',
    back: '戻る',
    optional: '(任意)',
    next: '次へ',
    previous: '前へ',
    loading: '読み込み中...',
    success: '成功',
    error: 'エラー',
    warning: '警告',
    info: '情報',
    toggleTheme: 'テーマ切り替え',
    language: '言語',
    noData: 'データなし',
    confirm: '確認',
    dashboard: 'ダッシュボード',
    profile: 'プロフィール',
    settings: '設定',
    help: 'ヘルプ',
    about: 'について',
    verificationCode: '認証コード',
    sendCode: '認証コード送信',
    verify: '認証',
    enterEmail: 'メールアドレスを入力',
    enterVerificationCode: '認証コードを入力',
    enterPassword: 'パスワードを入力',
    selectEmailDomain: 'メールドメイン選択',
    domainNotAuthorized: 'ドメイン未認証',
    contactAdmin: '管理者に連絡して認証を取得',
    prevNotice: '前の通知',
    nextNotice: '次の通知',
    noticeCount: '{total}件中{current}件目',
    copied: 'クリップボードにコピー済み',
    userCenter: 'ユーザーセンター',
    myWallet: 'マイウォレット',
    changePassword: 'パスワード変更',
    logoutText: 'ログアウト',
    loadingQRCode: 'QRコード生成中...',
    qrCodeLoadFailed: 'QRコード読み込み失敗',
    qrCodeGenerationFailed: 'QRコード生成失敗',
    retry: '再試行',
    copyFailed: 'コピー失敗',
    page: 'ページ',
    networkError: 'ネットワークエラー',
    swipeHint: 'スワイプで切り替え',
    on: 'オン',
    off: 'オフ',
    copy: 'コピー',
    viewDetails: '詳細を見る',
    close: '閉じる',
    error_occurred: 'エラーが発生しました。後で再試行してください',
    apiChecking: 'APIの可用性を確認中...',
    checking: '確認中',
    completed: '完了'
  },
  auth: {
    loginTitle: 'おかえりなさい',
    loginSubtitle: 'アカウントにログイン',
    registerTitle: 'アカウント作成',
    registerSubtitle: '新規アカウント登録',
    emailPlaceholder: 'メールアドレスを入力',
    passwordPlaceholder: 'パスワードを入力',
    confirmPasswordPlaceholder: 'パスワードを再入力',
    emailVerificationSent: '認証コードをメールに送信済み',
    emailVerificationFailed: '認証コード送信失敗',
    verificationCodePlaceholder: '認証コードを入力',
    inviteCodePlaceholder: '招待コードを入力（任意）',
    forgotPasswordTitle: 'パスワードの再取得',
    forgotPasswordSubtitle: 'メールに認証コードを送信します',
    registerSuccess: '登録成功',
    registerFailed: '登録失敗',
    loginSuccess: 'ログイン成功',
    loginFailed: 'ログイン失敗',
    logoutSuccess: 'ログアウト成功',
    forgotPasswordSuccess: 'パスワードリセットメール送信済み',
    forgotPasswordFailed: 'パスワードリセットリクエスト失敗',
    alreadyLoggedIn: 'ログイン済みです。ダッシュボードに移動します',
    emailRequired: 'メールアドレスを入力',
    passwordRequired: 'パスワードを入力',
    emailInvalid: '有効なメールアドレスを入力',
    passwordMismatch: 'パスワードが一致しません',
    noAccount: 'アカウントがありませんか？',
    createAccount: 'アカウント作成',
    haveAccount: 'アカウントをお持ちですか？',
    loginHere: 'ここでログイン',
    passwordMatchError: 'パスワードが一致しません',
    captchaSuccess: '認証成功',
    captchaFailed: '認証失敗',
    
    loginNow: '今すぐログイン',
    resetNow: 'パスワードリセット',
    alreadyHaveAccount: 'アカウントをお持ちですか？',
    rememberPassword: 'パスワードを記憶？',
    codeRequired: '認証コードを入力',
    codeInvalid: '認証コードが無効',
    codeSent: '認証コード送信済み',
    sendCodeFailed: '認証コード送信失敗',
    passwordResetSuccess: 'パスワードリセット成功',
    passwordResetFailed: 'パスワードリセット失敗。後で再試行してください',
    inviteCode: '招待コード',
    agreeToTerms: '利用規約に同意します',
    termsOfService: '利用規約',
    mustAgreeToTerms: '登録するには利用規約に同意する必要があります',
    emailPrefixPlaceholder: 'メールプレフィックスを入力',
    newPasswordPlaceholder: '新しいパスワードを入力',
    requiresAuth: 'ログインが必要です',
    captcha: '認証',
    captchaRequired: '認証を完了してください',
    captchaInvalid: '認証失敗。もう一度お試しください',
    captchaExpired: '認証が期限切れです。再度認証してください',
    captchaError: '認証エラー。もう一度お試しください',
    captchaLoading: '認証コンポーネント読み込み中...',
    verifyTokenSuccess: 'トークン認証成功',
    verifyTokenFailed: 'トークン認証失敗、もう一度お試しください'
  },
  validation: {
    required: '{field}は必須です',
    email: '有効なメールアドレスを入力',
    minLength: '{field}は{length}文字以上必要です',
    maxLength: '{field}は{length}文字を超えてはいけません',
    passwordMatch: 'パスワードが一致しません',
    emailRequired: 'メールアドレスを入力',
    emailInvalid: '有効なメールアドレスを入力',
    passwordRequired: 'パスワードを入力',
    confirmPasswordRequired: 'パスワードを確認',
    passwordsDontMatch: 'パスワードが一致しません',
    codeRequired: '認証コードを入力'
  },
  errors: {
    networkError: 'ネットワークエラー。接続を確認してください',
    serverError: 'サーバーエラー。後で再試行してください',
    unauthorized: '未認証。ログインしてください',
    forbidden: 'アクセス禁止。権限が不足しています',
    notFound: 'ページが見つかりません',
    notFoundDescription: 'アクセスしたページは存在しないか、削除されました',
    backToHome: 'ホームに戻る',
    unknown: '不明なエラー',
    browserRestricted: 'ブラウザアクセス制限'
  },
  messages: {
    loginSuccess: 'ログイン成功',
    loginFailed: 'ログイン失敗。ログイン情報を確認してください',
    registerSuccess: '登録成功',
    registerFailed: '登録失敗。後で再試行してください',
    passwordResetSuccess: 'パスワードリセット成功',
    passwordResetFailed: 'パスワードリセット失敗。後で再試行してください',
    logoutSuccess: 'ログアウト成功',
    codeSent: '認証コード送信済み',
    sendCodeFailed: '認証コード送信失敗',
    configLoadFailed: '設定読み込み失敗。ページを更新してください'
  },
  landing: {
    mainText: SITE_CONFIG.landingText['ja-JP'] || 'グローバルネットワークの無限の可能性を探る',
    scrollText: '下にスクロールしてログイン',
    exploreButton: '探索開始'
  },
  dashboard: {
    welcome: 'おかえりなさい',
    welcomeDesc: 'サービスと使用状況を確認',
    siteAnnouncement: 'サイトお知らせ',
    subscriptionInfo: 'プラン情報',
    planName: 'プラン名',
    expiryDate: '有効期限',
    planTraffic: 'プラン流量',
    remainingTraffic: '残り流量',
    remainingDays: '残り日数',
    accountBalance: 'アカウント残高',
    permanent: '永久',
    none: 'なし',
    days: '日',
    noPlanPrompt: '有効なプランがありません。プランを購入してください',
    importSubscription: 'サブスクリプションインポート',
    purchasePlan: 'プラン購入',
    resetTraffic: '流量リセット',
    renewPlan: 'プラン更新',
    noPlanToRenew: '更新可能なプランがありません',
    resetTrafficConfirm: '流量リセット確認',
    resetTrafficDesc: 'この操作は使用済み流量をリセットしますが、プラン期間は延長されません。続行しますか？',
    resetTrafficSuccess: '流量リセット注文作成成功',
    resetTrafficWarning: 'リセットは使用済み流量にのみ影響し、プラン有効期間は延長されません',
    ticketSupport: 'チケットサポート',
    viewHelp: 'ヘルプを見る',
    documentation: '使用ドキュメント',
    pendingItems: '保留中の項目',
    pendingOrders: '未払い注文',
    pendingTickets: '未返信チケット',
    pendingInvites: '管理者対応待ちのコミッション',
    officialClients: '公式クライアント',
    deviceLimit: 'オンライン機器',
    unlimited: '無制限',
    nextResetTime: '次回リセット時間',
    
    importTitle: 'インポート方法選択',
    copySubscription: 'サブスクリプションアドレスをコピー',
    copySubscriptionDesc: 'サブスクリプションリンクをクリップボードにコピー',
    scanQRCode: 'QRコードスキャンでサブスクリプション',
    scanQRCodeDesc: 'クライアントでQRコードをスキャンしてインポート',
    importToShadowrocket: 'Shadowrocketにインポート',
    importToSurge: 'Surgeにインポート',
    importToStash: 'Stashにインポート',
    importToV2rayNG: 'V2rayNGにインポート',
    importToClash: 'Clashにインポート',
    importToClashX: 'ClashXにインポート',
    selectPlatform: 'デバイスプラットフォームを選択',
    subscriptionCopied: 'サブスクリプションリンクをクリップボードにコピー済み',
    copyFailed: 'コピー失敗。手動でコピーしてください',
    manualImportRequired: '自動インポート不可。サブスクリプションリンクを手動でコピーしてインポートしてください',
    noSubscription: '利用可能なサブスクリプションなし',
    noClientsAvailable: 'このプラットフォームでは即時インポート方法がありません',
    clientNotInstalled: '対応クライアントがインストールされていません。サブスクリプションリンクをクリップボードにコピーしました'
  },
  platforms: {
    ios: 'iOS',
    android: 'Android',
    windows: 'Windows',
    macos: 'MacOS'
  },
  menu: {
    dashboard: 'ダッシュボード',
    shop: 'ストア',
    invite: '招待',
    more: 'もっと見る',
    commission: 'リベート',
    hotSale: '人気'
  },
  more: {
    title: '追加機能',
    description: 'さらに多くの機能とサービスを探る',
    viewHelp: '使用ヘルプとFAQを見る',
    viewNodes: '利用可能なサーバーノードを見る',
    manageOrders: '注文管理',
    getTechnicalSupport: '技術サポートを受ける',
    manageProfile: 'プロフィール管理'
  },
  nodes: {
    title: 'ノードリスト',
    loading: 'ノード読み込み中...',
    noNodes: '利用可能なノードなし',
    copiedToClipboard: 'クリップボードにコピー済み',
    welcome: {
      title: 'ノードリスト',
      description: '利用可能なサーバーノードを表示・使用'
    },
    type: 'ノードタイプ',
    rate: 'レート',
    host: 'ドメイン',
    port: 'ポート',
    cipher: '暗号化方式',
    security: 'セキュリティ設定',
    allowInsecure: '非セキュアを許可',
    secure: 'セキュア',
    tls: 'TLS',
    quickLink: 'クイックサブスクリプションリンク',
    linkView: 'リンク',
    qrcodeView: 'QRコード',
    invalidNodeData: 'ノードデータが不完全でリンク生成不可',
    unsupportedNodeType: 'サポートされていないノードタイプ',
    userInfoError: 'ユーザー情報取得失敗',
    viewSubscribeLink: 'サブスクリプションリンクを見る'
  },
  orders: {
    title: '注文リスト',
    loading: '注文読み込み中...',
    tradeNo: '注文番号',
    createdAt: '作成日',
    cycle: '周期',
    totalAmount: '金額',
    statusLabel: '状態',
    actions: '操作',
    viewDetail: '詳細を見る',
    cancel: '注文キャンセル',
    noOrders: '注文なし',
    goShopping: 'プラン購入へ',
    cancelConfirmTitle: '注文キャンセル確認',
    cancelConfirmText: 'この注文をキャンセルしますか？この操作は元に戻せません。',
    cancelSuccess: '注文キャンセル済み',
    cancelFailed: '注文キャンセル失敗',
    welcome: {
      title: '注文リスト',
      description: '注文を表示・管理'
    },
    status: {
      pending: '未払い',
      processing: '開通中',
      cancelled: 'キャンセル済み',
      completed: '完了',
      discounted: '割引済み',
      unknown: '不明な状態'
    },
    confirmOrder: '注文確認',
    payment: '注文支払い',
  },
  tickets: {
    title: 'チケットシステム',
    description: 'サポートチームに連絡',
    
    searchPlaceholder: 'チケット検索...',
    newTicket: '新規チケット',
    createNew: 'チケット作成',
    
    subject: '主題',
    subjectPlaceholder: 'チケットの主題を入力',
    message: '内容',
    messagePlaceholder: '問題を詳細に記述',
    level: '優先度',
    levelLow: '低',
    levelMedium: '中',
    levelHigh: '高',
    
    statusOpen: '処理中',
    statusClosed: '閉鎖済み',
    
    noTickets: 'チケットなし',
    selectTicket: 'チケットを選択して詳細を見る',
    noMessages: 'メッセージ記録なし',
    loadingMessages: 'メッセージ読み込み中...',
    loadingTickets: 'チケット読み込み中...',
    
    formIncomplete: 'チケット情報をすべて入力してください',
    createSuccess: 'チケット作成成功',
    createError: 'チケット作成失敗',
    fetchError: 'チケットリスト取得失敗',
    fetchDetailError: 'チケット詳細取得失敗',
    
    replyPlaceholder: '返信内容を入力...',
    send: '送信',
    replySent: '返信送信済み',
    replyError: '返信送信失敗',
    
    admin: 'カスタマーサービス',
    you: '私',
    
    closeTicket: 'チケット閉鎖',
    closeConfirmTitle: 'チケット閉鎖確認',
    closeConfirmText: 'このチケットを閉鎖しますか？閉鎖後は返信できません。',
    closeSuccess: 'チケット閉鎖済み',
    closeError: 'チケット閉鎖失敗',
    ticketClosed: 'このチケットは閉鎖済みで返信できません',
    closing: '閉鎖中...',
    
    createdAt: '作成日',
    
    smallScreenNotice: '小さい画面のデバイスを検出',
    switchToMobile: 'より良い体験のためにモバイルビューに切り替えることを推奨',
    switchToMobileView: 'モバイルビューに切り替え',
    
    largeScreenNotice: '大きい画面を検出',
    switchToDesktop: 'より良い体験のためにデスクトップビューを使用することを推奨',
    switchToDesktopView: 'デスクトップビューに切り替え',
    popup: {
      close_btn: '閉じる',
      wait_close_btn: '{seconds}秒後に閉じる'
    }
  },
  profile: {
    title: 'ユーザーセンター',
    basicInfo: '基本情報',
    email: 'メールアカウント',
    userId: 'ユーザーID',
    planId: 'プランID',
    balance: '残高',
    commission: 'コミッション',
    createdAt: '作成日',
    expiredAt: '有効期限',
    notifications: '通知設定',
    expireRemind: '有効期限リマインダー',
    trafficRemind: '流量リマインダー',
    expireRemindDesc: 'アカウント有効期限リマインダーメールを受信',
    trafficRemindDesc: '流量使い切りのリマインダーメールを受信',
    security: 'セキュリティ設定',
    changePassword: 'パスワード変更',
    changePasswordTitle: 'アカウントパスワード変更',
    oldPassword: '現在のパスワード',
    newPassword: '新しいパスワード',
    confirmPassword: '新しいパスワード確認',
    passwordMismatch: 'パスワードが一致しません',
    passwordChanged: 'パスワード変更済み',
    passwordError: 'パスワード変更失敗。現在のパスワードを確認してください',
    subscription: 'サブスクリプション管理',
    resetSecurity: 'サブスクリプションリセット',
    resetSecurityTitle: 'サブスクリプションリンクリセット',
    resetSecurityConfirm: 'サブスクリプションをリセットしますか？リセット後、前のサブスクリプションは無効になり、新しいサブスクリプションを再インポートする必要があります。',
    resetSuccess: 'リセット成功',
    resetError: 'リセット失敗',
    copySubscription: 'サブスクリプションリンクコピー',
    subscriptionCopied: 'サブスクリプションリンクコピー済み',
    updateSuccess: '更新成功',
    updateError: '更新失敗',
    settingsUpdated: '設定更新済み',
    loading: '個人情報読み込み中...',
    error: '個人情報読み込み失敗',
    retry: '再試行',
    avatar: 'アバター',
    giftCard: 'ギフトカード交換',
    giftCardTitle: 'ギフトカード交換',
    giftCardPlaceholder: 'ギフトカードコードを入力',
    giftCardSubmit: '交換',
    giftCardSuccess: 'ギフトカード交換成功',
    giftCardError: 'ギフトカード交換失敗',
    giftCardEmpty: 'ギフトカードコードを入力',
    saveChanges: '変更保存',
    cancel: 'キャンセル',
    noSubscription: 'サブスクリプションリンクなし',
    getSubscription: 'サブスクリプションリンク取得',
    avatarUploadSuccess: 'アバターアップロード成功',
    avatarUploadError: 'アバターアップロード失敗',
    confirmLogout: 'ログアウト確認',
    logoutDesc: 'ログアウトしますか？',
    logout: 'ログアウト',
    recentDevices: '最近のログイン機器',
    noDevices: 'ログイン記録なし',
    unknownDevice: '不明なデバイス',
    unknownIP: '不明なIP',
    unknownBrowser: '不明なブラウザ',
    sessionError: 'ログイン記録取得失敗',
    telegramGroup: 'Telegramグループ',
    telegramBot: 'Telegramボット',
    bindTelegram: 'Telegramボット連携',
    telegramStep1: 'ステップ1',
    telegramStep2: 'ステップ2',
    telegramSearchTip: 'Telegramで検索を開く',
    telegramSendCommand: 'ボットに以下のコマンドを送信',
    commandCopied: 'コマンドをクリップボードにコピー済み',
    iKnow: '了解',
    telegram: 'Telegram通信',
    telegramError: 'Telegram情報取得失敗'
  },
  contextMenu: {
    refresh: 'ページ更新',
    back: '前のページに戻る',
    forward: '次のページに進む',
    copy: 'コピー',
    paste: '貼り付け'
  },
  service: {
    title: 'オンラインカスタマーサービス',
    description: 'カスタマーサービスチームとリアルタイムで連絡',
    loading: 'カスタマーサービスシステム読み込み中...',
    waitForIcon: 'しばらくお待ちください。ダイアログアイコンが表示されたらクリックしてください',
    loadError: 'カスタマーサービスシステム読み込み失敗',
    retry: '再試行',
    offline: 'カスタマーサービスは現在オフラインです',
    leaveMessage: 'メッセージを残す',
    startChat: 'チャット開始',
    back: '戻る'
  },
  shop: {
    title: 'ストア',
    description: '利用可能なプランを表示・購入',
    loading: 'プラン読み込み中...',
    filter: {
      all: 'すべて',
      recurring: '定期',
      onetime: '一次性'
    },
    no_plans_found: '条件に合うプランが見つかりません',
    try_different_filter: '他のフィルタ条件を試してください',
    reset_filter: 'フィルタリセット',
    plan: {
      purchase: '購入',
      sold_out_btn: '売り切れ',
      stock: {
        plenty: '在庫十分',
        warning: '在庫僅少',
        sold_out: '売り切れ'
      },
      periods: {
        month: ' / 月払い',
        quarter: ' / 四半期',
        half_year: ' / 半年',
        year: ' / 1年',
        two_year: ' / 2年',
        three_year: ' / 3年',
        onetime: ' / 一次性'
      },
      price_options: {
        month: '月払い',
        quarter: '四半期',
        half_year: '半年',
        year: '1年',
        two_year: '2年',
        three_year: '3年',
        onetime: '一次性',
        reset_price: '流量リセットパック',
        deposit: 'チャージ'
      },
      discount: {
        relative: '相対割引約',
        savings: '節約できます'
      }
    },
    stats: {
      global_nodes: 'グローバルノード',
      global_nodes_desc: '世界中に広がる高速ノード',
      speed: '高速体験',
      speed_desc: '高速で安定したネットワーク体験',
      streaming: 'ストリーミング解除',
      streaming_desc: '各種ストリーミングサービスを解除',
      devices: '複数デバイス対応',
      devices_desc: '複数デバイスの同時使用に対応'
    },
    config_error: 'ストア設定取得失敗',
    popup: {
      close_btn: '了解',
      wait_close_btn: '{seconds}秒お待ちください'
    }
  },
  order: {
    title: '注文確認',
    description: '注文情報を確認し、支払いを完了してください',
    existing_plan_warning_title: '有効なプランがすでにあります',
    existing_plan_warning_desc: '新しいプランを購入すると現在のプランが置き換えられます',
    select_period: '請求周期を選択',
    coupon: 'クーポンコード',
    enter_coupon: 'クーポンコードを入力（任意）',
    verify_coupon: '検証',
    coupon_applied: '適用済み',
    remove_coupon: '削除',
    coupon_success: 'クーポンコード {code} 適用成功',
    coupon_success_fixed: 'クーポンコード {code} 適用成功、{amount}円割引',
    coupon_success_percent: 'クーポンコード {code} 適用成功、{percent}%割引',
    coupon_invalid: '無効なクーポンコード',
    coupon_removed: 'クーポンコード削除済み',
    order_summary: '注文概要',
    subtotal: '小計',
    discount: '割引',
    total: '合計',
    back_to_shop: 'ストアに戻る',
    place_order: '注文送信',
    order_success: '注文作成成功',
    order_failed: '注文作成失敗',
    no_plan_selected: 'プラン未選択',
    plan_not_found: 'プランが存在しません',
    failed_to_fetch_plan: 'プラン情報取得失敗'
  },
  payment: {
    title: '注文支払い',
    description: '支払い方法を選択して注文を完了',
    product_info: '製品情報',
    plan_name: 'プラン名',
    period: '周期',
    period_types: {
      reset_price: '流量リセットパック',
      deposit: 'チャージ'
    },
    traffic: '流量',
    order_info: '注文情報',
    trade_no: '注文番号',
    created_at: '作成日',
    total_price: 'プラン金額',
    total_amount: '支払い金額',
    discount_amount: '割引金額',
    balance_amount: '残高使用',
    refund_amount: '返金額',
    use_credit: '残高使用',
    payment_method: '支払い方法',
    free_order: '無料注文',
    free_order_title: '注文は無料です',
    free_order_desc: '「アクティブ化」ボタンをクリックしてサービスを開始',
    fee: '手数料',
    cancel_order: '注文キャンセル',
    check_payment: '支払い状態確認',
    activate: 'アクティブ化',
    continue_to_dashboard: 'ダッシュボードへ',
    confirm_cancel: 'この注文をキャンセルしますか？',
    cancel_success: '注文キャンセル済み',
    cancel_failed: '注文キャンセル失敗',
    payment_successful: '支払い成功',
    payment_successful_desc: '注文の支払いが完了し、サービスが開始されました',
    payment_processing: '注文処理中です。しばらくお待ちください...',
    order_cancelled: '注文キャンセル済み',
    check_failed: '支払い状態確認失敗',
    select_method_first: '支払い方法を先に選択してください',
    no_order_selected: '注文未選択',
    order_not_found: '注文が存在しません',
    failed_to_fetch_order: '注文情報取得失敗',
    failed_to_fetch_methods: '支払い方法取得失敗',
    confirm_cancel_title: '注文キャンセル確認',
    confirm_cancel_desc: '注文キャンセル後、復元できません。キャンセルしますか？',
    payment_return_description: '支払い完了後、自動的に戻ります',
    return_to_dashboard: 'ダッシュボードに戻る',
    order_expired: '注文が期限切れです',
    create_new_order: '新規注文作成',
    handling_fee: '手数料',
    total_with_fee: '手数料込み合計',
    pay_now: '今すぐ支払う',
    scan_qrcode: 'QRコードをスキャンして支払い',
    pay_success: '支払い成功',
    pay_processing: '支払い処理中...',
    open_in_new_tab: '新しいタブで開く',
    check_timeout: '支払い状態確認タイムアウト。後で再試行してください',
    payment_pending: '支払い処理中。後で確認してください',
    copy_success: 'クリップボードにコピー済み',
    copy_failed: 'コピー失敗。手動でコピーしてください',
    check_manually: '手動確認',
    auto_checking: '自動確認中...',
    ios_notice: 'iOSデバイスは「支払いへ」ボタンをクリックして支払いを完了してください',
    safari_payment_notice: 'Safariブラウザは下のボタンをクリックして支払いページを開いてください',
    safari_payment_button: '支払いページを開く',
    continue_to_wallet: 'チャージページに戻る',
    order_status: '注文状態',
    return_to_previous: '前のページに戻る',
    status: {
      pending: '未払い',
      processing: '開通中',
      cancelled: 'キャンセル済み',
      completed: '完了',
      discounted: '割引済み',
      unknown: '不明な状態',
      activate: 'アクティブ化待ち'
    }
  },
  invite: {
    title: 'マイリベート',
    description: '友達を招待して登録させ、コミッションを獲得。',
    stats: {
      registeredUsers: '登録ユーザー数',
      pendingCommission: '確認中のコミッション',
      availableCommission: '累計獲得コミッション',
      commissionRate: 'コミッション率'
    },
    rules: {
      title: 'リベートルール',
      share: {
        title: '1. 共有',
        desc: '招待リンクを共有'
      },
      register: {
        title: '2. 登録',
        desc: '友達が登録を完了'
      },
      purchase: {
        title: '3. 購入',
        desc: '友達がプランを購入'
      },
      commission: {
        title: '4. リベート',
        desc: '{rate}%のリベートを獲得'
      }
    },
    balance: {
      title: 'コミッション残高',
      available: '利用可能なコミッション',
      description: '友達招待で獲得したコミッションは消費残高に直接移行可能',
      transferToBalance: '残高に移行',
      withdraw: '引き出し'
    },
    transfer: {
      title: 'コミッション移行',
      warning: '注意',
      warningDesc: '移行後の残高は消費専用で、引き出し不可',
      amount: '移行金額',
      amountPlaceholder: '移行金額を入力',
      availableCommission: '利用可能なコミッション',
      confirm: '移行確認',
      processing: '処理中...',
      success: '移行成功',
      failure: '移行失敗',
      insufficientFunds: '利用可能なコミッション不足',
      invalidAmount: '有効な金額を入力'
    },
    withdraw: {
      title: 'コミッション引き出し',
      platform: '引き出しプラットフォーム',
      account: '引き出しアカウント',
      accountPlaceholder: '引き出しアカウントを入力',
      amount: '引き出し金額',
      amountPlaceholder: '引き出し金額を入力',
      availableCommission: '引き出し可能なコミッション',
      noPlatforms: '利用可能な引き出しプラットフォームなし',
      confirm: '引き出し確認',
      processing: '処理中...',
      success: '引き出し申請送信済み',
      failure: '引き出し申請失敗',
      tip: 'ヒント',
      invalidAmount: '有効な金額を入力',
      insufficientFunds: '利用可能なコミッション不足',
      belowMinAmount: '引き出し金額は{amount}未満不可',
      minWithdrawAmount: '最低引き出し金額'
    },
    inviteLink: {
      title: '招待リンク',
      createCode: '招待コード作成',
      creating: '生成中...',
      inviteCode: '招待コード',
      registeredCount: '登録済み',
      scanDescription: 'QRコードをスキャンして登録すると追加特典あり',
      createdAt: '作成日: {date}',
      placeholder: '生成された招待リンクがここに表示されます',
      copyLink: 'リンクコピー',
      copied: 'コピー済み',
      noInviteCode: '利用可能な招待コードなし',
      created: '招待コード生成成功。友達と共有してください'
    },
    share: {
      wechat: 'WeChat',
      qq: 'QQ',
      twitter: 'Twitter',
      telegram: 'Telegram',
      noLinkAvailable: '利用可能な招待リンクなし',
      scanTitle: 'WeChatでスキャンして共有',
      scanQRCode: 'WeChatでQRコードをスキャンしてください',
      inviteQRCode: '招待リンクQRコード',
      orCopyLink: 'またはリンクをコピー',
      shareTitle: 'サービスへの招待',
      shareDescription: 'このサービスを利用中です。ぜひ試してみてください'
    },
    records: {
      title: 'リベート記録',
      empty: 'リベート記録なし',
      date: '日付',
      commission: 'コミッション',
      details: '詳細',
      user: 'ユーザー',
      registerTime: '登録時間',
      amount: '消費金額',
      userPlaceholder: 'ユーザー',
      noRecords: '招待記録がありません。招待コードを生成して友達に共有してください！',
      refresh: '更新',
      refreshing: '更新中...',
      refreshingData: 'データ更新中...',
      fetchDataError: 'データ取得エラー',
      fetchError: 'データ取得失敗',
      status: {
        title: '状態',
        confirmed: '確認済み',
        pending: '確認中',
        waiting: '待機中',
        processing: '処理中',
        invalid: '無効',
        unknown: '不明'
      },
      types: {
        confirmed_commission: '確認済みコミッション',
        pending_commission: '確認中コミッション',
        all: 'すべて'
      }
    }
  },
  docs: {
    title: 'ドキュメントセンター',
    searchPlaceholder: 'ドキュメント検索...',
    loading: 'ドキュメント読み込み中...',
    retry: '再試行',
    clearSearch: '検索クリア',
    backToList: 'ドキュメントリストに戻る',
    lastUpdated: '最終更新',
    noDocuments: 'ドキュメントなし',
    noSearchResults: '関連ドキュメントが見つかりません',
    fetchError: 'ドキュメント取得失敗',
    unknownError: '不明なエラー',
    docNotFound: 'ドキュメントが存在しません',
    invalidDocId: '無効なドキュメントID',
    contentFormatError: 'ドキュメント内容の形式エラー。正常に表示できません',
    languageHint: '現在の言語 {currentLang} にドキュメントがありません。他の言語に切り替えてください',
    networkError: 'ネットワークエラー',
    welcome: {
      title: 'ドキュメントセンター',
      description: '使用と設定に関する詳細なドキュメントを検索・閲覧'
    }
  },
  browserRestricted: {
    title: 'ブラウザアクセス制限',
    subtitle: '現在のブラウザはサポートされていません',
    description: '最適な閲覧体験とセキュリティを確保するため、このウェブサイトは使用中のブラウザをサポートしていません。',
    recommendText: '以下の推奨ブラウザを使用してアクセスしてください：',
    currentBrowser: '現在使用中のブラウザ：',
    currentUrl: '現在のURL：',
    downloadChrome: 'Chromeブラウザをダウンロード',
    downloadEdge: 'Edgeブラウザをダウンロード',
    downloadSafari: 'Safariブラウザをダウンロード',
    openWithRecommended: '推奨ブラウザで現在のページを開く',
    whyRestricted: 'なぜ一部のブラウザを制限するのか？',
    whyRestrictedDesc: '一部のブラウザにはセキュリティ問題や必要な機能の非対応があるため、アカウントの安全と優れたユーザー体験を確保するためにこれらのブラウザを制限しています。',
    supportedBrowsersTitle: 'サポートされているブラウザリスト',
    browserNames: {
      Chrome: 'Chromeブラウザ',
      Edge: 'Edgeブラウザ',
      Firefox: 'Firefoxブラウザ',
      Safari: 'Safariブラウザ',
      Opera: 'Operaブラウザ',
      UC: 'UCブラウザ',
      Maxthon: '傲游ブラウザ',
      Unknown: '不明なブラウザ'
    }
  },
  trafficLog: {
    title: '流量明細',
    description: '流量使用状況の詳細記録を閲覧',
    uploadTraffic: 'アップロード流量',
    downloadTraffic: 'ダウンロード流量',
    totalTraffic: '総流量',
    date: '日付',
    serverRate: 'レート',
    actualTraffic: '実際の使用量',
    deductedTraffic: '扣除流量',
    formula: '計算式',
    formulaContent: '(実際のアップロード + 実際のダウンロード) × レート = 扣除流量',
    noTrafficData: '流量使用記録なし',
    loadingTraffic: '流量データ読み込み中...',
    errorLoadingTraffic: '流量データ読み込み失敗',
    retry: '再試行',
    viewTrafficLog: '流量明細を見る',
    days: '日',
    trafficLogDesc: '詳細な流量使用記録と統計を閲覧',
    trafficChart: '流量トレンドグラフ'
  },
  wallet: {
    balance: {
      title: 'アカウント残高',
      description: 'チャージ後の残高は消費専用です'
    },
    deposit: {
      title: '残高チャージ',
      notice: 'チャージ後の残高は消費専用で、引き出し不可',
      customAmount: 'カスタム金額',
      customAmountPlaceholder: 'チャージ金額を入力',
      button: '今すぐチャージ',
      success: 'チャージ注文作成成功',
      failed: 'チャージ注文作成失敗',
      amountError: {
        required: 'チャージ金額を選択または入力してください',
        invalid: '有効な金額を入力してください',
        minimum: '最低チャージ金額は1円です'
      }
    },
    welcome: {
      title: 'アカウントチャージ',
      description: 'ここでは簡単にアカウントにチャージできます。プリセット金額を選択するか、カスタム金額を入力してチャージしてください。チャージ後の残高は即時反映され、サービスの購入に使用できます。'
    }
  }
};
