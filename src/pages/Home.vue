<template>
  <div class="home">
    <section class="home__heroImage">
      <img src="@/assets/images/homepage.png" alt="" />
    </section>
    <section class="about-section">
      <div class="container">
        <!-- 標題 -->
        <h2 class="about-title">我們是曜境 Excellent Future Education</h2>

        <!-- 雙欄區塊 -->
        <div class="about-content">
          <!-- 左圖 -->
          <div class="about-image">
            <img
              src="@/assets/images/home-intro.jpg"
              alt="Excellent Future Education"
            />
          </div>

          <!-- 右文 -->
          <div class="about-text">
            <p>
              誠信 · 專業 · 陪伴，是我們不變的承諾<br />
              曜境留遊學，提供真誠、安心、用心的留學諮詢服務。<br />
              我們了解：對大多數人來說，留學代表未知、焦慮與挑戰，<br />
              這就是我們存在的理由 ——<br />
              讓複雜的申請流程變得清楚簡單，讓你在每個選擇上都有專業陪伴，走得穩、走得對。<br /><br />
              「曜」是光，「境」是方向，我們願成為你留學路上的一盞明燈。
            </p>

            <p class="highlight">
              凡預約實體諮詢，即享一杯飲品<br />
              我們誠摯邀請你，一起暢談你的夢想
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="services-section">
      <div class="container services-grid">
        <!-- 左側內容 -->
        <div class="services-copy">
          <p>
            我們專注於提供個人化的留遊學服務，服務國家包含：<br />
            英國、加拿大、美國、澳洲、其他（歡迎與我們聯繫討論客製化方案）。
          </p>

          <h3 class="services-subtitle">我們的服務內容包括：</h3>
          <ul class="services-list">
            <li>個人化留遊學諮詢與規劃</li>
            <li>
              文件規劃，包含引導、潤飾與編寫（SOP／CV／推薦信／Essays／獎學金文件等）
            </li>
            <li>學校與科系選擇建議與評估</li>
            <li>申請流程與入學註冊協助</li>
            <li>簽證輔導與行前準備</li>
          </ul>
        </div>

        <!-- 右側標題（含延伸線） -->
        <div class="services-title">
          <h2>我們的服務</h2>
          <span class="title-rule" aria-hidden="true"></span>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">學生回饋精選</h2>

        <div class="cards">
          <!-- Card 1 -->
          <article class="card" @click="goToPost('post-12')">
            <div class="card-head">
              <div class="card-head-text">
                <h3 class="name">Jacky</h3>
                <p class="title">Warwick Business School</p>
                <div class="titleSub">MSc Finance</div>
              </div>
              <div class="card-head-img">
                <img src="@/assets/images/stu12-1.jpg" alt="" />
              </div>
            </div>
            <hr class="rule" />
            <p class="card-body">
              文案引導潤飾合宜、整體流程掌握順暢，時程也掌握得宜。申請期間與校方互動態度專業，能夠十分放心。會鼓勵學生去往上申請或是能引導學生至適合自己的
              program。整體服務體驗佳，非常推薦！
            </p>
          </article>

          <!-- Card 2 -->
          <article class="card" @click="goToPost('post-09')">
            <div class="card-head">
              <div class="card-head-text">
                <h3 class="name">Johnny</h3>
                <p class="title">UCLA</p>
                <div class="titleSub">MS Materials Science & Engineering</div>
              </div>
              <div class="card-head-img">
                <img src="@/assets/images/stu9.jpg" alt="" />
              </div>
            </div>
            <hr class="rule" />
            <p class="card-body">
              在申請大學的過程中，留學顧問幫了我非常多。因為我的英文不好，像是撰寫
              SOP、推薦信、CV
              和選校等文件時，都需要與代辦密切討論。加上遇到疫情，我延遲了一年才入學，在台灣工作期間，代辦也持續幫我處理與學校的聯繫，省去了很多心力。
            </p>
          </article>

          <!-- Card 3 -->
          <article class="card" @click="goToPost('post-04')">
            <div class="card-head">
              <div class="card-head-text">
                <h3 class="name">Jessie</h3>
                <p class="title">The University of Manchester</p>
                <div class="titleSub">MSc Finance</div>
              </div>
              <div class="card-head-img">
                <img src="@/assets/images/stu4.jpg" alt="" />
              </div>
            </div>
            <hr class="rule" />
            <p class="card-body">
              整個申請過程中都有給予很多有用的建議，也會耐心聽我們的顧慮。做事效率高、資訊來源豐富，還幫助我找到讀同系的同學，去讀書的時候不會那麼焦慮；後續學費問題也協助解決，整體感受很好！
            </p>
          </article>
        </div>
        <div class="moreStory" @click="goto('/blog')">➢查看更多成功故事</div>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <h2 class="news-title">最新消息</h2>

        <div class="news-grid">
          <a class="news-card" href="/news/why-Annenberg">
            <div class="thumb">
              <img src="@/assets/images/news5.png" alt="news cover" />
            </div>
            <div class="news-content">
              <h3>為什麼南加大跟賓州大學的傳播學院都叫 Annenberg？</h3>
              <p>2025.10.15</p>
              <p>
                為什麼南加大跟賓州大學的傳播學院都叫 Annenberg？ ——背後是一位改變美國媒體教育的慈善富豪...
              </p>
            </div>
          </a>

          <a class="news-card" href="/news/site-launch">
            <div class="thumb">
              <img src="@/assets/images/news1.png" alt="news cover" />
            </div>
            <div class="news-content">
              <h3>慶祝曜境官網全新升級上線</h3>
              <p>2025.10.1</p>
              <p>
                曜境官網正式上線！歷經半年多的規劃與優化，曜境官網全新改版，正式與大家見面！這不僅是我們的重要里程碑...
              </p>
            </div>
          </a>

          <a class="news-card" href="/news/QS-Ranking">
            <div class="thumb">
              <img src="@/assets/images/news4.png" alt="news cover" />
            </div>
            <div class="news-content">
              <h3>最新QS Global MBA Rankings 2026出爐</h3>
              <p>2025.09.17</p>
              <p>
                賓夕法尼亞大學（沃頓商學院 / Wharton）榮登全球最佳全日制 MBA！
                緊隨其後的前三名分別為：哈佛商學院...
              </p>
            </div>
          </a>
          <a class="news-card" href="/news/toefl-2026-revamp">
            <div class="thumb">
              <img src="@/assets/images/news3.png" alt="news cover" />
            </div>
            <div class="news-content">
              <h3>托福將於 2026 年 1 月起正式改版</h3>
              <p>2025.09.02</p>
              <p>
                ETS 於今年 5 月 28 日宣布 TOEFL iBT 將於 2026 年 1
                月起迎來全新升級，提供更貼近真實學術情境、更加公平與高效...
              </p>
            </div>
          </a>

          <!-- <a class="news-card" href="/news/canada-study-permit-2025">
            <div class="thumb">
              <img src="@/assets/images/news2.jpg" alt="news cover" />
            </div>
            <div class="news-content">
              <h3>加拿大留學審核趨嚴，申請人該如何因應？</h3>
              <p>2025.09.02</p>
              <p>
                本文延伸自 The PIE News（Aug 29,
                2025）對加拿大留學簽證趨勢的報導，並結合我們的專業觀點與建議...
              </p>
            </div>
          </a> -->
        </div>
        <div class="moreNews" @click="goto('/News')">➢點我看更多最新消息</div>
      </div>
    </section>

    <section class="path-picker">
      <div class="path-stage">
        <!-- 浮動裝飾圖（可換成你的圖片） -->
        <div class="floating-img img-tl">
          <img src="@/assets/images/kaplan2.jpg" alt="" />
        </div>
        <div class="floating-img img-tr">
          <img src="@/assets/images/kaplan1.jpg" alt="" />
        </div>
        <div class="floating-img img-bl">
          <img src="@/assets/images/sydney.jpg" alt="" />
        </div>
        <div class="floating-img img-mr">
          <img src="@/assets/images/perth.jpg" alt="" />
        </div>

        <!-- 中央內容 -->
        <div class="path-inner">
          <span class="badge">SELECT</span>
          <h2 class="headline">選擇適合您的留學方案</h2>
          <p class="sub">PICK THE PATH THAT LEADS TO YOUR DREAMS.</p>

          <div class="actions">
            <a class="option" href="/studyAbroad">大學研究所申請</a>
            <a class="option" href="/highSchool">中學申請</a>
            <a class="option" href="/languageSchool">語言學校／遊學團</a>
            <a class="option" href="/document">純文件／落點分析</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useRouter } from "vue-router";
