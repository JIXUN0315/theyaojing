<template>
  <div class="home">
    <div>{{ text }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('模板')
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
