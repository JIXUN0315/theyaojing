<template>
  <!-- 隱藏主標：不影響畫面，但補語義與關鍵字 -->
  <h1 class="sr-only">成功故事與專欄｜曜境 Excellent Future Education 留學服務經驗分享</h1>

  <div class="hero-section" aria-label="成功故事與專欄頁首">
    <div class="photo" role="img" aria-label="部落格封面圖"></div>
    <div class="content">
      <p class="paragraph">每段留學路 <br> 都是一場獨特的旅程</p>
      <p class="description">
        這裡，我們集結了學生們的真實回饋、親身經歷，
        <br />
        以及顧問團隊撰寫的實用文章。
        <br />
        也許你會在某一段故事中，看見此刻的自己。
        <br />
        感受到「你不是一個人」的陪伴力量。
      </p>
    </div>
  </div>

  <!-- 分類區塊 -->
  <nav class="category-tabs" ref="blogPage" aria-label="文章分類切換">
    <div
      v-for="cat in categories"
      :key="cat"
      :class="{ active: activeCategory === cat }"
      @click="setCategory(cat)"
      role="button"
      :aria-pressed="activeCategory === cat"
    >
      {{ cat }}
    </div>
  </nav>

  <div class="blog-page">
    <!-- 卡片區塊 -->
    <div class="cards-grid" aria-label="文章卡片列表">
      <div
        v-for="post in paginatedPosts"
        :key="post.slug"
        class="blog-card"
        @click="goToPost(post.slug)"
        role="article"
        :aria-label="post.title"
      >
        <img
          :src="post.image"
          :alt="postAlt(post)"
          loading="lazy"
          decoding="async"
        />
        <!--
        保留原有註解：如要顯示標題/日期，可直接解除註解
        <div class="card-content">
          <p class="date">{{ post.date }}</p>
          <p class="tag">{{ post.category }}</p>
          <p class="title">{{ post.title }}</p>
          <p class="info" v-if="post.info">{{ post.info }}</p>
        </div>
        -->
      </div>
    </div>
  </div>

  <div class="pagination" v-if="totalPages > 1">
    <nav class="pager" aria-label="Pagination">
      <button
        class="pager__nav pager__prev"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        上一頁
      </button>

      <ul class="pager__pages" role="list">
        <li
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
        >
          <a
            class="pager__page"
            :class="{ 'is-current': currentPage === page }"
            href="javascript:void(0);"
          >
            {{ page }}
          </a>
        </li>
      </ul>

      <button
        class="pager__nav pager__next"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        下一頁
      </button>
    </nav>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHead } from '@vueuse/head'

// ===== 基本站點資訊（依你的實際網域與路由調整） =====
const siteUrl = 'https://theyaojing.org'
const pageUrl = `${siteUrl}/blog` // 本頁 canonical
const logoUrl = `${siteUrl}/logo.jpg`

// ===== 分類／列表資料與互動邏輯 =====
const router = useRouter();
const route = useRoute()
const categories = ["#總覽", "#留學故事", "#服務心得", "#實用專欄"];
const activeCategory = ref(categories[0]);

