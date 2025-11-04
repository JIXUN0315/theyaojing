<template>
  <!-- 隱藏主標（只給搜尋引擎與螢幕報讀，完全不影響版面） -->
  <h1 class="sr-only">預約諮詢｜曜境 Excellent Future Education</h1>

  <div class="consultation">
    <div
      class="submit-overlay global"
      v-if="isSubmitting"
      aria-live="polite"
      role="status"
    >
      <div class="spinner" aria-hidden="true"></div>
      <div class="loading-text">送出中，請稍候…</div>
    </div>

    <!-- 成功燈箱 -->
    <div
      class="modal-overlay"
      v-if="showSuccess"
      role="dialog"
      aria-modal="true"
      aria-label="送出成功"
    >
      <div class="modal-card">
        <h3>已成功送出！</h3>
        <p>感謝您的填寫，我們將盡快與您聯繫。</p>
        <div class="actions">
          <button class="primary" type="button" @click="goHome">返回首頁</button>
        </div>
      </div>
    </div>

    <!-- 欄位提示燈箱 -->
    <div
      class="modal-overlay"
      v-if="showHint"
      role="dialog"
      aria-modal="true"
      aria-label="提示"
    >
      <div class="modal-card">
        <div class="close" @click="close" aria-label="關閉"></div>
        <h3>請填寫以下欄位</h3>
        <p v-for="value in needInputs" :key="value">{{ value }}</p>
      </div>
    </div>

    <div class="consultation-hero" role="img" aria-label="預約諮詢頁首"></div>

    <div class="consultation-wrapper">
      <!-- FAQ -->
      <section class="faq-container" aria-label="常見問題">
        <div class="faq">
          <h2>常見問題 FAQ</h2>
          <div class="faq-item" v-for="(item, index) in faqs" :key="index">
            <div
              class="faq-question"
              @click="toggle(index)"
              :aria-expanded="item.open ? 'true' : 'false'"
              role="button"
              tabindex="0"
            >
              {{ item.question }}
              <span class="arrow" :class="{ open: item.open }" aria-hidden="true">▶</span>
            </div>
            <transition name="accordion">
              <div class="faq-answer" v-show="item.open">
                {{ item.answer }}
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- 表單 -->
      <section class="form-container" aria-label="預約諮詢表單">
        <h2>預約諮詢表單</h2>

        <div class="stepper" aria-label="步驟條">
          <div :class="['step', { active: step >= 1 }]"><span>1</span></div>
          <div :class="['stepper-line', { active: step >= 2 }]"></div>
          <div :class="['step', { active: step >= 2 }]"><span>2</span></div>
        </div>

        <div class="form">
          <!-- 第一步 -->
          <div class="form-page" v-show="step === 1">
            <label>中文全名 *</label>
            <input
              type="text"
              placeholder="您的姓名"
              required
              v-model="form.fullName"
              autocomplete="name"
            />

            <label>電話 或 LINE ID *</label>
            <input
              type="text"
              placeholder="電話或 LINE ID"
              required
              v-model="form.phoneOrLine"
              autocomplete="tel"
            />
            <small class="note">若留 LINE ID 請確認可接收陌生訊息</small>

            <label>電子郵件 *</label>
            <input
              type="email"
              placeholder="請輸入有效信箱"
              required
              v-model="form.email"
              autocomplete="email"
            />
            <small class="note red" v-show="!emailValid">email 格式錯誤</small>

            <label>畢業(就讀)學校</label>
            <input
              type="text"
              placeholder="學校名稱"
              v-model="form.school"
              autocomplete="organization"
            />

            <label>畢業(就讀)科系</label>
            <input
              type="text"
              placeholder="科系名稱"
              v-model="form.department"
              autocomplete="department"
            />

            <label>想去哪個國家 *</label>
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
                <img
                  :src="country.img"
                  :alt="country.value"
                  loading="lazy"
                  decoding="async"
                />
                <span>{{ country.value }}</span>
              </label>

              <label for="other" class="otherOption">
                <input
                  type="radio"
                  name="targetCountryOther"
                  v-model="form.targetCountry"
                  value="other"
                />
                <input
                  id="other"
                  placeholder="其他"
                  v-model="targetCountryOther"
                  autocomplete="country-name"
                />
              </label>
            </div>
          </div>

          <!-- 第二步 -->
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
                    v-model="form.programType"
                    value="other"
                  />
                  <input
                    id="oth"
                    placeholder="其他"
                    class="otherInput"
                    v-model="programTypeOther"
                  />
                </label>
              </div>
            </div>

            <div class="radio-area">
              <label>欲就讀的科系 *</label>
              <div class="radio-group">
                <label v-for="type in subject" :key="type" class="w-50">
                  <input
                    type="checkbox"
                    :value="type"
                    v-model="form.intendedMajor"
                  />
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
                    autocomplete="name"
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
                  <input
                    type="checkbox"
                    :value="type"
                    v-model="form.questionToResolve"
                  />
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
              <option :value="year">{{ year }}</option>
              <option :value="year + 1">{{ year + 1 }}</option>
              <option :value="year + 2">{{ year + 2 }}</option>
              <option :value="year + 3">{{ year + 3 }}</option>
            </select>

            <label>諮詢方式</label>
            <select v-model="form.askType">
              <option value="實體諮詢">實體諮詢</option>
              <option value="線上諮詢">線上諮詢</option>
            </select>

            <label>其他資訊</label>
            <textarea
              placeholder="歡迎補充其他想讓我們知道的資訊"
              v-model="form.otherInfo"
            ></textarea>
          </div>
        </div>

        <div class="btn-area">
          <div class="lucky" aria-hidden="true"></div>
          <div class="" v-show="step === 1"></div>
          <button type="button" @click="last" v-show="step === 2">上一頁</button>
          <button type="button" @click="next" v-show="step === 1" style="margin-right: 0">
            下一頁
          </button>
          <button
            type="button"
            v-show="step === 2"
            @click="submit"
          >
            立即送出
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import {
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";
import { formSubmit } from "@/api/booking.js";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

// ===== 基本站點/本頁 URL（依你的實際路由調整）=====
const siteUrl = "https://theyaojing.org";
const pageUrl = `${siteUrl}/consultation`;

// ===== Router =====
const router = useRouter();

// ===== 畫面狀態 =====
const showSuccess = ref(false);
const showHint = ref(false);
const needInputs = ref([]);
const isSubmitting = ref(false);
const isMobile = ref(false);
function checkMobile() {
  isMobile.value = window.innerWidth <= 768;
}

// ===== 表單資料（放在使用的計算屬性之前，避免引用順序錯誤）=====
const year = ref(new Date().getFullYear());
const form = ref({
  fullName: "",
  email: "",
  phoneOrLine: "",
  programType: "",
  school: "",
  department: "",
  targetCountry: "",
  departYear: year.value,
  otherInfo: "",
  intendedMajor: [],
  questionToResolve: [],
  referral: "",
  askType: "實體諮詢",
});

// ===== 驗證 =====
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailValid = computed(() => {
  const email = form.value.email || "";
  if (!email.trim()) return true;
  return emailRegex.test(email);
});

const page1Valid = function () {
  needInputs.value = [];
  const f = form.value;
  if (!f.fullName?.trim()) needInputs.value.push("中文全名");
  if (!f.phoneOrLine?.trim()) needInputs.value.push("電話 或 LINE ID");
  if (!emailRegex.test(f.email || "")) needInputs.value.push("電子郵件");
  if (!f.targetCountry?.trim()) needInputs.value.push("想去哪個國家");
};

const page2Valid = function () {
  const f = form.value;
  needInputs.value = [];

  const progOk =
    !!f.programType &&
    (f.programType !== "other" || !!programTypeOther.value.trim());

  const hasMajor =
    (f.intendedMajor?.length || 0) > 0 || !!intendedMajorOther.value.trim();
  const majorOk =
    hasMajor &&
    (!f.intendedMajor.includes("other") || !!intendedMajorOther.value.trim());

  let refOk = !!f.referral;
  if (f.referral === "親友介紹") refOk = refOk && !!recommendName.value.trim();
  if (f.referral === "其他") refOk = refOk && !!referralOther.value.trim();

  if (!progOk) needInputs.value.push("想了解的課程類別");
  if (!majorOk) needInputs.value.push("欲就讀的科系");
  if (!refOk) needInputs.value.push("如何得知曜境");

  return progOk && majorOk && refOk;
};

// ===== FAQ =====
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
    answer: "諮詢時間大約 30–40 分鐘。",
    open: false,
  },
  {
    question: "請問諮詢需要準備什麼？",
    answer:
      "如果方便的話，可以準備好成績單或相關資料，讓我們更了解你的背景。不過最重要的，是帶著一顆輕鬆的心來聊聊夢想與想法，其他的交給我們就好！",
    open: false,
  },
  {
    question: "請問你們有實體辦公室嗎？辦公室在哪裡呢？",
    answer:
      "我們目前沒有固定辦公室，主要在台北/新北咖啡廳見面或安排線上諮詢。無論你在哪裡，我們都能協助安排最適合的留學規劃。",
    open: false,
  },
  {
    question: "你們有單純協助文件或落點分析的服務嗎？",
    answer: "有的，歡迎直接預約諮詢討論細節。",
    open: false,
  },
]);

