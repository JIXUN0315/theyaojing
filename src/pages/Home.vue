<template>
  <div class="home">
    <section class="home__hero">
      <h1>
        <span>我曾經很迷惘，但因為曜境，</span
        ><span>我錄取了夢想中的學校。</span>
      </h1>
      <p>
        I didn’t know where to start, but with Excellent Future Education, I
        made it into my dream school.
      </p>
      <div class="home__hero--btn">
        <div class="home__hero--link">【免費預約諮詢】</div>
        <div class="home__hero--line">|</div>
        <div class="home__hero--link">【服務項目介紹】</div>
      </div>
    </section>
    <section class="home__heroImage">
      <Carousel
        :items-to-show="1"
        :wrap-around="images.length > 1"
        :autoplay="5000"
        :pause-autoplay-on-hover="true"
        :transition="500"
        :mouse-drag="true"
        class="hero-carousel"
      >
        <Slide v-for="(img, i) in images" :key="i">
          <img :src="img" alt="hero image" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
    <section class="featured">
      <div class="featured__text">
        <div class="featured__text--content">
          <div class="">
            <h2>我們是曜境 Excellent Future Education</h2>
            <h2>誠信 × 專業 × 陪伴，是我們不變的承諾。</h2>
            <p>曜境留遊，提供真誠、安心、用心的留學諮詢服務。</p>
            <p>
              我們了解：對大多數人來說，留學代表未知、焦慮與挑戰。這就是我們存在的理由——
            </p>
            <p>
              讓複雜的申請流程變得清楚簡單，讓你在每一個選擇上都有專業陪伴，走得穩、走得對。
            </p>
            <h2>「曜」是光，「境」是方向，我們願成為你留學路上的一盞明燈。</h2>
          </div>
        </div>
      </div>
      <div class="featured__img">
        <img src="@/assets/images/introduce.jpg" alt="home" />
      </div>
      <div class="featured__whiteSpace"></div>
    </section>
    <section class="subject">
      <div class="subject__content">
        <div class="subject__content--area">
          <div class="subject__content--title">01<br /></div>
          <div class="subject__content--body subjectContent">
            <div class="subjectContent__title">我們提供的服務</div>
            <div class="subjectContent__text">
              我們專注於提供個人化的留遊學服務，服務國家包含：
            </div>
            <div class="subjectContent__text">
              <span class="bold">英國</span>、
              <span class="bold">加拿大</span>、
              <span class="bold">美國</span>、<span class="bold">澳洲</span>、
              其他(歡迎與我們聯繫討論客製化方案)。
            </div>
            <div class="subjectContent__text subjectContent__list">
              我們的服務內容包括：
            </div>
            <div class="">
              <ul>
                <li>個人化留遊學諮詢與規劃</li>
                <li>
                  文件規劃，包含引導、潤飾與編寫（SOP／CV／推薦信／Essays／獎學金文件等）
                </li>
                <li>學校與科系選擇建議與評估</li>
                <li>申請流程與入學註冊協助</li>
                <li>簽證輔導與行前準備</li>
              </ul>
            </div>
            <div class="subjectContent__text">
              首次<a href="#">諮詢免費</a>，歡迎安心了解我們的<a href="#"
                >服務項目</a
              >及流程。
            </div>
          </div>
        </div>
      </div>
      <div class="subject__image">
        <img src="@/assets/images/service.jpg" alt="服務內容" />
      </div>
    </section>
    <section class="subject subjectReverse">
      <div class="subject__content">
        <div class="subject__content--area">
          <div class="subject__content--title">02<br /></div>
          <div class="subject__content--body subjectContent">
            <div class="subjectContent__title">學生回饋專欄精選</div>
            <div class="subjectContent__text">
              <span class="bold"
                >「文案引導潤飾合宜、整體流程掌握順暢、時程也掌握得宜（我覺得這很重要！）
                  針對申請期間與校方互動應對專業，能夠十分放心。另外，也鼓勵學生去往上申請或是能引導學生至適合自己的program。
                  整體服務體驗佳，非常推薦！」
                  </span>
              <div class="subjectContent__text--student">
                — Jacky｜成功錄取華威商學院(WBS) 金融碩士
              </div>
            </div>
            <div class="subjectContent__text">
              <span class="bold">
                「真的幫我非常多的事情，因為當初申請大學時我英文不是非常好，準備申請文件都會和代辦討論，
                像是寫SOP、推薦函、ＣＶ、選校等。且因疫情，我延遲一年入學，在台灣工作期間代辦也幫忙我處理非常多學校的事 (上班真的太累..)。
                申請美簽時更不用說，我還遇到行政審查(希望大家不要碰到會非常難受)，相關文件準備Shelly也能協助並幫忙潤稿，真的非常感謝顧問的協助。」
              </span>
              <div class="subjectContent__text--student">
                — TY W｜成功錄取UCLA 材料工程碩士
              </div>
            </div>
            <div class="btn-more">【查看更多學生故事】</div>
          </div>
        </div>
      </div>
      <div class="subject__image">
        <img src="@/assets/images/feedback.jpg" alt="服務內容" />
      </div>
    </section>
    <section class="subject">
      <div class="subject__content">
        <div class="subject__content--area">
          <div class="subject__content--title">03<br /></div>
          <div class="subject__content--body subjectContent">
            <div class="subjectContent__title">我們的堅持</div>
            <div class="">
              <ul>
                <li>
                  <span class="bold">專業是我們的最低標準</span> -
                  <span class="smallText"
                    >誠信是我們不變的原則，沒誠信的，就別說是代辦了</span
                  >
                </li>
                <li>
                  <span class="bold">只推薦最適合你的</span> -
                  <span class="smallText"
                    >人生是由無數個選擇所堆疊的，選對學校，是讓夢想更靠近現實的起點。</span
                  >
                </li>
                <li>
                  <span class="bold">我們不是代辦是夥伴</span> -
                  <span class="smallText">你的申請我們當成自己的辦</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="subject__image">
        <img src="@/assets/images/persist.jpg" alt="服務內容" />
      </div>
    </section>
    <section class="subject subjectReverse">
      <div class="subject__content">
        <div class="subject__content--area">
          <div class="subject__content--title">04<br /></div>
          <div class="subject__content--body subjectContent">
            <div class="subjectContent__title">常見問題 FAQ</div>
            <div class="subjectContent__text--QA">
              <div class="bold">Q：是否只服務特定國家的申請？</div>
              <div class="">
                A：我們主要服務英、美、澳、加的留學申請，如有其他國家需求，也歡迎直接與我們聯繫討論。
              </div>
            </div>
            <div class="subjectContent__text--QA">
              <div class="bold">Q：第一次諮詢需要付費嗎？</div>
              <div class="">
                A：不需要！我們提供一次免費諮詢，讓你能先認識我們的服務方式與流程，再決定是否進一步合作。
              </div>
            </div>
            <div class="btn-more">
              【查看更多<span class="color-main">問題解答</span>】
            </div>
          </div>
        </div>
      </div>
      <div class="subject__image">
        <img src="@/assets/images/questions.jpg" alt="常見問題" />
      </div>
    </section>
    <section class="subject">
      <div class="subject__content">
        <div class="subject__content--area">
          <div class="subject__content--title">05<br /></div>
          <div class="subject__content--body subjectContent">
            <div class="subjectContent__text subjectContent__list">
              我想了解：
            </div>
            <div class="minWidth300">
              <ul>
                <li><a href="#">大學研究所申請</a></li>
                <li><a href="#">中學申請</a></li>
                <li><a href="#">短期遊學</a></li>
                <li><a href="#">純文件服務</a></li>
              </ul>
            </div>
            <div class="btn-more">【立即預約諮詢】</div>
          </div>
        </div>
      </div>
      <div class="subject__image">
        <img src="@/assets/images/connect.jpg" alt="服務內容" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const images = [
  new URL("@/assets/images/hero-image.jpg", import.meta.url).href,
  new URL("@/assets/images/excellent-future.jpg", import.meta.url).href,
  new URL("@/assets/images/service-content.jpg", import.meta.url).href,
  new URL("@/assets/images/student.jpg", import.meta.url).href,
  new URL("@/assets/images/qa.jpg", import.meta.url).href,
];
</script>

