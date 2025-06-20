<template>
  <!-- Hero Banner -->
  <section class="hero">
    <h1 class="hero-title">關於 YAOJING</h1>
  </section>

  <!-- 品牌理念 -->
  <section class="content">
    <p class="paragraph">
      曜境留遊學致力於為每一位懷抱留遊學夢想的學生，提供真誠、安心、用心的留學諮詢服務。
      我們了解：對大多數人來說，留學代表未知、焦慮與挑戰。這就是我們存在的理由——
      讓複雜的申請流程變得清楚簡單，讓你在每一個選擇上都有專業陪伴，走得穩、走得對。
    </p>
  </section>

  <!-- <img src="@/assets/images/about-us-logo.png" alt="關於我們 Logo" class="full-width-image" /> -->

  <!-- 品牌理念補充 -->
  <section class="content">
    <p class="section-title">品牌名稱與Logo</p>
    <p class="paragraph">
      「曜是光，境是方向，我們願成為你留學路上的一盞明燈，照亮你的前程。」
      Logo設計結合學士帽及提供指引的箭頭。(那個老鼠純粹是老闆喜歡)
    </p>
  </section>

  <section class="grid-section">
    <div class="grid-container">
      <div class="grid-vertical">
        <div class="grid-row">
          <!-- <img src="@/assets/images/myworry.jpg" alt="worry"> -->
          <div class="caption-block">
            <p class="caption-title">你有以下煩惱嗎 <br>——我們來幫你搞定一切。</p>
            <ul>
              <li>我不知道我能申請到什麼學校</li>
              <li>什麼時候該準備? 到底要準備什麼?</li>
              <li>成績太差、英文也不好，我能出國留學嗎</li>
              <li>我不知道怎麼寫(懶得寫)讀書計畫，幫QQ</li>
              <li>備審資料我都寫好了，但感覺只有87分</li>
            </ul>
          </div>
        </div>
        <div class="grid-row">
          <!-- <img src="@/assets/images/mything.png" alt="mything"> -->
          <div class="caption-block">
            <p class="caption-title">認真對待你對我們的信任</p>
            <p class="paragraph">
              與我們合作的學生，正是因為信任我們的專業與服務。我們始終秉持「你的事，就是我的事」的態度，全心全意地陪伴每一位學生，細心處理他們的留學大小事
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style>
.hero {
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-size: cover;
  background-position: center;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
}

.content {
  max-width: 80ch;
  margin: 3rem auto;
  padding: 1rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.paragraph {
  color: #4a4a4a;
  line-height: 1.8;
  text-align: left;
}

.full-width-image {
  width: 100%;
  height: auto;
}

.grid-section {
  padding: 3rem 1rem;
}

.grid-container {
  max-width: 90rem;
  margin: 0 auto;
}

.grid-vertical {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.grid-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.grid-row img {
  width: 50%;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.caption-block {
  width: 50%;
}

.caption-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.caption-text {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 768px) {
  .grid-row {
    flex-direction: column;
  }

  .grid-row img,
  .caption-block {
    width: 100%;
  }

  .caption-block {
    text-align: center;
  }
}
</style>