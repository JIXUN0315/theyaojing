<template>
  <div class="consultation">
    <div class="consultation-hero"></div>
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
        <div class="stepper">
          <div :class="['step', { active: step >= 1 }]"><span>1</span></div>
          <div :class="['stepper-line', { active: step >= 2 }]"></div>
          <div :class="['step', { active: step >= 2 }]"><span>2</span></div>
        </div>
        <div class="form">
          <div class="form-page" v-show="step === 1">
            <label>中文全名 *</label>
            <input
              type="text"
              placeholder="您的姓名"
              required
              v-model="form.fullName"
            />
            <label>電話 或 LINE ID *</label>
            <input
              type="text"
              placeholder="電話或 LINE ID"
              required
              v-model="form.phoneOrLine"
            />
            <small class="note">若留LINE ID 請確認可接收陌生訊息</small>
            <label>電子郵件 *</label>
            <input
              type="email"
              placeholder="請輸入有效信箱"
              required
              v-model="form.email"
            />
            <label>畢業(就讀)學校</label>
            <input type="text" placeholder="學校名稱" v-model="form.school" />
            <label>畢業(就讀)科系</label>
            <input
              type="text"
              placeholder="科系名稱"
              v-model="form.department"
            />
            <label>想去哪個國家</label>
            <div class="country-options">
              <label
                v-for="country in countryOptions"
                :key="country.value"
                class="country-card"
              >
                <input
                  type="radio"
                  :value="country.value"
                  v-model="form.targetCountry"
                  name="targetCountryOther"
                />
                <img :src="country.img" :alt="country.value" />
                <span>{{ country.value }}</span>
              </label>
              <label for="other" class="otherOption">
                <input
                  type="radio"
                  name="targetCountryOther"
                  placeholder="其他"
                  v-model="form.targetCountry"
                  value="other"
                />
                <input id="other" placeholder="其他" v-model="targetCountryOther"/>
              </label>
            </div>
          </div>
          <div class="form-page" v-show="step === 2">
            <div class="radio-area">
              <label>想了解的課程類別 *</label>
              <div class="radio-group">
                <label v-for="type in courseTypes" :key="type" class="w-50">
                  <input
                    type="radio"
                    :value="type"
                    v-model="form.programType"
                    name="courseType"
                    required
                  />
                  {{ type }}
                </label>
                <label for="oth" class="othOption">
                  <input
                    type="radio"
                    name="courseType"
                    placeholder="其他"
                    v-model="form.programType"
                    value="other"
                  />
                  <input id="oth" placeholder="其他" class="otherInput" v-model="programTypeOther" />
                </label>
              </div>
            </div>

            <div class="radio-area">
              <label>欲就讀的科系 *</label>
              <div class="radio-group">
                <label v-for="type in subject" :key="type" class="w-50">
                  <input type="checkbox" :value="type" v-model="form.intendedMajor" />
                  {{ type }}
                </label>
                <label for="othSub">
                  <input
                    type="checkbox"
                    name="subjectOth"
                    v-model="form.intendedMajor"
                    id="othSub"
                    value="other"
                  />
                  <input
                    placeholder="其他"
                    class="otherInput"
                    v-model="intendedMajorOther"
                  />
                </label>
              </div>
            </div>

            <div class="radio-area">
              <label>如何得知曜境 *</label>
              <div class="radio-group">
                <label v-for="type in howKnow" :key="type">
                  <input
                    type="radio"
                    :value="type"
                    v-model="form.referral"
                    name="howKnow"
                    required
                  />
                  {{ type }}
                </label>
                <label
                  for="othRel"
                  :class="{ relatives: form.referral == '親友介紹' }"
                >
                  <input
                    type="radio"
                    name="howKnow"
                    v-model="form.referral"
                    id="othRel"
                    value="親友介紹"
                  />
                  <span style="width: 90px">親友介紹</span>
                  <input
                    v-show="form.referral == '親友介紹'"
                    placeholder="請輸入推薦人"
                    class="otherInput"
                    style="width: 140px"
                    v-model="recommendName"
                  />
                </label>

                <label for="othHow">
                  <input
                    type="radio"
                    name="howKnow"
                    v-model="form.referral"
                    id="othHow"
                    value="其他"
                  />
                  <input
                    placeholder="其他"
                    class="otherInput"
                    v-model="referralOther"
                  />
                </label>
              </div>
            </div>

            <div class="radio-area question-area">
              <label>您最想解決的問題是什麼？</label>
              <div class="radio-group">
                <label v-for="type in questionOptions" :key="type" class="w-50">
                  <input type="checkbox" :value="type" v-model="form.questionToResolve" />
                  {{ type }}
                </label>
                <label for="othQue">
                  <input
                    type="checkbox"
                    name="subjectOth"
                    v-model="form.questionToResolve"
                    id="othQue"
                    value="other"
                  />
                  <input
                    placeholder="其他"
                    class="otherInput"
                    v-model="questionToResolveOther"
                  />
                </label>
              </div>
            </div>

            <label>預計哪一年出發就讀</label>
            <select v-model="form.departYear">
              <option :value="year">{{year}}</option>
              <option :value="year+1">{{year+1}}</option>
              <option :value="year+2">{{year+2}}</option>
              <option :value="year+3">{{year+3}}</option>
            </select>

            <label>諮詢方式</label>
            <select>
              <option value="">實體諮詢</option>
              <option value="">線上諮詢</option>
            </select>

            <label>其他資訊</label>
            <textarea
              placeholder="歡迎補充其他想讓我們知道的資訊"
              v-model="form.otherInfo"
            ></textarea>
          </div>
        </div>
        <div class="btn-area">
          <div class="lucky"></div>
          <div class="" v-show="step === 1"></div>
          <button @click="last" v-show="step === 2">上一頁</button>
          <button @click="next" v-show="step === 1" style="margin-right: 0">
            下一頁
          </button>
          <button v-show="step === 2" @click="submit">立即送出</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { formSubmit } from '@/api/booking.js';