// 寫死的文章資料（僅作為卡片模板）
const posts = ref([
  {
    slug: "post-news",
    title: "為什麼南加大跟賓州大學的傳播學院都叫 Annenberg？",
    info: "背後是一位改變美國媒體教育的慈善富豪",
    imageUrl: "news5.png",
    category: "#實用專欄",
    image: new URL("@/assets/images/news5.png", import.meta.url).href,
  },
  {
    slug: "post-01",
    title: "CW. Mai, Case Western University",
    info: "MS Biostatistics (全美國生物統計排名#28)",
    date: "2025.7.28",
    category: "#服務心得",
    image: new URL("@/assets/images/CW Mai.png", import.meta.url).href,
  },
  {
    slug: "post-02",
    title: "Heidi Liang, The University of Manchester",
    info: "MSc Operations, Project and Supply Chain Management",
    date: "2025.8.3",
    category: "#服務心得",
    image: new URL("@/assets/images/Heidi Liang.png", import.meta.url).href,
  },
  {
    slug: "post-03",
    title: "Chien, University of Nottingham",
    info: "MSc Entrepreneurship, Innovation and Management",
    date: "2025.8.3",
    category: "#服務心得",
    image: new URL("@/assets/images/Chien.png", import.meta.url).href,
    extra: {
      收穫: "來英國讀書不只是接觸新知，還能認識不同的人，拓展眼界。",
      校園: "Jubilee Campus，離市中心20分鐘公車，校園有鴨子和極光。",
      課程: "必修 + 論文/商業報告 + 選修，主要以 essay 評分。",
      住宿: "市中心宿舍，交通便利，安全並能認識新朋友。",
      工作: "有商業報告課程接觸企業，學校提供就業講座與履歷修改。",
    },
  },
  {
    slug: "post-04",
    title: "Jessie, The University of Manchester",
    info: "MSc Finance",
    date: "2025.8.3",
    category: "#服務心得",
    image: new URL("@/assets/images/Jessie.png", import.meta.url).href,
  },
  {
    slug: "post-05",
    title: "Ann, University of Pennsylvania",
    info: "MSN, Adult Gerontology Acute Care Nurse Practitioner",
    date: "2025.8.3",
    category: "#留學故事⸺勇敢跳脫舒適圈：以前的我 vs 現在的我",
    image: new URL("@/assets/images/Ann.png", import.meta.url).href,
  },
  {
    slug: "post-06",
    title: "Dustin, Purdue University",
    info: "MS Chemical Engineering",
    date: "2025.05.31",
    category: "#留學故事⸺留學後的我變了",
    image: new URL("@/assets/images/Dustin.png", import.meta.url).href,
  },
  {
    slug: "post-07",
    title: "Bryant, Abbey College Cambridge",
    info: "GCSE",
    date: "2025.7.17",
    category: "#留學故事⸺我來英國留學後才知道的事",
    image: new URL("@/assets/images/Bryant.png", import.meta.url).href,
  },
  {
    slug: "post-08",
    title: "Vera Kuo, The University of Leeds",
    info: "MA Corporate Communications, Marketing and Public Relations",
    date: "2025.6.25",
    category: "#服務心得",
    image: new URL("@/assets/images/Vera Kuo.png", import.meta.url).href,
  },
  {
    slug: "post-09",
    title: "Johnny, UCLA",
    info: "MS Materials Science & Engineering",
    date: "2023.6.25",
    category: "#服務心得",
    image: new URL("@/assets/images/Johnny.png", import.meta.url).href,
  },
  {
    slug: "post-10",
    title: "Hank, The University of Edinburgh",
    info: "MSc Finance",
    date: "2023.8.17",
    category: "#服務心得",
    image: new URL("@/assets/images/Hank.png", import.meta.url).href,
  },
  {
    slug: "post-11",
    title: "匿名, King’s College London",
    info: "MSc Digital Marketing",
    date: "2024.4.30",
    category: "#服務心得",
    image: new URL("@/assets/images/KCL.png", import.meta.url).href,
  },
  {
    slug: "post-12",
    title: "Jacky, The University of Warwick Business School",
    info: "MSc Finance",
    date: "2023.5.20",
    category: "#服務心得",
    image: new URL("@/assets/images/Jacky.png", import.meta.url).href,
  },
]);

// ===== JSON-LD ItemList：由 posts 產生（提供搜尋引擎清單語意） =====
const itemListElements = computed(() =>
  posts.value.map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: `${siteUrl}/blog/posts/${p.slug}`,
    name: p.title
  }))
);

// ===== <head>：標題/描述/OG/Twitter/Canonical/hreflang + JSON-LD =====
useHead({
  title: '成功故事與專欄｜曜境 Excellent Future Education 留學服務經驗分享',
  meta: [
    {
      name: 'description',
      content: '學生成功故事、服務心得與實用專欄彙整。真實回饋、申請經驗與顧問觀點，幫你看見前往英美澳加留學的路與方法。'
    },
    { name: 'robots', content: 'index,follow,max-image-preview:large' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: '成功故事與專欄｜曜境 Excellent Future Education 留學服務經驗分享' },
    {
      property: 'og:description',
      content: '學生成功故事、服務心得與實用專欄彙整。真實回饋、申請經驗與顧問觀點，幫你看見前往英美澳加留學的路與方法。'
    },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: logoUrl },
    { property: 'og:locale', content: 'zh_TW' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '成功故事與專欄｜曜境 Excellent Future Education 留學服務經驗分享' },
    {
      name: 'twitter:description',
      content: '真實回饋與顧問專欄，帶你認識英美澳加留學申請路。'
    },
    { name: 'twitter:image', content: logoUrl }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'alternate', hreflang: 'zh-Hant-TW', href: pageUrl }
  ],
  script: [
    // CollectionPage + ItemList（整體清單）
    {
      type: 'application/ld+json',
      children: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: '成功故事與專欄',
        url: pageUrl,
        hasPart: {
          '@type': 'ItemList',
          itemListElement: itemListElements.value
        }
      })
    },
    // Breadcrumb（首頁 → 成功故事與專欄）
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首頁', item: siteUrl + '/' },
          { '@type': 'ListItem', position: 2, name: '成功故事與專欄', item: pageUrl }
        ]
      })
    }
  ]
})

// ===== 原本的篩選／分頁行為 =====
const DEFAULT_CAT = categories[0];

const filteredPosts = computed(() =>
  posts.value.filter((p) => p.category.includes(activeCategory.value) || activeCategory.value === '#總覽')
);

function postAlt(post) {
  return post?.title ? `${post.title} 封面` : '文章封面';
}

function goToPost(slug) {
  router.push(`/blog/posts/${slug}`);
}

