<template>
  <div id="container">
    <Header></Header>

    <main>
      <router-view />
    </main>
    
    <Footer></Footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// 檢查 route.meta.hideLayout 是否為 true
const hideLayout = computed(() => route.meta?.hideLayout === true)
</script>

<style  lang="scss" scoped>
#container{
  height: 100vh;
  width: 100%;
  position: relative;
}
main{
  padding-top: 84px;
  @media (max-width: 1024px) {
    padding-top: 56px;
  }
}
</style>
