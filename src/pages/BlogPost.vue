<template>
  <div class="post-page" v-if="post">
    <!-- 返回 -->
    <div class="back-column">
      <router-link to="/blog" class="back-link">← 上一頁</router-link>
    </div>

    <!-- 文章首屏 -->
    <section class="post-hero">
      <div class="post-meta">
        <p class="date">{{ post.date }}</p>
        <h1 class="title">{{ post.title }}</h1>
        <span v-if="post.school" class="school">{{ post.school }}</span>
        <span v-if="post.info" class="school">{{ post.info }}</span>
        <router-link
          
          class="category"
        >
          {{ post.category }}
        </router-link>
      </div>
      <div class="post-cover">
        <Carousel
          :items-to-show="post.images.length > 1 ? 1.2 : 1"
          :wrap-around="post.images.length > 1"
          :mouse-drag="post.images.length > 1"
          :touch-drag="post.images.length > 1"
          :transition="500"
          :autoplay="post.images.length > 1 ? 5000 : 0"
          class="carousel"
        >
          <Slide v-for="(img, i) in post.images" :key="i">
            <!-- 固定比例外框：所有圖片都塞進同一個比例 -->
            <figure class="slide-media">
              <img :src="img" :alt="`${post.title}-${i + 1}`" loading="lazy" />
            </figure>
          </Slide>
          <template #addons>
            <Navigation v-if="post.images.length > 1" />
          </template>
        </Carousel>
      </div>
    </section>

    <hr />

    <!-- 文章內容 -->
    <section class="post-body">
      <div v-html="post.content"></div>
    </section>
  </div>

  <!-- 找不到文章 -->
  <div v-else class="post-not-found">
    <div class="back-column">
      <router-link to="/blog" class="back-link">← 回文章列表</router-link>
    </div>
    <h1>找不到這篇文章</h1>
    <p>請返回列表重新選擇。</p>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const route = useRoute();
const slug = route.params.slug;