import axios from 'axios';
const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 768; // 768px 以下視為手機
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});

const faqs = reactive([
  {
    question: "是否只服務特定國家的申請？",
    answer:
      "我們主要服務英、美、澳、加的留學申請，如有其他國家需求，也歡迎直接與我們聯繫討論。",
    open: false,
  },
  {
    question: "第一次諮詢需要付費嗎？",
    answer:
      "不需要！我們提供一次免費諮詢，讓你能先認識我們的服務方式與流程，再決定是否進一步合作。",
    open: false,
  },
  {
    question: "請問諮詢大概會需要多長時間？",
    answer: "諮詢時間大約30-40分鐘。",
    open: false,
  },
  {
    question: "請問諮詢需要準備什麼？",
    answer:
      "如果方便的話，可以準備好成績單或相關資料，讓我們更了解你的背景。不過最重要的，是帶著一顆輕鬆愉快的心來聊聊您的夢想與想法，其他的交給我們就好！",
    open: false,
  },
  {
    question: "請問你們有實體辦公室嗎？辦公室在哪裡呢？",
    answer:
      "我們目前沒有固定的辦公室，採取比較彈性的方式來安排諮詢。想要面對面聊的話，我們主要會在台北或新北的咖啡廳見面，環境輕鬆，我們也會請您喝杯飲料，讓討論更沒有壓力。當然，也有很多學生會選擇線上諮詢，不受地點限制，方便又高效。無論您在哪裡，我們都能協助您安排最適合的留學規劃。",
    open: false,
  },
  {
    question: "你們有單純協助文件或落點分析的服務嗎？",
    answer: "有的，歡迎直接預約諮詢討論細節。",
    open: false,
  },
]);

const step = ref(1);

const year = ref(new Date().getFullYear());

const toggle = (index) => {
  faqs[index].open = !faqs[index].open;
};

const targetCountryOther = ref("");
const questionToResolveOther = ref("");
const intendedMajorOther = ref("");
const programTypeOther = ref("");
const referralOther = ref("");
const recommendName = ref("");

const form = ref({
  fullName: "",
  email: "",
  phoneOrLine: "",
  programType:"",
  school: "",
  department: "",
  targetCountry: "",
  departYear: year.value,
  otherInfo: "",
  intendedMajor: [],
  questionToResolve: [],
  referral: "",
});

const countryOptions = [
  {
    value: "英國",
    img: new URL("@/assets/images/uk.jpg", import.meta.url).href,
  },
  {
    value: "美國",
    img: new URL("@/assets/images/usa.jpg", import.meta.url).href,
  },
  {
    value: "澳洲",
    img: new URL("@/assets/images/australia.jpg", import.meta.url).href,
  },
  {
    value: "加拿大",
    img: new URL("@/assets/images/canada.jpg", import.meta.url).href,
  },
];

const questionOptions = [
  "學校/科系選擇","文件準備（CV/SOP/推薦信等","申請流程 / 時間規劃", "語言考試準備", "我太忙／太懶，不知道從哪開始", "想有人幫我搞定一切"
]

const courseTypes = [
  "中學",
  "社區大學/副學士",
  "學士",
  "碩士",
  "博士",
  "語言學校",
  "遊學團",
  "證照課程"
];
const subject = ["商科", "工程類", "科學類", "藝術設計", "人文相關"];
const howKnow = ["Google Search", "Instagram", "Facebook", "Dcard", "Threads"];
const submit = async () => {
  let data = form.value;
  data.departYear = data.departYear.toString();
   await formSubmit.send(null, data);
  alert("送出成功！我們將儘快聯絡你。");
};
// const submit = async () => {
//   try {
//     const data = form.value;
//     data.departYear = data.departYear.toString();
//     await axios.post('/api/Form/submit', data, {
//       headers: { 'Content-Type': 'application/json' }
//     });
//     alert('送出成功！我們將儘快聯絡你。');
//   } catch (err) {
//     console.error('提交失敗:', err);
//     alert('送出失敗，請稍後再試。');
//   }
// };

