<template>
  <!-- 隱藏主標（語義清楚但不影響畫面） -->
  <h1 class="sr-only">關於曜境｜Excellent Future Education 留學代辦與申請規劃</h1>

  <!-- Hero Banner -->
  <section class="hero" aria-label="關於曜境頁面標題">
    <h2 class="hero-title">關於曜境</h2>
  </section>

  <!-- 品牌理念 -->
  <section class="content aboutHeader" aria-label="品牌理念">
    <div class="paragraph">
      <div>
        曜境留遊學致力於為每一位懷抱留遊學夢想的學生，提供真誠、安心、用心的留學諮詢服務。
      </div>
      <div>
        我們了解：對大多數人來說，留學代表未知、焦慮與挑戰。這就是我們存在的理由——
      </div>
      <div>
        讓複雜的申請流程變得清楚簡單，讓你在每一個選擇上都有專業陪伴，走得穩、走得對。
      </div>
    </div>
  </section>

  <!-- 圖文導覽 -->
  <section class="grid-section" aria-label="品牌視覺與服務介紹">
    <div class="grid-container">
      <div class="grid-vertical">
        <div class="grid-row">
          <img
            src="@/assets/images/about-us-logo.png"
            alt="曜境品牌 Logo 與識別說明"
            class="full-width-image"
            loading="lazy"
            decoding="async"
          />
          <div class="caption-block">
            <p class="caption-title">品牌名稱與Logo</p>
            <p class="paragraph">「曜是光，境是方向，我們願成為您留學路上的一盞明燈，照亮前程。」</p>
            <p>
              Logo 設計結合了象徵學業的學士帽與指引方向的箭頭，展現我們的專業與使命。而其中的小老鼠，則來自創辦人的巧思，讓品牌識別在專業之外，也保有記憶點。它提醒我們，在追求未來的同時，也要保有純粹的喜歡。留學不只是一條規劃好的路，更需要一些意外的驚喜與童心，因為夢想之路，從來都需要一點趣味。
            </p>
          </div>
        </div>

        <div class="grid-row">
          <img
            src="@/assets/images/myworry.jpg"
            alt="學生在留學申請過程中的常見煩惱"
            loading="lazy"
            decoding="async"
          />
          <div class="caption-block">
            <p class="caption-title">
              你是不是也有這些煩惱? <br />別擔心 —— 我們幫你搞定！
            </p>
            <ul>
              <li>我能申請到哪些學校？</li>
              <li>什麼時間點該開始準備？需要準備哪些文件？</li>
              <li>成績不夠理想、英文不好，我還能出國留學嗎？</li>
              <li>讀書計畫不知道如何下筆（甚至完全提不起勁）？</li>
              <li>備審資料完成了，但還想再更完美？</li>
            </ul>
          </div>
        </div>

        <div class="grid-row">
          <img
            src="@/assets/images/mything.jpg"
            alt="顧問團隊用心服務每位學生的場景"
            loading="lazy"
            decoding="async"
          />
          <div class="caption-block">
            <p class="caption-title">我們用心對待每一份信任</p>
            <p class="paragraph">
              選擇與我們合作的學生和家長，是因為相信我們的專業與用心。我們始終秉持「你的事，就是我的事」的理念，全心陪伴每一位學生，細心處理留學路上的每個細節。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useHead } from '@vueuse/head'

const siteUrl = 'https://theyaojing.org'
const pageUrl = `${siteUrl}/about` // 關於頁的最終網址（依你的實際路由調整）
const logoUrl = `${siteUrl}/logo.jpg`

useHead({
  title: '關於曜境｜Excellent Future Education 留學代辦與申請規劃',
  meta: [
    {
      name: 'description',
      content:
        '認識曜境 Excellent Future Education：我們以真誠、安心、用心為核心，提供英美澳加留學申請規劃、文件指導、簽證輔導與行前準備的一站式服務。'
    },
    { name: 'robots', content: 'index,follow,max-image-preview:large' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: '關於曜境｜Excellent Future Education 留學代辦與申請規劃' },
    {
      property: 'og:description',
      content:
        '認識曜境 Excellent Future Education：以真誠、安心、用心為核心，提供英美澳加留學申請規劃、文件指導、簽證輔導與行前準備。'
    },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: logoUrl },
    { property: 'og:locale', content: 'zh_TW' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '關於曜境｜Excellent Future Education 留學代辦與申請規劃' },
    {
      name: 'twitter:description',
      content:
        '認識曜境：英美澳加留學代辦與申請規劃，文件指導、簽證輔導與行前準備，一對一專業陪伴。'
    },
    { name: 'twitter:image', content: logoUrl }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'alternate', hreflang: 'zh-Hant-TW', href: pageUrl }
  ],
  script: [
    // AboutPage（描述此頁）
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: '關於曜境',
        url: pageUrl,
        description:
          '認識曜境 Excellent Future Education 的品牌理念與服務核心，了解我們如何以真誠、安心、用心陪伴學生完成留學申請。',
        primaryImageOfPage: { '@type': 'ImageObject', url: logoUrl }
      })
    },
    // Organization（站點/品牌）
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: '曜境 Excellent Future Education',
        url: siteUrl,
        logo: logoUrl,
        sameAs: [],
        address: { '@type': 'PostalAddress', addressCountry: 'TW' },
        areaServed: ['TW', 'HK', 'MO'],
        description:
          '英美澳加留學代辦與申請規劃，提供文件指導、簽證輔導、入學註冊與行前準備。'
      })
    },
    // Breadcrumb
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首頁',
            item: siteUrl + '/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '關於曜境',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>


<style>
/* 無障礙/SEO用的隱藏文字：不佔空間、不改版面 */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 1px, 1px) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.hero {
  height: 10rem;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  color: white;
  background-size: cover;
  background-position: center;
}
.aboutHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  padding: 1rem 5rem;
  letter-spacing: 1rem;
  border-radius: 0.5rem;
  color: #38342e;
}

.content {
  max-width: 120ch;
  margin: 1rem auto;
  margin-top: 0;
  padding-bottom: 1rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.paragraph {
  color: #38342e;
  line-height: 1.8;
  text-align: left;
}

.full-width-image {
  width: 100%;
  height: auto;
}

.grid-section {
  padding: 3rem 5rem 10rem;
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
  gap: 5rem;
}

.grid-row img {
  width: 45%;
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
    gap: 1rem;
  }

  .grid-row img,
  .caption-block {
    width: 100%;
  }

  .caption-block {
    text-align: center;
  }
  .grid-section {
    padding: 1.5rem;
  }
  .paragraph {
    padding: 0 1.5rem;
  }
  .grid-vertical {
    gap: 4rem;
  }
}

</style>
