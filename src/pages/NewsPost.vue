<template>
  <article class="post-detail">
    <!-- 上一頁 -->
    <div class="back-container">
      <span class="back-btn" type="button" @click="goBack" aria-label="Go back"
        >← 上一頁</span
      >
    </div>

    <!-- 內容容器 -->
    <div class="container" v-if="post">
      <!-- Hero 圖片 -->
      <div>
        <img
          class="hero-img"
          :src="getImageUrl(post.heroUrl)"
          :alt="post.heroAlt || post.title"
          loading="lazy"
          decoding="async"
        />
      </div>

      <!-- 標題與日期 -->
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="post-date">
        {{ post.date }}
        <template v-if="post.source">｜來源：{{ post.source }}</template>
      </p>

      <!-- 內文（以 HTML 字串渲染） -->
      <div class="post-content" v-html="post.content"></div>
    </div>

    <div v-else class="container">
      <p>找不到文章（id: {{ route.params.id }}）。</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

/** 文章資料（之後要接 API，改這裡即可） */
const posts = [
  {
    id: "toefl-2026-revamp",
    title: "托福將於 2026 年 1 月起正式改版",
    date: "2025.09.02",
    source: "ETS 官網",
    heroUrl: "news3.png",
    heroAlt: "TOEFL 改版示意",
    content: `
      <p>ETS 於今年 5 月 28 日宣布 TOEFL iBT 將於 2026 年 1 月起迎來全新升級，提供更貼近真實學術情境、更加公平與高效的測驗體驗。</p>
      <h3>改版重點如下：</h3>
      <ul>
        <li><strong>多階段自適應測驗設計：</strong>閱讀與聽力部分將根據考生表現即時調整難度，並納入更多現代且兼顧公平性的主題內容。</li>
        <li><strong>雙重評分系統：</strong>除 0–120 分外，新增 1–6 分級，並與全球最廣泛採用的 <strong>歐洲共同語言參考架構（CEFR）</strong>完整對應，讓成績解讀更直觀。</li>
      </ul>
      <h4>其他升級措施：</h4>
      <ul>
        <li><strong>音訊設備全面升級：</strong>全球考場耳機更換為客製化立體聲耳機。</li>
        <li><strong>加速出分：</strong成績最快 72 小時內釋出。></li>
        <li><strong>簡化報名流程：</strong>全新系統更易於完成報名。</li>
      </ul>
      <p>此次改版將為全球考生帶來更公平、精準且便利的托福測驗體驗。</p>
    `,
  },
  {
    id: "canada-study-permit-2025",
    title: "加拿大留學審核趨嚴，申請人該如何因應？",
    date: "2025.09.02",
    source: "",
    heroUrl: "news2.jpg",
    heroAlt: "加拿大留學簽證示意",
    content: `
      <p>本文延伸自 The PIE News（Aug 29, 2025）對加拿大留學簽證趨勢的報導，並結合我們的專業觀點與建議，提供完整解析。</p>
      <p>近年來，加拿大已經成為國際學生熱門留學目的地，但最新統計顯示，2025 年至今留學簽證（Study Permit）拒簽率已升至 <strong>62%</strong>，創十多年新高。印度學生受影響尤其明顯，第二季拒簽率高達 <strong>80%</strong>。
</p>
      <h3>拒簽主要原因</h3>
      <ol>
        <li><strong>移民傾向疑慮：</strong>部分審核官認為申請人畢業後不會返回原居國。</li>
        <li><strong>財力證明不足：</strong>加拿大對留學生資金證明要求提高，申請人需充分展示學費及生活費來源。</li>
        <li><strong>申請材料或目的不符：</strong>如停留目的與申請資訊不一致，或缺乏明確學習計畫。</li>
      </ol>
      <h3>💡專業觀點與建議</h3>
      <p>雖然拒簽率提高，但透過正確準備與策略，仍可大幅提升成功率。以下針對拒簽主因一一破防：</p>
      <ul>
        <li><strong>移民傾向疑慮：提交 Letter of Explanation </strong>，清楚說明就學目的與返國規劃，讓移民官了解你完成學業後會返回原居國。<strong>曜境顧問將全程協助你規劃與撰寫，提高說服力。</strong></li>
        <li><strong>財務證明不足：</strong>提早準備符合 IRCC 規定的財力證明。<em>（2025年9月1號財力證明要求上升至加幣$22,895）</em></li>
        <li><strong>申請材料或目的不符：</strong>確保簽證申請時提供的資訊與學校申請時一致，避免資料矛盾。</li>
      </ul>
      <p>有經驗的 <strong>留學顧問</strong> 可以協助你：</p>
      <ul>
        <li>
          規劃與撰寫 <strong>Letter of Explanation</strong>，呈現完整且清楚的就學與返國計畫。
        </li>
        <li>
          檢視最終遞交文件，提醒容易忽略的細節，降低被拒風險。
        </li>
      </ul>
      <p>提前準備，搭配專業協助，是順利取得加拿大留學簽證的關鍵。</p>
    `,
  },
  {
    id: "site-launch",
    title: "慶祝曜境官網全新升級上線",
    date: "日期：2025.10.1",
    source: "",
    heroUrl: "news1.png",
    heroAlt: "網站上線示意",
    content: `
      <p><strong>曜境官網正式上線！</strong></p>
      <p>歷經半年多的規劃與優化，曜境官網全新改版，正式與大家見面！這不僅是我們的重要里程碑，更代表曜境在服務與內容上再提升。</p>

      <p>在這裡，我們將持續分享：</p>
      <ul>
        <li>🌍<strong> 最新留學趨勢與政策解讀 </strong></li>
        <li>✨<strong> 學生回饋與留學心得故事 </strong></li>
        <li>🤝<strong> 曜境的最新活動與合作消息 </strong></li>
      </ul>
      <p>
      衷心感謝一路支持曜境的學生、家長與合作夥伴們，讓這個平台能順利誕生。
      <br>
誠摯邀請大家一起探索我們的新網站，並持續給予我們寶貴的回饋。</p>
      <h3>🎁 官網上線限定回饋活動</h3>
      <p>即日起透過新官網預約並選擇與曜境合作，<br>
      <strong>即可 免費額外加送兩所學校申請服務！
      </strong> <br>
      👉 名額有限，敬請把握！</p>
    `,
  },
  {
    id: "QS-Ranking",
    title: "最新QS Global MBA Rankings 2026出爐",
    date: "日期：2025.09.17",
    source: "QS Ranking",
    heroUrl: "news4.png",
    heroAlt: "網站上線示意",
    content: `
<div>
  <p><b>賓夕法尼亞大學（沃頓商學院 / Wharton）</b> 榮登全球最佳全日制 MBA！</p>
  <p>
    緊隨其後的前三名分別為：
    <b>哈佛商學院（Harvard Business School）</b>、
    <b>麻省理工學院（史隆 / MIT Sloan）</b> 及
    <b>史丹佛大學研究生商學院（Stanford GSB）</b>，
    全面展現美國商學院的全球領先地位。
  </p>

  <p><b>歐洲最佳：</b> 巴黎高等商學院（HEC Paris），位列第 5；</p>
  <p><b>亞洲最佳：</b> 新加坡國立大學（NUS），排名第 23。</p>

  <p><b>前十名完整名單：</b></p>
  <ul style="list-style:none; padding:0; margin:0;">
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">1</span>
      賓夕法尼亞大學（沃頓商學院 / Wharton）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">2</span>
      哈佛商學院（Harvard Business School）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">3</span>
      麻省理工學院史隆管理學院（MIT Sloan）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">4</span>
      史丹佛大學研究生商學院（Stanford GSB）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">5</span>
      巴黎高等商學院（HEC Paris）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">6</span>
      倫敦商學院（London Business School）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">7</span>
      劍橋大學商學院（Cambridge Judge）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">8</span>
      歐洲工商管理學院（INSEAD）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">9</span>
      西北大學凱洛格管理學院（Northwestern Kellogg）
    </li>
    <li style="display:flex; align-items:center; margin:6px 0;">
      <span style="background:#007bff; color:#fff; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; font-weight:bold; margin-right:10px; font-size:14px;">10</span>
      哥倫比亞商學院（Columbia Business School）
    </li>
  </ul>

  <p style="margin-top:20px; font-size:16px;">
    「Wharton、哈佛、MIT... 你最想念哪所 MBA？<br>
    快到我們的 
    <a href="https://www.facebook.com/profile.php?id=61551849541200" target="_blank" style="color:#007bff; font-weight:bold; text-decoration:none;">Facebook</a> /
    <a href="https://www.instagram.com/excellent_future_education/" target="_blank" style="color:#007bff; font-weight:bold; text-decoration:none;">Instagram</a>
    留言告訴我們吧！」
  </p>
</div>

`,
  },
];