import { useHead } from '@vueuse/head'

useHead({
  title: '英國留學申請｜曜境 Excellent Future Education',
  meta: [
    { name: 'description', content: '英國留學代辦，專業規劃與申請協助。' },
    { name: 'keywords', content: '留學,留學代辦,英國留學,留學申請,代辦推薦' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: '英國留學申請｜曜境' },
    { property: 'og:description', content: '英美澳加留學申請｜專業顧問一對一規劃與全程代辦。' },
    { property: 'og:url', content: 'https://theyaojing.org/study-uk' },
    { property: 'og:image', content: 'https://theyaojing.org/logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://theyaojing.org/logo.jpg' }
  ],
  link: [{ rel: 'canonical', href: 'https://theyaojing.org/study-uk' }]
})

const router = useRouter();
const images = [
  new URL("@/assets/images/homepage.png", import.meta.url).href,
  new URL("@/assets/images/homepage.png", import.meta.url).href,
  // new URL("@/assets/images/excellent-future.jpg", import.meta.url).href,
  // new URL("@/assets/images/service-content.jpg", import.meta.url).href,
  // new URL("@/assets/images/student.jpg", import.meta.url).href,
  // new URL("@/assets/images/qa.jpg", import.meta.url).href,
];

function goToPost(slug) {
  router.push(`/blog/posts/${slug}`);
}
function goto(path) {
  router.push(path);
}
</script>

