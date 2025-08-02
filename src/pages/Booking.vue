<template>
  <div class="consultation-wrapper">
    <section class="faq-container">
      <div class="faq">
        <h2>常見問題 FAQ</h2>
        <div class="faq-item" v-for="(item, index) in faqs" :key="index">
          <div class="faq-question" @click="toggle(index)">
            {{ item.question }}
            <span class="arrow" :class="{ open: item.open }">▶</span>
          </div>
          <transition name="accordion">
            <div class="faq-answer" v-show="item.open">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="form-container">
      <h2>預約諮詢表單</h2>
      <form @submit.prevent="submit">
        <label>中文全名 *</label>
        <input type="text" placeholder="您的姓名" required v-model="form.name" />

        <label>電子郵件 *</label>
        <input type="email" placeholder="請輸入有效信箱" required v-model="form.email" />

        <label>電話 或 LINE ID *</label>
        <input type="text" placeholder="電話或 LINE ID" required v-model="form.contact" />
        <small class="note">若留LINE ID 請確認可接收陌生訊息</small>

        <label>畢業(就讀)學校</label>
        <input type="text" placeholder="學校名稱" v-model="form.school" />

        <label>畢業(就讀)科系</label>
        <input type="text" placeholder="科系名稱" v-model="form.department" />

        <label>想去哪個國家</label>
        <div class="country-options">
          <label v-for="country in countryOptions" :key="country.value" class="country-card">
            <input
              type="radio"
              :value="country.value"
              v-model="form.country"
              name="country"
            />
            <img :src="country.img" :alt="country.value" />
            <span>{{ country.value }}</span>
          </label>
           <label for="other" class="otherOption"> 
            <input type="radio" name="country" placeholder="其他" v-model="form.courseOther" />
            <input id="other"  placeholder="其他"/>
          </label>
        </div>

        <label>想了解的課程類別 *</label>
        <div class="radio-group">
          <label v-for="type in courseTypes" :key="type">
            <input
              type="radio"
              :value="type"
              v-model="form.courseType"
              name="courseType"
              required
            />
            {{ type }}
          </label>
          <label for="oth"> 
            <input type="radio" name="courseType" placeholder="其他" v-model="form.courseOther" />
            <input id="oth"  placeholder="其他"/>
          </label>
        </div>

        <label>欲就讀的科系 *</label>
        <input type="text" placeholder="請輸入想申請的科系" v-model="form.targetMajor" required />

        <label>預計哪一年出發就讀</label>
        <input type="text" placeholder="2025 / 2026..." v-model="form.startYear" />

        <label>如何得知曜境 (介紹人 / 推薦碼 / 社群平台...)</label>
        <input type="text" v-model="form.referral" />

        <label>其他資訊</label>
        <textarea placeholder="歡迎補充其他想讓我們知道的資訊" v-model="form.extra" />
        <small class="note">歡迎補充其他想讓我們知道的資訊</small>

        <button type="submit">立即送出</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const faqs = reactive([
  {
    question: "需要提前預約嗎？",
    answer: "是的，我們建議提前預約以便安排專業顧問。",
    open: false,
  },
  {
    question: "是否有線上諮詢？",
    answer: "是，我們有提供線上諮詢服務。",
    open: false,
  },
  {
    question: "是否只服務特定國家的申請？",
    answer: "我們主要服務英、美、澳、加的留學申請，如有其他國家需求，也歡迎直接與我們聯繫討論。",
    open: false,
  },
  {
    question: "第一次諮詢需要付費嗎？",
    answer: "不需要！我們提供一次免費諮詢，讓你能先認識我們的服務方式與流程，再決定是否進一步合作。",
    open: false,
  },
]);

const toggle = (index) => {
  faqs[index].open = !faqs[index].open;
};

const form = reactive({
  name: '',
  email: '',
  contact: '',
  school: '',
  department: '',
  country: '',
  countryOther: '',
  courseType: '',
  courseOther: '',
  targetMajor: '',
  startYear: '',
  referral: '',
  extra: ''
});

const countryOptions = [
  { value: "英國", img: new URL("@/assets/images/uk.jpg", import.meta.url).href },
  { value: "美國", img: new URL("@/assets/images/usa.jpg", import.meta.url).href },
  { value: "澳洲", img: new URL("@/assets/images/australia.jpg", import.meta.url).href },
  { value: "加拿大", img: new URL("@/assets/images/canada.jpg", import.meta.url).href },
];

const courseTypes = ["學士", "碩士", "博士", "語言學校", "打工遊學"];
const submit = () => {
  alert("送出成功！我們將儘快聯絡你。");
};
</script>

<style scoped lang="scss">
.consultation-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background-color: #f7faff;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
     padding: 10px;
  }
}

section {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
  flex: 1;

  h2 {
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #007aff;
    display: inline-block;
    color: #333;
  }
}
.faq {
  padding: 30px;
  background-color: #ffffffc9;
  height: calc(100% - 3.5rem);
}
.faq-container {
  background-image: url("@/assets/images/homepageTest1.jpg");
  background-position: top;
  background-size: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
}
.faq-item {
  border-bottom: 1px solid #000;

  .faq-question {
    padding: 1rem 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #444;

    .arrow {
      transition: transform 0.3s;
    }

    .arrow.open {
      transform: rotate(90deg);
    }
  }

  .faq-answer {
    padding-bottom: 1rem;
    color: #555;
  }
}

.form-container {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);

  form {
    label {
      display: block;
      margin-top: 1rem;
      font-weight: 600;
      color: #333;
    }

    input,
    textarea {
      width: 100%;
      margin-top: 0.25rem;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .note {
      display: block;
      font-size: 0.85rem;
      color: #666;
      margin-top: 0.25rem;
      margin-bottom: 1rem;
    }

    .country-options {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;

      .country-card {
        width: 120px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.3s;

        input {
          display: none;
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 4px;
        }

        span {
          display: block;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        &:has(input:checked) {
          border-color: #007aff;
          box-shadow: 0 0 0 2px #007aff33;
        }
      }

      input[type="text"] {
        flex: 1;
        margin-top: 0.5rem;
      }
    }

    .radio-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
      flex-direction: column;

      label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        input{
          width: auto;
        }
      }

      input[type="text"] {
        margin-top: 0.5rem;
        flex: 1;
      }
    }

    button {
      margin-top: 2rem;
      background-color: #007aff;
      color: #fff;
      padding: 0.9rem 1.5rem;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #005bb5;
      }
    }
  }
}

/* Accordion 流暢動畫 */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
small{
  display: block;
}
.otherOption{
  display: flex;
  input{
    margin-right: 10px;
    width: auto !important;
  }
}
</style>
