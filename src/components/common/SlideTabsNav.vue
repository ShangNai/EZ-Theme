﻿<template>
  <div class="slide-tabs-container">
    <div class="slide-tabs-wrapper">
      <div class="slide-tabs-nav" ref="tabsNav">
        <template v-for="(item, index) in navItems" :key="`${item.name}-${languageKey}`">
          <router-link 
            :to="item.path"
            class="nav-item"
            :class="{ 'active': currentRoute === item.name || (route && route.meta && route.meta.activeNav === item.name) }"
            @click.prevent="navigateTo(item, index)"
          >
            <div class="nav-icon">
              <component :is="getIcon(item.icon)" />
            </div>
            <span class="nav-text">{{ $t(`menu.${item.i18nKey}`) }}</span>
            <span v-if="item.name === 'Invite' && showInviteBadge" class="badge-dot">{{ $t('menu.commission') }}</span>
            <span v-if="item.name === 'Shop' && showShopBadge" class="badge-dot">{{ $t('menu.hotSale') }}</span>
          </router-link>
        </template>
        <div class="indicator-container">
          <div class="slider-indicator" :style="sliderStyle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, nextTick, onBeforeUnmount, computed, reactive, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { INVITE_CONFIG, SHOP_CONFIG } from '@/utils/baseConfig';
import IconDashboard from '@/components/icons/IconDashboard.vue';
import IconShop from '@/components/icons/IconShop.vue';
import IconInvite from '@/components/icons/IconInvite.vue';
import IconMore from '@/components/icons/IconMore.vue';

