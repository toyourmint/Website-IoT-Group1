<template>
  <div class="academics-page">
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">
          {{ $t('pages.academics.title') }}
        </h1>
      </div>
      <Background />

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button :class="{ active: activeTab === 'iot' }" @click="selectTab('iot')">
            {{ $t('pages.academics.tabs.iot') }}
          </button>
          <button :class="{ active: activeTab === 'dual' }" @click="selectTab('dual')">
            {{ $t('pages.academics.tabs.dual') }}
          </button>
          <button :class="{ active: activeTab === 'ceiot' }" @click="selectTab('ceiot')">
            {{ $t('pages.academics.tabs.ceiot') }}
          </button>
          <button :class="{ active: activeTab === 'graduate' }" @click="selectTab('graduate')">
            {{ $t('pages.academics.tabs.graduate') }}
          </button>
        </div>
        <div class="scroll-hint" @click="scrollToDetails" style="cursor: pointer;" title="เลื่อนลงเพื่อดูรายละเอียด">
          <Icon name="mdi:chevron-down" style="width: 2rem; height: 2rem;" />
        </div>
      </div>
    </div>

    <div
      ref="contentArea"
      class="content-wrapper"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="activeTab === 'iot'"
          key="iot"
          class="tab-content"
        >
        
          <div class="content-box">
            <h2 class="box-title">
              {{ $t('pages.academics.iot.whatIsTitle') }}
            </h2>
            <ul class="custom-list">
              <li>
                <strong>{{ $t('pages.academics.iot.q1') }}</strong><br>
                {{ $t('pages.academics.iot.a1') }}
              </li>
              <li>
                <strong>{{ $t('pages.academics.iot.q2') }}</strong><br>
                {{ $t('pages.academics.iot.a2') }}
              </li>
              <li>
                <strong>{{ $t('pages.academics.iot.q3') }}</strong><br>
                {{ $t('pages.academics.iot.a3') }}
              </li>
            </ul>
          </div>
          <div class="fee-box">
            <span>{{ $t('pages.academics.feeTitle') }}:</span>
            <span class="fee-amount">25,000</span>
            <span>{{ $t('pages.academics.feeUnit') }}</span>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">
              {{ $t('pages.academics.iot.careerTitle') }}
            </h2>
            <div class="grid-2-col">
              <div class="col-left">
                <div class="career-group">
                  <h4>{{ $t('pages.academics.iot.careerGroup1') }}</h4>
                  <ul>
                    <li>{{ $t('pages.academics.iot.careerList1_1') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList1_2') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList1_3') }}</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>{{ $t('pages.academics.iot.careerGroup2') }}</h4>
                  <ul>
                    <li>{{ $t('pages.academics.iot.careerList2_1') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList2_2') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList2_3') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList2_4') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList2_5') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList2_6') }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-right">
                <div class="career-group">
                  <h4>{{ $t('pages.academics.iot.careerGroup3') }}</h4>
                  <ul>
                    <li>{{ $t('pages.academics.iot.careerList3_1') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList3_2') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList3_3') }}</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>{{ $t('pages.academics.iot.careerGroup4') }}</h4>
                  <ul>
                    <li>{{ $t('pages.academics.iot.careerList4_1') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList4_2') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList4_3') }}</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>{{ $t('pages.academics.iot.careerGroup5') }}</h4>
                  <ul>
                    <li>{{ $t('pages.academics.iot.careerList5_1') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList5_2') }}</li>
                    <li>{{ $t('pages.academics.iot.careerList5_3') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="image-text-box">
            <div class="img-area">
              <div class="placeholder-img">
                <img
                  :src="'/img/logo/why_IoT.jpg'"
                  alt="Why IoTE"
                >
                <h3>ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</h3>
                <p>DEPARTMENT OF IOT AND INFORMATION ENGINEERING</p>
              </div>
            </div>
            <div class="text-area">
              <h2 class="text-navy">
                {{ $t('pages.academics.iot.whyTitle') }}
              </h2>
              <p>{{ $t('pages.academics.iot.whyDesc') }}</p>
              <div class="action-btn-container">
                <a
                  href="https://drive.google.com/file/d/1QwCpsDUdwfdnNp4ZKYXeEyMoTk7DBRXQ/view?usp=sharing"
                  target="_blank"
                  class="outline-btn"
                >
                  {{ $t('pages.academics.iot.btnCourse') }} <span class="arrow-icon">➔</span>
                </a>
              </div>
            </div>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">
              {{ $t('pages.academics.iot.learnTitle') }}
            </h2>
            <p class="desc-text mb-4">
              <strong>{{ $t('pages.academics.iot.learnOverview') }}</strong>
            </p>

            <h3 class="sub-title">
              {{ $t('pages.academics.iot.learnSub') }}
            </h3>

            <div class="year-grid">
              <div class="year-card">
                <div class="year-badge">
                  {{ $t('pages.academics.iot.y1Badge') }}
                </div>
                <h4>{{ $t('pages.academics.iot.y1Title') }}</h4>
                <p>{{ $t('pages.academics.iot.y1Desc') }}</p>
              </div>
              <div class="year-card">
                <div class="year-badge">
                  {{ $t('pages.academics.iot.y2Badge') }}
                </div>
                <h4>{{ $t('pages.academics.iot.y2Title') }}</h4>
                <p>{{ $t('pages.academics.iot.y2Desc') }}</p>
              </div>
              <div class="year-card">
                <div class="year-badge">
                  {{ $t('pages.academics.iot.y3Badge') }}
                </div>
                <h4>{{ $t('pages.academics.iot.y3Title') }}</h4>
                <p>{{ $t('pages.academics.iot.y3Desc') }}</p>
              </div>
              <div class="year-card">
                <div class="year-badge">
                  {{ $t('pages.academics.iot.y4Badge') }}
                </div>
                <h4>{{ $t('pages.academics.iot.y4Title') }}</h4>
                <p>{{ $t('pages.academics.iot.y4Desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="activeTab === 'dual'"
          key="dual"
          class="tab-content"
        >
          <div class="text-center-box">
            <h2>{{ $t('pages.academics.dual.title1') }}</h2>
            <h3>
              {{ $t('pages.academics.dual.title2') }}<br>
              {{ $t('pages.academics.dual.title3') }}
            </h3>
            <p class="desc-text">
              {{ $t('pages.academics.dual.desc') }}
            </p>
          </div>

          <div class="fee-box">
            <span>{{ $t('pages.academics.feeTitle') }}:</span>
            <span class="fee-amount">40,000</span>
            <span>{{ $t('pages.academics.feeUnit') }}</span>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">
              {{ $t('pages.academics.dual.careerTitle') }}
            </h2>
            <div class="grid-2-col">
              <div class="career-group">
                <h4>{{ $t('pages.academics.dual.careerGroup1') }}</h4>
                <ul>
                  <li>{{ $t('pages.academics.dual.careerList1_1') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList1_2') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList1_3') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList1_4') }}</li>
                </ul>
              </div>
              <div class="career-group">
                <h4>{{ $t('pages.academics.dual.careerGroup2') }}</h4>
                <ul>
                  <li>{{ $t('pages.academics.dual.careerList2_1') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_2') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_3') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_4') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_5') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_6') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_7') }}</li>
                  <li>{{ $t('pages.academics.dual.careerList2_8') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="course-cards-grid">
            <div class="course-card">
              <div class="card-img">
                <img
                  :src="'/img/logo/logo_Iotcamp.jpg'"
                  alt="IoTE Logo"
                >
              </div>
              <a
                href="https://drive.google.com/file/d/1QwCpsDUdwfdnNp4ZKYXeEyMoTk7DBRXQ/view?usp=sharing"
                target="_blank"
                class="outline-btn small-btn"
              >
                {{ $t('pages.academics.dual.btnCourseIot') }} <span class="arrow-icon">➔</span>
              </a>
            </div>
            <div class="course-card">
              <div class="card-img">
                <img
                  :src="'/img/logo/logo_physic.jpg'"
                  alt="Physics Logo"
                >
              </div>
              <a
                href="https://drive.google.com/file/d/1yVlGsT_CW8KtIDL4Gri4ucXSPXc6WEuo/view"
                target="_blank"
                class="outline-btn small-btn"
              >
                {{ $t('pages.academics.dual.btnCoursePhy') }} <span class="arrow-icon">➔</span>
              </a>
            </div>
            <div class="course-card">
              <div class="card-img">
                <img
                  :src="'/img/logo/logo_phyIoT.jpg'"
                  alt="Dual Degree Logo"
                >
              </div>
              <a
                href="https://drive.google.com/file/d/1_oKKmIsBsw7_-fnWVwYZeLV81ZufJIJl/view"
                target="_blank"
                class="outline-btn small-btn"
              >
                {{ $t('pages.academics.dual.btnCourseDual') }} <span class="arrow-icon">➔</span>
              </a>
            </div>
          </div>
        </div>

        <div
          v-else-if="activeTab === 'ceiot'"
          key="ceiot"
          class="tab-content"
        >
          <div class="text-center-box">
            <h2>{{ $t('pages.academics.ceiot.title1') }}</h2>
            <h3
              class="text-navy"
              style="font-weight: 600; font-size: 1.25rem; margin-top: 15px;"
            >
              {{ $t('pages.academics.ceiot.quote') }}
            </h3>
            <p class="desc-text mt-3">
              {{ $t('pages.academics.ceiot.desc') }}
            </p>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">
              {{ $t('pages.academics.ceiot.degTitle') }}
            </h2>
            <ul class="custom-list">
              <li>{{ $t('pages.academics.ceiot.degList1') }}</li>
              <li>{{ $t('pages.academics.ceiot.degList2') }}</li>
              <li>{{ $t('pages.academics.ceiot.degList3') }}</li>
              <li>{{ $t('pages.academics.ceiot.degList4') }}</li>
              <li>{{ $t('pages.academics.ceiot.degList5') }}</li>
            </ul>
          </div>

          <div class="fee-box">
            <span>{{ $t('pages.academics.feeTitle') }}:</span>
            <span class="fee-amount">35,000</span>
            <span>{{ $t('pages.academics.feeUnit') }}</span>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">
              {{ $t('pages.academics.ceiot.careerTitle') }}
            </h2>
            <div class="grid-2-col">
              <div class="col-left">
                <div class="career-group">
                  <ul>
                    <li>{{ $t('pages.academics.ceiot.careerList_1') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_2') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_3') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_4') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_5') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_6') }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-right">
                <div class="career-group">
                  <ul>
                    <li>{{ $t('pages.academics.ceiot.careerList_7') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_8') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_9') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_10') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_11') }}</li>
                    <li>{{ $t('pages.academics.ceiot.careerList_12') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">
              {{ $t('pages.academics.ceiot.ploTitle') }}
            </h2>
            <ul class="custom-list">
              <li>{{ $t('pages.academics.ceiot.plo1') }}</li>
              <li>{{ $t('pages.academics.ceiot.plo2') }}</li>
              <li>{{ $t('pages.academics.ceiot.plo3') }}</li>
              <li>{{ $t('pages.academics.ceiot.plo4') }}</li>
              <li>{{ $t('pages.academics.ceiot.plo5') }}</li>
              <li>{{ $t('pages.academics.ceiot.plo6') }}</li>
              <li>{{ $t('pages.academics.ceiot.plo7') }}</li>
            </ul>
          </div>

          <div
            class="action-btn-container"
            style="text-align: center; margin-top: 30px;"
          >
            <a
              href="https://www.reg.kmitl.ac.th/curriculum/file/bachelor/01/ce_con_c2564new.pdf?curr=575"
              target="_blank"
              class="outline-btn"
            >
              {{ $t('pages.academics.ceiot.btnCourse') }} <span class="arrow-icon">➔</span>
            </a>
          </div>
        </div>

        <div v-else-if="activeTab === 'graduate'" key="graduate" class="tab-content">
          <div class="text-center-box">
            <h2>{{ $t('pages.academics.graduate.title') }}</h2>
          </div>

          <div class="grid-2-col">
            <div class="content-box text-center-box" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; margin-bottom: 0;">
              <div>
                <h2 class="box-title text-navy" style="font-size: 1.5rem;">
                  {{ $t('pages.academics.graduate.masterTitle') }}
                </h2>
                <p class="desc-text mb-4" style="font-size: 1.1rem;">
                  {{ $t('pages.academics.graduate.masterDesc') }}
                </p>
                <div class="fee-badge-small">
                  <span>{{ $t('pages.academics.feeTitle') }}:</span>
                  <span class="fee-amount">27,000</span>
                  <span>{{ $t('pages.academics.feeUnit') }}</span>
                </div>
              </div>
              <div class="action-btn-container" style="text-align: center; margin-top: auto;">
                <a href="https://drive.google.com/file/d/17Cr1Pr2UA5CFrj59IzT3AmSAj3aKSIFm/view" target="_blank" class="outline-btn">
                  {{ $t('pages.academics.graduate.btnInfo') }} <span class="arrow-icon">➔</span>
                </a>
              </div>
            </div>

            <div class="content-box text-center-box" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; margin-bottom: 0;">
              <div>
                <h2 class="box-title text-navy" style="font-size: 1.5rem;">
                  {{ $t('pages.academics.graduate.phdTitle') }}
                </h2>
                <p class="desc-text mb-4" style="font-size: 1.1rem;">
                  {{ $t('pages.academics.graduate.phdDesc') }}
                </p>
                <div class="fee-badge-small">
                  <span>{{ $t('pages.academics.feeTitle') }}:</span>
                  <span class="fee-amount">32,000</span>
                  <span>{{ $t('pages.academics.feeUnit') }}</span>
                </div>
              </div>
              <div class="action-btn-container" style="text-align: center; margin-top: auto;">
                <a href="https://drive.google.com/file/d/16r4SkgENrTD4TjJB5EYgHcaTzqGkHYHr/view" target="_blank" class="outline-btn">
                  {{ $t('pages.academics.graduate.btnInfo') }} <span class="arrow-icon">➔</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="history-section">
        <h2 class="history-title">
          {{ $t('pages.academics.history.title') }}
        </h2>
        <div class="timeline-container">
          <div class="timeline-line" />

          <div class="timeline-endpoint start-endpoint">
            <div class="endpoint-dot" />
            <div class="endpoint-text">
              {{ $t('pages.academics.history.start') }}
            </div>
          </div>

          <div
            v-for="(item, index) in historyData"
            :key="index"
            class="timeline-item"
            :class="item.align"
          >
            <div class="timeline-dot" />
            <div class="timeline-content-wrapper">
              <div class="timeline-year">
                {{ item.year }}
              </div>
              <div class="timeline-text">
                <p
                  v-for="(line, i) in item.text"
                  :key="i"
                >
                  {{ line }}
                </p>
              </div>
            </div>
          </div>

          <div class="timeline-endpoint now-endpoint">
            <div class="endpoint-dot" />
            <div class="endpoint-text">
              {{ $t('pages.academics.history.now') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue' // เพิ่ม onMounted, onUnmounted
import { useI18n } from 'vue-i18n'

// ถ้าไม่ได้ใช้ Nuxt auto-import ให้ uncomment บรรทัดด้านล่าง
// import Background from '~/components/Background.vue'

const { t } = useI18n()
const activeTab = ref('iot')
const contentArea = ref(null)

const scrollToDetails = () => {
  if (contentArea.value) {
    contentArea.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// =========================================
//  Scroll to Top Logic
// =========================================
const showScroll = ref(false)

const handleScroll = () => {
  // แสดงปุ่มเมื่อเลื่อนหน้าจอลงมามากกว่า 300px
  showScroll.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // ทำให้เลื่อนขึ้นแบบนุ่มนวล
  })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
const selectTab = (tabName) => {
  activeTab.value = tabName
  setTimeout(() => {
    if (contentArea.value) {
      contentArea.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

const historyData = computed(() => [
  {
    year: '1974',
    align: 'left',
    text: [
      t('pages.academics.history.y1974_1'),
      t('pages.academics.history.y1974_2'),
      t('pages.academics.history.y1974_3'),
      t('pages.academics.history.y1974_4')
    ]
  },
  {
    year: '1975',
    align: 'right',
    text: [
      t('pages.academics.history.y1975_1'),
      t('pages.academics.history.y1975_2'),
      t('pages.academics.history.y1975_3')
    ]
  },
  {
    year: '1998',
    align: 'left',
    text: [
      t('pages.academics.history.y1998_1'),
      t('pages.academics.history.y1998_2'),
      t('pages.academics.history.y1998_3'),
      t('pages.academics.history.y1998_4')
    ]
  },
  {
    year: '2001',
    align: 'right',
    text: [
      t('pages.academics.history.y2001_1'),
      t('pages.academics.history.y2001_2'),
      t('pages.academics.history.y2001_3'),
      t('pages.academics.history.y2001_4'),
      t('pages.academics.history.y2001_5')
    ]
  },
  {
    year: '2010',
    align: 'left',
    text: [
      t('pages.academics.history.y2010_1'),
      t('pages.academics.history.y2010_2'),
      t('pages.academics.history.y2010_3')
    ]
  },
  {
    year: '2020',
    align: 'right',
    text: [
      t('pages.academics.history.y2020_1')
    ]
  },
  {
    year: '2021',
    align: 'left',
    text: [
      t('pages.academics.history.y2021_1'),
      t('pages.academics.history.y2021_2'),
      t('pages.academics.history.y2021_3'),
      t('pages.academics.history.y2021_4'),
      t('pages.academics.history.y2021_5'),
      t('pages.academics.history.y2021_6'),
      t('pages.academics.history.y2021_7')
    ]
  }
])
</script>

<style scoped>
/* ================== Global & Layout ================== */
.academics-page {
  color: var(--text-main);
  font-family: var(--font-sans);
}

/* ================== Hero Section ================== */
.hero-fullscreen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
}

/* content ใน hero ต้องมี z-index สูงกว่า Background */
.title-container {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}

.main-title {
  font-size: var(--fs-h1);
  margin: 0;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--text-main);
  text-align: center;
  transition: color 0.3s ease;
}

/* ================== Tab Buttons ================== */
.tab-buttons-wrapper {
  background-color: transparent;
  padding: 20px 30px;
  border-radius: 20px 20px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 10px; /* ลดระยะห่างลงนิดหน่อยให้ 4 ปุ่มวางพอดี */
  width: 100%;
  max-width: 1200px; /* ขยายความกว้างกล่องรองรับ 4 ปุ่ม */
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
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

.scroll-hint {
  margin-top: 2rem;
  color: var(--text-muted);
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* ================== Content Area ================== */
.content-wrapper {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
}

.content-box {
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 10px var(--card-shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.text-center-box {
  text-align: center;
  margin-bottom: 40px;
}

.text-center-box h2 {
  font-size: 1.5rem;
  color: var(--heading-color);
}

.text-center-box h3 {
  font-size: 1.1rem;
  font-weight: normal;
  margin: 10px 0 20px;
  color: var(--text-main);
}

.desc-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.box-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--heading-color);
}

.text-navy {
  color: var(--heading-color);
}

.custom-list {
  padding-left: 20px;
}

.custom-list li {
  margin-bottom: 15px;
  line-height: 1.6;
  color: var(--text-muted);
}
.custom-list li strong {
  color: var(--text-main);
}

.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.career-group h4 {
  font-size: 0.95rem;
  color: var(--text-main);
  margin-bottom: 10px;
}

.career-group ul {
  padding-left: 20px;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

/* ================== Image & Text Box ================== */
.image-text-box {
  display: flex;
  background-color: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 4px 10px var(--card-shadow);
  border: 1px solid var(--border-color);
}

.img-area {
  flex: 1;
  background-color: transparent;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.placeholder-img h3, .placeholder-img p {
  color: var(--text-main);
  margin-top: 15px;
}

.text-area {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.text-area p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  color: var(--text-muted);
}

/* ================== PDF Links / Buttons ================== */
.action-btn-container {
  text-align: right;
  margin-top: 15px;
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

.small-btn {
  font-size: 0.9rem;
  padding: 4px 4px 4px 16px;
  width: fit-content;
  margin: auto;
}

.small-btn .arrow-icon {
  width: 28px;
  height: 28px;
  font-size: 1rem;
  margin-left: 10px;
}

/* ================== Course Grid (Dual Degree) ================== */
.course-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  align-items: stretch;
}

.course-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px var(--card-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-img {
  background-color: transparent;
  border-radius: 12px;
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ================== Year Grid (เรียนอะไรบ้าง) ================== */
.mb-4 { margin-bottom: 1.5rem; }

.sub-title {
  color: var(--heading-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.year-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
}

.year-card {
  background: var(--bg-main);
  border: 1px solid var(--border-color);
  border-left: 4px solid #ff9800;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--card-shadow);
}

.year-badge {
  display: inline-block;
  background-color: #ff9800;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.year-card h4 {
  margin: 0 0 10px 0;
  color: var(--text-main);
  font-size: 1.1rem;
}

.year-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ================== Transitions ================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ================== Timeline ================== */
.history-section {
  margin-top: 60px;
  padding-bottom: 50px;
}

.history-title {
  text-align: center;
  font-size: 2rem;
  color: var(--heading-color);
  margin-bottom: 40px;
  font-weight: bold;
}

.timeline-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  bottom: 15px;
  width: 2px;
  background-color: #ff9800;
  z-index: 1;
}

.timeline-endpoint {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
}

.start-endpoint {
  margin-bottom: 40px;
}

.now-endpoint {
  margin-top: 40px;
}

.endpoint-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background-color: #ff9800;
  border-radius: 50%;
}

.endpoint-text {
  width: 50%;
  margin-left: 50%;
  padding-left: 40px;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--heading-color);
}

.timeline-item {
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  z-index: 2;
}

.timeline-item.left {
  justify-content: flex-start;
}

.timeline-item.right {
  justify-content: flex-end;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background-color: var(--bg-main);
  border: 3px solid #ff9800;
  border-radius: 50%;
  z-index: 3;
}

.timeline-content-wrapper {
  width: 50%;
  display: flex;
  align-items: flex-start;
}

.timeline-item.left .timeline-content-wrapper {
  padding-right: 40px;
  flex-direction: row-reverse;
  text-align: right;
}

.timeline-item.right .timeline-content-wrapper {
  padding-left: 40px;
  flex-direction: row;
  text-align: left;
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--heading-color);
  line-height: 1.1;
  flex-shrink: 0;
}

.timeline-item.left .timeline-year {
  margin-left: 20px;
}

.timeline-item.right .timeline-year {
  margin-right: 20px;
}

.timeline-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.timeline-text p {
  margin: 0 0 5px 0;
}

/* ================== Tuition Fee Boxes ================== */
.fee-box {
  background-color: rgba(255, 152, 0, 0.08);
  border: 1px solid rgba(255, 152, 0, 0.3);
  border-left: 6px solid #ff9800;
  padding: 15px 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--text-main);
  font-weight: 500;
  box-shadow: 0 4px 6px var(--card-shadow);
}

.fee-box .fee-amount {
  color: var(--heading-color);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10px;
}

.fee-badge-small {
  display: inline-block;
  background-color: rgba(255, 152, 0, 0.08);
  border: 1px solid rgba(255, 152, 0, 0.3);
  padding: 8px 18px;
  border-radius: 50px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: var(--text-main);
}

.fee-badge-small .fee-amount {
  color: var(--heading-color);
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 6px;
}

/* ================== Responsive ================== */
@media (max-width: 768px) {
  .grid-2-col, .course-cards-grid, .year-grid {
    grid-template-columns: 1fr;
  }
  .image-text-box {
    flex-direction: column;
  }
  .timeline-line {
    left: 20px;
  }
  .timeline-dot {
    left: 20px;
  }
  .timeline-item.left, .timeline-item.right {
    justify-content: flex-end;
  }
  .timeline-content-wrapper {
    width: calc(100% - 40px);
    padding-left: 40px !important;
    padding-right: 0 !important;
    flex-direction: column !important;
    text-align: left !important;
  }
  .timeline-item.left .timeline-year, .timeline-item.right .timeline-year {
    margin: 0 0 10px 0;
  }
  .endpoint-dot {
    left: 20px;
    transform: translateX(-50%);
  }
  .endpoint-text {
    width: 100%;
    margin-left: 0;
    padding-left: 50px;
  }

  .title-container {
    top: -150px; /* ปรับจาก -100px เป็น -150px เพื่อขยับขึ้น */
  }

  /* 2. ลดพื้นที่ว่างด้านล่างของกรอบปุ่ม */
  .tab-buttons-wrapper {
    padding-bottom: 1.5rem; 
  }

  /* 3. เรียงปุ่มจากบนลงล่าง พร้อมลดช่องว่าง */
  .tab-buttons {
    flex-direction: column;
    align-items: center;
    gap: 8px; 
  }

  /* 4. ปรับขนาดปุ่มให้กะทัดรัดขึ้น */
  .tab-buttons button {
    width: 100%;
    min-height: 55px; /* ลดความสูงลงจาก 75px */
    padding: 10px 15px;
    font-size: 0.95rem; /* ปรับฟอนต์ให้เล็กลงนิดหน่อย */
  }
  .fee-box {
    flex-direction: column;
    text-align: center;
    font-size: 1rem;
  }
  .fee-box .fee-amount {
    margin: 5px 0;
  }
}
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
/* ================== Transition ปุ่มเลื่อนขึ้นบนสุด ================== */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px); /* ให้ปุ่มเลื่อนลงไปซ่อนด้านล่างตอนหายไป */
}
</style>