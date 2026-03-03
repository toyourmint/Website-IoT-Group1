<template>
  <div class="wrapper">
    
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">Admission</h1>
      </div>
    </div>

    <section class="section" ref="contentArea">
      <h2 class="section-title">
        รายละเอียดหลักสูตร
      </h2>

      <div class="info-box">
        <h3>ชื่อหลักสูตร</h3>
        <p>วศ.บ. วิศวกรรมระบบไอโอทีและสารสนเทศ</p>
        <p>B.Eng. IoT and Information Engineering</p>
      </div>

      <div class="info-box">
        <h3>ประเภทหลักสูตร</h3>
        <p>ภาษาไทย ปกติ</p>
      </div>

      <div class="info-box">
        <h3>วิทยาเขต</h3>
        <p>ลาดกระบัง</p>
      </div>

      <div class="info-box">
        <h3>ค่าใช้จ่าย</h3>
        <p>25,000 บาท / ภาคการศึกษา</p>
      </div>
    </section>

    <div class="tab-buttons-wrapper" ref="tabArea">
      <div class="tab-buttons">
        <button 
          :class="{ active: activeSection === 'portfolio' }" 
          @click="selectTab('portfolio')"
        >
          PORTFOLIO
        </button>
        <button 
          :class="{ active: activeSection === 'quota' }" 
          @click="selectTab('quota')"
        >
          QUOTA
        </button>
        <button 
          :class="{ active: activeSection === 'admission' }" 
          @click="selectTab('admission')"
        >
          ADMISSION
        </button>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      
      <section v-if="activeSection === 'portfolio'" key="portfolio" id="portfolio" class="section tab-section">
        <h2 class="section-title">
          PORTFOLIO รับ 30 คน
        </h2>
        <Carousel :items="portfolioPages" />
        
        <div class="card-container" style="margin-top: 20px;">
          <div class="action-btn-container">
            <NuxtLink
              to="https://admission.reg.kmitl.ac.th/#/"
              class="outline-btn"
            >
              เรียนรู้รายละเอียดเพิ่มเติม
              <span class="arrow-icon">➔</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section v-else-if="activeSection === 'quota'" key="quota" id="quota" class="section tab-section">
        <h2 class="section-title">
          QUOTA รับ 15 คน
        </h2>
        <Carousel :items="quotaPages" />

        <div class="card-container" style="margin-top: 20px;">
          <div class="action-btn-container">
            <NuxtLink
              to="https://admission.reg.kmitl.ac.th/#/"
              class="outline-btn"
            >
              เรียนรู้รายละเอียดเพิ่มเติม
              <span class="arrow-icon">➔</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section v-else-if="activeSection === 'admission'" key="admission" id="admission" class="section admission-section tab-section">
        <h2 class="section-title admission-title">
          ADMISSION รับ 5 คน
        </h2>

        <div class="card-container">
          <div class="card">
            <div class="card-header">
              Admission
            </div>
            <div class="card-body">
              <ul>
                <li><strong>คุณสมบัติ :</strong></li>
                <li>- หลักสูตรแกนกลาง / นานาชาติ / อาชีวะ</li>
                <li><strong>เงื่อนไขการรับ :</strong></li>
                <li>- ม.ปลายสาย วิทย์-คณิต หรือ ปวช. สายช่างอุตสาหกรรม</li>
                <li>- ต้องมีคะแนน TGAT, TPAT3, A-Level Math 1 และ Physics</li>
                <li><strong>การคำนวณคะแนน</strong></li>
                <li>TGAT 20%</li>
                <li>TPAT3 25%</li>
                <li>A-Level Math 1 25%</li>
                <li>A-Level Physics 30%</li>
                <li><strong>จำนวนรับ : 5 คน</strong></li>
              </ul>
            </div>
          </div>

          <div class="action-btn-container">
            <NuxtLink
              to="https://admission.reg.kmitl.ac.th/#/"
              class="outline-btn"
            >
              เรียนรู้รายละเอียดเพิ่มเติม
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
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Carousel from '../components/Carousel.vue'
import { useRoute } from 'vue-router'

