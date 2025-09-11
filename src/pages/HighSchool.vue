<template>
  <div class="study-abroad-page">
    <!-- Hero 區塊 -->
    <section class="hero">
      <img src="@/assets/images/middleschool-banner.png" alt="Hero Students" />
    </section>

    <!-- 說明區塊 -->
    <section class="intro">
      <div class="intro-inner">
        <!-- Left -->
        <div class="intro-left">
          <h2 class="intro-title">為什麼要出國念中學？</h2>

          <div class="intro-kicker">關鍵差異在於：</div>

          <div class="intro-badge">
            國外中學能讓孩子更早起跑，<br />贏在未來！
          </div>
        </div>

        <!-- Right -->
        <div class="intro-right">
          <p>
            在台灣，高中以前的教育大多偏向制式化，課程安排單一，學生每天忙於考試、背書，卻鮮少有機會去探索自己的興趣。許多孩子到了大學申請時，才發現自己沒有明確方向，只能「先選一個科系再說」，結果浪費了寶貴的青春。
          </p>
          <p>
            但在英美中學，孩子從15、16歲起就能接觸多元的啟發性課程與社團活動；老師積極引導，可以參加研究計畫、藝術與體育，甚至提早體驗大學課程，提前鋪路。不僅有助於找到真正的興趣與方向，也能在申請世界名校時，比同齡人更有故事與亮點。
          </p>
          <p>
            如果選擇留在台灣的體制裡，孩子很可能等到大學才開始「探索自己」，錯過了最佳的黃金時期；但如果選擇在中學階段就出國，他們將提早站上國際舞台，擁有更清晰的方向與更強的競爭力。
          </p>
        </div>
      </div>
    </section>

    <!-- 四大優勢 -->
    <section class="advantages">
      <h2>四大優勢</h2>
      <div class="adv-list">
        <div class="adv-item">
          <img src="@/assets/images/highschool-1.jpg" alt="國際教育資源" />
          <p>接軌國際教育資源，打造升學優勢。</p>
        </div>
        <div class="adv-item">
          <img src="@/assets/images/highschool-2.jpg" alt="全英文環境" />
          <p>全英文環境 x 培養語言與獨立生活力。</p>
        </div>
        <div class="adv-item">
          <img src="@/assets/images/highschool-3.jpg" alt="跨文化交流" />
          <p>跨文化交流，拓展人脈與全球視野。</p>
        </div>
        <div class="adv-item">
          <img src="@/assets/images/highschool-4.jpg" alt="課程與社團" />
          <p>
            多元課程與社團活動，有助於探索興趣與發展潛能，提早找到大學與職涯方向。
          </p>
        </div>
      </div>
    </section>

    <!-- 服務流程 -->
    <section class="services">
      <div class="svc-inner">
        <!-- 左側標題 -->
        <div class="svc-title">
          <h2 class="svc-head">曜境提供的中學<br />留學全方位服務</h2>
        </div>

        <!-- 右側清單 -->
        <ol class="svc-grid">
          <li class="svc-item">
            <span class="badge">01</span>
            <div class="text">
              <h3>精準選校規劃</h3>
              <p>
                依據孩子的性格、興趣與專長（如音樂、體育、學術等），未來升學目標，量身挑選最合適的學校，讓孩子發揮長處、穩定成長。
              </p>
            </div>
          </li>

          <li class="svc-item">
            <span class="badge">02</span>
            <div class="text">
              <h3>完整申請與面試安排</h3>
              <p>
                協助規劃備審資料、安排筆試與面試時程，並提供模擬面試訓練，提升錄取率。
              </p>
            </div>
          </li>

          <li class="svc-item">
            <span class="badge">03</span>
            <div class="text">
              <h3>申請文件準備指導</h3>
              <p>包含學習計畫、推薦信，讓學校全面了解孩子的亮點。</p>
            </div>
          </li>

          <li class="svc-item">
            <span class="badge">04</span>
            <div class="text">
              <h3>在地監護與生活協助</h3>
              <p>
                協助安排合法監護人、寄宿家庭或宿舍生活，讓家長放心、孩子安心。
              </p>
            </div>
          </li>

          <li class="svc-item">
            <span class="badge">05</span>
            <div class="text">
              <h3>入學準備與後續追蹤</h3>
              <p>
                協助辦理入學體檢、簽證輔導、行前準備、接機安置，入學後持續關心孩子適應狀況。
              </p>
            </div>
          </li>

          <li class="svc-item">
            <span class="badge">06</span>
            <div class="text">
              <h3>未來升讀大學的規畫</h3>
              <p>
                提早布局升學方向，包括課程選擇建議、課外活動規劃，幫助孩子在中學階段累積優勢。
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>
// 這邊暫時不需要 JS 邏輯
</script>

