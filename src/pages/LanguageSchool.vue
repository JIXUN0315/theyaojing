<template>
  <!-- ① Hero 圖 -->
  <div class="hero-wrap">
    <img
      class="hero"
      src="@/assets/images/language-hero.jpg"
      alt="Language Programs"
    />
  </div>

  <!-- ② 兩列四色交錯 -->
  <div class="grid">
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
    <div class="cell photo bg-466a8b">
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
    <div class="cell photo bg-ede2d7 dark">
      <div class="photo-frame">
        <img src="@/assets/images/language-school.jpg" alt="語言學校" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Hero 圖、語言學校圖、遊學團圖
// 請放到 src/assets/images/ 底下：language-hero.jpg, language-school.jpg, summer-camp.jpg
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

/* Grid */
.grid {
  max-width: 1200px;
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
  padding: clamp(20px, 3vw, 36px);
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

/* CTA */
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
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
}
</style>
