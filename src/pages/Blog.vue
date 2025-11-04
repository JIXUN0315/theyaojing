<template>
  <div class="hero-section">
    <div class="photo"></div>
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
  <nav class="category-tabs" ref="blogPage">
    <div
      v-for="cat in categories"
      :key="cat"
      :class="{ active: activeCategory === cat }"
      @click="setCategory(cat)"
    >
      {{ cat }}
    </div>
  </nav>

  <div class="blog-page">
    <!-- 卡片區塊 -->
    <div class="cards-grid">
      <div
        v-for="post in paginatedPosts"
        :key="post.slug"
        class="blog-card"
        @click="goToPost(post.slug)"
      >
        <img :src="post.image" alt="cover" />
        <!-- <div class="card-content">
          <p class="date">{{ post.date }}</p>
          <p class="tag">{{ post.category }}</p>
          <p class="title">{{ post.title }}</p>
          <p class="info" v-if="post.info">{{ post.info }}</p>
        </div> -->
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
const route = useRoute()
const categories = ["#總覽", "#留學故事", "#服務心得", "#實用專欄"];

const activeCategory = ref(categories[0]);

import sharedImg from "@/assets/images/shareblog01.jpg";

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

const DEFAULT_CAT = categories[0];

const filteredPosts = computed(() =>
  posts.value.filter((p) => p.category.includes(activeCategory.value) || activeCategory.value === '#總覽')
);

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
// 切換分類時要回到第一頁
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

// ⭐ 捲動到最上方
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
    // 若上方有圖片或輪播需要高度計算完成，可多等一個 requestAnimationFrame
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
  .photo{
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
  .slide-media{
    margin: 10px !important;
  }
}
</style>
