<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Department of IoT and Information Engineering</h1>
        <p>ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
      </div>
    </section>

    <section class="features-section">
      <h2>Curriculum Information</h2>

      <div class="slider-wrapper">
        <button
          class="nav-btn left-btn"
          @click="scrollLeft"
        >
          ❮
        </button>

        <div
          ref="scrollContainer"
          class="features-grid"
        >
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
          >
            <Icon
              :name="feature.icon"
              class="card-icon"
            />
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>

        <button
          class="nav-btn right-btn"
          @click="scrollRight"
        >
          ❯
        </button>
      </div>
    </section>

    <section class="info-section">
      <div class="info-grid">
        <div
          v-for="(info, index) in infoCards"
          :key="index"
          class="info-card"
        >
          <div class="info-content">
            <h3>{{ info.title }}</h3>
            <p>{{ info.description }}</p>
            <NuxtLink
              :to="info.link"
              class="btn-more"
            >
              <span>more</span>
              <div class="icon-circle">
                <Icon name="mdi:arrow-right" />
              </div>
            </NuxtLink>
          </div>

          <div class="info-image">
            <img
              :src="info.Image"
              alt="IoT Information"
              style="width: 100%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="fame-section">
      <h2>Hall of Fame</h2>

      <div class="fame-container">
        <div class="card-stack">
          <div
            v-for="(fame, index) in fameCards.slice(0, 3)"
            :key="fame.id"
            :class="['stack-card', `pos-${index}`]"
            @click="nextCard"
          />
        </div>

        <div class="fame-description-box">
          <p v-if="fameCards.length > 0">
            {{ fameCards[0].description }}
          </p>
        </div>
      </div>
    </section>
    <section class="act-section">
      <div class="act-content">
        <h2>Activities</h2>

        <div class="act-gallery">
          <div class="act-left">
            <div class="act-large-image">
              <img
                v-if="activities.length > 0"
                :src="activities[0].image"
                alt="Main Activity"
              >
            </div>
          </div>

          <div class="act-right">
            <div
              v-for="(act, index) in activities.slice(1, 7)"
              :key="index"
              class="act-small-image"
            >
              <img
                :src="act.image"
                alt="Activity Image"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title: 'Bachelor of Engineering (Computer and IoT)(Continuing Program)',
    description: 'ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (คอมพิวเตอร์และไอโอที) หลักสูตรต่อเนื่อง',
    icon: 'mdi:school-outline'
  },
  {
    title: 'Bachelor of Engineering (IoT System and Information)',
    description: 'ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไอโอทีและสารสนเทศ)',
    icon: 'carbon:skill-level-advanced'
  },
  {
    title: 'Dual Degree (B.Eng. IoT System and Information + B.Sc.Industrial Physics)',
    description: 'วท.บ. ฟิสิกส์อุตสาหกรรม และ วศ.บ. วิศวกรรมระบบไอโอทีและสารสนเทศ (หลักสูตรสองปริญญา)',
    icon: 'ph:certificate-fill'
  },
  {
    title: 'Master of Engineering  and Doctor of Philosophy(AIOT and Information)',
    description: 'ปริญญาโท วิศวกรรมศาสตรมหาบัณฑิต (เอไอโอทีและสารสนเทศ) และ ปริญญาเอก ปรัชญาดุษฎีบัณฑิต (เอไอโอทีและสารสนเทศ)',
    icon: 'mdi:head-cog-outline'
  }
])

// 3. สร้าง ref สำหรับเก็บค่า DOM Element ของกล่อง Scroll
const scrollContainer = ref(null)