<style scoped lang="scss">
.study-abroad-page {
  font-family: "Noto Sans TC", sans-serif;
  color: #333;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .hero {
    position: relative;
    height: 90vh;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-text {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
    }
  }

  /* Intro */
  .intro {
    background: #dcd5cf; /* 接近你的截圖底色 */
    padding: 3.5rem 1.5rem;

    .intro-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 0.75fr 1fr;
      gap: 0rem 6rem;
      align-items: start;
    }

    /* 左欄 */
    .intro-left {
      display: grid;
      grid-template-rows: auto auto 1fr;
      row-gap: 1.25rem;
    }

    .intro-title {
      margin: 0;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1.2;
      color: #1b0a02;
      font-size: 2.8rem;
      text-align: start;
    }

    .intro-kicker {
      font-size: 1.1rem;
      color: #1b0a02;
      letter-spacing: 0.09em;
    }

    .intro-badge {
      display: inline-block;
      font-size: 0.95rem;
      line-height: 1.6;
      color: #fff;
      background: #1b0a02; /* 深咖啡（截圖中的暗色塊） */
      padding: 0.8rem 1rem;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08) inset;
      width: 70%;
    }

    /* 右欄 */
    .intro-right {
      font-size: 1rem;
      line-height: 1.9;
      color: #2e2c2b;

      p + p {
        margin-top: 1rem;
      }
    }

    /* RWD：平板以下改上下排列，標題改回橫排 */
    @media (max-width: 1024px) {
      .intro-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .intro-title {
        writing-mode: horizontal-tb;
        text-orientation: initial;
        font-size: 2rem;
      }
      .intro-left {
        grid-template-rows: auto auto auto;
        row-gap: 0.75rem;
      }
      .intro-badge {
        width: 90%;
      }
    }
  }

  /* Advantages */
  .advantages {
    padding: 2rem 4.5rem;
    color: #1b0a02;
    margin-bottom: 1rem;
    h2 {
      font-size: 2.5rem;
    }

    .adv-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .adv-item {
      text-align: center;
      img {
        width: 100%;
        margin-bottom: 1rem;
        object-fit: cover;
        display: block;
        height: 220px;
      }
      p {
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }

  /* Services */
  .services {
  background: #eee6df;
  padding: 3.5rem 1.5rem;

  .svc-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* 上方標題 */
  .svc-head {
    text-align: left;
    max-width: 720px;
    margin: 0 0 2rem 0;
  }

  /* 下方：服務卡片網格（由上到下 → 再往右） */
  .svc-grid {
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 兩欄 */
    grid-template-rows: repeat(3, auto);              /* 三列（因為 6 個項目） */
    grid-auto-flow: column;                            /* 關鍵：先填滿第一欄的列，再往右欄 */
    column-gap: 2rem;
    row-gap: 1.25rem;
  }

  .svc-item {
    display: grid;
    grid-template-columns: auto 1fr; /* 左編號、右文字 */
    align-items: start;
    column-gap: 1rem;
  }

  .badge {
    display: inline-grid;
    place-items: center;
    min-width: 46px;
    height: 46px;
    padding: 0 .25rem;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    background: #1f1f1f;
    border-radius: 10px;
    box-shadow: 0 0 0 2px rgba(255,255,255,.9) inset;
  }

  .text h3 { margin: 0 0 .25rem; font-size: 1.05rem; font-weight: 700; color: #1f1f1f; }
  .text p  { margin: 0; font-size: .98rem; line-height: 1.8; color: #2b2928; }

  /* RWD：平板保持兩欄（仍由上到下排） */
  @media (max-width: 1024px) {
    .svc-head { margin-bottom: 1.5rem; }
    .svc-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: auto auto auto; /* 同效果，寫法等價 */
      grid-auto-flow: column;
    }
  }

  /* 手機：單欄，順序自然由上到下 */
  @media (max-width: 640px) {
    .svc-grid {
      grid-template-columns: 1fr;
      grid-template-rows: none;
      grid-auto-flow: row; /* 單欄就改回預設即可 */
    }
    .badge { min-width: 42px; height: 42px; font-size: .95rem; }
  }
}
}
</style>
