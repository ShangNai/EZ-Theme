﻿<template>
  <TablerIconShieldLock :size="size" :stroke-width="strokeWidth" :class="customClass" />
</template>

<script>
import { IconShieldLock } from './IconHelper';

export default {
  name: 'IconShieldLock',
  components: {
    TablerIconShieldLock: IconShieldLock
  },
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    strokeWidth: {
      type: [Number, String],
      default: 2
    },
    customClass: {
      type: String,
      default: ''
    }
  }
};
</script>
