<template>
  <div class="template">
    <h1>{{ text }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('絲絲測試')
</script>

<style lang="scss" scoped>
.template {
  h1 {
    color: #42b983;
    font-weight: bold;
    padding: 1rem;
    &:hover {
      color: #036137;
    }
  }
}
</style>
