<template>
  <article class="post-detail">
    <!-- Hero 圖片 -->

    <div class="back-container">
         <span class="back-btn" type="button" @click="goBack" aria-label="Go back">
        ← 上一頁
      </span>
    </div>

    <!-- 內容容器 -->
    <div class="container">
      
      <div>
        <img
          class="hero-img"
          :src="heroUrl"
          :alt="heroAlt"
          loading="lazy"
          decoding="async"
        />
      </div>

      <!-- 標題與日期 -->
      <h1 class="post-title">London loses top student city title to Seoul</h1>
      <p class="post-date">Jul 15, 2025</p>

      <!-- 內文 -->
      <div class="post-content">
        <p>
          After holding the top spot in the QS Best Student Cities Rankings for
          six consecutive years, London has been overtaken by South Korea’s
          capital, Seoul.
        </p>
        <p>
          QS Best Student Cities considers the rankings, student mix,
          desirability, employer activity and affordability of university
          cities. The 2026 iteration saw the UK capital’s affordability score
          decline, with London slipping to third place, overtaken by the rising
          cities of Seoul and Tokyo – a shift that underscores Asia’s growing
          appeal as a global hub for world-class education.
        </p>
        <p>
          Deputy Prime Minister and minister of education of the Republic of
          Korea, Ju-Ho Lee, described it as an honour as Seoul was named the
          world’s best student city.
        </p>
        <blockquote>
          “This recognition reflects the growing global trust in Korea’s higher
          education system and highlights Seoul’s unique strengths – a blend of
          academic excellence, cultural vibrancy, innovation, and safety,” he
          said.
        </blockquote>
        <p>
          Three Seoul-based universities – Seoul National University, Yonsei
          University, and Korea University – are ranked among the top 100 in the
          QS World University Rankings. Over 200,000 international students are
          currently studying in Korea, and the country’s ministry of education
          has signalled its ongoing commitment to supporting students from
          around the globe by “helping them study, grow, and thrive in Korea”.
        </p>
        <p>
          Meanwhile, Tokyo – maintaining its second place spot – leads globally
          in the employer activity metric.
        </p>
        <p>
          As for London, despite being home to 18 top-ranked universities, its
          affordability challenges significantly impacted its overall score. The
          city ranked 137th in the affordability category, placing it behind
          rivals like Seoul and Tokyo.
        </p>
        <p>
          Notably, this challenge extends beyond the capital, as all 16 UK
          cities featured in the rankings have declined in this key metric, with
          none placing among the world’s top 100 for affordability. Scotland’s
          Aberdeen is currently the most affordable UK city, ranking 106th in
          this category.
        </p>
        <p>
          In contrast, UK cities performed notably well in the Desirability
          metric. All – except Leicester, which slipped just one spot – saw
          improvements, with every city now ranked within the global top 80.
          Edinburgh leads at 12th, followed by London at 16th.
        </p>
        <p>
          Based on the Economist’s Price Index, Numbeo’s Cost of Living Index,
          and average tuition fees, London received an affordability score of
          12.6 – placing it lower than all but one of the top 20 cities in the
          student city rankings. The only city to score lower was Boston, ranked
          joint 15th overall, with a score of 7.2.
        </p>
        <p>
          Commenting on the shift, Liz Hutchinson, executive of London Higher,
          outlined the “complex” challenges the city of London is facing.
        </p>
        <blockquote>
          “London offers a world-class experience for students across a whole
          range of measures from student voice and employer activity. It
          continues to have huge appeal for prospective students the world over,
          through its globally recognised universities, vibrant culture and
          diverse employment opportunities,” she said.
        </blockquote>
        <p>
          However, she described a “chronic shortage” of affordable housing
          affecting students and the wider community alike – part of the wider
          cost of living crisis felt across the UK.
        </p>
        <blockquote>
          “Our members are working with the Greater London Authority through
          their London Plan to develop policies and practices to ease pressure
          on the broader rental market and accelerate the provision of genuinely
          affordable homes for all Londoners including students,” continued
          Hutchinson.
        </blockquote>
        <p>
          London also experienced a decline in the student mix indicator, which
          considers a city’s international student population, diversity, and
          inclusivity.
        </p>
        <blockquote>
          “London’s diversity and warm welcome to students from the world over
          has always been a big pull factor for applicants. It’s concerning to
          see a drop in this rating,” said Hutchinson.
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const heroUrl =
  "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop";
const heroAlt = "Seoul city skyline at dusk";

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/news");
  }
}
</script>

<style scoped lang="scss">
.post-detail {
  color: #2d2d2d;
  line-height: 1.8;
}

/* Hero 圖片與內文等寬 */
.hero-img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 420px;
}

.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0px 16px 48px;
}
.back-container{
    max-width: 900px;
    margin: 15px auto;
}

.back-btn {
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
}
.back-btn:hover {
  color: #7a7a7a;
}

.post-title {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 650;
  line-height: 1.35;
  margin: 0 0 8px;
}

.post-date {
  font-size: 0.95rem;
  color: #7a7a7a;
  margin: 0 0 20px;
}

.post-content p {
  margin: 0 0 1.2em;
}

blockquote {
  margin: 1.4em 0;
  padding-left: 1em;
  border-left: 3px solid #ccc;
  color: #555;
  font-style: italic;
}
</style>
