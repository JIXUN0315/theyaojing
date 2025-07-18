<template>
  <div class="middle-school-page">
    <section class="intro">
      <h1>為孩子打造全球競爭力，從中學開始！</h1>
      <p class="subtitle">
        --- 英美頂尖中學申請完整規劃，專屬客製化方案，讓孩子提早進入世界舞台。
      </p>
      <img
        src="@/assets/images/middleschool-banner.jpg"
        alt="中學留學主圖"
        class="hero-image"
      />
    </section>

    <section class="reasons">
      <h2>為什麼選擇出國念中學？</h2>
      <ul>
        <li>接軌國際教育體系，打造升學優勢</li>
        <li>英語能力與獨立生活能力同步提升</li>
        <li>更早融入當地文化與社交圈</li>
        <li>多元課程與社團活動，有助於探索興趣與發展潛能</li>
      </ul>
    </section>

    <section class="services">
      <h2>曜境提供的中學留學全方位服務：</h2>
      <ul>
        <li>
          <strong>🔹 精準選校規劃：</strong>
          依據孩子的性格、興趣與專長（如音樂、體育、學術等）、未來升學計畫，量身挑選最合適的學校，讓孩子發揮長處、穩定成長。
        </li>
        <li>
          <strong>🔹 完整申請與面試安排：</strong>
          協助填寫申請表、安排筆試與面試時程，並提供模擬面試機會，提高錄取率。
        </li>
        <li>
          <strong>🔹 申請文件準備指導：</strong>
          包含學習計畫、推薦信，讓學校全面了解孩子的亮點。
        </li>
        <li>
          <strong>🔹 在地監護與生活協助：</strong>
          協助安排合法監護人、寄宿家庭或宿舍生活，讓家長放心、孩子安心。
        </li>
        <li>
          <strong>🔹 入學註冊與後續追蹤：</strong>
          協助辦理入學註冊、簽證輔導、行前準備、接機安排，入學後持續關心孩子適應狀況。
        </li>
        <li>
          <strong>🔹 未來升讀大學的規畫：</strong>
          提早布局升學方向，包括課程選擇建議、課外活動規劃，幫助孩子在中學階段就累積優勢。
        </li>
      </ul>
    </section>

    <section class="cta">
      <p>立即預約諮詢，為孩子打開世界的大門。</p>
      <a href="/booking" class="cta-button">預約諮詢</a>
    </section>
  </div>
</template>

<style scoped lang="scss">
.middle-school-page {
  background-color: #eeece9;
  padding: 3rem 1.5rem;
  color: #333;
  font-family: "Noto Sans TC", sans-serif;
  @media screen and (max-width: 768px) {
    padding: 18px;
  }
  .intro {
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #111;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 1.5rem;
    }

    .hero-image {
      width: 100%;
      max-width: 720px;
      border-radius: 8px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    }
  }

  section {
    max-width: 900px;
    margin: 0 auto 3rem auto;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.5;
    color: #043d78;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #666;
    margin-top: -0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  ul {
    list-style: none;
    padding: 0;
    padding-top: 12px;

    li {
      margin-bottom: 28px;
      font-size: 1rem;
      line-height: 1.7;
      padding-left: 1.2rem;
      position: relative;

      &::before {
        content: "•";
        color: #043d78;
        position: absolute;
        left: 0;
      }
    }
  }

  .services ul li {
    &::before {
      content: "";
    }
  }

  .cta {
    text-align: center;

    p {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      font-weight: 500;
      padding: 40px 16px;
      @media screen and (max-width: 768px) {
      }
    }

    .cta-button {
      background-color: #b9afa6;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background-color: #dad5cc;
      }
    }
  }
}
</style>