const step = ref(1);

const toggle = (index) => {
  faqs[index].open = !faqs[index].open;
};

// ===== 選項 =====
const targetCountryOther = ref("");
const questionToResolveOther = ref("");
const intendedMajorOther = ref("");
const programTypeOther = ref("");
const referralOther = ref("");
const recommendName = ref("");

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
  "學校/科系選擇",
  "文件準備（CV/SOP/推薦信等）",
  "申請流程 / 時間規劃",
  "語言考試準備",
  "我太忙／太懶，不知道從哪開始",
  "想有人幫我搞定一切",
];

const courseTypes = [
  "中學",
  "社區大學/副學士",
  "學士",
  "碩士",
  "博士",
  "語言學校",
  "遊學團",
  "證照課程",
];

const subject = ["商科", "工程類", "科學類", "藝術設計", "人文相關"];
const howKnow = ["Google Search", "Instagram", "Facebook", "Dcard", "Threads"];

// ===== 送出 =====
const submit = async () => {
  if (isSubmitting.value) return;

  page2Valid();
  if (needInputs.value.length > 0) {
    showHint.value = true;
    return;
  }

  isSubmitting.value = true;
  const data = { ...form.value };

  data.departYear = String(data.departYear);

  if (data.targetCountry === "other") {
    data.targetCountry = targetCountryOther.value.trim();
  }

  if (data.programType === "other") {
    data.programType = programTypeOther.value.trim();
  }

  const majorIndex = data.intendedMajor.findIndex((x) => x === "other");
  if (majorIndex !== -1) {
    data.intendedMajor[majorIndex] = intendedMajorOther.value.trim();
  } else if (!data.intendedMajor.length && intendedMajorOther.value.trim()) {
    data.intendedMajor.push(intendedMajorOther.value.trim());
  }

  const queIndex = data.questionToResolve.findIndex((x) => x === "other");
  if (queIndex !== -1) {
    data.questionToResolve[queIndex] = questionToResolveOther.value.trim();
  } else if (
    !data.questionToResolve.length &&
    questionToResolveOther.value.trim()
  ) {
    data.questionToResolve.push(questionToResolveOther.value.trim());
  }

  if (data.referral === "親友介紹") {
    data.referral = `親友介紹:${recommendName.value.trim()}`;
  } else if (data.referral === "其他") {
    data.referral = referralOther.value.trim();
  }

  try {
    await formSubmit.send(null, data);
    isSubmitting.value = false;
    showSuccess.value = true;
  } catch (err) {
    console.error(err);
    alert("送出失敗，請稍後再試或聯繫我們。");
    isSubmitting.value = false;
  }
};

