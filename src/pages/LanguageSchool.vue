<template>
  <section class="leaf-section">
    <div class="leaf-container">
      <!-- 左側文字 -->
      <div class="leaf-content">
        <div class="leaf-header">
          <h2>在台灣學了多年英文，卻還是不敢開口說？</h2>
          <p class="summary">
            語言學校提供沉浸式學習環境，讓你真正用英文溝通，從生活中學習。
            無論你是學生、上班族，還是準備出國生活／工作的你，都能找到最適合你的主題式課程。
            語言，不只是工具，更是走向世界的橋樑。
          </p>
        </div>

        <div class="leaf-columns">
          <div class="col">
            <h4>（01）主題式課程</h4>
            <p>
              依照學習目的（學術、商務、生活會話）彈性選擇內容與進度，量身打造你的英文學習地圖。
            </p>
          </div>
          <div class="col">
            <h4>（02）沉浸式體驗</h4>
            <p>
              課程結合當地文化、實境會話，讓你不再只是「學語言」，而是用語言生活、思考、交朋友。
            </p>
          </div>
        </div>
      </div>

      <!-- 右側圖片 -->
      <div class="leaf-image">
        <img src="@/assets/images/language-school.jpg" alt="語言學校介紹" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const text = ref("模板");
</script>

<style lang="scss" scoped>
.leaf-section {
  background: #eeece9;
  padding: 4rem 1.5rem;
}

.leaf-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #ddd;
  background: #fff;
}

.leaf-content {
  flex: 1;
  padding: 2rem;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fff;
  border: 1px solid #e5e5e5; // << 淺灰邊框
}

.leaf-header {
  margin-bottom: 2rem;

  .label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #111;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .summary {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
  }
}

.leaf-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid #ddd;

  .col {
    flex: 1;
    padding: 1.5rem 2rem;
    min-width: 200px;

    // 中間分隔線
    &:not(:first-child) {
      border-left: 1px solid #ddd;
    }
    h4 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #333;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: #666;
    }
  }
}

@media (max-width: 768px) {
  .leaf-columns {
    flex-direction: column;

    .col {
      &:first-child {
        border-bottom: 1px solid #ddd;
      }
      &:not(:first-child) {
        border-left: none;
      }
    }
  }
  .leaf-section {
    padding: 30px 0;
  }
}

.leaf-image {
  flex: 1;
  min-width: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

@media (max-width: 768px) {
  .leaf-container {
    flex-direction: column;
  }

  .leaf-columns {
    flex-direction: column;
  }
}
</style>
