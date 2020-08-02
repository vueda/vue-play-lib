<template>
  <div>
    <p>{{ count }}</p>
    <v-btn class="my-button" @click="increment">+</v-btn>
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

<style lang="scss" scoped>
.my-button {
  color: $primary !important;
}
</style>
