<template>
  <div class="wrapper">

    <!-- HERO -->
    <section class="section hero">
      <h1>Admission</h1>
    </section>

    <!-- COURSE DETAIL -->
    <section class="section">
      <h2 class="section-title">รายละเอียดหลักสูตร</h2>

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

    <!-- PORTFOLIO -->
    <section class="section" id="portfolio">
      <h2 class="section-title">PORTFOLIO รับ 30 คน</h2>
      <Carousel :items="portfolioPages" />
    </section>

    <!-- QUOTA -->
    <section class="section" id="quota">
      <h2 class="section-title">QUOTA รับ 15 คน</h2>
      <Carousel :items="quotaPages" />
    </section>

    <!-- ADMISSION -->
    <section class="section admission-section" id="admission">
      <h2 class="section-title admission-title">ADMISSION รับ 5 คน</h2>

      <div class="card">
        <div class="card-header">Admission</div>
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

      <NuxtLink to="https://admission.reg.kmitl.ac.th/#/" class="more-btn">
        เรียนรู้รายละเอียดเพิ่มเติม
        <span class="circle-arrow">➜</span>
      </NuxtLink>
    </section>

    <button v-show="showScroll" class="scroll-top" @click="scrollToTop">
      ↑
    </button>

    <div class="bottom-nav">
      <button class="nav-btn" @click="scrollTo('portfolio')">PORTFOLIO</button>
      <button class="nav-btn" @click="scrollTo('quota')">QUOTA</button>
      <button class="nav-btn" @click="scrollTo('admission')">ADMISSION</button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Carousel from '../components/Carousel.vue'

const showScroll = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollTo = (id) => {
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
  background:#f5f5f5;
  font-family:'Segoe UI', sans-serif;
  color:#1e2a38;
}

.section{
  min-height:100vh;
  padding:100px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
}

.hero h1{
  font-size:64px;
  margin-top:-120px;
}

.section-title{
  font-size:36px;
  margin-top:-40px;
}

/* เลื่อนหัวข้อ ADMISSION ขึ้นเล็กน้อย */
.admission-title{
  margin-top:-100px;
}

.info-box{
  background:#eaeaea;
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

/* เลื่อนปุ่มลง ไม่ให้ทับกล่อง */
.admission-section .more-btn{
  position:absolute;
  bottom:80px;
  right:60px;
}

.more-btn{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:450px;
  padding:18px 25px;
  border-radius:50px;
  border:4px solid #ff8c00;
  font-size:20px;
  font-weight:bold;
  text-decoration:none;
  color:#222;
  background:white;
  transition:.3s;
}

.more-btn:hover{
  background:#fff3e0;
  transform:scale(1.05);
}

.circle-arrow{
  background:#ff8c00;
  color:white;
  width:45px;
  height:45px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:.3s;
}

.more-btn:hover .circle-arrow{
  transform:translateX(8px);
}

.scroll-top{
  position:fixed;
  bottom: 120px;
  left:50px;
  width:60px;
  height:60px;
  border-radius:50%;
  border:none;
  background:#ff8c00;
  color:white;
  font-size:28px;
  cursor:pointer;
  transition:.3s;
  z-index:1000;
}

.scroll-top:hover{
  transform:scale(1.2);
}

.bottom-nav{
  position:fixed;
  bottom:0;
  width:100%;
  background:white;
  display:flex;
  justify-content:center;
  gap:30px;
  padding:20px;
  box-shadow:0 -5px 20px rgba(0,0,0,0.08);
}

.nav-btn{
  width:220px;
  padding:16px 0;
  border-radius:20px;
  background:linear-gradient(to bottom,#f9c27c,#f4a64d);
  border:3px solid #ff8c00;
  font-weight:bold;
  cursor:pointer;
  transition:.3s;
}

.nav-btn:hover{
  transform:translateY(-5px) scale(1.05);
  box-shadow:0 10px 20px rgba(0,0,0,0.15);
}
</style>