const showScroll = ref(false)
const activeSection = ref('portfolio') 
const contentArea = ref(null)
const tabArea = ref(null) 
const route = useRoute()

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

const portfolioPages = ref([
  {
    title: 'โครงการ Engineering Top Talents',
    items: [
      'คุณสมบัติ :',
      '1. เป็นผู้ที่กำลังศึกษาชั้นมัธยมศึกษาปีที่ 6 (สายวิทยาศาสตร์–คณิตศาสตร์ หรือห้องเรียนพิเศษที่เกี่ยวข้องกับคณิตศาสตร์–วิทยาศาสตร์–เทคโนโลยี) หรือประกาศนียบัตรวิชาชีพชั้นปีที่ 3 (ปวช.) ในสาขาที่เกี่ยวข้องกับหลักสูตรที่ต้องการสมัคร เช่น เครื่องกล ไฟฟ้า อิเล็กทรอนิกส์ การก่อสร้าง โลหะการ เป็นต้น',
      '2. ผู้สมัครจะต้องมีผลการเรียนเฉลี่ยสะสม (GPAX) รวมอย่างน้อย 4 ภาคการศึกษา ไม่น้อยกว่า 3.00',
      '3. เป็นผู้ที่เคยได้รับรางวัลการแข่งขัน อย่างน้อย 1 รายการ ดังรายการต่อไปนี้เท่านั้น',
      '4. เป็นผู้ที่ไม่มีโรคสำคัญที่จะเป็นอุปสรรคต่อการศึกษา',
      '5. เป็นผู้มีความประพฤติดีและรับรองต่อสถาบันว่าจะตั้งใจศึกษาเล่าเรียนเต็มความสามารถ และยินยอมปฏิบัติตามระเบียบข้อบังคับของสถาบันที่มีอยู่แล้ว หรือที่จะมีต่อไปโดยเคร่งครัดทุกประการ'
    ]
  },
  {
    title: 'โครงการ K - Engineering Incubator',
    items: [
      'คุณสมบัติ :',
      '1. เป็นผู้ที่กำลังศึกษาชั้นมัธยมศึกษาปีที่ 6 (สายวิทยาศาสตร์–คณิตศาสตร์ หรือห้องเรียนพิเศษที่เกี่ยวข้องกับคณิตศาสตร์ วิทยาศาสตร์–เทคโนโลยี) หรือประกาศนียบัตรวิชาชีพชั้นปีที่ 3 (ปวช.) ในสาขาที่เกี่ยวข้องกับหลักสูตรที่ต้องการสมัคร เช่น เครื่องกล ไฟฟ้า อิเล็กทรอนิกส์ การก่อสร้าง โลหะการ เป็นต้น',
      '2. ผู้สมัครจะต้องมีผลการเรียนเฉลี่ยสะสม (GPAX) รวมอย่างน้อย 4 ภาคการศึกษา ไม่น้อยกว่า 3.00',
      '3. เป็นผู้ได้รับรางวัลหรือเป็นผู้ผ่านโครงการ อย่างน้อย 1 โครงการ ดังรายการต่อไปนี้เท่านั้น',
      '3.1 เป็นผู้ผ่านการคัดเลือกรอบที่ 2 (อบรมและแข่งขัน) ของค่ายเตรียมวิศวกร “วิศวกรรมคอมพิวเตอร์และปัญญาประดิษฐ์” จัดโดยคณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยเลือกสมัครเฉพาะหลักสูตรวิศวกรรมคอมพิวเตอร์',
      '3.2 เป็นผู้ได้รับรางวัลชนะเลิศ โครงการ “e-Waste HACK BKK” จัดโดยกลุ่มบริษัท ทรู คอร์ปอเรชัน จำกัด (มหาชน) ที่ร่วมมือกับคณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยเลือกสมัครเฉพาะหลักสูตรวิศวกรรมไอโอทีและสารสนเทศ',
      '4. เป็นผู้ที่ไม่มีโรคสำคัญที่จะเป็นอุปสรรคต่อการศึกษา',
      '5. เป็นผู้มีความประพฤติดี และรับรองต่อสถาบันว่าจะตั้งใจศึกษาเล่าเรียนเต็มความสามารถ และยินยอมปฏิบัติตามระเบียบข้อบังคับของสถาบันที่มีอยู่แล้ว หรือที่จะมีต่อไปโดยเคร่งครัดทุกประการ'
    ]
  },
  {
    title: 'โครงการผลการทดสอบวัดความรู้ทางวิชาการ',
    items: [
      'คุณสมบัติ :',
      '1. เป็นผู้ที่กำลังศึกษาชั้นมัธยมศึกษาปีที่ 6 (สายวิทยาศาสตร์–คณิตศาสตร์ หรือห้องเรียนพิเศษที่เกี่ยวข้องกับคณิตศาสตร์–วิทยาศาสตร์–เทคโนโลยี) หรือประกาศนียบัตรวิชาชีพชั้นปีที่ 3 (ปวช.) ในสาขาที่เกี่ยวข้องกับหลักสูตรที่ต้องการสมัคร เช่น เครื่องกล ไฟฟ้า อิเล็กทรอนิกส์ การก่อสร้าง โลหะการ เป็นต้น',
      '2. ผู้สมัครจะต้องมีผลการเรียนเฉลี่ยสะสม (GPAX) รวมอย่างน้อย 4 ภาคการศึกษา ไม่น้อยกว่า 3.00',
      '3. มีผลการทดสอบวัดความรู้ทางวิชาการ TGAT และ TPAT3 (ทางคณะจะนำเข้าผลคะแนนจากทาง ทปอ. เพื่อคัดเลือกผู้มีสิทธิ์สอบสัมภาษณ์ ผู้สมัครไม่ต้องยื่นผลคะแนน)',
      '4. เป็นผู้ที่ไม่มีโรคสำคัญที่จะเป็นอุปสรรคต่อการศึกษา',
      '5. เป็นผู้มีความประพฤติดีและรับรองต่อสถาบันว่าจะตั้งใจศึกษาเล่าเรียนเต็มความสามารถ และยินยอมปฏิบัติตามระเบียบข้อบังคับของสถาบันที่มีอยู่แล้ว หรือที่จะมีต่อไปโดยเคร่งครัดทุกประการ'
    ]
  },
  {
    title: 'โครงการเรียนดี ช้างเผือก กลุ่มโรงเรียนสายสามัญ',
    items: [
      'คุณสมบัติ :',
      '1. เป็นผู้ที่กำลังศึกษาชั้นมัธยมศึกษาปีที่ 6 (สายวิทยาศาสตร์–คณิตศาสตร์ หรือห้องเรียนพิเศษที่เกี่ยวข้องกับคณิตศาสตร์–วิทยาศาสตร์–เทคโนโลยี)',
      '2. ผู้สมัครจะต้องมีผลการเรียนเฉลี่ยสะสม (GPAX) รวมอย่างน้อย 4 ภาคการศึกษา ไม่น้อยกว่า 3.00',
      '3. เป็นผู้ที่มีรายชื่อในแบบฟอร์มแบบสรุปอันดับของนักเรียน โครงการเรียนดี ช้างเผือก กลุ่มโรงเรียนสายสามัญ ซึ่งได้รับจากทางโรงเรียน',
      '4. มีผลการทดสอบวัดความรู้ทางวิชาการ TGAT และ TPAT3 (ทางคณะจะนำเข้าผลคะแนนจากทาง ทปอ. เพื่อคัดเลือกผู้มีสิทธิ์สอบสัมภาษณ์ ผู้สมัครไม่ต้องยื่นผลคะแนน)',
      '5. เป็นผู้ที่ไม่มีโรคสำคัญที่จะเป็นอุปสรรคต่อการศึกษา',
      '6. เป็นผู้มีความประพฤติดีและรับรองต่อสถาบันว่าจะตั้งใจศึกษาเล่าเรียนเต็มความสามารถ และยินยอมปฏิบัติตามระเบียบข้อบังคับของสถาบันที่มีอยู่แล้ว หรือที่จะมีต่อไปโดยเคร่งครัดทุกประการ'
    ]
  },
  {
    title: 'โครงการ K - ENGINEERING PATHWAY',
    items: [
      'คุณสมบัติ :',
      '1. เป็นผู้ที่กำลังศึกษาชั้นมัธยมศึกษาปีที่ 6 (สายวิทยาศาสตร์–คณิตศาสตร์ หรือห้องเรียนพิเศษที่เกี่ยวข้องกับคณิตศาสตร์–วิทยาศาสตร์–เทคโนโลยี) หรือประกาศนียบัตรวิชาชีพชั้นปีที่ 3 (ปวช.) ในสาขาที่เกี่ยวข้องกับหลักสูตรที่ต้องการสมัคร เช่น เครื่องกล ไฟฟ้า อิเล็กทรอนิกส์ การก่อสร้าง โลหะการ เป็นต้น',
      '2. เป็นผู้ที่เข้าร่วมเรียนในโครงการ Pre-Engineering School ที่จัดโดยคณะวิศวกรรมศาสตร์ สจล. และได้คะแนนเฉลี่ยสะสมรวมอย่างน้อย 3.5 จากการเรียน 6 วิชา (โดยแต่ละรายวิชาเกรดไม่ต่ำกว่า C)',
      '3. จำกัดจำนวนผู้มีสิทธิ์ได้เข้าศึกษาต่อ ไม่เกิน 5 คนต่อ 1 สาขาวิชา ในกรณีที่มีผู้สมัครเกินจำนวนที่สาขาวิชานั้นรับได้ คณะฯ จะทำการคัดเลือกโดยให้สิทธิ์ผู้ที่มีคะแนนเฉลี่ยสะสมสูงสุด 5 อันดับแรก ผู้สมัครในอันดับถัดไปจะได้สิทธิ์ในการเข้าศึกษาต่อในสาขาวิชาที่เลือกเป็นอันดับ 2 และ 3 ต่อไป',
      '4. เป็นผู้ที่ไม่มีโรคสำคัญที่จะเป็นอุปสรรคต่อการศึกษา',
      '5. เป็นผู้มีความประพฤติดีและรับรองต่อสถาบันว่าจะตั้งใจศึกษาเล่าเรียนเต็มความสามารถ และยินยอมปฏิบัติตามระเบียบข้อบังคับของสถาบันที่มีอยู่แล้ว หรือที่จะมีต่อไปโดยเคร่งครัดทุกประการ'
    ]
  }
])

