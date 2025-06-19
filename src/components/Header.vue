<template>
  <header>
    <img src="@/assets/logo.jpg" alt="曜境 Logo" class="logo" />
    <nav class="nav">
      <a href="#">HOME<span class="nav__sub">首頁</span></a>
      <a href="#">ABOUT<span class="nav__sub">關於我們</span></a>
      <a href="#">PRODUCTS<span class="nav__sub">服務項目</span></a>
      <a href="#">BLOG<span class="nav__sub">留學部落格</span></a>
      <a href="#">NEW<span class="nav__sub">最新消息</span></a>
      <span class="nav__line">|</span>
      <button class="nav__link"><span class="nav__sub">預約諮詢</span></button>
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
  padding: 0px 40px;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}
.logo {
  height: 83px;
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
  &__link {
    background-color: #b9afa6;
    padding: 10px 20px;
    color: white;
    border-radius: 10px;
    margin-left: 14px;
    &:hover {
      background-color: #dad5cc;
    }
    .nav__sub {
      color: white;
    }
  }
  &__line {
    color: #000;
    margin: 0 8px;
  }
}
</style>