const pageSize = 10;
const currentPage = ref(1);
const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / pageSize)
);
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredPosts.value.slice(start, start + pageSize);
});

// 切換分類時回到第一頁
function setCategory(cat) {
  activeCategory.value = cat;
  currentPage.value = 1;
}

const blogPage = ref(null);

// 跳到指定頁
function goToPage(page) {
  currentPage.value = page;
  scrollToTop();
}

// 上一頁
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
  scrollToTop();
}

// 下一頁
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
  scrollToTop();
}

// 捲動到分類 tabs
function scrollToTop() {
  if (blogPage.value) {
    blogPage.value.scrollIntoView({ behavior: "smooth" });
  }
}

function syncFromQuery() {
  // cat 可以是像 %23留學故事（# 會被編碼），Vue Router 會自動解碼為 "#留學故事"
  const catQ = route.query?.cat?.toString() || "#總覽";
  activeCategory.value = categories.find((p) => catQ.includes(p)) || DEFAULT_CAT
}

const HEADER_OFFSET = 80

function scrollToTabs(smooth = true) {
  if (!blogPage.value) return
  const rect = blogPage.value.getBoundingClientRect()
  const y = rect.top + window.pageYOffset - HEADER_OFFSET
  window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' })
}

onMounted(async () => {
  syncFromQuery()
  if (route.query.cat) {
    await nextTick()
    requestAnimationFrame(() => scrollToTabs(true))
  }
})

// 支援使用者按瀏覽器返回/前進：監聽 query 變化 → 同步到狀態
watch(
  () => route.query,
  () => syncFromQuery()
);
</script>

<style scoped lang="scss">
/* 無障礙/SEO用的隱藏文字：不佔空間、不改版面 */
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

.photo {
  height: calc(100vh - 130px);
  display: flex;
  padding-bottom: 3rem;
  background: url("@/assets/images/blog.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.blog-page {
  padding: 2rem;
  font-family: sans-serif;
}

.content {
  text-align: center;
}
.paragraph {
  text-align: center;
  font-size: 26px;
  font-weight: 900;
}
.description {
  line-height: 3;
}

.category-tabs {
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
}

.category-tabs div {
  padding: 1.75rem 1.5rem;
  font-size: 1rem;
  color: #333;
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #fff;
  border-left: 1px solid #ccc;
  user-select: none;
}

/* 第一個左邊不需要線 */
.category-tabs div:first-child {
  border-left: none;
}
.category-tabs div:last-child {
  border-right: none;
}

/* hover 狀態（只有不是 active 時才變色）*/
.category-tabs div:hover:not(.active) {
  background-color: #043d78;
  color: #fff;
}

/* 點擊後 active 狀態 */
.category-tabs div.active {
  background-color: #043d78;
  color: #fff;
  font-weight: bold;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  gap: 1rem;
  max-width: 1300px;
  margin: auto;
}

.blog-card {
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  margin: 1rem;
}

.blog-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
}

.card-content {
  text-align: center;
}

.date {
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
}
.tag {
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
}

.title, .info {
  font-size: 1rem;
  margin: 0;
}

.pagination {
  /* ===== Pagination (含省略號) ===== */
  .pager {
    --gap-nav: clamp(16px, 3vw, 40px);
    --gap-pages: clamp(10px, 2vw, 24px);
    --color-text: #111;
    --color-muted: #b8b8b8;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-nav);
    padding: 16px 8px;
    font-size: 16px;
    line-height: 1;
    user-select: none;
  }

  .pager__nav,
  .pager__page {
    color: var(--color-text);
    text-decoration: none;
    outline: none;
  }

  .pager__nav:hover,
  .pager__page:hover {
    text-decoration: underline;
  }

  .pager__pages {
    display: flex;
    align-items: center;
    gap: var(--gap-pages);
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* 當前頁 */
  .pager__page.is-current {
    font-weight: 700;
    text-underline-offset: 3px;
  }

  /* 省略號 */
  .pager__ellipsis {
    color: var(--color-muted);
    pointer-events: none;
    user-select: none;
  }

  /* disabled 範例（放在需要時） */
  .is-disabled {
    color: var(--color-muted);
    pointer-events: none;
    text-decoration: none;
  }

  /* 小螢幕調整 */
  @media (max-width: 480px) {
    .pager {
      gap: 20px;
    }
    .pager__pages {
      gap: 14px;
    }
  }
}

@media (min-width: 1025px) {
  .cards-grid {
    padding: 0 5rem;
  }
}

@media (max-width: 640px) {
  .photo {
    height: 50vh;
  }
  .cards-grid {
    grid-template-columns: 1fr;
  }
  .category-tabs {
    flex-direction: column;
    align-items: stretch;
  }

  .category-tabs div {
    border-top: 1px solid #ccc;
    border-left: none;
    border-right: none;
  }

  .category-tabs div:first-child {
    border-top: none;
  }
  .slide-media {
    margin: 10px !important;
  }
}
</style>
