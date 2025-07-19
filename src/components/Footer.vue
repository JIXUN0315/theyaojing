<template>
  <footer class="footer">
    <div class="desktop-only"></div>
    <div class="footer__left">
      <div class="">
        <div class="footer__con">
          <img
            src="@/assets/images/logo.jpg"
            alt="曜境Logo"
            class="logoFooter logo"
          />曜境留遊學 - <br class="onlyDesktop" />讓每個夢想都有出口
        </div>
        <div class="footer__con">
          <img
            src="@/assets/images/mail.png"
            alt="Cart"
            class="logo logoMail"
          />
          <span v-on:click="sendEmail">admin@theyaojing.com</span>
        </div>
        <div class="footer__con">
          <img
            src="@/assets/images/phone.png"
            alt="Cart"
            class="logo logoPhone"
          />
          <span class="mobile-only"><a href="tel:+886911847591">+886 911847591</a></span>
          <span class="desktop-only">+886 911847591</span>
        </div>
      </div>
      <div class="footerIconArea">
        <div class="footerIconArea__btn lineIcon" @click="openUrl('https://lin.ee/h7iqezB')"></div>
        <div class="footerIconArea__btn fbIcon" @click="openUrl('https://www.facebook.com/profile.php?id=61551849541200')"></div>
        <div class="footerIconArea__btn igIcon" @click="openUrl('https://www.instagram.com/excellent_future_education/')"></div>
      </div>
      <div class="copyRight">© Excellent Future Education LTD. 2025</div>
    </div>
    <div class="desktop-only"></div>
    <div class="footer__right">
      <div class="">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61551849541200"
          >FACEBOOK</a
        >
      </div>
      <div class="">
        <a
          target="_blank"
          href="https://www.instagram.com/excellent_future_education/"
          >instagram</a
        >
      </div>
      <div class="">
        <a target="_blank" href="https://lin.ee/h7iqezB">LINE</a>
      </div>
      <!-- <div class="">threads</div> -->
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
function sendEmail() {
  const recipient = "admin@theyaojing.com";
  const subject = encodeURIComponent("預約免費留學諮詢");
  const body = encodeURIComponent(
    `您好，\n\n我想要預約一次免費的留學諮詢，以下是我的資訊：\n\n姓名：\n電話：\n想申請的國家／學校：\n\n感謝您！`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");
}
function openUrl(url){
   window.open(url, "_blank");
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 35px 50px;
  display: flex;
  height: 234px;
  background-color: #5B5B5B5B;
  color: #222222;
  a {
    color: #222222;
  }
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 35px 21px;
    height: 250px;
  }
  &__right {
    font-size: 16px;
    writing-mode: vertical-rl;
    text-align: left;
    position: absolute;
    right: 12px;
    div {
      margin-left: 18px;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 1024px) {
      justify-content: end;
    }
  }
  &__con {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span {
      cursor: pointer;
    }
  }
  .logo {
    height: 30px;
    margin-right: 10px;
  }
  .copyRight {
    font-size: 12px;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  .footerIconArea {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &__btn{
      cursor: pointer;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .lineIcon{
      background-image: url("@/assets/images/line-icon.png");
      width: 43px;
      height: 43px;
      margin-right: 5px;
    }
     .fbIcon{
      background-image: url("@/assets/images/fb-icon.png");
       margin-right: 8px;
    }
     .igIcon{
      background-image: url("@/assets/images/ig-icon.png");
      width: 35px;
      height: 35px;
    }
  }
  .logoFooter {
    border-radius: 50%;
  }
  .logoMail {
    height: 32px;
    margin-right: 0;
    margin-left: -10px;
  }
  .onlyDesktop {
    display: none;
    @media (max-width: 1024px) {
      display: inline;
    }
  }
  .logoPhone {
    height: 32px;
  }
}
.mobile-only {
  display: inline;

  @media (min-width: 1024px) {
    display: none;
  }
}

.desktop-only {
  display: none;

  @media (min-width: 1024px) {
    display: inline;
  }
}
</style>
