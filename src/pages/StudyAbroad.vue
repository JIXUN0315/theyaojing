<template>
  <div class="study-abroad-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content">
        <h1>為什麼出國留學，是一場值得的投資？</h1>
        <p class="intro">
          網路上的資訊一抓一大把，你可以自己查資料，也可以讓我們幫你整理重點、節省時間。
        </p>
        <div class="divider"></div>
        <p class="note">
          這一頁不是要幫你上課、也不是要堆冷冰冰的資訊，而是希望你快速掌握兩件事：
        </p>
        <ul class="key-points">
          <li><span>1.</span> 為什麼留學值得投資？</li>
          <li><span>2.</span> 我們能幫你做到什麼？</li>
        </ul>
      </div>
    </section>

    <div class="study-abroad-content">
      <!-- Why Study Abroad -->
      <section class="why">
        <h2>為什麼要出國留學？</h2>
        <div class="card-grid">
          <div class="card">
            <h3>
              全面提升競爭力：<br />
              學術 × 英文 × 職涯
            </h3>
            <p>
              沉浸在國際學術環境中，強化語言能力，掌握全球職場所需的軟硬實力，為未來升學與就業打下堅實基礎。阿，對了，不光是找一份待遇更好的工作，也許你就是下一個張忠謀。
            </p>
          </div>
          <div class="card">
            <h3>
              拓展視野，拓展人脈，自我成長<br />
              （跳躍式）
            </h3>
            <p>
              跨出舒適圈，在多元文化中學習、交流，建立國際人脈，也促使你從不同角度重新認識自己，實現跳躍式的自我成長。
            </p>
          </div>
          <div class="card">
            <h3>讓自己變成有故事的人</h3>
            <p>
              出國留學是一段精彩的人生旅程，讓你累積滿滿的口袋故事——無論是文化衝擊、挑戰突破還是意外收穫，都會讓你成為聚會中最有故事的人。
            </p>
          </div>
          <div class="card">
            <h3>
              隱藏價值（但其實超重要）：<br />
              重新認識自己，釐清方向
            </h3>
            <p>
              留學申請的準備過程，不只是填表、寫文書、考試而已。這是一段深入思考自己是誰、想成為什麼樣的人的旅程。
            </p>
          </div>
        </div>
      </section>

      <!-- How We Help -->
      <section class="help">
        <h2>我們將協助你</h2>
        <div class="timeline">
          <div class="step left" v-intersect="onIntersect">
            <p>
              <strong>制定專屬留學規劃表</strong
              >：你會知道每個時間點該做什麼，不再焦慮咬手手。
            </p>
            <img
              src="@/assets/images/planning.png"
              class="mobile"
              alt="規劃表"
            />
          </div>
          <div class="step left desktop" v-intersect="onIntersect">
            <img src="@/assets/images/planning.png" alt="規劃表" />
          </div>

          <div class="step right">
            <p>
              <strong>找到最適合你的學校</strong
              >：留學就像挑選人生的舞台，不是越華麗越好，而是剛剛好。
            </p>
            <img src="@/assets/images/find.png" class="mobile" alt="選校" />
          </div>
          <div class="step right desktop" v-intersect="onIntersect">
            <img src="@/assets/images/find.png" alt="選校" />
          </div>

          <div class="step left" v-intersect="onIntersect">
            <p>
              <strong>文件撰寫規劃</strong
              >：文案導師深度討論，寫出打中招生官心坎的文書。
            </p>
            <img
              src="@/assets/images/writing.png"
              class="mobile"
              alt="文書撰寫"
            />
          </div>

          <div class="step left desktop" v-intersect="onIntersect">
            <img src="@/assets/images/writing.png" alt="文書撰寫" />
          </div>

          <div class="step right">
            <p>
              <strong>申請表填寫</strong
              >：不難，但麻煩。我們幫你節省時間專注更重要的事。
            </p>
            <img src="@/assets/images/form.png" class="mobile" alt="申請表" />
          </div>
          <div class="step right desktop">
            <img src="@/assets/images/form.png" alt="申請表" />
          </div>
          <div class="step left" v-intersect="onIntersect">
            <p>
              <strong>全程進度追蹤與提醒</strong
              >：信件與細節我們來顧，申請不漏接。
            </p>
            <img
              src="@/assets/images/reminder.png"
              class="mobile"
              alt="提醒追蹤"
            />
          </div>
          <div class="step left desktop" v-intersect="onIntersect">
            <img src="@/assets/images/reminder.png" alt="提醒追蹤" />
          </div>
          <div class="step right">
            <p>
              <strong>簽證與住宿協助</strong
              >：從簽證流程到住宿選擇，安心飛、落地有著落。
            </p>
            <img src="@/assets/images/visa.png" class="mobile" alt="簽證住宿" />
          </div>
          <div class="step right desktop">
            <img src="@/assets/images/visa.png" alt="簽證住宿" />
          </div>
          <div class="step left" v-intersect="onIntersect">
            <p><strong>入學流程協助</strong>：疫苗規定、註冊選課都幫你搞定。</p>
            <img
              src="@/assets/images/register.png"
              class="mobile"
              alt="入學流程"
            />
          </div>
          <div class="step left desktop" v-intersect="onIntersect">
            <img src="@/assets/images/register.png" alt="入學流程" />
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta">
        <h2>夢想不該等待</h2>
        <p>馬上預約，邁出你的第一步。</p>
        <a href="/booking" class="cta-button">預約諮詢</a>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const steps = document.querySelectorAll(".step");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  steps.forEach((step) => observer.observe(step));
});
</script>