async function goHome() {
  await router.push({ path: "/", hash: "" });
  await nextTick();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  });
}

function next() {
  page1Valid();
  if (needInputs.value.length > 0) {
    showHint.value = true;
    return;
  }
  step.value = 2;
  const formContainer = document.querySelector(".form-container");
  const offset =
    formContainer.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

function last() {
  step.value = 1;
  const formContainer = document.querySelector(".form-container");
  const offset =
    formContainer.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

function close() {
  showHint.value = false;
}

// 「其他」輸入框 → 自動對應選項
watch(targetCountryOther, (val) => {
  if (val && val.trim()) form.value.targetCountry = "other";
});
watch(programTypeOther, (val) => {
  if (val && val.trim()) form.value.programType = "other";
});
watch(intendedMajorOther, (val) => {
  if (val && val.trim() && !form.value.intendedMajor.includes("other")) {
    form.value.intendedMajor.push("other");
  }
});
watch(referralOther, (val) => {
  if (val && val.trim()) form.value.referral = "其他";
});
watch(questionToResolveOther, (val) => {
  if (val && val.trim() && !form.value.questionToResolve.includes("other")) {
    form.value.questionToResolve.push("other");
  }
});

// ===== <head>：本頁 SEO =====
useHead({
  title: "預約諮詢｜曜境 Excellent Future Education",
  meta: [
    {
      name: "description",
      content:
        "預約留學諮詢：英美澳加申請規劃、科系選擇、文件指導（SOP/CV/推薦信）、簽證與行前準備。一對一專業顧問，全程陪伴。",
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "預約諮詢｜曜境 Excellent Future Education" },
    {
      property: "og:description",
      content:
        "英美澳加留學一對一諮詢與全程代辦，提供專業文件指導與時間規劃，幫你走得穩、走得對。",
    },
    { property: "og:url", content: pageUrl },
    { property: "og:image", content: `${siteUrl}/logo.jpg` },
    { property: "og:locale", content: "zh_TW" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "預約諮詢｜曜境 Excellent Future Education" },
    {
      name: "twitter:description",
      content:
        "預約留學諮詢：英美澳加申請、文件指導、簽證與行前準備，一次搞定。",
    },
    { name: "twitter:image", content: `${siteUrl}/logo.jpg` },
  ],
  link: [
    { rel: "canonical", href: pageUrl },
    { rel: "alternate", hreflang: "zh-Hant-TW", href: pageUrl },
  ],
  script: [
    // FAQPage 結構化資料（由畫面上的 faqs 生成）
    {
      type: "application/ld+json",
      children: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }),
    },
  ],
});

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
<style scoped lang="scss">
/* 只給無障礙/SEO 用的隱藏文字，不影響版面 */
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

