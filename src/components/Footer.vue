<template>
  <section class="ctaContainer" v-if="!showCta">
    <div class="cta">
      <h2 v-if="isLauguageSchool">勇敢出發，讓語言帶你環遊世界</h2>
      <h2 v-if="isHightSchool">孩子的未來不能等</h2>
      <h2 v-if="!isLauguageSchool && !isHightSchool">夢想不該等待</h2>
      <p v-if="!isHightSchool">馬上預約，邁出你的第一步。</p>
      <p v-if="isHightSchool">立即預約諮詢，把握最佳成長契機。</p>
      <a href="/booking" class="cta-button">預約諮詢</a>
    </div>
  </section>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__left">
        <img
          src="@/assets/images/logoText.png"
          alt="Excellent Future Education Logo"
          class="footer__logo"
        />
      </div>

      <div class="footer__middle">
        <div class="footer__slogan">曜境 - 讓每個夢想都有出口</div>
        <div class="footer__contact-title">Contact Us</div>
        <a class="footer__email" @click="sendEmail">admin@theyaojing.com</a>
      </div>

      <div class="footer__right">
        <div class="footer__social">
          <div
            class="footerIconArea__btn fbIcon"
            @click="
              openUrl('https://www.facebook.com/profile.php?id=61551849541200')
            "
          ></div>
          <div
            class="footerIconArea__btn igIcon"
            @click="
              openUrl('https://www.instagram.com/excellent_future_education/')
            "
          ></div>
          <div
            class="footerIconArea__btn lineIcon"
            @click="openUrl('https://lin.ee/h7iqezB')"
          ></div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">© Excellent Future Education LTD. 2025</div>
  </footer>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 取得目前的路由名稱（確保是字串）
const pageName = computed(() => route.name?.toString() ?? "");
const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 768; // 768px 以下視為手機
}

// 各頁判斷（注意拼字與實際路由名稱一致）
const isLauguageSchool = computed(() => pageName.value === "languageSchool");
const isHightSchool    = computed(() => pageName.value === "highSchool");
const showCta = computed(() => ['booking', 'document','news'].includes(pageName.value));
function sendEmail() {
  const recipient = "admin@theyaojing.com";
  const subject = encodeURIComponent("預約免費留學諮詢");
  const body = encodeURIComponent(
    `您好，\n\n我想要預約一次免費的留學諮詢，以下是我的資訊：\n\n姓名：\n電話：\n想申請的國家／學校：\n\n感謝您！`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");
}
function openUrl(url) {
  window.open(url, "_blank");
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
</script>

<style lang="scss" scoped>
.footer {
  background-color: #222222;
  color: #ffffff;
  padding: 40px 20px 20px;
  text-align: center;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer__logo {
      width: 130px;
      transform: scale(1.5);
      position: relative;
      left: 50px;
      top: 20px;
      @media (max-width: 1024px) {
         left: 0;
      top: 0;
      }
    }

    .footer__company-name {
      font-size: 14px;
      line-height: 1.5;
      color: #cccccc;

      span {
        display: block;
        font-size: 12px;
        color: #999999;
      }
    }
  }

  &__middle {
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer__slogan {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .footer__contact-title {
      font-size: 16px;
      margin-bottom: 5px;
    }

    .footer__email {
      color: #4ea2d9;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__right {
    .footer__social {
      display: flex;
      justify-content: center;
      gap: 16px;
    }
  }

  &__bottom {
    margin-top: 30px;
    font-size: 12px;
    color: #aaaaaa;
  }
}

.footerIconArea__btn {
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  &.lineIcon {
    background-size: 300%;
    background-position: center;
    background-image: url("@/assets/images/line-icon.png");
  }

  &.fbIcon {
    background-size: 600%;
    background-position: center;
    background-image: url("@/assets/images/fb-icon.png");
  }

  &.igIcon {
    background-size: 140%;
    background-position: center;
    background-image: url("@/assets/images/ig-icon.png");
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
.ctaContainer {
  background-color: #eeece9;
  @media (max-width: 1024px) {
    .cta {
      border-radius: 0;
    }
  }
}
.cta {
  text-align: center;
  background: #f7db9e;
  color: #38342e;
  padding: 3rem;
  h2 {
    color: #38342e;
  }
  .cta-button {
    margin-top: 1rem;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #000000de;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s;
  }
   @media (max-width: 1024px) {
       padding: 3rem 2rem;
  }
}
</style>