// 4. ฟังก์ชันเลื่อนซ้าย
const scrollLeft = () => {
  if (scrollContainer.value) {
    // เลื่อนไปทางซ้าย 320px (ขนาดการ์ด 300 + ช่องว่าง 20)
    scrollContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}

// 5. ฟังก์ชันเลื่อนขวา
const scrollRight = () => {
  if (scrollContainer.value) {
    // เลื่อนไปทางขวา 320px
    scrollContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}

const infoCards = ref([
  {
    title: 'What is IoTE?',
    description: '" วิศวกรรมไอโอทีและสารสนเทศ " มุ่งเน้นการบูรณาการความรู้แบบสหวิทยาการอย่างครบวงจร ทั้งด้าน ฮาร์ดแวร์ , ซอฟต์แวร์ , ระบบเครือข่าย, และปัญญาประดิษฐ์โดยมีเป้าหมายให้ผู้เรียนสามารถประยุกต์ความรู้ เพื่อสร้างสรรค์นวัตกรรมใหม่ๆ และต่อยอดไปสู่การเป็นผู้ประกอบการสตาร์ทอัพได้ด้วยตนเอง',
    Image: '/images/image3.jpg'
    // เพิ่มบรรทัดนี้: ลิงก์ไปยังหน้าเพจที่ต้องการ
    // link: '/about'
  }
])

const fameCards = ref([
  { id: 1, image: '/images/fame1.jpg', description: 'รางวัลชนะเลิศนวัตกรรม IoT 2025', link: '/fame/1' },
  { id: 2, image: '/images/fame2.jpg', description: 'ผลงานวิจัยดีเด่นด้าน AI สารสนเทศ', link: '/fame/2' },
  { id: 3, image: '/images/fame3.jpg', description: 'โครงการ Smart Factory ยอดเยี่ยม', link: '/fame/3' },
  { id: 4, image: '/images/fame4.jpg', description: 'นักศึกษาเกียรติยศประจำปี 2024', link: '/fame/4' }
])

const currentIndex = ref(0)

const nextCard = () => {
  // 1. เพิ่มค่า Index ไปทีละ 1 (ถ้าถึงตัวสุดท้ายให้กลับไปเริ่มที่ 0)
  currentIndex.value = (currentIndex.value + 1) % fameCards.value.length

  // 2. (Option) ถ้ายังอยากใช้ Logic เดิมที่ย้ายของใน Array ให้ทำแบบนี้:
  const first = fameCards.value.shift()
  fameCards.value.push(first)
}
// --- ข้อมูลสำหรับ Activities (ทั้งหมด 7 รูป) ---
const activities = ref([
  { image: '/images/act1.jpg' }, // รูปที่ 1 (รูปใหญ่สุดฝั่งซ้าย)
  { image: '/images/act2.jpg' }, // รูปที่ 2 (ฝั่งขวา)
  { image: '/images/act3.jpg' }, // รูปที่ 3 (ฝั่งขวา)
  { image: '/images/act4.jpg' }, // รูปที่ 4 (ฝั่งขวา)
  { image: '/images/act5.jpg' }, // รูปที่ 5 (ฝั่งขวา)
  { image: '/images/act6.jpg' }, // รูปที่ 6 (ฝั่งขวา)
  { image: '/images/act7.jpg' } // รูปที่ 7 (ฝั่งขวา)
])
</script>

<style scoped>
/* รีเซ็ตค่าเริ่มต้นเล็กน้อย */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* ตกแต่ง Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* ตกแต่ง ส่วนจุดเด่น */
.features-section {
  padding: 60px 0;
  /* เปลี่ยนให้ padding ซ้าย-ขวา เป็น 0 เพื่อให้เลื่อนสุดจอได้ */
  text-align: center;
  background-color: #f9f9f9;
}

.features-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #2a5298;
}

/* --- การตั้งค่า Slider และปุ่มกด --- */
.slider-wrapper {
  position: relative;
  /* เพื่อให้ปุ่มอ้างอิงตำแหน่งจากกล่องนี้ */
  width: 100%;
  max-width: 1000px;
  /* จำกัดความกว้างรวมของ Slider ไม่ให้กว้างเกินไป */
  margin: 0 auto;
  /* จัดให้อยู่กึ่งกลางหน้าจอ */
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: #1e3c72;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 10;
  /* ให้ปุ่มลอยอยู่เหนือการ์ด */
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn:hover {
  background-color: #1e3c72;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

/* การจัดตำแหน่งปุ่มซ้าย-ขวา ให้อยู่ริมจอ แต่ขยับออกมานอกกล่องการ์ดเล็กน้อย */
.left-btn {
  left: -25px;
}

.right-btn {
  right: -25px;
}

/* ซ่อนปุ่มเมื่อหน้าจอเล็กกว่า 768px (มือถือ/แท็บเล็ต) เพราะใช้นิ้วปัดสะดวกกว่า */
@media (max-width: 768px) {
  .nav-btn {
    display: none;
  }
}

.features-grid {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: nowrap;
  width: 100%;

  overflow-x: auto;
  padding: 20px;

  /* ลูกเล่นเสริม: ทำให้เลื่อนแล้วการ์ดเข้าล็อกพอดี (Snap) */
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* --- โค้ดสำหรับซ่อน Scrollbar --- */
  -ms-overflow-style: none;
  /* สำหรับ Internet Explorer, Edge */
  scrollbar-width: none;
  /* สำหรับ Firefox */
}

/* ซ่อน Scrollbar ของ Webkit (Chrome, Safari) */
.features-grid::-webkit-scrollbar {
  display: none;
}

.feature-card {
  /* ห้ามหด, ห้ามขยาย, กำหนดความกว้างตายตัวที่ 300px */
  flex: 0 0 300px;
  /* บอกให้การ์ดนี้เป็นจุดยึดเวลา Scroll แบบ Snap */
  scroll-snap-align: center;
  background: white;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

/* เพิ่ม CSS สำหรับไอคอน */
.card-icon {
  font-size: 3.5rem;
  /* ขนาดไอคอน */
  color: #ff9800;
  /* สีไอคอน (ใช้สีส้มเป็นสีเน้น) หรือถ้าชอบสีน้ำเงินให้แก้เป็น #1e3c72 */
  margin-bottom: 20px;
  /* ระยะห่างจากไอคอนถึงหัวข้อ */
  display: inline-block;
  /* เพื่อให้ transform ทำงานได้สมบูรณ์ */
}

/* ลูกเล่นเสริม: เมื่อเอาเมาส์ชี้การ์ด ให้ไอคอนขยับนิดๆ */
.feature-card:hover .card-icon {
  transform: scale(1.1) rotate(-5deg);
  transition: transform 0.3s ease;
}

.feature-card h3 {
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #1e3c72;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
}

/* =========================================
   ตกแต่งส่วน Info Section
========================================= */
.info-section {
  padding: 80px 20px;
  background-color: #ffffff;
  /* ใช้พื้นหลังสีขาวเพื่อให้ตัดกับส่วนก่อนหน้าที่เป็นสีเทาอ่อน */
}

.info-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ใช้ CSS Grid เพื่อให้การ์ดเรียงตัวและยืดหยุ่นอัตโนมัติ */
.info-grid {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

/* ตกแต่งตัว Info Card */
.info-card {
  background: #fdfdfd;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #eaeaea;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  /* --- ส่วนที่เพิ่มเข้ามาสำหรับจัด Layout ซ้าย-ขวา --- */
  display: flex;
  align-items: center;
  /* จัดให้ข้อความและรูปอยู่กึ่งกลางแนวตั้ง */
  justify-content: space-between;
  /* ดันข้อความไปซ้ายสุด ดันรูปไปขวาสุด */
  gap: 40px;
  /* ระยะห่างระหว่างข้อความกับรูปภาพ */
  /* --- ตั้งค่าให้การ์ดอยู่ตรงกลางและขนาดพอดี --- */
  width: 100%;
  max-width: 900px;
  /* กำหนดความกว้างสูงสุดของการ์ด (ปรับเพิ่ม/ลดได้) */
  margin: 0 auto;
  /* จัดการ์ดให้อยู่กึ่งกลางจอ */
}

.info-card:hover {
  transform: translateY(-8px);
  border-color: #ff9800;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

/* เส้นสีส้มเล็กๆ ด้านบนการ์ด */
.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ff9800, #ffc107);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover::before {
  opacity: 1;
}

.info-card h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: left;
}

.info-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  text-align: left;
}

/* --- ตกแต่งส่วนรูปภาพ --- */
.info-image {
  flex-shrink: 0;
  width: 350px;
  /* ขยายความกว้างรูปภาพให้ใหญ่ขึ้น */
  height: 250px;
  /* ขยายความสูงรูปภาพให้สมดุล */
}

/* --- Responsive สำหรับหน้าจอมือถือ/แท็บเล็ต --- */
@media (max-width: 768px) {
  .info-card {
    flex-direction: column-reverse;
    /* เปลี่ยนให้เรียงจากบนลงล่าง */
    padding: 30px 20px;
    gap: 25px;
  }

  .info-image {
    width: 100%;
    /* ให้รูปภาพขยายเต็มการ์ดเมื่ออยู่บนมือถือ */
    height: 200px;
  }

  .info-card h3,
  .info-card p {
    text-align: center;
    /* จัดกึ่งกลางข้อความเมื่อเป็นแนวตั้ง */
  }
}

.info-content {
  flex: 1;
  text-align: left;
  /* เพิ่มบรรทัดนี้เพื่อให้ทุกอย่างชิดซ้าย */
}

/* --- ตกแต่งปุ่ม More --- */
.btn-more {
  margin-top: 25px;
  padding: 6px 8px 6px 24px;
  /* ปรับ Padding ให้พอดีกับวงกลม */
  background-color: #fdfdfd;
  /* พื้นหลังสีขาว/กลืนกับการ์ด */
  color: #1e3c72;
  /* สีตัวอักษรน้ำเงินเข้ม */
  border: 2px solid #ff9800;
  /* ขอบสีส้ม */
  border-radius: 50px;
  /* ปรับให้เป็นทรงแคปซูล (Pill shape) */
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  /* ใช้ Flexbox เพื่อจัดให้ข้อความและลูกศรอยู่ตรงกลางแนวเดียวกัน */
  display: inline-flex;
  align-items: center;
  gap: 15px;
  /* ระยะห่างระหว่างคำว่า more กับลูกศร */
  text-decoration: none;
}

/* ตกแต่งวงกลมสีส้มและลูกศรด้านในปุ่ม */
.btn-more .icon-circle {
  background-color: #ff9800;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

/* เอฟเฟกต์ตอนเอาเมาส์ชี้ปุ่ม */
.btn-more:hover {
  background-color: #fff3e0;
  /* เปลี่ยนพื้นหลังเป็นสีส้มอ่อนๆ */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
}

.btn-more:hover .icon-circle {
  transform: translateX(3px);
  /* ให้ลูกศรขยับไปทางขวานิดนึงตอน Hover */
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* =========================================
   ตกแต่งส่วน Hall of Fame
========================================= */
.fame-section {
  padding: 80px 0;
  text-align: center;
  background-color: #f0f4f8;
  /* เปลี่ยนสีพื้นหลังนิดหน่อยให้แยกส่วนชัดเจน */
}

.fame-section h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #1e3c72;
  font-weight: 700;
}

/* ใช้ Grid แบบเลื่อนแนวนอนเหมือน Features Section */
.fame-grid {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fame-grid::-webkit-scrollbar {
  display: none;
}

/* =========================================
   ตกแต่งส่วน Hall of Fame (Card Stack)
========================================= */
/* การตั้งค่าพื้นฐานของการ์ดทุกใบ */
.fame-card {
  position: absolute;
  /* ให้การ์ดซ้อนทับกัน */
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* แอนิเมชันให้สมูทตอนสลับที่ */

  /* ค่าเริ่มต้น (ใบที่ 4 เป็นต้นไป จะถูกซ่อนไว้ด้านหลัง) */
  opacity: 0;
  transform: translateY(-40px) scale(0.8);
  pointer-events: none;
  z-index: 0;
}

/* ====================================
   กำหนดตำแหน่งไพ่ 3 ใบแรก (เรียงลำดับ)
==================================== */

/* ใบหน้าสุด (ตำแหน่ง 0) */
.card-pos-0 {
  opacity: 1;
  transform: translateY(0) scale(1);
  z-index: 3;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

/* ใบที่ 2 ซ้อนอยู่ตรงกลาง (ตำแหน่ง 1) */
.card-pos-1 {
  opacity: 1;
  transform: translateY(-20px) scale(0.95);
  /* ขยับขึ้นและหดเล็กลงนิดนึง */
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ใบที่ 3 ซ้อนอยู่หลังสุด (ตำแหน่ง 2) */
.card-pos-2 {
  opacity: 1;
  transform: translateY(-40px) scale(0.9);
  /* ขยับขึ้นอีกและหดเล็กลงอีก */
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* ==================================== */

/* ตกแต่งรูปภาพบนไพ่ */
.fame-image {
  width: 100%;
  height: 220px;
}

.fame-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fame-content {
  padding: 20px;
}

.fame-content h3 {
  font-size: 1.2rem;
  color: #1e3c72;
  margin-bottom: 10px;
}

.fame-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.fame-container {
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-stack {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 350px;
}

.stack-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* การตั้งค่าตำแหน่ง 3 มิติ */
.pos-0 {
  z-index: 3;
  transform: scale(1) translateX(0);
  opacity: 1;
}

.pos-1 {
  z-index: 2;
  transform: scale(0.85) translateX(150px);
  opacity: 0.7;
}

.pos-2 {
  z-index: 1;
  transform: scale(0.85) translateX(-150px);
  opacity: 0.7;
}

.fame-description-box {
  margin-top: 20px;
  /* ระยะห่างจากก้นการ์ด */
  text-align: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
  /* จองพื้นที่ไว้กันหน้าเว็บวูบวาบเวลาข้อความยาวไม่เท่ากัน */
  transition: opacity 0.3s ease;
  /* ถ้าอยากให้ข้อความค่อยๆ เปลี่ยน */
}

/* ตกแต่ง ส่วนจุดเด่น */
.act-section {
  padding: 60px 0;
  /* เปลี่ยนให้ padding ซ้าย-ขวา เป็น 0 เพื่อให้เลื่อนสุดจอได้ */
  text-align: center;
  background-color: #f9f9f9;
}

.act-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #2a5298;
}
/* =========================================
   ตกแต่งส่วน Activities (Gallery Grid)
========================================= */
.act-section {
  padding: 80px 20px;
  background-color: #FFFBF1;
  text-align: center;
}

.act-content {
  max-width: 1200px;
  margin: 0 auto;
}

.act-section h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #1e3c72;
  font-weight: 700;
}

/* --- Layout หลัก --- */
.act-gallery {
  display: grid;
  /* ปรับสัดส่วนให้ซ้าย 1 ส่วน ขวา 1.3 ส่วน เพื่อไม่ให้รูปซ้ายใหญ่เกินไป */
  grid-template-columns: 1fr 1.3fr;
  gap: 20px;
  height: 450px; /* ล็อคความสูงรวมไว้ที่ 450px เพื่อให้ทั้งสองฝั่งสูงเท่ากันพอดี */
}

/* --- บล็อกซ้าย (รูปใหญ่ 1 รูป) --- */
.act-left {
  width: 100%;
  height: 100%; /* ให้สูงเต็ม 450px */
}

.act-large-image {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.act-large-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ตัดส่วนเกิน ไม่ให้รูปเบี้ยว */
  transition: transform 0.4s ease;
}

.act-large-image:hover img {
  transform: scale(1.05);
}

/* --- บล็อกขวา (รูปเล็ก 6 รูป) --- */
.act-right {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* บังคับ 3 คอลัมน์กว้างเท่ากัน */
  grid-template-rows: repeat(2, 1fr);    /* บังคับ 2 แถวสูงเท่ากันเป๊ะ */
  gap: 15px;
  height: 100%; /* ให้สูงเต็ม 450px ตามฝั่งซ้าย */
}

.act-small-image {
  width: 100%;
  height: 100%; /* ยืดเต็มช่องกริดแต่ละช่อง */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  /* (ลบ aspect-ratio ของเดิมทิ้งไปได้เลยครับ กริดจะคุมความสูงให้เอง) */
}

.act-small-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.act-small-image:hover img {
  transform: scale(1.1);
}

/* --- Responsive สำหรับมือถือ --- */
@media (max-width: 900px) {
  .act-gallery {
    grid-template-columns: 1fr; /* เปลี่ยนเป็นบน-ล่าง */
    height: auto; /* ปลดล็อคความสูงบนมือถือ */
  }
  .act-left {
    height: 300px; /* ขนาดรูปใหญ่บนมือถือ */
  }
  .act-right {
    grid-template-columns: repeat(2, 1fr); /* แบ่งเหลือ 2 คอลัมน์ */
    grid-template-rows: repeat(3, 150px); /* มี 3 แถว แถวละ 150px */
  }
}
</style>
