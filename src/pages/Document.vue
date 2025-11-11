<template>
  <!-- 只給 SEO/可及性用，不影響畫面 -->
  <h1 class="sr-only">文件服務與落點分析｜曜境 Excellent Future Education</h1>

  <section class="service-analysis" aria-label="文件服務與落點分析">
    <!-- 上方三行文字 -->
    <ul class="highlight-list" aria-label="服務亮點">
      <li>一對一專屬顧問深度討論，挖掘你的獨特優勢與經驗</li>
      <li>放大你的亮點，完整展現個人特質與潛力</li>
      <li>中師與外師雙重把關，精準製作高質量申請文件，讓你脫穎而出</li>
    </ul>

    <!-- 雙欄區塊 -->
    <section class="service-analysis" aria-label="服務項目">
      <div class="box">
        <!-- 文件服務 -->
        <div class="col">
          <div
            class="image document-icon"
            role="img"
            aria-label="文件服務圖示"
          ></div>
          <h2 class="title">文件服務</h2>
        </div>

        <!-- 中間斜線 -->
        <div class="slash-divider" aria-hidden="true"></div>

        <!-- 落點分析 -->
        <div class="col">
          <h2 class="title">落點分析</h2>
          <div
            class="image analysis-icon"
            role="img"
            aria-label="落點分析圖示"
          ></div>
        </div>
      </div>
    </section>

    <div class="text-right">
      <ul aria-label="落點分析重點說明">
        <li>精準落點，讓申請更有把握</li>
        <li>依據你的成績、經歷與興趣，分析適合申請的學校</li>
        <li>幫助你規劃保底校、目標校與夢想校</li>
        <li>
          製作清楚明瞭的學校落點清單，各校錄取標準與特色一目了然，選校不再困擾
        </li>
      </ul>
    </div>

    <!-- Call to Action -->
    <div class="cta" aria-label="預約諮詢">
      <div class="cta-content">
        <p><strong>如果你</strong></p>
        <ul>
          <li><strong>對申請文件怎麼寫毫無頭緒</strong></li>
          <li><strong>不知道可以申請到什麼學校</strong></li>
        </ul>
        <div class="ask-button">
          <div class="consult-btn" @click="goto('/booking')" aria-label="前往預約諮詢">
            預約諮詢
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useHead } from '@vueuse/head'
import { useRouter } from "vue-router";
const siteUrl = 'https://theyaojing.org'
const pageUrl = `${siteUrl}/services/analysis` // 依你的實際路由調整
const router = useRouter()
useHead({
  title: '文件服務與落點分析｜曜境 Excellent Future Education',
  meta: [
    {
      name: 'description',
      content:
        '一對一顧問深度討論，放大你的個人亮點。中師外師雙重把關文件；依背景精準落點，規劃保底校、目標校、夢想校，幫你更有把握地完成留學申請。'
    },
    { name: 'robots', content: 'index,follow,max-image-preview:large' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: '文件服務與落點分析｜曜境 Excellent Future Education' },
    {
      property: 'og:description',
      content:
        '文件服務＋落點分析：放大亮點、掌握錄取機會。中師外師雙把關，清楚的選校清單與申請策略一次到位。'
    },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: `${siteUrl}/logo.jpg` },
    { property: 'og:locale', content: 'zh_TW' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '文件服務與落點分析｜曜境 Excellent Future Education' },
    {
      name: 'twitter:description',
      content:
        '一對一文件服務與落點分析，從亮點挖掘到選校名單，讓你的申請更有把握。'
    },
    { name: 'twitter:image', content: `${siteUrl}/logo.jpg` }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'alternate', hreflang: 'zh-Hant-TW', href: pageUrl }
  ]
})
function goto(path, query = {}) {
  router.push({ path, query }).then(() => {
    window.scrollTo(0, 0);
  });
}
</script>
<style scoped  lang="scss">
/* 只給 SEO/無障礙用的隱藏文字，不影響版面 */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 1px, 1px) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.service-analysis {
  max-width: 1080px;
  margin: 0 auto;
  font-family: "Noto Sans TC", sans-serif;
  color: #000;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;

    .service-analysis {
      padding: 0;
    }
  }
}

.highlight-list {
  font-size: 18px;
  margin-bottom: 2rem;
  line-height: 1.8;
  list-style: disc;
  padding-left: 1.2rem;
  padding-top: 6rem;

  @media (max-width: 1024px) {
    max-width: calc(100% - 30px);
    padding-left: 30px;
    padding-top: 2rem;
  }
}

.box {
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slash-divider {
  width: 4px;
  height: 150px;
  background-color: #000;
  transform: rotate(25deg);
}

.description {
  padding: 1rem 10px;
}

.col {
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.title {
  font-size: 2rem;
  display: flex;
  justify-self: baseline;
  font-weight: bold;
  color: #000;
}

img {
  width: 100%;
  height: auto;
}

.document-icon {
  width: 200px;
  height: 250px;
  background-size: 350%;
  background-image: url("@/assets/images/document-icon.png");
  background-repeat: no-repeat;
  background-position: center;
}

.analysis-icon {
  width: 200px;
  height: 250px;
  background-size: 350%;
  background-image: url("@/assets/images/analysis-icon.png");
  background-repeat: no-repeat;
  background-position: center;
}

ul {
  list-style: disc;
  padding-left: 1.2rem;
  line-height: 1.8;

  @media (max-width: 1024px) {
    max-width: calc(100% - 30px);
    padding-left: 30px;
  }
}

.cta {
  width: 100%;
  padding: 5rem 0;
  font-size: 18px;
  display: flex;
  justify-content: center;

  &-content {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
  }
}

.cta ul {
  margin: 0.5rem 0;
  padding-left: 0;
}

.cta p {
  width: 30%;
  text-align: center;
}

.ask-button {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
}

.text-right {
  font-size: 18px;
  display: flex;
  justify-content: end;
}

.consult-btn {
  background-color: #000;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;
    gap: 2rem;
  }

  .slash-divider {
    display: none;
  }

  .cta,
  .cta > p {
    text-align: center;
    width: 100%;
  }

  .ask-button {
    width: 100%;
    justify-content: center;
  }

  .cta-content {
    padding: 0 30px;
    width: calc(100% - 30px);
  }
}
</style>