// 模擬文章資料（你之後可以用 props 或 API 帶入）
const posts = ref([
  {
    slug: "post-01",
    date: "2025.7.28",
    title: "CW. Mai",
    school: "Case Western University",
    info: "MS Biostatistics (全美國生物統計排名#28)",
    category: "#服務心得",
    images: [new URL("@/assets/images/stu1.jpg", import.meta.url).href],
    content: `<p>在考慮要不要請代辦的時間裡我諮詢了幾間不同的公司，直到跟 Shelly 面談過後我才下定決心要請他們協助。</p>

<p>在申請的過程中 Shelly 的團隊不僅回應迅速、有問必答，給了我們非常多實用的建議，更提前幫我安排好了每個時間點要做的事情。</p>

<p>跟著他們的提示我不再毫無頭緒而是胸有成竹地逐步完成每個步驟。Shelly 對於學校的要求非常熟悉，落點分析亦相當準確，與最終結果幾乎完全相同。</p>

<p>申請結果出來後，Shelly 也積極協助學籍註冊、公寓租住、獎學金申請等問題。因為 Shelly 的幫助，我的整個申請過程都非常順利；若未來有親朋好友需要申請海外大學，我會建議請 Shelly 他們幫忙！</p>`,
  },
  {
    slug: "post-02",
    date: "2025.8.3",
    title: "Heidi Liang",
    school: "The University of Manchester",
    info: "MSc Operations, Project and Supply Chain Management",
    category: "#服務心得",
    images: [new URL("@/assets/images/stu2.png", import.meta.url).href],
    content: `<p>在準備英國留學申請的過程中，因為當時一邊工作、一邊準備雅思，時間非常緊湊，真的很感謝 Shelly 在每個階段給予我很多幫助。</p>

<p>從選校方向的討論、申請文件的準備，到後期簽證的處理，她都非常細心，讓整體流程清楚又有條理，對我來說是很大的支持。</p>

<p>尤其在文件準備階段，Shelly 會主動提醒我申請時程、細節格式，並協助潤飾文件內容，幫助我展現出自己最合適的一面，這對正在上班、又要分心準備語言考試的我來說非常重要。</p>

<p>即使在申請期間遇到一些不確定的狀況，她也都會耐心協助處理，幫我釐清方向，讓我能夠穩定地完成每個申請步驟。</p>

<p>最終順利拿到理想學校的 offer，真的很感謝她一路上的協助與鼓勵。這段留學準備的旅程能夠順利起步，有她的幫忙是一個很重要的關鍵。</p>
`,
  },
  {
    slug: "post-03",
    date: "2025.8.3", // 沒提供日期，我延續前後脈絡加上
    title: "Chien",
    school: "University of Nottingham",
    info: "MSc Entrepreneurship, Innovation and Management",
    category: "#服務心得",
    images: [
      new URL("@/assets/images/stu3.jpg", import.meta.url).href,
      // new URL("@/assets/images/posts/post-03-2.jpg", import.meta.url).href,
    ],
    content: `<p>真的很細心，不論是文案填寫，還是抵達英國後遇到的一些臨時問題，都能很有效率的協助幫忙。</p>

<p>在申請的過程中，也會貼心提醒下一步應該做什麼，不會讓人有忙不過來的感覺。</p>

<p>主要強項是文案部分，包含申請時的 PS 和 CV，以及額外申請獎學金的時候，都幫了我很大的忙。</p>

<p><b>留學的收穫</b><br>來英國讀書不只是接觸新知識，還能認識到很多不一樣的人，打開眼界和想法，非常值得。</p>

<p><b>校園小分享</b><br>Jubilee Campus 距離市中心公車約 20 分鐘，校園裡有很多鴨子和大雁，還有漂亮的圖書館能徹夜讀書，甚至能看到極光。</p>

<p><b>課程感想</b><br>必修課和老師都特別好，畢業需 120 學分（必修 + 論文/商業報告 + 2 門選修），選修雖不多但整體不錯，以 essay 為評分標準。</p>

<p><b>住宿生活</b><br>住在市中心，上學搭公車很方便（建議買學生年票），周邊超市多，宿舍安全也能認識很多朋友。</p>

<p><b>實習與工作</b><br>商業報告課程有機會與企業接觸；學校也安排就業講座，協助修改履歷等免費服務。</p>
`,
  },
  {
    slug: "post-04",
    date: "2025.8.3", // 與前後案例一致，若有正確日期可再調整
    title: "Jessie",
    school: "The University of Manchester",
    info: "MSc Finance",
    category: "#服務心得",
    images: [new URL("@/assets/images/stu4.jpg", import.meta.url).href],
    content: `<p>整個申請過程中都有給予很多有用的建議，也會耐心聽我們的顧慮。做事效率高、資訊來源豐富，還幫助我找到讀同系的同學，去讀書的時候不會那麼焦慮；後續學費問題也協助解決，整體感受很好！</p>

<p><b>留學的收穫</b><br>最大的收穫是人際關係的擴展，因為來讀碩士的人來自不同地方甚至國家，年齡也有差異，在不同人身上學到不同東西，彼此產生革命情感。跨出舒適圈，認識了以前在台灣不可能遇到的人，覺得視野真的變開闊了。</p>

<p><b>校園小分享</b><br>學校離市區不遠（走路約 30 分鐘），公車便利；校園感很強，天氣好時大家會在草地野餐；校園內圖書館很多，隨時都能去讀書，宿舍也離校園很近。</p>

<p><b>課程感想</b><br>必修 60 學分、選修 60 學分、論文 60 學分。選修與必修多和論文相關；例如 behavioural finance 課程很有趣，以不同角度學習金融。</p>

<p><b>住宿生活</b><br>選擇住校外 vita 宿舍，有自己的廁所與廚房，設施齊全且活動多；週一到週五提供簡單早餐，每兩週有打掃人員整理，十分方便。</p>

<p><b>實習與工作</b><br>學校有許多 career 相關講座，例如修改 CV、職涯發展。至於找工作競爭確實比較激烈。</p>
`,
  },
  {
    slug: "post-05",
    date: "2025.8.3",
    title: "Ann（紐約成人急重症專師）",
    school: "University of Pennsylvania",
    info: "Master of Science in Nursing / Adult Gerontology Acute Care Nurse Practitioner",
    category: "#留學故事——勇敢跳脫舒適圈：以前的我 vs 現在的我",
    images: [
      new URL("@/assets/images/stu5.jpg", import.meta.url).href,
      new URL("@/assets/images/stu5-1.jpg", import.meta.url).href,
      new URL("@/assets/images/stu5-2.jpg", import.meta.url).href,
    ],
    content: `<p>在開始申請學校前，我一直以為名校只屬於頂尖學霸，而自己過去的成績並不算突出。但我想，既然要花這麼多學費，當然要投得值得！雖然一開始連代辦都建議我多申請一些中後段的學校來保險，但最後我還是決定勇敢追夢。</p>

<p>後來，我真的拿到了賓大的面試機會。上網查到大概只有 25% 的錄取率，於是從收到面試通知那一刻起，我就全力準備。結果當天面試結束後緊張到完全不記得自己說了什麼，直到後來收到錄取通知的那一刻，我激動到大哭！沒想到自己竟然能考上第一志願。</p>

<p><b>初到美國的挑戰</b><br>剛到美國時真的很辛苦。班上沒有任何會說中文的同學，教授講課也假設大家英文都流利，語速快到聽不懂。幸好每堂課都有錄影，讓我能回家反覆複習。我告訴自己，只要花比別人更多時間，就一定能撐下來。</p>

<p>一開始英文不好，讓我在課堂上幾乎不敢開口。因為太安靜，還常被教授點名發言。美國同學習慣分享觀點，相比之下我的沉默格外突兀。那段時間覺得既痛苦又尷尬，但慢慢地，我也開始習慣，甚至漸漸愛上表達自己的看法，變得更勇敢做自己。</p>

<p><b>跨出舒適圈的收穫</b><br>剛到美國的第一學期，我幾乎天天哭，不是因為想家，而是深感挫折。但撐過去之後，到了第二學期就逐漸適應。雖然過程艱難，但絕對值得，因為它讓我更加堅強、自信，也獲得了遠超過付出的成長。</p>
`,
  },
  {
    slug: "post-06",
    date: "2025.05.31",
    title: "Dustin",
    school: "Purdue University",
    info: "MS Chemical Engineering",
    category: "#留學故事——留學後的我變了",
    images: [
      new URL("@/assets/images/shareblog01.jpg", import.meta.url).href,
      new URL("@/assets/images/stu6-1.jpg", import.meta.url).href,
      new URL("@/assets/images/stu6-2.jpg", import.meta.url).href,
    ],
    content: `<p>會萌生出國深造的想法，一方面來自兒時印象中電視裡美國校園的宏偉與清幽環境，另一方面則是因為工作時曾短期出差美國所見所聞。加上當時全球疫情逐漸趨緩，於是決定踏上許多人也走過的留學之路。</p>

<p>經過留學考試的洗禮後，我收到了學校的錄取信。接著是一連串申請文件的往返，在代辦的積極協助下，一切都進行得相當順利，直到登機那一天，才真實感受到新的篇章即將展開。</p>

<p>於普度大學化學工程學系碩士的一年學程中，我深刻體驗到其他國際學生的努力、教授們各種有別於家鄉的創新教學風格、軟硬體設施的多樣化、周邊廣袤的綠地環境等等。徜徉於這樣的氛圍，使自己在短短一年時間得以大量吸收異國文化、且進一步反思自身的不足。要不改變，真的很難。</p>

<p><b>跨文化的挑戰與突破</b><br>為了練習更多表達機會，我刻意讓自己走出舒適圈，例如與不同國籍的室友同住，在課堂分組時也盡量選擇外國組員。我還參加校內外各種活動，甚至在課業許可的情況下嘗試校內打工，體驗不同於家鄉的職場文化。過程中常會有語言隔閡、想法衝突，有孤獨、有障礙，但最終都能被克服，並帶來意想不到的收穫。這正是留學最珍貴的價值。</p>

<p><b>留學的意義</b><br>雖說在外遇到同鄉人很是溫暖，唯其文化、語言、習慣早已熟悉，若還是將大部分時間花在熟悉的人事物上，便有些可惜。畢竟遠赴他鄉的初衷，應包含見識當地文化、結交異國朋友等。許多原本的觀念與偏見，會在下飛機的那一刻起瞬間改變。由於語言風俗的不同，以及必須在陌生環境生活超過觀光客所能停留的時間，最後會發展出一套獨有的應對方式。這是觀光客無法體驗的深度，也讓我在不知不覺中突破了自我。</p>

<p><b>回望這段旅程</b><br>時間猶如不停歇的旅人，迄今已距離畢業近一年。倘若當初未能把握疫後難得的時機，或因懷疑而躊躇不前，最終未能實現拓展視野、訓練自己的機會，或許現在也只能透過網路或口耳相傳吸收片面資訊，乾羨慕別人的故事而已。</p>
`,
  },
  {
    slug: "post-07",
    date: "2025.7.17",
    title: "Bryant",
    school: "Abbey College Cambridge",
    info: "GCSE",
    category: "#留學故事——我來留學後才知道的事",
    images: [new URL("@/assets/images/stu7.jpg", import.meta.url).href],
    content: `<p>去年八月底來到英國之後，從課業到日常生活都經歷了許多改變。</p>

<p><b>課業上的不同</b><br>和台灣高中制度最大的差異在於，這裡的學生可以自由選擇有興趣的學科，讓我更有動力，也能逐步探索真正想發展的方向。課堂氛圍輕鬆，沒有台灣那麼大壓力，反而更主動準備。最印象深刻的是，同學們踴躍舉手發言，積極表達想法，這在台灣較少見，也讓我學會更勇敢地分享觀點。</p>

<p><b>下課後</b><br>四點鐘一到，大部分同學不是立刻去圖書館，而是結伴回家或去市中心逛街、吃飯。這樣的自由需要自己規劃生活與學習，久而久之我變得更獨立，也更懂得如何在輕鬆與自律間找到平衡。</p>

<p><b>生活上的體驗</b><br>英國高物價讓我印象深刻。在台灣一碗百元牛肉麵，這裡卻要價台幣 500 元以上；珍奶一杯也要兩三百元，常常讓人猶豫。於是開始自己下廚，學會規劃採買、控制預算，也享受到為自己準備一餐的成就感。</p>

<p><b>天氣體驗</b><br>九月開學時還好，但十月後開始下綿綿細雨。十一月氣溫驟降，下午四點天色全黑，每週三、四天都在下雨，甚至晴空一秒、冰雹下一秒，體會到難搞的英國天氣。</p>

<p><b>留學的收穫</b><br>這段經歷改變了舊有想法，也讓我體驗到許多新事物，結交來自世界各地的朋友。對我而言，這趟旅程絕對值得。</p>
`,
  },
  {
    slug: "post-08",
    date: "2025.6.25",
    title: "Vera Kuo",
    school: "The University of Leeds",
    info: "MA Corporate Communications, Marketing and Public Relations",
    category: "#服務心得",
    images: [
      new URL("@/assets/images/stu8.jpg", import.meta.url).href,
      // new URL("@/assets/images/posts/post-08-2.jpg", import.meta.url).href,
    ],
    content: `<p>整個申請流程中 Shelly 顧問扮演非常重要的角色，從文案引導、流程掌握到資訊正確性都無可挑剔，整體體驗感相當好。</p>

<p>由於我的準備時間偏短，且當時我仍是上班族，Shelly 成功幫助我在短時間內將志願方向定好並開始做相關準備，萬無一失。</p>

<p>對很多人來說，留學申請是一條漫漫長路，準備期長且繁瑣。非常感謝 Shelly 團隊讓這一切變得清楚又簡單，讓我使用最少的精力走過這艱難的申請過程。在海外的期間，Shelly 也不忘給予關心，讓我的留學體驗相當好。</p>

<p><b>留學的收穫</b><br>這趟留學最大的收穫是結交各方朋友及累積海外生活經驗，開拓我的世界觀。對我來說學科固然重要，但我更想把握留學期間的生活體驗，包括與同學互動、人脈累積及在地職場經驗。目前為止我認為都收穫到了，也提醒自己要更積極把握機會，去擁抱並沉澱這段獨一無二的旅程。</p>

<p><b>校園小分享</b><br>利茲是由多所大學組成的大學城，咖啡廳眾多。學校往返市中心步行即可，生活機能不錯。校園佔地廣闊，設施完善，有三座大型圖書館、健身房，以及許多綠地適合在天氣暖和時休憩。學校餐廳食物選擇多且味道不錯，還有便利商店，不怕沒東西吃。</p>

<p><b>課程感想</b><br>第一學期偏理論，第二學期偏實務應用。內容豐富有趣，講師有教學熱誠且樂於與學生交流。印象最深的一門課是 PR in Practice，全學期採小組評分，學生扮演公關公司角色幫客戶處理公關危機並策劃行銷活動，相當貼近職場實操。</p>

<p><b>住宿生活</b><br>我住在校外學生公寓，價格合理，設備雖不豪華但應有盡有。距離商學院步行約 15 分鐘，市中心超市步行約 20 分鐘，還算方便。但若重新選擇，會考慮離市中心更近的公寓。</p>

<p><b>實習與工作機會</b><br>課程本身沒有提供實習機會，但學校有完善的就業輔導中心，定期舉辦課程、workshop、一對一輔導、履歷與 LinkedIn 設計協助等服務。學校就業網站也有許多實習與工讀機會，我就是透過學校網站找到實習工作的。</p>
`,
  },
  {
    slug: "post-09",
    date: "2023.6.25",
    title: "Johnny",
    school: "UCLA",
    info: "MS Materials Science & Engineering",
    category: "#服務心得",
    images: [
      new URL("@/assets/images/stu9.jpg", import.meta.url).href,
      // new URL("@/assets/images/posts/post-09-2.jpg", import.meta.url).href,
    ],
    content: `<p>在申請大學的過程中，留學顧問幫了我非常多。因為我的英文不好，像是撰寫 SOP、推薦信、CV 和選校等文件時，都需要與代辦密切討論。加上遇到疫情，我延遲了一年才入學，在台灣工作期間，代辦也持續幫我處理與學校的聯繫，省去了很多心力。</p>

<p>申請美國簽證時更是挑戰，尤其我還遇到行政審查，過程非常難熬。所需文件的準備與潤稿也都是顧問協助完成。當然，我自己也必須做功課，和顧問討論時才能更全面有效率。總結來說，我非常推薦有留學規劃的朋友找顧問協助，因為能減輕很多繁瑣細節的負擔。</p>

<p><b>留學的收穫</b><br>對我而言，來美國念書是一個難得的體驗。既然花了時間與金錢，我會盡量把握各種資源，多參加活動、多認識朋友。雖然美國生活並不容易，但只要勇敢去嘗試，最後一定能克服心中的不安與恐懼。尤其語言方面，只要願意開口練習，英文能力會明顯提升，並在交流中獲得成就感。</p>

<p><b>校園小分享</b><br>UCLA 位於洛杉磯，校園有許多經典歷史建築，例如 Powell Library 和 Royce Hall，非常有特色。生活機能完善，周邊便利且文化氛圍濃厚，完全不用擔心飲食不合口味。</p>

<p><b>課程感想</b><br>材料系碩士課程，如果選擇 thesis project，需要修至少 6 門課；若以 capstone 畢業，則需修 9 門課，其中三門可選修 undergrad 課程。就我而言，熱力學與奈米材料是很值得推薦的課程，內容紮實且實用。</p>

<p><b>住宿生活</b><br>若選擇住校外，Weyburn 公寓是學生首選，距離學校約 20 分鐘，附近有多個公車站（辦理 tap card 可免費搭乘）。找租屋地點的話，推薦 Sawtelle，一帶有許多日本餐廳與亞洲食物，很符合我們的口味。</p>

<p><b>實習與工作機會</b><br>材料系相關機會很多，例如台積電在亞利桑那州設廠時就曾到 UCLA 招募人才。此外，還能透過 Handshake 或 LinkedIn 主動尋找職缺，機會相當多元。</p>
`,
  },
  {
    slug: "post-10",
    date: "2023.8.17",
    title: "Hank",
    school: "The University of Edinburgh",
    info: "MSc Finance",
    category: "#服務心得",
    images: [
      new URL("@/assets/images/stu10.jpg", import.meta.url).href,
      // new URL("@/assets/images/posts/post-10-2.jpg", import.meta.url).href,
    ],
    content: `<p>Shelly 真的是一位非常專業的留學顧問。從討論志願、準備申請文件、遞交申請、學校住宿、簽證辦理到行前註冊，她對整個流程都非常清楚，會一步步告訴我需要準備什麼資料，完全不會讓我感到茫然。</p>

<p><b>舉例來說</b><br>很多人在辦簽證的時候遇到麻煩，留學群組裡大家常常焦急詢問問題，但 Shelly 非常仔細檢查所有簽證資料（她甚至會 Double check），並給予明確指引，讓我到現場時一切順利。</p>

<p>申請過程中我剛好去服兵役，沒有太多時間處理留學相關事宜，Shelly 幫我提交申請並留意最新消息，讓我在當兵的同時也能完成申請，真的非常感謝。有了代辦協助，申請人可以把更多時間投入課業、工作、實習或考試準備上。</p>

<p><b>留學的收穫</b><br>雖然網路就能獲得很多知識，但出國最大的價值是能親身與不同國家的人交流，體驗多元生活方式。留學讓我更認識自己，拓展人生可能性，意識到世界很大，還有很多值得探索的機會。</p>

<p><b>校園小分享</b><br>我就讀愛丁堡大學商學院 MSc Finance，校區位於 George Square，旁邊就是 main library，下課後自習很方便。商學院還有 library-hub 與資料庫教室，資源豐富。同學們常在 hub 討論功課或查找數據。至於餐廳，附近選擇不少，推薦去試我的愛店—馬來小館。</p>

<p><b>課程感想</b><br>整體課程分三階段。第一學期有 4 門必修（公司金融、投資學、財報分析、計量經濟學），其中計量經濟學最重要，因為後續課程與論文都會用到。若本來學金融的同學不算困難，但若沒有基礎會比較吃力。第二學期有進階計量經濟學與多樣化選修，涵蓋公司估值、投資組合、固定收益、行為金融、區塊鏈、創投私募、綠色金融等。第三學期以論文為主，大部分同學選擇實證分析，題目自由度高，需要善用統計知識與時間規劃。</p>

<p><b>住宿生活</b><br>我住學校宿舍 O’Shea North Fourth House，步行到商學院約 10–15 分鐘。房型為 En-suite，擁有獨立衛浴，廚房與 6 位室友共用。最大的收穫是能與不同國籍的室友一起煮飯交流，既省錢也能增進感情。附近有 Tesco 和亞洲超市，生活便利。缺點是靠近酒吧街 Cowgate，偶爾晚上會有噪音，但整體仍值得推薦。</p>

<p><b>實習與工作機會</b><br>MSc Finance 課程本身不含實習，但學校開學後會舉辦許多招聘會與職涯講座，Career Centre 也提供 CV 修改與模擬面試資源。不過英國工作競爭激烈，需要學生積極爭取。觀察下來，多數同學最後選擇回國發展。</p>
`,
  },
  {
    slug: "post-11",
    date: "2024.4.30",
    title: "學生（匿名）",
    school: "King’s College London",
    info: "MSc Digital Marketing",
    category: "#服務心得",
    images: [
      new URL("@/assets/images/stu2.png", import.meta.url).href,
      // new URL("@/assets/images/posts/post-11-2.jpg", import.meta.url).href,
    ],
    content: `<p>我覺得 Shelly 非常認真負責，會提醒我不要錯過很多重要資訊。申請研究所過程非常順利，資料準備完善，學習與生活上也會關心協助。</p>

<p>剛去倫敦時遇到一些問題，Shelly 熱心幫我解決，即使學期已經開始，她仍持續協助我們的求學生活。第一年申請未拿到 KCL offer，後來她提供線上實習資訊，對我幫助很大。</p>

<p><b>留學的收穫</b><br>在專業知識、跨文化合作與獨立生活上都有成長。課程雖然僅一年，但需要快速吸收龐大知識並完成論文，不輕鬆卻磨練了效率與研究能力。倫敦近歐洲各國，學期間也能規劃旅行，是難忘的經歷。</p>

<p><b>校園小分享</b><br>KCL 位於倫敦市中心，交通便利，鄰近大笨鐘、倫敦眼、泰晤士河等地標。校園感較少，但城市學習氛圍獨特。Maughan Library 是知名拍攝地，校內也有自修室與討論室，資源豐富且學習環境友善。</p>

<p><b>課程感想</b><br>課程注重實務操作，第一學期與 food market 合作，將所學應用於真實案例。報告形式多元，包含簡報、Podcast 等。需要完成論文，主題自由但要及早提出以確保合適指導老師。</p>

<p><b>住宿生活</b><br>倫敦住宿昂貴，學校宿舍不一定比學生公寓便宜。我選擇學生公寓，能遇到不同學校的留學生，設施齊全（游泳池、健身房、洗衣房），也經常舉辦活動增進交流。</p>

<p><b>實習與工作機會</b><br>KCL 有專門職涯中心，提供履歷修改與實習資訊，但需要學生主動爭取。對亞洲國際生來說，找工作需要花更多時間與努力。</p>
`,
  },
  {
    slug: "post-12",
    date: "2023.5.20",
    title: "Jacky",
    school: "The University of Warwick Business School",
    info: "MSc Finance",
    category: "#服務心得",
    images: [
      new URL("@/assets/images/stu12-1.jpg", import.meta.url).href,
      new URL("@/assets/images/stu12-2.jpg", import.meta.url).href,
      new URL("@/assets/images/stu12-3.jpg", import.meta.url).href,
    ],
    content: `<p>文案引導合宜，整體流程掌握順暢，時程安排也非常妥當（我覺得這點很重要！）。在申請期間，對校方的互動與應對都非常專業，讓人十分放心。此外，也會鼓勵學生挑戰更頂尖的學校，並引導他們找到最適合自己的課程或專業方向。整體服務體驗非常優秀，我非常推薦！</p>

<p><b>留學的收穫</b><br>我蠻鼓勵大家在學習之餘，多去感受英國或歐洲的文化。不論是城市美學、街道設計、鄉村風光，還是與不同國籍人士互動的方式，都能帶來新的啟發。此外，歐洲人對職業工作的態度（例如對 work-life balance 的重視）也很值得觀察與思考。這些經歷往往會潛移默化地影響我們，讓自己對未來的職業選擇或生活模式有新的想法與改變。我自己就是這樣的體會。</p>

<p><b>校園小分享</b><br>離Coventry市區約車程15分鐘、公車25分鐘，交通算方便。市中心住宿、餐廳和商店多元，但夜生活相對單調。和倫敦約1-1.5小時火車距離。校園自然環境幽美，腹地廣闊，連結許多周圍鄉村田野和林地。校園餐廳較少又貴，學生多數會外送或自煮。大型量販店多元，日常採購也算方便。</p>

<p><b>商學院設施</b><br>軟硬體設施不少(Wharton Database, Bloomberg…)，教室多、討論和自習空間足夠，相對台灣多數公私立大學新穎完善。</p>

<p><b>課程感想</b><br>第一學期必修重，對同時欲申請實習的學生來說負擔大；</p>

<p>第二學期選修課為主，建議先瞭解每門課的評分方式並衡量自己的能力或偏好，例如需繳交幾份個人/團體報告、幾次考試等，若都選只有報告的課很容易同時要準備很多份報告（有同學同時要準備7份報告過）會非常累！</p>

<p>第三學期必修課、校外參訪和論文，必修課主要是幾週的密集課程，同時有為期一週的歐洲姐妹校參訪（當時是去葡萄牙里斯本的Nova）旅程全部由學校買單（交通和住宿），住宿的飯店真的很讚！</p>

<p>還有1天的城市導覽，晚上可自己揪團去市中心玩。論文會讓學生選幾個題目並排志願序，最後分發題目和教授給每個學生，所以題目不用擔心，但撰寫主要還是靠自己，教授只會以一個審閱的觀點來給予意見。</p>

<p>非常推薦MSc Finance的選修課，作為WBS的指標科系，能選的課程多又廣，其中更有許多課程是台灣（至少台大）較缺乏的，例如 行為財務學、企業購併和大數據分析。</p>

<p><b>住宿生活</b><br>我住在Coventry市中心的學生公寓，非常推薦大家可以住市中心，不僅選擇多元、服務良好且住宿設施新穎、價格合理。學校宿舍常常修繕效率差、供暖設施差還常因學生誤觸而半夜觸發火警…</p>

<p><b>實習與工作機會</b><br>學校會針對國際學生提供履歷工作坊和專業顧問，另外也常有相關企業的招募活動，但個人的積極主動性還是最重要的。基本策略還是廣投各種工作，主動去做networking才比較有機會，這點我認為學校幫助不大。工作方面，WBS畢業生的面試機會很大，但真正能夠留下來的國際學生其實不多（簽證考量），不過這個和景氣也有很大的關係。</p>

<p>畢業之後在英國考取相關證照（CFA）後於隔年1月底畢業典禮後回台灣，主要考量是英國主流公司的Graduate Program面試流程期間很長（從9月初開始至少需6-8個月），且2022-2023歐洲景氣不佳，很多職缺未開或中途就關閉。返國後就業不須擔心，因不論是金融業MA或金融分析師的工作都會蠻有優勢的。</p>
`,
  },
]);
const post = computed(() => posts.value.find((p) => p.slug === slug));
</script>

