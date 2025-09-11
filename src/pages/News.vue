<template>
  <h2 class="titleNews">最新消息</h2>
  <section class="news">
    <section class="news-list" >
      <ul role="list">
        <li v-for="(item, i) in pagedNews" :key="i" class="news-item">
          <a :href="`/news/${item.link || '#'}`" class="news-link">
            <div class="thumb-wrap" :aria-label="item.title">
              <template v-if="item.imageUrl">
                <img
                  class="thumb"
                  :src="getImageUrl(item.imageUrl)"
                  :alt="item.imageAlt || item.title"
                  loading="lazy"
                  decoding="async"
                />
              </template>
              <template v-else>
                <span class="no-image">Information</span>
              </template>
            </div>
  
            <div class="meta">
              <time class="date" :datetime="isoDate(item.date)">
                {{ displayDate(item.date) }}
              </time>
              <h3 class="title">
                {{ item.title }}
              </h3>
            </div>
          </a>
  
          <!-- 只有本頁最後一項不顯示分隔線（不改你的 CSS，直接用 v-if 控制） -->
          <div class="divider" aria-hidden="true" v-if="i !== pagedNews.length - 1"></div>
        </li>
      </ul>
  
      <!-- 分頁列：只有多於一頁才顯示；不動你的 CSS，僅新增素按鈕 -->
      <nav v-if="totalPages > 1" class="pagination" aria-label="pagination">
        <button type="button" @click="prevPage" :disabled="currentPage === 1">← Prev</button>
  
        <button
          v-for="chip in pagesToShow"
          :key="chip.key"
          type="button"
          :disabled="chip.type === 'ellipsis'"
          :aria-current="chip.page === currentPage ? 'page' : undefined"
          @click="chip.type === 'page' && setPage(chip.page!)"
        >
          {{ chip.label }}
        </button>
  
        <button type="button" @click="nextPage" :disabled="currentPage === totalPages">Next →</button>
      </nav>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

type NewsItem = {
  date: string | Date;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
};

// 直接在這個頁面放資料，不外部呼叫
const news: NewsItem[] = [
  {
    date: "2025-09-02",
    title: "托福將於 2026 年 1 月起正式改版",
    imageUrl: "news3.png",
    link: "toefl-2026-revamp",
  },
  {
    date: "2025-09-02",
    title: "加拿大留學審核趨嚴，申請人該如何因應？",
    imageUrl: "news2.jpg",
    link: "canada-study-permit-2025",
  },
  {
    date: "2025-05-31",
    title: "慶祝曜境官網全新升級上線",
    imageUrl: "news1.png", // 故意留空 → 顯示 Information 方塊
    link: "site-launch",
  },
];

// ====== 分頁核心 ======
const pageSize = ref(4);         // 每頁幾筆，想改就改這裡
const currentPage = ref(1);      // 目前頁碼（1-based）

const totalPages = computed(() =>
  Math.max(1, Math.ceil(news.length / pageSize.value))
);

const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return news.slice(start, end);
});

function setPage(p: number) {
  currentPage.value = Math.min(Math.max(1, p), totalPages.value);
}
function nextPage() {
  setPage(currentPage.value + 1);
}
function prevPage() {
  setPage(currentPage.value - 1);
}

function getImageUrl(file: string) {
  return new URL(`../assets/images/${file}`, import.meta.url).href;
}

// 產生頁碼 + 省略號（最多 5 顆按鈕）
type PageChip =
  | { type: 'page'; page: number; label: string | number; key: string }
  | { type: 'ellipsis'; label: string; key: string; page?: undefined };

const pagesToShow = computed<PageChip[]>(() => {
  const total = totalPages.value;
  const cur = currentPage.value;
  const maxButtons = 5;

  if (total <= maxButtons) {
    return Array.from({ length: total }, (_, i) => ({
      type: 'page',
      page: i + 1,
      label: i + 1,
      key: `p-${i + 1}`,
    }));
  }

  const chips: PageChip[] = [];
  const addPage = (p: number) => chips.push({ type: 'page', page: p, label: p, key: `p-${p}` });
  const addEllipsis = (k: string) => chips.push({ type: 'ellipsis', label: '…', key: k });

  addPage(1);

  const windowSize = 3;
  let start = Math.max(2, cur - 1);
  let end = Math.min(total - 1, cur + 1);

  while (end - start + 1 < windowSize) {
    if (start > 2) start--;
    else if (end < total - 1) end++;
    else break;
  }

  if (start > 2) addEllipsis('e-left');
  for (let p = start; p <= end; p++) addPage(p);
  if (end < total - 1) addEllipsis('e-right');

  addPage(total);
  return chips;
});

// 保險：當資料量變少時，避免目前頁碼超出範圍
watch(totalPages, (t) => {
  if (currentPage.value > t) currentPage.value = t;
});

// ====== 日期工具 ======
const isoDate = (d: string | Date) => {
  try {
    return new Date(d).toISOString().split("T")[0];
  } catch {
    return "";
  }
};

const displayDate = (d: string | Date) => {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
};
</script>

<style scoped lang="scss">
main{
  background-color: #eeece9;
}
.titleNews{
  margin: 60px auto 60px ;
  max-width: 1200px;
  font-size: 30px;
}
.news-list {
  margin: auto;
  max-width: 1200px;
  padding: clamp(12px, 3vw, 24px);
  min-height: 60vh; 
  display: flex;
  flex-direction: column;
  border: #d9d3cc 1px solid;
}
.news-list > .pagination {
  margin-top: auto;                
  display: flex;
  gap: 8px;
  justify-content: center;
  padding-top: 12px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
}
.news{
  background-color: #eeece9;
  padding-bottom: 20px;
}
.news-item {
  .news-link {
    display: grid;
    grid-template-columns: 240px 1fr; /* 左圖右文 */
    gap: clamp(12px, 2.2vw, 24px);
    align-items: center;
    padding: clamp(12px, 2.4vw, 20px) clamp(12px, 2.8vw, 28px);
    text-decoration: none;
    color: #3a372f;
    &:active {
      transform: translateY(1px);
    }

    .divider {
      height: 1px;
      background: #9a948c;
      margin-left: clamp(12px, 2.8vw, 28px);
    }

    &:last-child .divider {
      display: none; /* 最後一個 li 隱藏分隔線 */
    }
  }

  .thumb-wrap {
    width: 100%;
    aspect-ratio: 16/10;
    background: var(--thumb-bg);
    overflow: hidden;
    display: grid;
    place-items: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  }

  .thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .no-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #9a948c;
    background: #fff;
  }

  .meta {
    display: grid;
    align-content: center;
    align-self: baseline;
    gap: 24px;
    min-width: 0;
  }

  .date {
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.06em;
    color: #9a948c;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.6;
    margin: 0;
    color: #3a372f;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 最多兩行 */
    -webkit-box-orient: vertical;
  }

  .divider {
    height: 1px;
    background:  #d9d3cc;
    margin-left: clamp(12px, 2.8vw, 28px);
  }

  &:last-child .divider {
    display: none;
  }
}

/* 手機直式 */
@media (max-width: 768px) {
  .news-item .news-link {
    grid-template-columns: 1fr;
    align-items: start;
  }
  .news-item .thumb-wrap {
    aspect-ratio: 16/9;
  }
}
</style>