<style lang="scss" scoped>
.smallText {
  font-size: 14px;
}
.home {
  line-height: 1.8;
  &__hero {
    color: #000;
    z-index: 2;
    width: 100%;
    text-align: center;
    padding-top: 30px !important;
    padding-bottom: 60px !important;
    h1 {
      font-size: 16px;
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
      font-size: 14px;
      color: #000;
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
      color: #000;
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
      height: calc(100vh - 85px);
      width: 100%;
      display: block;
    }
  }
  &__back {
    height: calc(100vh - 85px);
    width: 100%;
    position: absolute;
    background-color: rgb(102, 137, 165, 0.6);
    pointer-events: none;
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
      font-size: 14px;
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
        font-size: 14px;
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
      background-color: #eeece9;
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
    font-size: 14px;
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
        font-size: 14px;
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
        margin-right: 25%;
        width: 75%;
      }
    }
  }
  .subjectReverse {
    flex-direction: row-reverse;
    .subject {
      &__content {
        text-align: left;
      }

      &__image {
        img {
          margin-left: 25%;
          margin-right: 0;
        }
      }
    }
  }
  .subjectContent {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    &__title {
      color: #043d78;
      font-weight: bold;
      font-size: 16px;
      padding-bottom: 10px;
    }
    &__text {
      color: black;
      &--student {
        padding: 8px 0 16px 15px;
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
      padding-top: 8px;
      color: black;
    }
    ul {
      margin: 0;
    }
    ul,
    li {
      color: black;
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
        img {
          width: 100%;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    }
  }
}
.bold {
  font-weight: bold;
}
.minWidth300 {
  min-width: 300px;
}
.imageGridSection {
  display: flex;
  gap: 20px;
  align-items: stretch;
  padding: 60px 0;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  overflow-x: hidden;
}
.carousel {
  width: 100%;
  &__slide {
    width: 100%;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100% !important;
    height: auto !important;
    &__slide {
      width: 100% !important;
      height: auto !important;
      min-height: 40vh;
      img {
        height: 100% !important;
      }
    }
  }
}
.about-section {
  background-color: #f9f6f2; /* 背景淡米色 */
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #222;
}

.about-content {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 1;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-text .highlight {
  font-weight: 600;
  margin-top: 30px;
  color: #000;
}
/* 背景與容器 */
.services-section {
  background: #f9f6f2; /* 淡米色 */
  padding: 72px 20px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* 兩欄佈局：左文寬、右標題窄 */
.services-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr; /* 左 > 右 */
  gap: 48px;
  align-items: start;
}

/* 左文樣式 */
.services-copy p {
  color: #333;
  line-height: 1.9;
  margin: 70px 0 28px;
}
.services-subtitle {
  font-size: 20px;
  margin: 0 0 16px;
  color: #222;
}
.services-list {
  margin: 0;
  padding-left: 1.2em;
  color: #333;
  line-height: 1.9;
}

/* 右側標題與細線 */
.services-title {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.services-title h2 {
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  color: #222;
  line-height: 1.2;
  text-align: center;
}
.title-rule {
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  width: 100%;
  align-self: flex-end; /* 線靠右對齊 */
}

/* RWD：手機改上下排，標題置中 */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .services-title {
    text-align: center;
    align-items: center;
    order: 1;
  }
  .title-rule {
    width: min(360px, 80%);
  }
  .services-copy {
    order: 2;
    p {
      margin-top: 10px;
    }
  }
}

/* RWD 手機版上下排 */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-image img {
    max-width: 100%;
  }
}

.testimonials {
  background: #ed8762;
  padding: 72px 20px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.moreStory {
  position: absolute;
  bottom: -50px;
  right: 0;
  font-size: 16px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.moreNews {
  position: absolute;
  bottom: -50px;
  right: 0;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  color: #6b4d2e;
}
.section-title {
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0 0 28px;
}

/* Cards grid */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* Card */
.card {
  background: #f7f4ee;
  padding: 28px;
  display: flex;
  flex-direction: column;
  min-height: 360px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}
.card-head {
  height: 125px;
  position: relative;
}
.card-head-text {
  width: calc(100% - 65px);
}
.card-head-img {
  position: absolute;
  top: 0;
  right: 0px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-head-img img {
  width: 100%;
}
.card-head .name {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
}
.card-head .title {
  margin: 0;
  font-size: 20px;
  line-height: 1.4;
}
.card-head .titleSub {
  margin: 0;
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.2;
}

.rule {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin: 20px 0;
}
.card-body {
  line-height: 1.9;
  margin: 0;
}

/* RWD */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .home__heroImage {
    img {
      height: 50vh;
    }
  }
}
@media (max-width: 680px) {
  .section-title {
    font-size: 28px;
  }
  .cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .card {
    padding: 22px;
  }
  /* 手機可做橫向滑動：改成 snap（可選） */
  /* .cards{ display:flex; overflow-x:auto; scroll-snap-type:x mandatory; }
     .card{ min-width: 82%; scroll-snap-align:start; } */
}
.news {
  background: #e9d7af; /* 背景米色 */
  padding: 72px 20px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.news-title {
  text-align: center;
  color: #6b4d2e; /* 深棕 */
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0 0 28px;
}

/* Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Card */
.news-card {
  display: flex;
  flex-direction: column;
  background: #f2ece2;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  min-height: 420px; /* 等高視覺 */
}
.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

/* Thumb：固定比例裁切 */
.thumb {
  width: 100%;
  height: 200px;
  background: #dddddd;
  overflow: hidden;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition: transform 0.25s ease;
}
.news-card:hover .thumb img {
  transform: scale(1.06);
}

/* Text */
.news-content {
  padding: 22px 22px 26px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
}
.news-content h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #6b4d2e;
  line-height: 1.35;
}
.news-content p {
  margin: 0;
  color: #6b5f4f;
  line-height: 1.9;
  font-size: 15.5px;
}

/* RWD */
@media (max-width: 1200px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .news-title {
    font-size: 30px;
  }
  .news-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}
/* 區塊背景與容器 */
.path-picker {
  background: #efe6d2; /* 淡米色背景 */
  padding: 88px 0px;
}
.path-stage {
  position: relative;
  margin: 0 auto;
}

/* 中央內容 */
.path-inner {
  width: 560px;
  max-width: 92%;
  margin: 0 auto;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 8px 18px;
  background: #f6c85f; /* 黃色膠囊 */
  border: 2px solid #2b2b2b;
  color: #2b2b2b;
  border-radius: 9999px;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 14px;
}
.headline {
  margin: 16px 0 10px;
  font-size: 48px;
  font-weight: 700;
  color: #3a332a;
  line-height: 1.2;
  padding: 20px 0;
}
.sub {
  margin: auto;
  color: #7a6a56;
  letter-spacing: 2px;
  font-size: 14px;
  width: 250px;
  padding: 50px 0;
}

/* 選項按鈕 */
.actions {
  display: grid;
  gap: 16px;
  padding: 30px 0;
}
.option {
  display: block;
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #3f3a33;
  background: transparent;
  color: #2f2b26;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}
.option:hover {
  background: #f4ecd8;
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

/* 浮動圖片（裝飾用） */
.floating-img {
  position: absolute;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  pointer-events: none; /* 不擋住按鈕點擊 */
}
.floating-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 位置：讓圖片略微超出版心（右/左-40px） */
.img-tl {
  left: 0;
  top: 40px;
  width: 400px;
  height: 250px;
  max-width: 23%;
}
.img-tr {
  right: 60px;
  top: -88px;
  width: 400px;
  height: 250px;
  max-width: 23%;
}
.img-bl {
  left: 40px;
  bottom: -87px;
  width: 400px;
  height: 250px;
  max-width: 23%;
}
.img-mr {
  right: 0px;
  bottom: 120px;
  width: 400px;
  height: 250px;
  max-width: 23%;
}

/* RWD */
@media (max-width: 1100px) {
  .img-tl {
    width: 360px;
    height: 210px;
  }
  .img-tr {
    width: 300px;
    height: 200px;
  }
  .img-bl {
    width: 320px;
    height: 210px;
  }
  .img-mr {
    width: 300px;
    height: 200px;
    top: 300px;
  }
  .headline {
    font-size: 42px;
  }
}
@media (max-width: 860px) {
  /* 手機：隱藏裝飾圖，保留主體 */
  .floating-img {
    display: none;
  }
  .headline {
    font-size: 32px;
  }
  .sub {
    font-size: 13px;
  }
  .badge {
    font-size: 13px;
  }
  .option {
    width: auto;
  }
}
</style>
