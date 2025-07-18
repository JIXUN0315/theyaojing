<template>
    <div class="post-page">
        <!-- 上方欄位（標題/分類/圖片） -->
        <div class="back-column">
            <router-link to="/blog" class="back-link">← Column</router-link>
        </div>
      <section class="post-hero">
        <div class="post-meta">
          <p class="date">{{ post.date }}</p>
          <h1 class="title">{{ post.title }}</h1>
          <router-link :to="'/blog?cat=' + post.category" class="category">{{ post.category }}</router-link>
        </div>
        <div class="post-cover">
          <img :src="post.image" :alt="post.title" />
        </div>
      </section>
  
    <hr>
      <!-- 實際內文區（你可以再接續下面） -->
      <section class="post-body">
        <p>
            會有出國深造的想法，除了來自幼時印象中每每看到電視上美國校園的宏偉、附近環境的清幽外，以及在台灣工作時短期出差赴美的所見所及，加上當時全球新冠疫情逐漸趨緩，於是選擇踏上不少人也走過的留學之路。
        </p>

        <p>
            經過留學考試的洗禮後，換來學校官方的錄取信，緊接著各種申請文件的一來一往，這些在代辦的積極協助下，很順利地等到上飛機前往美國的那天。
        </p>

        <p>
            於普度大學化學工程學系碩士的一年學程中，實際看到了校內其他國際學生的努力、老師們各種有別於家鄉的創新教學風格、軟硬體設施的多樣化、周邊廣袤綠地環境的環繞等等，徜徉於其中，使自己在短短一年時間得以大量吸收異國文化、且進一步反思自身的不足。要不改變，真的很難。
        </p>

        <p>
            首先是盡可能地讓自己大多數時間與非同鄉人互動，才有更多可能練習表達的機會。如與異國室友同住、課堂有分組也盡量選擇外國組員；再者，參與校內外有興趣的社團或能夠深度體驗當地文化的活動；行有餘力，課業能兼顧下，找份校內打工，去體驗外國職場與家鄉的不一樣，以利未來校外實習或工作較能提前適應。
        </p>

        <p>
            互動中常會有語言上隔閡、想法上衝突，過程中有孤獨、有障礙，但最後都有克服的可能，會有預想不到的收穫，此即是學習的機會，留學的價值所在。
        </p>

        <p>
            雖說在外遇到同鄉人很是溫暖，唯其文化、語言、習慣早已了然於胸，若還是將留學時光大部分獻給已熟悉的人事物，拙見以為甚是可惜，畢竟千里迢迢遠赴他鄉的初衷，應該有包含見識當地文化、結交異國朋友等選項。
        </p>

        <p>
            很多主流或自身既有想法或偏見，會在下飛機的那一刻起瞬間改變，正是因為語言風俗的不同，加上要在陌生許多的環境下生活超過一般觀光客所能居留的時間，最後自己會發展一套獨有的應對方式。
        </p>

        <p>
            時間猶如不停歇的旅人，迄今已距離畢業近一年，倘若當初未能把握疫後難得時機，抑或是收到錄取信後反因各種懷疑而躊躇不前，最終未能實現拓展視野，訓練自己的機會，或許現在也只能由網路媒體或口耳相傳來吸收片面資訊，乾羨慕別人的故事而已。
        </p>
        </section>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import sharedImg from '@/assets/images/shareblog01.jpg'
  
  const route = useRoute()
  const slug = route.params.slug
  
  // 模擬文章資料（你之後可以用 props 或 API 帶入）
  const post = {
    slug,
    date: '2025.05.31',
    title: 'Lu同學, Purdue University',
    category: '#留學後的我變了',
    image: sharedImg
  }
  </script>
  
  <style scoped>
  .back-column{
    padding: 2rem 1.5rem;
  }
  .post-page {
    background-color: #f9f8f6;
    padding: 2rem 1.5rem;
    font-family: "Noto Sans JP", sans-serif;
  }
  
  .post-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 3rem auto;
  }
  
  .post-meta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .back-link {
    font-size: 0.9rem;
    color: #888;
    text-decoration: none;
  }
  
  .date {
    font-size: 0.85rem;
    color: #888;
  }
  
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.4;
    color: #222;
  }
  
  .category {
    font-size: 0.9rem;
    text-decoration: underline;
    color: #555;
  }
  
  .post-cover img {
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
    .post-body {
    max-width: 720px;
    margin: 2rem auto;
    padding: 0 1rem;
    font-size: 1rem;
    line-height: 1.8;
    color: #333;
    }

    .post-body p + p {
    margin-top: 1.2rem;
    }
  
  /* RWD 手機垂直排列 */
  @media (max-width: 768px) {
    .post-hero {
        grid-template-columns: 1fr;
        flex-direction: column-reverse; 
        display: flex;
        gap: 2rem;
        max-width: 1200px;
        margin: 2rem auto;

    }

  }


</style>