<template>
  <section class="service-analysis">
    <!-- 上方三行文字 -->
    <ul class="highlight-list">
      <li>一對一專屬顧問深度討論，挖掘你的獨特優勢與經驗</li>
      <li>放大你的亮點，完整展現個人特質與潛力</li>
      <li>中師與外師雙重把關，精準製作高質量申請文件，讓你脫穎而出</li>
    </ul>

    <!-- 雙欄區塊 -->
    <section class="service-analysis">
      <div class="box">
        <!-- 文件服務 -->
        <div class="col">
          <div class="image document-icon"></div>
          <h2 class="title">文件服務</h2>
        </div>

        <!-- 中間斜線 -->
        <div class="slash-divider"></div>

        <!-- 落點分析 -->
        <div class="col">
          <h2 class="title">落點分析</h2>
          <div class="image analysis-icon"></div>
        </div>
      </div>
    </section>

    <div class="text-right">
      <ul>
        <li>精準落點，讓申請更有把握</li>
        <li>依據你的成績、經歷與興趣，分析適合申請的學校</li>
        <li>幫助你規劃保底校、目標校與夢想校</li>
        <li>
          製作清楚明瞭的學校落點清單，各校錄取標準與特色一目了然，選校不再困擾
        </li>
      </ul>
    </div>

    <!-- Call to Action -->
    <div class="cta">
      <div class="cta-content">
        <p><strong>如果你</strong></p>
        <ul>
          <li><strong>對申請文件怎麼寫毫無頭緒</strong></li>
          <li><strong>不知道可以申請到什麼學校</strong></li>
        </ul>
        <div class="ask-button">
          <a class="consult-btn" href="/booking">預約諮詢</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped  lang="scss">
.service-analysis {
  max-width: 1080px;
  margin: 0 auto;
  font-family: "Noto Sans TC", sans-serif;
  color: #000;
   @media (max-width: 1024px) {
      padding: 0 1.5rem;
      .service-analysis{
        padding: 0;
      }
    }
}

.highlight-list {
  font-size: 18px;
  margin-bottom: 2rem;
  line-height: 1.8;
  list-style: disc;
  padding-left: 1.2rem;
  padding-top: 6rem;
  @media (max-width: 1024px) {
    max-width: calc(100% - 30px);
      padding-left:30px;
      padding-top: 2rem;
    }
}

.box {
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slash-divider {
  width: 4px;
  height: 150px;
  background-color: black;
  transform: rotate(25deg);
}

.description {
  padding: 1rem 10px;
}

.col {
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 2rem;
  display: flex;
  justify-self: baseline;
  font-weight: bold;
  color: #000;
}

img {
  width: 100%;
  height: auto;
}
.document-icon {
  width: 200px;
  height: 250px;
  background-size: 350%;
  background-image: url("@/assets/images/document-icon.png");
  background-repeat: no-repeat;
  background-position: center;
}
.analysis-icon {
  width: 200px;
  height: 250px;
  background-size: 350%;
  background-image: url("@/assets/images/analysis-icon.png");
  background-repeat: no-repeat;
  background-position: center;
}

ul {
  list-style: disc;
  padding-left: 1.2rem;
  line-height: 1.8;
   @media (max-width: 1024px) {
    max-width: calc(100% - 30px);
      padding-left:30px;
    }
}

.cta {
  width: 100%;
  padding: 5rem 0;
  font-size: 18px;
  display: flex;
  justify-content: center;
  &-content{
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
  }
}

.cta ul {
  margin: 0.5rem 0;
  padding-left: 0;
}

.cta p {
  width: 30%;
  text-align: center;
}
.ask-button {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
}
.text-right {
  font-size: 18px;
  display: flex;
  justify-content: end;
}
.consult-btn {
  background-color: #000;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;
    gap: 2rem;
  }
  .slash-divider {
    display: none;
  }
  .cta,
  .cta > p {
    text-align: center;
    width: 100%;
  }
  .ask-button {
    width: 100%;
    justify-content: center;
  }
  .cta-content{
    padding: 0 30px;
    width: calc(100% - 30px);
  }
}
</style>
