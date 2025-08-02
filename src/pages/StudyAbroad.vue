<template>
  <div class="study-abroad">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <h1>為什麼出國留學值得投資？</h1>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="intro">
      <div class="intro-container">
        <p class="line">
          網路知識唾手可得，ChatGPT
          也能解惑，你當然可以自己查。但如果想更有效率，不如當個聰明的行動派——直接預約諮詢，讓我們幫你快速整理重點，節省寶貴時間。
        </p>
        <p class="highlight">
          選擇專業，不是因為你不會，而是因為你懂得把時間花在最值得的地方。
        </p>
      </div>
    </section>

    <section class="why">
      <div class="container">
        <div class="animated-block title-block">
          <div class="scan-line"></div>
          <h2 class="animated-text">為什麼要出國留學？</h2>
        </div>
        <div class="cards">
          <div class="card">
            <div class="animated-block">
              <div class="scan-line"></div>
              <h3 class="animated-text">
                全面提升競爭力<br />學術 × 英文 × 職涯
              </h3>
            </div>
            <div class="animated-block delay">
              <div class="scan-line"></div>
              <p class="animated-text">
                沉浸在國際學術環境中，強化語言能力，掌握全球職場所需的軟硬實力，為未來升學與就業打下堅實基礎。阿，對了，不光是找一份待遇更好的工作，也許你就是下一個張忠謀。
              </p>
            </div>
          </div>

          <div class="card">
            <div class="animated-block">
              <div class="scan-line"></div>
              <h3 class="animated-text">
                拓展視野，拓展人脈，<br />實現跳躍式自我成長
              </h3>
            </div>
            <div class="animated-block delay">
              <div class="scan-line"></div>
              <p class="animated-text">
                跨出舒適圈，在多元文化中學習、交流，建立國際人脈，也促使你從不同角度重新認識自己，實現跳躍式自我成長。
              </p>
            </div>
          </div>

          <div class="card">
            <div class="animated-block">
              <div class="scan-line"></div>
              <h3 class="animated-text">成為有故事的人</h3>
            </div>
            <div class="animated-block delay">
              <div class="scan-line"></div>
              <p class="animated-text">
                出國留學是一段精彩的人生旅程，讓你累積滿滿的口袋故事––無論是文化衝擊、挑戰突破還是意外收穫，都會讓你成為聚會中最有故事的人。
              </p>
            </div>
          </div>

          <div class="card">
            <div class="animated-block">
              <div class="scan-line"></div>
              <h3 class="animated-text">
                隱藏價值<br />（但其實超重要）：<br />重新認識自己
              </h3>
            </div>
            <div class="animated-block delay">
              <div class="scan-line"></div>
              <p class="animated-text">
                留學申請的準備過程，不只是填表、寫文書、考試而已。這是一段深入思考自己是誰、想成為什麼樣的人的人生旅程。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="assist">
      <div class="container">
        <h2>我們將協助你</h2>
        <ul class="assist-list">
          <li class="assist-item">
            <img src="@/assets/images/planning.png" alt="規劃表" />
            <div class="text">
              <h4>制定專屬留學規劃表</h4>
              <p>讓你知道每個時間點該做什麼，不再焦慮咬手手。</p>
            </div>
          </li>
          <li class="assist-item">
            <img src="@/assets/images/find.png" alt="選校" />
            <div class="text">
              <h4>找到最適合你的學校</h4>
              <p>留學就像挑選人生的舞台，不是越華麗越好，而是要站上剛剛好。</p>
            </div>
          </li>
          <li class="assist-item">
            <img src="@/assets/images/writing.png" alt="文書撰寫" />
            <div class="text">
              <h4>文件撰寫規劃</h4>
              <p>文案導師深度討論，寫出打中招生官心坎的文書，申請無往不利。</p>
            </div>
          </li>
          <li class="assist-item">
            <img src="@/assets/images/form.png" alt="申請表" />
            <div class="text">
              <h4>申請表填寫</h4>
              <p>
                我們能為你省去很多繁瑣，讓你可以專心準備考試、工作，或單純保留更多時間給自己。
              </p>
            </div>
          </li>
          <li class="assist-item">
            <img src="@/assets/images/reminder.png" alt="提醒追蹤" />
            <div class="text">
              <h4>全程進度追蹤與提醒</h4>
              <p>留意你的每封來信，為你把關每個小細節。</p>
            </div>
          </li>
          <li class="assist-item">
            <img src="@/assets/images/visa.png" alt="簽證住宿" />
            <div class="text">
              <h4>簽證與住宿協助</h4>
              <p>從簽證流程到住宿選擇，安心飛、落地有著落。</p>
            </div>
          </li>
          <li class="assist-item">
            <img src="@/assets/images/register.png" alt="入學流程" />
            <div class="text">
              <h4>入學流程協助</h4>
              <p>疫苗規定、註冊選課都幫你搞定。</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const cards = document.querySelectorAll(".why .card");

  const titleBlock = document.querySelector(".why .title-block");
  const titleLine = titleBlock?.querySelector(".scan-line");
  const titleText = titleBlock?.querySelector(".animated-text");

  if (titleBlock && titleLine && titleText) {
    gsap.set(titleBlock, { autoAlpha: 0 });
    gsap.set(titleText, { opacity: 1 });
    gsap.set(titleLine, { x: "0%" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: titleBlock,
          start: "top 90%",
          once: true,
        },
      })
      .to(titleBlock, { autoAlpha: 1, duration: 0.1 })
      .to(titleLine, { x: "100%", duration: 0.2, ease: "power2.out" });
  }

  cards.forEach((card) => {
    const scanLines = card.querySelectorAll(".scan-line");
    const animatedTexts = card.querySelectorAll(".animated-text");

    gsap.set(card, { autoAlpha: 0 });
    gsap.set(animatedTexts, { opacity: 1 });
    gsap.set(scanLines, { x: "0%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
        once: true,
      },
    });

    tl.to(card, {
      autoAlpha: 1,
      duration: 0.1, // ⏩ 淡入更快
      ease: "power1.out",
    });

    scanLines.forEach((line, i) => {
      tl.to(
        line,
        {
          x: "100%",
          duration: 0.2, // ⏩ 掃描速度加快
          ease: "power2.out",
        },
        `>+${i * 0.1}`
      ); // ⏩ 卡片內每段延遲間距也縮短
    });
  });
});
</script>