<style scoped lang="scss">
.study-abroad-page {
  .study-abroad-content {
    padding: 2rem;
  }

  h1,
  h2 {
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  section {
    margin-bottom: 10rem;
  }

  .hero {
    padding: 4rem 2rem;
    background-color: #043d78;
    text-align: center;
    margin-bottom: 5rem;

    .hero__content {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1.5rem;
      line-height: 1.4;
    }

    .intro {
      font-size: 1.125rem;
      color: #e5e7eb; // 淡白
      margin-bottom: 1rem;
    }

    .note {
      font-size: 1rem;
      color: #d1d5db;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }

    .divider {
      height: 2px;
      width: 60px;
      margin: 1rem auto;
      background-color: rgba(255, 255, 255, 0.2); // 白色但不刺眼
      border-radius: 1px;
    }

    .key-points {
      list-style: none;
      padding: 0;
      margin: 1rem 0 0;

      li {
        font-size: 1.05rem;
        color: #ffffff;
        margin: 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        span {
          font-weight: bold;
          color: #043d78; // 深藍主色
          background-color: #ffffff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
        }
      }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
      }

      .intro,
      .note {
        font-size: 1rem;
      }
    }
  }

  .why {
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: #eef2f7;
      padding: 15px 20px 40px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      transition: background-color 0.3s ease, transform 0.3s ease,
        box-shadow 0.3s ease;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

      &:hover {
        background-color: #043d78;
        transform: translateY(-6px); // 往上浮一點
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        h3,
        p {
          color: #ffffff;
        }
      }
      h3 {
        color: #1f2937;
        margin-bottom: 0.5rem;
        height: 60px;
      }

      p {
        color: #4b5563;
        font-size: 0.95rem;
      }
    }
  }

  .help {
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .step {
      max-width: 600px;
      width: 100%;
      padding: 1.5rem;
      border-radius: 12px;
      background: #eef2f7;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
      text-align: left;

      img {
        width: 50%;
        object-fit: contain;
        margin: auto;
        margin-top: 30px;
      }

      p {
        margin: 0;
        color: #374151;
        font-size: 1rem;
        line-height: 1.6;
      }

      &.left {
        align-self: flex-start;
      }

      &.right {
        align-self: flex-end;
        background: #dbeafe;
      }

      opacity: 0;
      transform: translateY(20px); // 原本 40px 太遠了
      transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.5, 1),
        transform 0.8s cubic-bezier(0.25, 0.8, 0.5, 1);

      &.in-view {
        opacity: 1;
        transform: translateY(0);
      }
      &:hover {
        transform: translateY(-4px);
      }
    }

    // RWD 手機版調整
    @media (max-width: 1024px) {
      .step {
        align-self: center !important;
        text-align: center;

        img {
          align-self: center;
        }

        p {
          text-align: center;
        }
      }
    }
  }

  .cta {
    text-align: center;
    background: #043d78;
    color: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
    h2 {
      color: #ffffff;
    }
    .cta-button {
      margin-top: 1rem;
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #b9afa6;
      color: white;
      border-radius: 9999px;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background: #dad5cc;
      }
    }
  }
}
// .desktop {
//   display: block;
// }
// .mobile {
//   display: none;
// }
// @media (max-width: 1024px) {
//   .desktop {
//     display: none !important;
//   }
//   .mobile {
//     display: block;
//   }
// }
 .desktop {
    display: none!important;
  }
  .mobile {
    display: block;
  }
</style>
