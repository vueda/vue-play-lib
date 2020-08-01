<template>
  <div>
    <p>{{ count }}</p>
    <button class="my-button" @click="increment">+</button>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class VpButton extends Vue {
  count = 0;

  increment(e) {
    this.count++;
    this.$emit('click', e);
  }
}
</script>
<style lang="sass" scoped>
.my-button
  color : red;
</style>