<style scoped lang="scss">
.study-abroad {
  font-family: "Noto Sans TC", sans-serif;
  color: #1a1a1a;
  line-height: 1.75;
}

.hero {
  background: url("@/assets/images/study_abroad.jpg") center/cover no-repeat;
  height: calc(100vh - 350px);
  display: flex;
  padding-bottom: 3rem;
  .hero-inner {
    padding-bottom: 150px;
    width: 100%;
    text-align: center;
    h1 {
      color: white;
      font-size: 2.5rem;
      font-weight: 700;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
  }
}

.intro {
  background: #f3e9e2;
  padding: 2rem 1.5rem;
  .intro-container {
    line-height: 2;
    max-width: 860px;
    margin: 0 auto;
    text-align: left;
    .line {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    .highlight {
      font-size: 1.1rem;
      font-weight: 600;
      margin-top: 1rem;
      color: #000;
    }
  }
}

.why {
  padding: 6rem 1.5rem 6rem;
  background: #f8f8f8;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 50px;
      margin-top: 0;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      .card {
        background: #ffffff;
        padding: 2rem;
        h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.8;
          height: 90px;
          display: flex;
          align-items: center;
        }
        p {
          font-size: 0.95rem;
        }
      }
    }
  }
}

.assist {
  background: #f4f2f0;
  padding: 4rem 1rem;

  .container {
    max-width: 880px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #111;
  }

  .assist-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 2rem 0;
      border-bottom: 1px dashed #bbb;
      height: 110px;

      &:last-child {
        border-bottom: none;
      }

      img {
        width: 170px;
        height: 110px;
        object-fit: contain;
        flex-shrink: 0;
      }

      .text {
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #111;
        }

        p {
          font-size: 1.125rem;
          color: #333;
          line-height: 1.6;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .assist-list li {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      img {
        width: 72px;
        height: 72px;
      }
    }
  }
}
@media (max-width: 768px) {
  .hero {
    height: calc(100vh - 410px);
  }
  .hero .hero-inner h1 {
    font-size: 1.75rem;
  }

  .intro .intro-container {
    .line,
    .highlight {
      font-size: 1rem;
      text-align: left;
    }
  }

  .why {
    padding: 2.5rem 1rem;

    .container {
      h2 {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 2rem;
      }

      .cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;

        .card {
          padding: 1.5rem;

          h3 {
            font-size: 1.125rem;
            height: auto;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  .assist {
    padding: 2.5rem 1rem;

    h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .assist-list li {
      flex-direction: row;
      align-items: center;
      height: auto;
      gap: 1rem;
      padding: 2rem 0;

      img {
        width: 88px;
        height: 88px;
      }

      .text {
        h4 {
          font-size: 1.125rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }
}
.animated-block {
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  min-height: 70px;

  .animated-text {
    opacity: 1;
    position: relative;
    z-index: 1;
    white-space: pre-line;
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000; // 黑色不透明遮罩
    z-index: 2;
    transform: translateX(0%);
    pointer-events: none;
  }
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

@keyframes appear {
  to {
    opacity: 1;
  }
}

@keyframes typing {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
