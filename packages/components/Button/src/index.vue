<template>
  <div class="ioc-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ioc-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .ioc-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