function next() {
  step.value = 2;
  const formContainer = document.querySelector(".form-container");
  const offset =
    formContainer.getBoundingClientRect().top + window.scrollY - 60;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
function last() {
  step.value = 1;
  const formContainer = document.querySelector(".form-container");
  const offset =
    formContainer.getBoundingClientRect().top + window.scrollY - 60;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="scss">
.consultation-hero {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/images/booking-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -50px;
  @media (max-width: 768px) {
    height: 30vh;
  }
}
.consultation-wrapper {
  display: flex;
  flex-wrap: wrap;
  background-color: #f7faff;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.relatives {
  width: 260px !important;
  @media (max-width: 768px) {
    width: 100%;
  }
}
section {
  background-color: white;
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
  padding-bottom: 60px;
}
.faq-container {
  background-image: url("@/assets/images/FAQ-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 55px 2rem;
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
  padding: 2rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);

  .form {
    .form-page {
      box-sizing: border-box;
      min-height: 1000px;
    }
    label {
      display: block;
      padding-top: 12px;
      font-weight: 600;
      color: #333;
    }

    input,
    textarea {
      width: calc(100% - 18px);
      margin-top: 0.25rem;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }
    select {
      width: 100%;
      margin-top: 0.25rem;
      padding: 8px;
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
      margin-bottom: 0.25rem;
    }

    .country-options {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      @media (max-width: 768px) {
        margin-top: 1rem;
      }

      .country-card {
        @media (min-width: 768px) {
          max-width: 250px;
          margin-top: 5px;
        }
        width: calc(50% - 0.5rem);
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 0.5rem;
        box-sizing: border-box;
        cursor: pointer;
        transition: 0.3s;

        input {
          display: none;
        }

        img {
          width: 100%;
          height: 80%;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          width: calc(50% - 0.5rem);
          height: 230px;
        }
        span {
          display: block;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        &:has(input:checked) {
          border-color: #007aff;
          box-shadow: 0 0 0 2px #007aff33;
          background-color: #007aff33;
        }
        @media (max-width: 768px) {
          width: 100%;
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
      margin: 12px 0;
      .otherInput {
        width: 100%;
      }
      label {
        margin: 0;
        padding: 5px 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        width: calc(33% - 1rem);
        @media (max-width: 768px) {
          width: 100%;
        }
        input {
          width: auto;
        }
      }
      
      .w-50{
        @media (max-width: 768px) {
          width: calc(50% - 0.5rem);
        }
      }
      .othOption {
        padding: 0;
        input {
          margin-top: 0;
        }
      }
      input[type="text"] {
        margin-top: 0.5rem;
        flex: 1;
        width: 100%;
      }
    }
    .question-area{
      .w-50{
            width: calc(50% - 1rem);
      }
    }
  }
  .btn-area {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 50px;
    padding: 0;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0;
    }
    .lucky {
      position: absolute;
      top: -90px;
      left: calc(50% + 55px);
      width: 200px;
      height: 250px;
      background-image: url("@/assets/images/lucky.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      @media (max-width: 1280px) {
       left: calc(50% - 10px);
    }
    @media (max-width: 1280px) {
       left: calc(50% - 60px);
    }
    @media (max-width: 768px) {
          top: -75px;
     left: calc(50% - 70px);
     width: 180px;
    height: 225px;
    }
    
    }
    button {
      position: relative;
      z-index: 3;
      margin-top: 2rem;
      background-color: #ffee55;
      color: #063a5e;
      font-weight: bold;
      padding: 0.9rem 1.5rem;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      // margin-left: 20px;
      // margin-right: 20px;
      cursor: pointer;

      &:hover {
        background-color: #d8c93e;
      }
      @media (max-width: 768px) {
        margin-right: 0;
        padding: 0.5rem 1rem;
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
small {
  display: block;
}
.otherOption {
  display: flex;
  input {
    margin-right: 10px;
    width: auto !important;
  }
}
.stepper {
  display: flex;
  align-items: center;
  padding: 2px 30px;
}

.step {
  position: relative;
  z-index: 10;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fffac9; // 未完成的淺藍
  color: #ccc544; // 文字藍
  display: grid;
  place-items: center;
  font-weight: 700;
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

  &.active {
    background: #ffee55; // 已完成的藍色
    color: #063a5e;
    box-shadow: 0 0 0 3px rgba(208, 204, 93, 0.7);
  }
}

.stepper-line {
  flex: 1; // 自動撐滿兩點之間
  height: 6px;
  border-radius: 999px;
  background: #fffac9; // 未完成的線
  overflow: hidden;
  position: relative;

  // 用內層條做「填滿」動畫
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    width: 0%; // 初始 0%
    background: #ffee55; // 已完成顏色
    transition: width 0.35s ease;
  }

  &.active:before {
    width: 100%; // step>=2 就填滿
  }
}
.next-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 20px 0;
  .lucky {
    position: absolute;
    top: -80px;
    left: 100px;
    width: 200px;
    height: 250px;
    background-image: url("@/assets/images/lucky.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 1280px) {
      left: -30px;
    }
  }
  button {
    position: relative;
    z-index: 3;
    background-color: #ffee55;
    color: #063a5e;
    font-weight: bold;
    padding: 0.9rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #d8c93e;
    }
  }
}
</style>