const quotaPages = ref([
  {
    title: 'โควตาเรียนดี',
    items: [
      'คุณสมบัติ :',
      '1. รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง',
      '2. รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ',
      '3. รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ',
      '4. มีผลการเรียนเฉลี่ยสะสมรวมอย่างน้อยรวม 5 ภาคการศึกษา ไม่น้อยกว่า 3.00'
    ]
  },
  {
    title: 'โควตากิจกรรม K - Engineering',
    items: [
      'คุณสมบัติ :',
      '1. รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง',
      '2. รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ',
      '3. รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ',
      '4. มีผลการเรียนเฉลี่ยสะสมรวมอย่างน้อยรวม 5 ภาคการศึกษา ไม่น้อยกว่า 2.75',
      '5. เป็นผู้ที่ผ่านการเข้าร่วมกิจกรรมและได้รับประกาศนียบัตรในโครงการทางวิชาการกับ คณะ วิศวกรรมศาสตร์ สจล.'
    ]
  },
  {
    title: 'โควตา KMITL One',
    items: [
      'คุณสมบัติ :',
      '1. รับผู้สมัครที่จบจาก รร. หลักสูตรแกนกลาง',
      '2. รับผู้สมัครที่จบจาก รร. หลักสูตรนานาชาติ',
      '3. รับผู้สมัครที่จบจาก รร. หลักสูตรอาชีวะ',
      '4. มีผลการเรียนเฉลี่ยสะสมรวม 5 ภาคการศึกษา มากกว่า 3.00 หรือมากกว่า 2.75 สำหรับผู้สมัครโครงการ K-Engineering'
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
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.title-container {
  text-align: center;
}

.main-title {
  font-size: 5rem; /* เพิ่มขนาดเพื่อให้เด่นชัดเวลาอยู่เดี่ยวๆ กลางจอ */
  margin: 0;
  font-weight: bold;
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