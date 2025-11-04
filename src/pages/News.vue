<template>
  <h1 class="sr-only">最新消息｜曜境 Excellent Future Education</h1>

  <h2 class="titleNews">最新消息</h2>
  <section class="news">
    <section class="news-list">
      <ul role="list">
        <li v-for="(item, i) in pagedNews" :key="i" class="news-item">
          <a
            :href="`/news/${item.link || '#'}`"
            class="news-link"
            :aria-label="item.title"
          >
            <div class="thumb-wrap">
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

          <!-- 只有本頁最後一項不顯示分隔線 -->
          <div
            class="divider"
            aria-hidden="true"
            v-if="i !== pagedNews.length - 1"
          ></div>
        </li>
      </ul>

      <!-- 分頁列：只有多於一頁才顯示 -->
      <nav v-if="totalPages > 1" class="pagination" aria-label="pagination">
        <button type="button" @click="prevPage" :disabled="currentPage === 1">
          ← Prev
        </button>

        <button
          v-for="chip in pagesToShow"
          :key="chip.key"
          type="button"
          :disabled="chip.type === 'ellipsis'"
          :aria-current="chip.page === currentPage ? 'page' : undefined"
          @click="chip.type === 'page' && setPage(chip.page)"
        >
          {{ chip.label }}
        </button>

        <button
          type="button"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next →
        </button>
      </nav>
    </section>
  </section>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '最新消息｜曜境 Excellent Future Education',
  meta: [
    { name: 'description', content: '曜境最新公告、申請趨勢與留學資訊整理。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: '最新消息｜曜境 Excellent Future Education' },
    { property: 'og:description', content: '掌握留學最新趨勢與曜境公告。' }
  ],
  link: [{ rel: 'canonical', href: 'https://theyaojing.org/news' }]
})

// ====== 資料（可直接在此維護） ======
const news = [
  {
    date: '2025-10-01',
    title: '慶祝曜境官網全新升級上線',
    imageUrl: 'news1.png', // 留空 → 顯示 Information 方塊
    link: 'site-launch'
  },
  {
    date: '2025-09-17',
    title: '最新 QS Global MBA Rankings 2026 出爐',
    imageUrl: 'news4.png', // 留空 → 顯示 Information 方塊
    link: 'QS-Ranking'
  },
  {
    date: '2025-09-02',
    title: '托福將於 2026 年 1 月起正式改版',
    imageUrl: 'news3.png',
    link: 'toefl-2026-revamp'
  },
  {
    date: '2025-09-02',
    title: '加拿大留學審核趨嚴，申請人該如何因應？',
    imageUrl: 'news2.jpg',
    link: 'canada-study-permit-2025'
  }
]

// ====== 分頁核心 ======
const pageSize = ref(4)
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(news.length / pageSize.value))
)

const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return news.slice(start, end)
})

function setPage(p) {
  const page = Number(p) || 1
  currentPage.value = Math.min(Math.max(1, page), totalPages.value)
}
function nextPage() {
  setPage(currentPage.value + 1)
}
function prevPage() {
  setPage(currentPage.value - 1)
}

// 動態解析圖片路徑（相對於此檔案）
function getImageUrl(file) {
  if (!file) return ''
  // 支援外部連結或 public 目錄絕對路徑
  if (/^https?:\/\//i.test(file) || file.startsWith('/')) return file
  // Vite 友善：以目前檔案為基準解析到 assets/images
  return new URL(`../assets/images/${file}`, import.meta.url).href
}

// 產生頁碼 + 省略號（最多 5 顆）
const pagesToShow = computed(() => {
  const total = totalPages.value
  const cur = currentPage.value
  const maxButtons = 5

  if (total <= maxButtons) {
    return Array.from({ length: total }, (_, i) => ({
      type: 'page',
      page: i + 1,
      label: i + 1,
      key: `p-${i + 1}`
    }))
  }

  const chips = []
  const addPage = (p) => chips.push({ type: 'page', page: p, label: p, key: `p-${p}` })
  const addEllipsis = (k) => chips.push({ type: 'ellipsis', label: '…', key: k })

  addPage(1)

  const windowSize = 3
  let start = Math.max(2, cur - 1)
  let end = Math.min(total - 1, cur + 1)

  while (end - start + 1 < windowSize) {
    if (start > 2) start--
    else if (end < total - 1) end++
    else break
  }

  if (start > 2) addEllipsis('e-left')
  for (let p = start; p <= end; p++) addPage(p)
  if (end < total - 1) addEllipsis('e-right')

  addPage(total)
  return chips
})

// 資料量變動時避免頁碼越界
watch(totalPages, (t) => {
  if (currentPage.value > t) currentPage.value = t
})

// ====== 日期工具 ======
const isoDate = (d) => {
  try {
    return new Date(d).toISOString().split('T')[0]
  } catch {
    return ''
  }
}
const displayDate = (d) => {
  const dt = new Date(d)
  const y = dt.getFullYear()
  const m = String(dt.getMonth() + 1).padStart(2, '0')
  const day = String(dt.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}
</script>
<style scoped lang="scss">
/* 僅供 SEO/可及性：不影響視覺 */
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

main {
  background-color: #eeece9;
}
.titleNews {
  margin: 60px auto 60px;
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
.news {
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
    background: #fff;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    display: grid;
    place-items: center;
  }

  .thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    background: #d9d3cc;
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