export default {
  name: 'SlideTabsNav',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const tabsNav = ref(null);
    const currentRoute = ref('');
    const currentIndex = ref(0);
    const previousIndex = ref(0);
    const isInitialized = ref(false);
    const isTransitionEnabled = ref(false);
    const isComponentMounted = ref(false);
    const languageKey = ref(Date.now());
    
    const showInviteBadge = computed(() => {
      return INVITE_CONFIG && INVITE_CONFIG.showCommissionBadge === true;
    });
    
    const showShopBadge = computed(() => {
      return SHOP_CONFIG && SHOP_CONFIG.showHotSaleBadge === true;
    });

    const sliderState = reactive({
      width: 0,
      transform: 'translateX(0px)',
      opacity: 0,
      transition: 'none'
    });
    
    const sliderStyle = computed(() => ({
      width: `${sliderState.width}px`,
      transform: sliderState.transform,
      opacity: sliderState.opacity,
      transition: sliderState.transition
    }));

    const navItems = [
      { title: 'Dashboard', path: '/dashboard', name: 'Dashboard', icon: 'IconDashboard', i18nKey: 'dashboard' },
      { title: 'Shop', path: '/shop', name: 'Shop', icon: 'IconShop', i18nKey: 'shop' },
      { title: 'Invite', path: '/invite', name: 'Invite', icon: 'IconInvite', i18nKey: 'invite' },
      { title: 'More', path: '/more', name: 'More', icon: 'IconMore', i18nKey: 'more' },
    ];
    
    const getIcon = (iconName) => {
      switch(iconName) {
        case 'IconDashboard': return IconDashboard;
        case 'IconShop': return IconShop;
        case 'IconInvite': return IconInvite;
        case 'IconMore': return IconMore;
        default: return null;
      }
    };
    
    let positionTimers = [];

    const navigateTo = (item, index) => {
      if (!isComponentMounted.value) return;
      
      previousIndex.value = currentIndex.value;
      currentIndex.value = index;
      updateSliderPosition(index, true);
      
      nextTick(() => {
        if (isComponentMounted.value) {
          router.push(item.path);
        }
      });
    };

    const updateSliderPosition = (index, animate = true) => {
      if (!isComponentMounted.value || index < 0 || !tabsNav.value) return;
      
      positionTimers.forEach(timer => clearTimeout(timer));
      positionTimers = [];
      
      try {
        nextTick(() => {
          if (!isComponentMounted.value || !tabsNav.value) return;
          
          const navItemElements = tabsNav.value.querySelectorAll('.nav-item');
          
          if (navItemElements.length > 0 && index >= 0 && index < navItemElements.length) {
            const activeItem = navItemElements[index];
            const { offsetWidth, offsetLeft } = activeItem;
            
            if (animate) {
              sliderState.transition = 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
            } else {
              sliderState.transition = 'none';
            }
            
            sliderState.width = offsetWidth;
            sliderState.transform = `translateX(${offsetLeft}px)`;
            
            sliderState.opacity = 1;
            
            isInitialized.value = true;
          }
        });
      } catch (error) {
        console.warn('SlideTabsNav: Error updating slider position', error);
      }
    };

    const findIndexByRouteName = (routeName) => {
      if (route && route.meta && route.meta.activeNav) {
        const activeNavName = route.meta.activeNav;
        const activeIndex = navItems.findIndex(item => item.name === activeNavName);
        
        if (activeIndex !== -1) {
          return activeIndex;
        }
      }
      
      const index = navItems.findIndex(item => item.name === routeName);
      return index !== -1 ? index : 0; 
    };
    
    const handleResize = () => {
      if (isComponentMounted.value) {
        updateSliderPosition(currentIndex.value, false);
        
        safeTimeout(() => {
          updateSliderPosition(currentIndex.value, true);
        }, 200);
      }
    };

    let stopRouteWatch = null;
    
    const handleVisibilityChange = () => {
      if (!isComponentMounted.value) return;
      
      if (!document.hidden && currentIndex.value >= 0) {
        updateSliderPosition(currentIndex.value, false);
        
        if (isComponentMounted.value) {
          const timer = setTimeout(() => {
            if (isComponentMounted.value) {
              updateSliderPosition(currentIndex.value, true);
            }
          }, 200);
          
          positionTimers.push(timer);
        }
      }
    };

    const safeTimeout = (callback, delay) => {
      const timer = setTimeout(() => {
        if (isComponentMounted.value) {
          callback();
        }
      }, delay);
      
      positionTimers.push(timer);
      return timer;
    };

    let positionCheckInterval = null;
    
    const checkAndFixSliderPosition = () => {
      if (!isComponentMounted.value || !tabsNav.value) return;
      
      try {
        const navItemElements = tabsNav.value.querySelectorAll('.nav-item');
        
        let activeIndex;
        if (route && route.meta && route.meta.activeNav) {
          const activeNavName = route.meta.activeNav;
          const indexByActiveNav = navItems.findIndex(item => item.name === activeNavName);
          if (indexByActiveNav !== -1) {
            activeIndex = indexByActiveNav;
          } else {
            activeIndex = findIndexByRouteName(route.name);
          }
        } else {
          activeIndex = findIndexByRouteName(route.name);
        }
        
        if (navItemElements.length > 0 && activeIndex >= 0 && activeIndex < navItemElements.length) {
          const activeItem = navItemElements[activeIndex];
          const { offsetWidth, offsetLeft } = activeItem;
          
          const currentTransform = sliderState.transform;
          const expectedTransform = `translateX(${offsetLeft}px)`;
          
          if (currentTransform !== expectedTransform || sliderState.width !== offsetWidth) {
            updateSliderPosition(activeIndex, true);
          }
        }
      } catch (error) {
        console.warn('SlideTabsNav: Error checking slider position', error);
      }
    };
    
    const handleScroll = debounce(() => {
      if (isComponentMounted.value) {
        checkAndFixSliderPosition();
      }
    }, 200);
    
    const onLanguageChanged = () => {
      languageKey.value = Date.now();
      
      sliderState.transition = 'width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease';
      
      sliderState.opacity = 0.3;
      
      [50, 200, 400, 600].forEach(delay => {
        safeTimeout(() => {
          if (isComponentMounted.value && tabsNav.value) {
            if (delay >= 400) {
              sliderState.opacity = 1;
            }
            updateSliderPosition(currentIndex.value, true);
          }
        }, delay);
      });
    };

    onMounted(() => {
      isComponentMounted.value = true;
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      window.addEventListener('languageChanged', onLanguageChanged);
      
      isTransitionEnabled.value = false;
      
      stopRouteWatch = watch(() => route.name, (newRoute) => {
        if (!isComponentMounted.value) return;
        
        if (newRoute) {
          currentRoute.value = newRoute;
          
          let newIndex;
          if (route.meta && route.meta.activeNav) {
            const activeNavName = route.meta.activeNav;
            const indexByActiveNav = navItems.findIndex(item => item.name === activeNavName);
            if (indexByActiveNav !== -1) {
              newIndex = indexByActiveNav;
            } else {
              newIndex = findIndexByRouteName(newRoute);
            }
          } else {
            newIndex = findIndexByRouteName(newRoute);
          }
          
          previousIndex.value = currentIndex.value;
          currentIndex.value = newIndex;
          
          updateSliderPosition(newIndex, true);
        }
      }, { immediate: true });
      
      nextTick(() => {
        if (!isComponentMounted.value) return;
        
        const index = findIndexByRouteName(route.name);
        updateSliderPosition(index, false);
        
        safeTimeout(() => {
          isTransitionEnabled.value = true;
        }, 300);
      });
      
      [100, 300, 500, 1000].forEach(delay => {
        safeTimeout(() => {
          if (tabsNav.value) {
            const index = findIndexByRouteName(route.name);
            updateSliderPosition(index, delay > 300);
          }
        }, delay);
      });
      
      safeTimeout(() => {
        if (isComponentMounted.value && tabsNav.value) {
          const index = findIndexByRouteName(route.name);
          updateSliderPosition(index, false);
          safeTimeout(() => {
            updateSliderPosition(index, true);
          }, 50);
        }
      }, 1500);
      
      window.addEventListener('load', () => {
        if (isComponentMounted.value && tabsNav.value) {
          const index = findIndexByRouteName(route.name);
          updateSliderPosition(index, false);
          safeTimeout(() => {
            updateSliderPosition(index, true);
          }, 100);
        }
      });
      
      const debouncedResize = debounce(handleResize, 100);
      window.addEventListener('resize', debouncedResize);
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      positionCheckInterval = setInterval(() => {
        if (isComponentMounted.value) {
          checkAndFixSliderPosition();
        }
      }, 3000);
      
      safeTimeout(() => {
        handleResize();
      }, 1500);
      
      window.addEventListener('popstate', () => {
        if (isComponentMounted.value && tabsNav.value) {
          safeTimeout(() => {
            const index = findIndexByRouteName(route.name);
            updateSliderPosition(index, false);
            safeTimeout(() => {
              updateSliderPosition(index, true);
            }, 50);
          }, 0);
        }
      });
    });
    
    onUnmounted(() => {
      if (stopRouteWatch) {
        stopRouteWatch();
        stopRouteWatch = null;
      }
      
      if (positionCheckInterval) {
        clearInterval(positionCheckInterval);
        positionCheckInterval = null;
      }
      
      window.removeEventListener('popstate', () => {});
    });
    
    onBeforeUnmount(() => {
      isComponentMounted.value = false;
      
      positionTimers.forEach(timer => clearTimeout(timer));
      positionTimers = [];
      
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('languageChanged', onLanguageChanged);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      
      tabsNav.value = null;
    });

    return {
      navItems,
      tabsNav,
      currentRoute,
      navigateTo,
      sliderStyle,
      getIcon,
      languageKey,
      route,
      showInviteBadge,
      showShopBadge
    };
  }
};

