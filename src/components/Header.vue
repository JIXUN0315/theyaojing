<template>
  <header>
    <img src="@/assets/logo.jpg" alt="深川製磁 Logo" class="logo" />
    <!-- 放你的 logo -->
    <nav>
      <a href="#">HOME<span class="nav-sub">首頁</span></a>
      <a href="#">ABOUT<span class="nav-sub">關於我們</span></a>
      <a href="#">PRODUCTS<span class="nav-sub">服務項目</span></a>
      <a href="#">BLOG<span class="nav-sub">留學部落格</span></a>
      <a href="#">NEW<span class="nav-sub">最新消息</span></a>
      <span>|</span>
      <button class="form-link"><span class="nav-sub">預約諮詢</span></button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('模板')
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