<style lang="scss" scoped>
.smallText {
  font-size: 14px;
}
.home {
  &__hero {
    text-align: center;
    padding-top: 40px !important;
    padding-bottom: 60px !important;
    padding: 0 10px;
    h1 {
      font-size: 18px;
      letter-spacing: 2px;
      padding-bottom: 8px;
      padding: 0 12px;
      display: flex;
      justify-content: center;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
      span {
        display: block;
      }
    }
    p {
      font-size: 16px;
      color: #666;
    }
    &--btn {
      display: flex;
      justify-content: center;
      padding-top: 30px;
    }
    &--line {
      padding: 0 15px;
    }
    &--link {
      cursor: pointer;
      font-weight: bold;
      color: #777;
      &:hover {
        color: #0055aa;
      }
    }
  }
  &__heroImage {
    display: flex;
    justify-content: center;
    background-color: #dad5cc;
    img {
      width: 100%;
      max-width: 1024px;
      height: auto;
      display: block;
    }
  }
  .featured {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f8fa;
    overflow: hidden;
    margin-top: 170px;
    margin-bottom: 120px;
    &__text {
      flex: 1;
      padding-right: 40px;
      font-size: 16px;
      color: #2b2b2b;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;

      &--content {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        text-align: start;
      }

      h2 {
        font-size: 16px;
        color: #1a2b61;
        margin-bottom: 10px;
      }

      p {
        margin: 5px 0;
        line-height: 1.6;
      }
    }

    &__img {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 333px;
        width: auto;
        display: block;
        object-fit: contain;
        max-width: 100%;
      }
    }

    &__whiteSpace {
      width: 18%;
      height: 333px;
      background-color: #ffffff;
    }
  }
  .btn-more {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px 20px;
    border: 1px solid #1a2b61;
    color: #1a2b61;
    background: white;
    text-decoration: none;
    font-size: 16px;
    align-self: flex-start;
    cursor: pointer;
    &:hover {
      background-color: #1a2b61;
      color: white;
    }
  }
  .subject {
    display: flex;
    align-items: center;
    padding: 80px 0;
    &__content {
      padding: 20px;
      padding-left: 50px;
      flex: 1;
      text-align: right;
      &--area {
        display: inline-block;
        text-align: left;
        padding: 20px;
        border-radius: 8px;
      }

      &--title {
        font-size: 16px;
        color: #043d78;
        width: 30px;
        text-align: left;
        padding-bottom: 40px;
        padding-right: 5px;
        border-right: 1px solid #043d78;
      }
    }

    &__image {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
  .subjectReverse {
    flex-direction: row-reverse;
    .subject__content {
      text-align: left;
    }
  }
  .subjectContent {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    &__title {
      color: #043d78;
      font-weight: bold;
      font-size: 18px;
      padding-bottom: 10px;
    }
    &__text {
      padding: 4px 0;
      color: black;
      &--student {
        padding: 8px 0 18px 15px;
        font-size: 14px;
      }
      &--QA {
        padding: 20px 0;
        div {
          padding: 5px 0;
        }
      }
    }
    &__list {
      padding-top: 18px;
      color: black;
    }
    ul,
    li {
      color: black;
      margin: 10px 0;
    }
  }
  @media (max-width: 1024px) {
    .featured {
      margin-top: 50px;
      margin-bottom: 0;
      flex-wrap: wrap;
      &__text {
        width: 100%;
      }
      &__whiteSpace {
        display: none;
      }
    }
    .subject {
      padding: 20px 0;
      flex-wrap: wrap;
      &__content {
        width: 100%;
        text-align: left !important;
        padding-left: 20px;
      }
      &__image {
        width: 100%;
      }
    }
  }
}
.bold {
  font-weight: bold;
}
.minWidth300{
  min-width: 300px;
}
</style>
