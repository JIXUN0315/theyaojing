<template>
  <footer class="footer">
    <div class="footer__left">
      <div class="">
        <div class="footer__con">
          <img
            src="@/assets/images/logo.jpg"
            alt="曜境Logo"
            class="logo"
            style="margin-right: 10px"
          />聯絡我們
        </div>
        <div class="footer__con">
          <img
            src="@/assets/images/mail.png"
            alt="Cart"
            class="logo"
            style="margin-right: 10px"
          />09123456789
        </div>
      </div>
      <div class="copyRight">@ 2025 yaojing COPYRIGHT</div>
    </div>
    <div class="footer__right">
      <div class="">FACEBOOK</div>
      <div class="">instagram</div>
      <div class="">LINE</div>
      <div class="">threads</div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";


</script>

<style lang="scss" scoped>
.footer {
  padding: 35px 50px;
  display: flex;
  height: 163px;
  background-color: #043d78;
  color: #ffffff;
  justify-content: space-between;
  &__right {
    font-size: 16px;
    writing-mode: vertical-rl;
    text-align: left;
    div {
      margin-left: 18px;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
  }
  &__con {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .logo{
    height: 30px;
  }
  .copyRight{
    font-size: 12px;
  }
}
</style>
