<template>
  <header>
    <img src="@/assets/logo.jpg" alt="深川製磁 Logo" class="logo" />
    <!-- 放你的 logo -->
    <nav class="nav">
      <a href="#">HOME<span class="nav__sub">首頁</span></a>
      <a href="#">ABOUT<span class="nav__sub">關於我們</span></a>
      <a href="#">PRODUCTS<span class="nav__sub">服務項目</span></a>
      <a href="#">BLOG<span class="nav__sub">留學部落格</span></a>
      <a href="#">NEW<span class="nav__sub">最新消息</span></a>
      <span>|</span>
      <button class="form-link"><span class="nav__sub">預約諮詢</span></button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const text = ref("模板");
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}
.logo {
  height: 24px;
}
.nav {
  display: flex;
  align-items: center;
  font-size: 14px;
  &__sub {
    display: block;
    font-size: 16px;
    color: #777;
    font-weight: 900;
  }

  a {
    color: #333;
    text-decoration: none;
    margin: 0 25px;
    text-align: center;
    &:hover {
      color: #0055aa;
    }
  }
  span {
    color: #000;
    margin: 0 8px;
  }
}
</style>