<style scoped>
.back-column {
  padding: 2rem 1.5rem;
}
.post-page {
  background-color: #e6e4df;
  padding: 2rem 1.5rem;
  font-family: "Noto Sans JP", sans-serif;
}

.post-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 3rem auto;
  gap: 2rem;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 35%;
  text-align: end;
}

.back-link {
  font-size: 0.9rem;
  color: #888;
  text-decoration: none;
}

.date {
  font-size: 0.85rem;
  color: #888;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.4;
  color: #222;
}

.category {
  font-size: 14px;
  color: #555;
  cursor: auto;
}

.post-cover {
  width: calc(50% - 1rem);
}
.post-cover img {
  width: 100%;
  object-fit: cover;
}
@media (min-width: 768px) {
  .post-cover img {
    max-height: 60vh;
  }
}
.post-body {
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
}

.post-body p + p {
  margin-top: 1.2rem;
}

/* RWD 手機垂直排列 */
@media (max-width: 768px) {
  .post-cover {
    width: calc(90% - 1rem);
  }
  .post-hero {
    grid-template-columns: 1fr;
    flex-direction: column-reverse;
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
  }
  .post-meta{
        width: 80%;
  }
  .post-page{
    padding: 10px 0;
  }
  .post-body{
    margin-bottom: 0;
  }
  .carousel .slide-media{
    margin: 10px;
  }
}
</style>
