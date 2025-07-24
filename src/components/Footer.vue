<template>
  <section class="ctaContainer">
    <div class="cta">
      <h2>夢想不該等待</h2>
      <p>馬上預約，邁出你的第一步。</p>
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
function openUrl(url) {
  window.open(url, "_blank");
}
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
  padding: 50px 50px 80px;
  background-color: #eeece9;
  @media (max-width: 1024px) {
    padding: 50px 0 80px;
    .cta {
      border-radius: 0;
    }
  }
}
.cta {
  text-align: center;
  background: #043d78;
  color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  h2 {
    color: #ffffff;
  }
  .cta-button {
    margin-top: 1rem;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #b9afa6;
    color: white;
    border-radius: 9999px;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background: #dad5cc;
    }
  }
}
</style>
