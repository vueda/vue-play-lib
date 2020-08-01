<template>
  <img :src="image" />
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import vueLogo from '@/assets/vue-logo.png';

@Component
export default class VpImage extends Vue {
  image = vueLogo;
}
</script>