.consultation-hero {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/images/booking-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -50px;
  @media (max-width: 768px) {
    height: 30vh;
    background-position: center;
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

      .w-50 {
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
    .question-area {
      .w-50 {
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
.red {
  color: red !important;
}
.disabled {
  background-color: #afafafff !important;
  color: #fff !important;
  outline: 0 !important;
  cursor: not-allowed !important;
}

/* Accordion 動畫 */
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
  background: #fffac9;
  color: #ccc544;
  display: grid;
  place-items: center;
  font-weight: 700;
  transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

  &.active {
    background: #ffee55;
    color: #063a5e;
    box-shadow: 0 0 0 3px rgba(208, 204, 93, 0.7);
  }
}
.stepper-line {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: #fffac9;
  overflow: hidden;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    width: 0%;
    background: #ffee55;
    transition: width 0.35s ease;
  }
  &.active:before {
    width: 100%;
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
/* 全頁送出遮罩 */
.submit-overlay.global {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
  pointer-events: all;
}
.spinner {
  width: 44px;
  height: 44px;
  border: 4px solid rgba(6, 58, 94, 0.2);
  border-top-color: #063a5e;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 12px;
}
.loading-text {
  color: #063a5e;
  font-weight: 600;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 成功燈箱 */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.modal-card {
  width: min(520px, 92vw);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  padding: 24px 20px;
  text-align: center;
  position: relative;
}
.modal-card h3 { margin: 0 0 8px; color: #063a5e; }
.modal-card p { margin: 4px 0; color: #333; }
.modal-card .countdown { margin-top: 10px; font-weight: 600; color: #063a5e; }
.modal-card .actions {
  margin-top: 16px; display: flex; justify-content: center; gap: 12px;
}
.modal-card .actions .primary {
  background-color: #ffee55; color: #063a5e; font-weight: 700;
  padding: 0.7rem 1.2rem; border: none; border-radius: 8px; cursor: pointer;
}
.modal-card .actions .primary:hover { background-color: #d8c93e; }
.close {
  position: absolute; top: 0; right: 0; width: 30px; height: 30px;
  background-image: url("@/assets/images/close.svg");
  background-position: center; cursor: pointer;
}
</style>
