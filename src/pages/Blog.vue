<template>
  <div class="hero-section">
    <div class="photo">
      <img src="@/assets/images/blog.jpg" alt="blog" />
    </div>
    <div class="content">
      <p class="paragraph">每段留學路都是一場獨特的旅程</p>
      <p class="description">
        這裡,我們集結了學生們的真實回饋、親身經歷,
        <br />
        以及顧問團隊撰寫的實用文章。
        <br />
        也許你會在某一段故事中,看見此刻的自己。
        <br />
        感受到「你不是一個人」的陪伴力量。
      </p>
    </div>
  </div>
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

  <div class="blog-page">

    <!-- 卡片區塊 -->
    <div class="cards-grid">
      <div
        v-for="post in filteredPosts"
        :key="post.slug"
        class="blog-card"
        @click="goToPost(post.slug)"
      >
        <img :src="post.image" alt="cover" />
        <div class="card-content">
          <p class="date">{{ post.date }}</p>
          <p class="tag">{{ post.category }}</p>
          <p class="title">{{ post.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = ["#總覽", "#學生見證", "#留學故事", "#實用專欄"];

const activeCategory = ref(categories[0]);

import sharedImg from "@/assets/images/shareblog01.jpg";

// 寫死的文章資料（僅作為卡片模板）
const posts = ref([
  {
    slug: "post-01",
    title: "Lu同學,Purdue University",
    date: "2025.05.31",
    category: "#總覽",
    image: sharedImg,
  },
  {
    slug: "post-01",
    title: "Lu同學,Purdue University",
    date: "2025.05.31",
    category: "#總覽",
    image: sharedImg,
  },
  {
    slug: "post-01",
    title: "Lu同學,Purdue University",
    date: "2025.05.31",
    category: "#總覽",
    image: sharedImg,
  },
  {
    slug: "post-01",
    title: "Lu同學,Purdue University",
    date: "2025.05.31",
    category: "#總覽",
    image: sharedImg,
  },
  {
    slug: "post-02",
    title: "Lu同學, Purdue University",
    date: "2025.05.31",
    category: "#總覽",
    image: sharedImg,
  },
  {
    slug: "post-03",
    title: "Lu同學,Purdue University",
    date: "2025.05.31",
    category: "#學生見證",
    image: sharedImg,
  },
  {
    slug: "post-04",
    title: "Lu同學,Purdue University",
    date: "YYYY.MM.DD",
    category: "#實用專欄",
    image: sharedImg,
  },
  {
    slug: "post-05",
    title: "Lu同學,Purdue University",
    date: "YYYY.MM.DD",
    category: "#實用專欄",
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
.content {
  text-align: center;
}
.paragraph{
  text-align: center;
  font-size: 26px;
  font-weight: 900;
}
.description{
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
}

.blog-card {
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  margin: 1rem;
}


.blog-card  img {
  width: 100%;
  height: auto;
}

.card-content {
  text-align: center;
}

.date  {
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
}
.tag{
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
}

.title {
  font-size: 1rem;
  margin: 0;
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
    border-left: none;
    border-right: none;
  }

  .category-tabs div:first-child {
    border-top: none;
  }
}
</style>
