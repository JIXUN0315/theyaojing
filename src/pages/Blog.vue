<template>
  <div class="blog-page">
    <!-- 分類區塊 -->
    <nav class="category-tabs">
      <div
        v-for="cat in categories"
        :key="cat"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </div>
    </nav>

    <!-- 卡片區塊 -->
    <div class="cards-grid">
      <div
        v-for="post in filteredPosts"
        :key="post.slug"
        class="card"
        @click="goToPost(post.slug)"
      >
        <img :src="post.image" alt="cover" />
        <div class="card-content">
          <p class="date">{{ post.date }}</p>
          <p class="tag">{{ post.category }}</p>
          <h3 class="title">{{ post.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = [
  "#留學後才知道的事",
  "#留學後的我變了",
  "#國外職業分享",
  "#勇敢跳脫舒適圈：以前的我 vs 現在的我",
  "#學生自選主題",
];

const activeCategory = ref(categories[0]);

import sharedImg from '@/assets/images/shareblog01.jpg'


// 寫死的文章資料（僅作為卡片模板）
const posts = ref([
  {
    slug: "post-01",
    title: "（文章標題）",
    date: "2025.05.31",
    category: "#留學後才知道的事",
    image: sharedImg,
  },
  {
    slug: "post-01",
    title: "（文章標題）",
    date: "2025.05.31",
    category: "#留學後才知道的事",
    image: sharedImg,
  },
  {
    slug: "post-01",
    title: "（文章標題）",
    date: "2025.05.31",
    category: "#留學後才知道的事",
    image: sharedImg,
  },
  {
    slug: "post-01",
    title: "（文章標題）",
    date: "2025.05.31",
    category: "#留學後才知道的事",
    image: sharedImg,
  },
  {
    slug: "post-02",
    title: "Lu同學, Purdue University",
    date: "2025.05.31",
    category: "#留學後的我變了",
    image: sharedImg,
  },
  {
    slug: "post-03",
    title: "（文章標題）",
    date: "2025.05.31",
    category: "#國外職業分享",
    image: sharedImg,
  },
  {
    slug: "post-04",
    title: "（文章標題）",
    date: "YYYY.MM.DD",
    category: "#勇敢跳脫舒適圈：以前的我 vs 現在的我",
    image: sharedImg,
  },
  {
    slug: "post-05",
    title: "（文章標題）",
    date: "YYYY.MM.DD",
    category: "#學生自選主題",
    image: sharedImg,
  },
]);

const filteredPosts = computed(() =>
  posts.value.filter((p) => p.category === activeCategory.value)
);

function goToPost(slug) {
  router.push(`/blog/posts/${slug}`);
}
</script>

<style scoped>
.blog-page {
  padding: 2rem;
  font-family: sans-serif;
}
.category-tabs {
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
}

.category-tabs div {
  padding: 1.75rem 1.5rem;
  font-size: 1rem;
  color: #333;
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
  gap: 1.2rem;
}

.card {
  background: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 1rem;
}

.date {
  font-size: 0.85rem;
  color: #888;
}

.tag {
  font-size: 0.75rem;
  color: #aaa;
}

.title {
  margin-top: 0.5rem;
  font-size: 1.1rem;
}

@media (min-width: 1025px) {
  .cards-grid {
    padding: 0 5rem;
  }
}

@media (max-width: 640px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }
    .category-tabs {
        flex-direction: column;
        align-items: stretch;
    }

    .category-tabs div {
        border-top: 1px solid #ccc;
        border-left: none ;
        border-right: none;
    }

    .category-tabs div:first-child {
        border-top: none;
    }
  
}

</style>
