<template>
  <div class="wrapper">
    
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">{{ $t('pages.admission.title') }}</h1>
      </div>
      <Background />

      <div class="scroll-hint-wrapper" @click="scrollToDetails" title="เลื่อนลงเพื่อดูรายละเอียด">
        <div class="scroll-hint">
          <Icon name="mdi:chevron-down" style="width: 3rem; height: 3rem;" />
        </div>
      </div>
    </div>

    <section class="section" ref="contentArea">
      <h2 class="section-title">
        {{ $t('pages.admission.courseDetails') }}
      </h2>

      <div class="info-box">
        <h3>{{ $t('pages.admission.info.courseNameTitle') }}</h3>
        <p>{{ $t('pages.admission.info.courseNameTh') }}</p>
        <p>{{ $t('pages.admission.info.courseNameEn') }}</p>
      </div>

      <div class="info-box">
        <h3>{{ $t('pages.admission.info.courseTypeTitle') }}</h3>
        <p>{{ $t('pages.admission.info.courseType') }}</p>
      </div>

      <div class="info-box">
        <h3>{{ $t('pages.admission.info.campusTitle') }}</h3>
        <p>{{ $t('pages.admission.info.campus') }}</p>
      </div>

      <div class="info-box">
        <h3>{{ $t('pages.admission.info.feeTitle') }}</h3>
        <p>{{ $t('pages.admission.info.fee') }}</p>
      </div>
    </section>

    <div class="tab-buttons-wrapper" ref="tabArea">
      <div class="tab-buttons">
        <button 
          :class="{ active: activeSection === 'portfolio' }" 
          @click="selectTab('portfolio')"
        >
          {{ $t('pages.admission.tabs.portfolio') }}
        </button>
        <button 
          :class="{ active: activeSection === 'quota' }" 
          @click="selectTab('quota')"
        >
          {{ $t('pages.admission.tabs.quota') }}
        </button>
        <button 
          :class="{ active: activeSection === 'admission' }" 
          @click="selectTab('admission')"
        >
          {{ $t('pages.admission.tabs.admission') }}
        </button>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      
      <section v-if="activeSection === 'portfolio'" key="portfolio" id="portfolio" class="section tab-section">
        <h2 class="section-title">
          {{ $t('pages.admission.portfolio.heading') }}
        </h2>
        <Carousel :items="portfolioPages" />
        
        <div class="card-container" style="margin-top: 20px;">
          <div class="action-btn-container">
            <NuxtLink
              to="https://admission.reg.kmitl.ac.th/#/"
              class="outline-btn"
            >
              {{ $t('pages.admission.btnMore') }}
              <span class="arrow-icon">➔</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section v-else-if="activeSection === 'quota'" key="quota" id="quota" class="section tab-section">
        <h2 class="section-title">
          {{ $t('pages.admission.quota.heading') }}
        </h2>
        <Carousel :items="quotaPages" />

        <div class="card-container" style="margin-top: 20px;">
          <div class="action-btn-container">
            <NuxtLink
              to="https://admission.reg.kmitl.ac.th/#/"
              class="outline-btn"
            >
              {{ $t('pages.admission.btnMore') }}
              <span class="arrow-icon">➔</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section v-else-if="activeSection === 'admission'" key="admission" id="admission" class="section admission-section tab-section">
        <h2 class="section-title admission-title">
          {{ $t('pages.admission.admissionTab.heading') }}
        </h2>

        <div class="card-container">
          <div class="card">
            <div class="card-header">
              {{ $t('pages.admission.admissionTab.cardHeader') }}
            </div>
            <div class="card-body">
              <ul>
                <li><strong>{{ $t('pages.admission.admissionTab.propTitle') }}</strong></li>
                <li>{{ $t('pages.admission.admissionTab.prop1') }}</li>
                <li><strong>{{ $t('pages.admission.admissionTab.condTitle') }}</strong></li>
                <li>{{ $t('pages.admission.admissionTab.cond1') }}</li>
                <li>{{ $t('pages.admission.admissionTab.cond2') }}</li>
                <li><strong>{{ $t('pages.admission.admissionTab.calcTitle') }}</strong></li>
                <li>{{ $t('pages.admission.admissionTab.calc1') }}</li>
                <li>{{ $t('pages.admission.admissionTab.calc2') }}</li>
                <li>{{ $t('pages.admission.admissionTab.calc3') }}</li>
                <li>{{ $t('pages.admission.admissionTab.calc4') }}</li>
                <li><strong>{{ $t('pages.admission.admissionTab.acceptCount') }}</strong></li>
              </ul>
            </div>
          </div>

          <div class="action-btn-container">
            <NuxtLink
              to="https://admission.reg.kmitl.ac.th/#/"
              class="outline-btn"
            >
              {{ $t('pages.admission.btnMore') }}
              <span class="arrow-icon">➔</span>
            </NuxtLink>
          </div>
        </div>
      </section>

    </transition>

    <transition name="slide-up">
      <button 
        v-if="showScroll" 
        class="scroll-top-btn" 
        @click="scrollToTop" 
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Carousel from '../components/Carousel.vue'
import { useRoute } from 'vue-router'
import Background from '../components/Background.vue'

