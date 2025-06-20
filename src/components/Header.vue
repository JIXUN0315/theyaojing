<template>
  <header class="header">
    <div class="header__com">
      <img src="@/assets/images/logo.jpg" alt="曜境 Logo" class="logo" />
      <nav class="nav">
        <a href="/">HOME<span class="nav__sub">首頁</span></a>
        <a href="/about">ABOUT<span class="nav__sub">關於我們</span></a>
        <a href="#">PRODUCTS<span class="nav__sub">服務項目</span></a>
        <a href="#">BLOG<span class="nav__sub">留學部落格</span></a>
        <a href="#">NEW<span class="nav__sub">最新消息</span></a>
        <span class="nav__line">|</span>
        <button class="nav__link">
          <span class="nav__sub">預約諮詢</span>
        </button>
      </nav>
    </div>
    <div class="header__mob">
      <div class="header__mob--nav">
        <div class="header__mob--hamburger" v-on:click="open"></div>
        <div class="header__mob--close" v-on:click="close"></div>
      </div>
      <transition name="fade-slide">
      <div class="header__mob--list list" v-show="isOpenNav">
        <div class="list__item">
          <a href="/" class="list__item--link" v-bind:class="{'list__item--active': page === 'Home'}"
            >HOME<span>首頁</span></a
          >
        </div>
        <div class="list__item">
          <a href="/about" class="list__item--link" v-bind:class="{'list__item--active': page === 'About'}">
            ABOUT<span>關於我們</span></a>
        </div>
        <div class="list__item">
          <a href="#" class="list__item--link"
            >PRODUCTS<span class="list__item--link">服務項目</span></a
          >
        </div>
        <div class="list__item">
          <a href="#" class="list__item--link"
            >BLOG<span class="list__item--link">留學部落格</span></a
          >
        </div>
        <div class="list__item">
          <a href="#" class="list__item--link"
            >NEW<span class="list__item--link">最新消息</span></a
          >
        </div>
        <div class="list__item">
          <div class="list__item--line"></div>
        </div>
        <div class="list__item">
          <button class="nav__link">
            <span class="nav__sub">預約諮詢</span>
          </button>
        </div>
        <div class="list__item">
          <div class="list__item--community">
            <div><a target="_blank" href="https://www.instagram.com/excellent_future_education/" style="color: #333;">Instagram</a></div>
            <div>Facebook</div>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

const isOpenNav = ref(false);

const page = computed(() => route.name);

const text = ref("模板");

function close(){
isOpenNav.value = false;
}
function open(){
isOpenNav.value = true;
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}
.header {
  &__com {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &__mob {
    display: none;

    @media (max-width: 1024px) {
      display: block;
    }
    &--nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    &--close {
      background-image: url("@/assets/images/close.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px;
      width: 23px;
      height: 23px;
      padding: 16px;
    }
    &--hamburger {
      background-image: url("@/assets/images/menu.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 23px;
      width: 23px;
      height: 23px;
      padding: 16px;
    }
  }
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
.list {
    
  border-top: 1px solid #ddd;
  height: calc(100vh - 55px);
  &__item {
    padding: 20px;

    &--link {
      display: block;
      color: #222;
      width: 100px;
      padding-bottom: 5px;
    }
    span {
      display: block;
      font-size: 14px;
    }
    &--active {
      color: #0055aa;
      border-bottom: 1px solid #0055aa;
    }
    &--line {
      border-bottom: 1px solid #222;
    }
    .nav__link{
        margin: 0;
        span{
             font-size: 16px;
        }
    }
    &--community{
        display: flex;
        div{
            margin-right:25px;
                cursor: pointer;
        }
    }
  }
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