const post = computed(() => {
  const id = String(route.params.id || "");
  return posts.find((p) => p.id === id);
});

/** 保留你的上一頁行為 */
function goBack() {
  if (window.history.length > 1) router.back();
  else router.push("/news");
}

function getImageUrl(file: string) {
  return new URL(`../assets/images/${file}`, import.meta.url).href;
}
/** 可選：變更頁面 title */
watch(
  () => post.value?.title,
  (t) => {
    if (t) document.title = `${t} | 曜境`;
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.post-detail {
  color: #2d2d2d;
  line-height: 1.8;
}

/* Hero 圖片與內文等寬 */
.hero-img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 420px;
}

.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 16px 48px;
}

.back-container {
  max-width: 900px;
  margin: 15px auto;
}
.back-btn {
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
}
.back-btn:hover {
  color: #7a7a7a;
}

.post-title {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 650;
  line-height: 1.35;
  margin: 14px 0 8px;
}
.post-date {
  font-size: 0.95rem;
  color: #7a7a7a;
  margin: 0 0 20px;
}

.post-content :is(h2, h3, h4) {
  margin: 1.5rem 0 0.5rem;
  font-weight: 700;
}
.post-content p {
  margin: 0.75rem 0 1.2rem;
}
.post-content ul,
.post-content ol {
  padding-left: 1.25rem;
  margin: 0.5rem 0 1rem;
}
blockquote {
  margin: 1.4em 0;
  padding-left: 1em;
  border-left: 3px solid #ccc;
  color: #555;
  font-style: italic;
}
</style>
