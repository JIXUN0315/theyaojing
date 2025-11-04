<template>
  <!-- ① Hero 圖 -->
  <div class="hero-wrap" aria-label="語言學校與遊學團 Hero">
    <!-- 僅供 SEO/可及性；不影響畫面 -->
    <h1 class="sr-only">語言學校與國際遊學團｜曜境 Excellent Future Education</h1>

    <img
      class="hero"
      src="@/assets/images/language-hero.jpg"
      alt="Language Programs"
    />
  </div>

  <!-- ② 兩列四色交錯 -->
  <div class="grid" aria-label="語言學校與遊學團介紹">
    <!-- 左上：語言學校文字（#aba08f） -->
    <div class="cell text bg-aba08f">
      <h2 class="title">語言學校</h2>
      <p class="subtitle">在台灣學了多年英文，卻還是不敢開口說？</p>
      <hr class="divider" />
      <ul class="content">
        <li>語言學校提供沉浸式學習環境，讓你真正用英文溝通，從生活中學習。</li>
        <li>
          當你能自在地用英文表達想法，不再只停留在 "Hi, how are you?"
          或聊聊天氣的程度，而是能深入交流、分享觀點、建立跨文化的真實連結，
          你會發現：語言不只是工具，更是走向世界的橋樑。
        </li>
        <li>
          不論你是學生、上班族，還是準備出國生活／工作的你，語言學校都是投資自己的最佳選擇。
        </li>
      </ul>
    </div>

    <!-- 右上：圖片（#466a8b） -->
    <div class="cell photo bg-466a8b" aria-label="國際遊學團示意圖">
      <div class="photo-frame">
        <img src="@/assets/images/summer-camp.jpg" alt="遊學團" />
      </div>
    </div>

    <!-- 左下：遊學團文字（#8b949d） -->
    <div class="cell text bg-8b949d">
      <h2 class="title">遊學團</h2>
      <p class="subtitle">
        您有 12～18 歲的孩子，還不知道寒暑假該怎麼規劃嗎？現在就讓我們幫您！
      </p>
      <hr class="divider" />
      <p class="paragraph">
        歡迎聯繫我們了解最新的國際遊學團資訊，找到適合孩子的冬／夏令營，
        讓孩子在假期中學習語言、探索世界、拓展視野、培養自信！
      </p>
    </div>

    <!-- 右下：圖片（#ede2d7） -->
    <div class="cell photo bg-ede2d7 dark" aria-label="語言學校示意圖">
      <div class="photo-frame">
        <img src="@/assets/images/language-school.jpg" alt="語言學校" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head'

const siteUrl = 'https://theyaojing.org'
const pageUrl = `${siteUrl}/language` // 依你的實際路由調整

useHead({
  title: '語言學校與國際遊學團｜曜境 Excellent Future Education',
  meta: [
    {
      name: 'description',
      content:
        '語言學校提供沉浸式英文學習環境，快速提升口說與自信；12–18 歲國際遊學團，寒暑假探索世界、拓展視野。曜境協助規劃最適合你的語言/遊學方案。'
    },
    { name: 'robots', content: 'index,follow,max-image-preview:large' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: '語言學校與國際遊學團｜曜境 Excellent Future Education' },
    {
      property: 'og:description',
      content:
        '沉浸式英文學習與寒暑假國際遊學團，從生活中學語言、拓展國際視野。聯繫曜境，獲得客製化規劃建議。'
    },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: `${siteUrl}/logo.jpg` },
    { property: 'og:locale', content: 'zh_TW' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '語言學校與國際遊學團｜曜境 Excellent Future Education' },
    {
      name: 'twitter:description',
      content:
        '語言學校 × 遊學團：提升英語溝通、自信與國際視野。曜境提供完善諮詢與規劃。'
    },
    { name: 'twitter:image', content: `${siteUrl}/logo.jpg` }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'alternate', hreflang: 'zh-Hant-TW', href: pageUrl }
  ]
})
</script>
<style scoped lang="scss">
/* 只給 SEO/無障礙用的隱藏文字，不影響畫面 */
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

.hero {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(380px, auto);
}

/* Cell 通用 */
.cell {
  overflow: hidden;
}

/* 文字格：頂端對齊 */
.cell.text {
  padding: clamp(24px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 由上往下 */
  align-items: flex-start; /* 左對齊 */
  text-align: left;
  color: #fff;

  .title {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 800;
    margin: 0 0 12px;
    letter-spacing: 0.03em;
  }
  .subtitle {
    font-size: clamp(16px, 2.2vw, 22px);
    font-weight: 700;
    margin: 6px 0 14px;
  }
  .divider {
    width: 60%;
    max-width: 460px;
    border: 0;
    border-top: 2px solid rgba(255, 255, 255, 0.7);
    margin: 12px 0 18px;
  }
  .content {
    margin: 0;
    padding-left: 1.2em;
    list-style: disc outside;
  }
  .content li {
    line-height: 1.9;
    margin: 0 0 0.6em;
  }
  .paragraph {
    margin: 0;
    line-height: 1.9;
    color: white;
  }
}

/* 圖片格：置中顯示相框 */
.cell.photo {
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 2px;
}

/* 顏色 */
.bg-aba08f {
  background: #aba08f;
}
.bg-466a8b {
  background: #466a8b;
}
.bg-8b949d {
  background: #8b949d;
}
.bg-ede2d7 {
  background: #ede2d7;
}
.dark {
  color: #2d2d2d;
}

/* CTA（保留：如未使用可移除） */
.cta {
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 24px 16px 0;
}
.cta h3 {
  margin: 0;
  background: #f2c94c;
  color: #2d2d2d;
  text-align: center;
  padding: 28px 16px;
  border-radius: 4px;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 800;
  letter-spacing: 0.02em;
}

/* RWD */
@media (max-width: 900px) {
  .hero{
    height: 420px;
  }
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .cell.photo {
    padding: 30px;
  }
}
</style>