function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
</script>

<style lang="scss" scoped>
.slide-tabs-container {
  margin-bottom: 20px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: auto;
  
  .slide-tabs-wrapper {
    background: rgba(var(--card-background-rgb), 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 5px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    display: inline-block;
    overflow: hidden;
  }

  .slide-tabs-nav {
    display: flex;
    position: relative;
    
    .indicator-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .nav-item {
      padding: 6px 16px;
      border-radius: 26px;
      font-weight: 500;
      font-size: 14px;
      color: var(--secondary-text-color);
      text-decoration: none;
      text-align: center;
      position: relative;
      z-index: 2;
      transition: color 0.3s;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 5px;
      
      
      .badge-dot {
        position: absolute;
        top: -3px;
        right: -2px;
        background-color:#ff3030;
        color: white;
        border-radius: 10px;
        padding: 1px 5px;
        font-size: 8px;
        font-weight: bold;
        line-height: 1.2;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transform: scale(0.9);
        white-space: nowrap;
      }
      
      &:last-child {
        border: 1px solid var(--theme-color);
        background-color: rgba(var(--theme-color-rgb), 0.05);
        
        .nav-icon svg {
          color: var(--theme-color);
        }
        
        &:hover {
          background-color: rgba(var(--theme-color-rgb), 0.1);
        }
        
        &.active {
          background-color: rgba(var(--theme-color-rgb), 0.15);
        }
      }
      
      
      .nav-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg {
          width: 18px;
          height: 18px;
          transition: color 0.3s ease, transform 0.3s ease;
          transform: scale(1);
        }
      }
      
      &.active {
        color: var(--text-color);
        
        .nav-icon svg {
          color: var(--theme-color);
          transform: scale(1.15);
        }
      }
      
      &:hover {
        color: var(--text-color);
      }
    }
    
    .slider-indicator {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: rgba(var(--theme-color-rgb), 0.1);
      border-radius: 26px;
      z-index: 1;
      box-shadow: 0 4px 15px rgba(var(--theme-color-rgb), 0.1);
      border: 1px solid var(--theme-color);
      will-change: transform, width, opacity;
      transition-property: transform, width, opacity;  
    }
  }
}

@media (max-width: 768px) {
  .slide-tabs-container {
    .slide-tabs-nav {
      .nav-item {
        padding: 6px 10px;
        font-size: 12px;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        height: 64px;
        
        
        .badge-dot {
          top: -1px;
          right: auto; 
          left: 50%; 
          transform: translateX(-50%) scale(0.9); 
        }
        
        &:last-child {
          height: 64px;
          min-width: 64px;  
        }
        
        .nav-icon {
          display: block; 
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          
          svg {
            width: 22px;
            height: 22px;
            transition: color 0.3s ease;
          }
        }
        
        .nav-text {
          font-weight: 500;
          line-height: 1.2;
        }
        
        &.active {
          .nav-text {
            color: var(--theme-color);
          }
          .nav-icon svg {
            transform: scale(1); 
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .slide-tabs-container {
    top: auto;
    bottom: 20px;  
    width: 92%;
    max-width: 450px;
    margin-bottom: 0;
    
    .slide-tabs-wrapper {
      width: 100%;
      display: block;
      border-radius: 20px;
      padding: 3px;
    }
    
    .slide-tabs-nav {
      width: 100%;
      justify-content: space-around;
      
      .slider-indicator {
        display: none; 
      }
    }
  }
}

@media (max-width: 480px) {
  .slide-tabs-container {
    bottom: 12px; 
    width: 94%;
    
    .slide-tabs-wrapper {
      border-radius: 18px;
    }
    
    .slide-tabs-nav {
      .nav-item {
        padding: 5px 8px;
        font-size: 11px;
        height: 58px;
        
        .nav-icon {
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style> 