const { t } = useI18n()
const showScroll = ref(false)
const activeSection = ref('portfolio') 
const contentArea = ref(null)
const tabArea = ref(null) 
const route = useRoute()

const scrollToDetails = () => {
  if (contentArea.value) {
    contentArea.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const selectTab = (tabName) => {
  activeSection.value = tabName
  
  setTimeout(() => {
    if (tabArea.value) {
      tabArea.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}

watch(
  () => route.query.tab,
  (tab) => {
    if (tab && ['portfolio', 'quota', 'admission'].includes(tab)) {
      selectTab(tab)
    }
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// เปลี่ยนเป็น computed + $t เพื่อให้สลับภาษาอัตโนมัติ
const portfolioPages = computed(() => [
  {
    title: t('pages.admission.portProjects.p1_title'),
    items: [
      t('pages.admission.portProjects.p1_1'),
      t('pages.admission.portProjects.p1_2'),
      t('pages.admission.portProjects.p1_3'),
      t('pages.admission.portProjects.p1_4'),
      t('pages.admission.portProjects.p1_5'),
      t('pages.admission.portProjects.p1_6')
    ]
  },
  {
    title: t('pages.admission.portProjects.p2_title'),
    items: [
      t('pages.admission.portProjects.p2_1'),
      t('pages.admission.portProjects.p2_2'),
      t('pages.admission.portProjects.p2_3'),
      t('pages.admission.portProjects.p2_4'),
      t('pages.admission.portProjects.p2_5'),
      t('pages.admission.portProjects.p2_6'),
      t('pages.admission.portProjects.p2_7'),
      t('pages.admission.portProjects.p2_8')
    ]
  },
  {
    title: t('pages.admission.portProjects.p3_title'),
    items: [
      t('pages.admission.portProjects.p3_1'),
      t('pages.admission.portProjects.p3_2'),
      t('pages.admission.portProjects.p3_3'),
      t('pages.admission.portProjects.p3_4'),
      t('pages.admission.portProjects.p3_5'),
      t('pages.admission.portProjects.p3_6')
    ]
  },
  {
    title: t('pages.admission.portProjects.p4_title'),
    items: [
      t('pages.admission.portProjects.p4_1'),
      t('pages.admission.portProjects.p4_2'),
      t('pages.admission.portProjects.p4_3'),
      t('pages.admission.portProjects.p4_4'),
      t('pages.admission.portProjects.p4_5'),
      t('pages.admission.portProjects.p4_6'),
      t('pages.admission.portProjects.p4_7')
    ]
  },
  {
    title: t('pages.admission.portProjects.p5_title'),
    items: [
      t('pages.admission.portProjects.p5_1'),
      t('pages.admission.portProjects.p5_2'),
      t('pages.admission.portProjects.p5_3'),
      t('pages.admission.portProjects.p5_4'),
      t('pages.admission.portProjects.p5_5'),
      t('pages.admission.portProjects.p5_6')
    ]
  }
])

const quotaPages = computed(() => [
  {
    title: t('pages.admission.quotaProjects.q1_title'),
    items: [
      t('pages.admission.quotaProjects.q1_1'),
      t('pages.admission.quotaProjects.q1_2'),
      t('pages.admission.quotaProjects.q1_3'),
      t('pages.admission.quotaProjects.q1_4'),
      t('pages.admission.quotaProjects.q1_5')
    ]
  },
  {
    title: t('pages.admission.quotaProjects.q2_title'),
    items: [
      t('pages.admission.quotaProjects.q2_1'),
      t('pages.admission.quotaProjects.q2_2'),
      t('pages.admission.quotaProjects.q2_3'),
      t('pages.admission.quotaProjects.q2_4'),
      t('pages.admission.quotaProjects.q2_5'),
      t('pages.admission.quotaProjects.q2_6')
    ]
  },
  {
    title: t('pages.admission.quotaProjects.q3_title'),
    items: [
      t('pages.admission.quotaProjects.q3_1'),
      t('pages.admission.quotaProjects.q3_2'),
      t('pages.admission.quotaProjects.q3_3'),
      t('pages.admission.quotaProjects.q3_4'),
      t('pages.admission.quotaProjects.q3_5')
    ]
  }
])
</script>

<style scoped>
.wrapper{
  position: relative;
}

/* ================== เปลี่ยนเป็นเต็มจอ (100vh) ================== */

.hero-fullscreen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
}

/* ตั้งค่าให้ title ลอยอยู่ตรงกลางจอทับ Background */
.title-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none; /* เพื่อให้คลิกทะลุไปโดนพื้นหลังได้ */
}

.main-title {
  font-size: var(--fs-h1);
  margin: 0;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--text-main);
  text-align: center;
  transition: color 0.3s ease;
  margin-top: -100px; /* ขยับหัวข้อขึ้นนิดหน่อยให้สมดุล */
}

.tab-buttons-wrapper {
  background-color: transparent; 
  padding: 20px 30px;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.tab-buttons button {
  flex: 1;
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--bg-main);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px var(--card-shadow);
}

.tab-buttons button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px var(--card-shadow);
  border-color: #ff9800;
  color: #ff9800;
}

.tab-buttons button.active {
  background: #ff9800;
  border: 1px solid #e68a00;
  color: #fff;
}
/* ====================================================================== */

/* ================== Transitions ของ Tab ================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* ========================================================= */

.section{
  min-height: auto;
  padding: 60px 20px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
}

.tab-section {
  min-height: auto;
  padding: 40px 20px 100px;
}

.section-title{
  margin-bottom: 30px;
}

.admission-title{
  margin-top:-20px;
}

.info-box{
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  padding:25px;
  border-radius:15px;
  margin:10px 0;
  width:60%;
  text-align:center;
  box-shadow: 0 4px 15px var(--card-shadow);
  transition: all 0.3s ease;
}

.info-box:hover {
  transform: translateY(-5px);
  border-color: #ff9800;
}

.info-box h3 {
  color: var(--heading-color);
  margin-bottom: 10px;
}

.info-box p {
  color: var(--text-muted);
  margin: 0;
}

/* ================== กล่องและการจัดปุ่มให้ไม่ทับกัน ================== */
.card-container {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.card{
  width: 100%;
  min-height: 400px; 
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--card-shadow);
  margin-bottom: 20px; 
}

.card-header{
  background: linear-gradient(135deg,#ffb36b,#ff8c00); 
  color: white; 
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
}

.card-body{
  padding: 30px;
  color: var(--text-muted);
}

.card-body ul {
  list-style: none;
  padding: 0;
}

.card-body li {
  margin-bottom: 8px;
  line-height: 1.6;
}

.card-body strong {
  color: var(--text-main);
  display: inline-block;
  margin-top: 10px;
}

.action-btn-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.outline-btn {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid #ff9800;
  color: var(--text-main);
  padding: 6px 6px 6px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.outline-btn:hover {
  background-color: var(--border-color); 
  color: #ff9800;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(255, 152, 0, 0.2);
}

.arrow-icon {
  background-color: #ff9800;
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-left: 15px;
  transition: transform 0.3s ease;
}

.outline-btn:hover .arrow-icon {
  transform: translateX(3px);
}
/* =================================================================================== */

/* ================== ปุ่มเลื่อนขึ้นบนสุด ================== */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--card-bg);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
}

.scroll-top-btn:hover {
  transform: scale(1.1);
  border-color: #ff9800;
  color: #ff9800;
  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.2);
}

.scroll-top-btn svg {
  width: 1.25rem;
  height: 1.25rem;
  color: inherit;
}

/* ================== Slide-up Transition ================== */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* ================== Scroll Hint (ลูกศรเลื่อนหน้าจอ) ================== */
.scroll-hint-container {
  position: absolute;
  bottom: 2rem; /* ให้อยู่ชิดขอบล่างของหน้าจอแรก */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  padding: 10px;
}

.scroll-hint {
  color: var(--text-muted);
  animation: bounce 1.5s infinite;
  transition: color 0.3s ease;
}

.scroll-hint-wrapper {
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  padding: 10px;
}

.scroll-hint-container:hover .scroll-hint {
  color: #ff9800; /* เปลี่ยนเป็นสีส้มเมื่อเอาเมาส์ชี้ */
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
/* ========================================================= */

/* ================== Responsive สำหรับมือถือ ================== */
@media (max-width: 768px) {
  .main-title {
    font-size: 3.5rem; /* ลดขนาดลงหน่อยในจอมือถือ */
  }
  .tab-buttons {
    flex-direction: column;
  }
  .card-container, .info-box {
    width: 90%;
  }
}
</style>