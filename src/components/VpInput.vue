<template>
  <input type="text" :value="text" />
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class VpInput extends Vue {
  text = 'Hooray!';
}
</script>
