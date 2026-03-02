<template>
  <div class="wrapper">
    
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">Admission</h1>
      </div>

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button 
            :class="{ active: activeSection === 'portfolio' }" 
            @click="scrollTo('portfolio')"
          >
            PORTFOLIO
          </button>
          <button 
            :class="{ active: activeSection === 'quota' }" 
            @click="scrollTo('quota')"
          >
            QUOTA
          </button>
          <button 
            :class="{ active: activeSection === 'admission' }" 
            @click="scrollTo('admission')"
          >
            ADMISSION
          </button>
        </div>
      </div>
    </div>
    <section class="section">
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

    <section
      id="portfolio"
      class="section"
    >
      <h2 class="section-title">
        PORTFOLIO รับ 30 คน
      </h2>
      <Carousel :items="portfolioPages" />
    </section>

    <section
      id="quota"
      class="section"
    >
      <h2 class="section-title">
        QUOTA รับ 15 คน
      </h2>
      <Carousel :items="quotaPages" />
    </section>

    <section
      id="admission"
      class="section admission-section"
    >
      <h2 class="section-title admission-title">
        ADMISSION รับ 5 คน
      </h2>

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

      <NuxtLink
        to="https://admission.reg.kmitl.ac.th/#/"
        class="outline-btn"
      >
        เรียนรู้รายละเอียดเพิ่มเติม
        <span class="arrow-icon">➔</span>
      </NuxtLink>
    </section>

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
import { ref, onMounted, onUnmounted } from 'vue'
import Carousel from '../components/Carousel.vue'

const showScroll = ref(false)
const activeSection = ref('') 

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  activeSection.value = '' 
}

const scrollTo = (id) => {
  activeSection.value = id 
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}

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
  font-family:'Kanit', sans-serif;
  color:#1e2a38;
}

/* ================== ส่วน CSS ของ Hero และปุ่ม ================== */
.hero-fullscreen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.title-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-title {
  font-size: 64px;
  margin: 0;
  margin-top: -50px;
  font-weight: bold;
}

.tab-buttons-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
}

.tab-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  padding: 0 1rem;
}

.tab-buttons button {
  flex: 1;
  background: linear-gradient(to bottom, #FDE8D0, #F8C694);
  border: none;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #32363f;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1.5;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tab-buttons button:hover {
  transform: scale(1.02);
  color: #000;
}

.tab-buttons button.active {
  transform: scale(1.02);
  box-shadow: 0 0 0 4px rgba(251, 146, 60, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1);
}
/* ====================================================================== */

.section{
  min-height:100vh;
  padding:100px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
}

.section-title{
  font-size:36px;
  margin-top:-40px;
}

.admission-title{
  margin-top:-100px;
}

.info-box{
  background-color: #f1f3f5;
  padding:25px;
  border-radius:15px;
  margin:10px 0;
  width:60%;
  text-align:center;
  box-shadow:0 8px 20px rgba(0,0,0,0.2);
}

.card{
  width:60%;
  height:400px;
  background:white;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 8px 20px rgba(0,0,0,0.08);
}

.card-header{
  background:linear-gradient(135deg,#ffb36b,#ff8c00);
  padding:20px;
  text-align:center;
  font-weight:bold;
}

.card-body{
  padding:30px;
}

/* ================== CSS ของปุ่มลิงก์รายละเอียด ================== */
.admission-section .outline-btn {
  position: absolute;
  bottom: 80px;
  right: 60px;
}

.outline-btn {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid #ff9800;
  color: #333;
  padding: 6px 6px 6px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.outline-btn:hover {
  background-color: #fef8f0;
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

/* ================== ปุ่มเลื่อนขึ้นบนสุด (อัปเดตให้เหมือน Department) ================== */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(to bottom, #FDE8D0, #F8C694);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.scroll-top-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-top-btn svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #32363f;
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
  .tab-buttons {
    flex-direction: column;
  }
}
</style>