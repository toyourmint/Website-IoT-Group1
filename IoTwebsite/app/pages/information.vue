<template>
  <div class="news-page">
    
    <div class="hero-section">
      <div class="title-container">
        <h1 class="main-title">Information</h1>
        <p class="section-desc">ข่าวสารและกิจกรรมล่าสุดจากภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="news-grid">
        <div v-for="news in newsList" :key="news.id" class="news-card">
          <div class="news-image-wrapper">
            <img v-if="news.image" :src="news.image" :alt="news.title" />
            <div v-else class="placeholder-image">
              <span class="placeholder-text">News Image</span>
            </div>
          </div>

          <div class="news-content">
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-excerpt">{{ news.excerpt }}</p>
            
            <button class="read-more-btn" @click="openModal(news)">
              <span>Read More</span>
              <div class="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="selectedNews" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="modal-body">
            <div class="modal-image-wrapper" v-if="selectedNews.image">
              <img :src="selectedNews.image" :alt="selectedNews.title" />
            </div>
            <div class="modal-image-wrapper placeholder-image" v-else>
               <span class="placeholder-text">News Image</span>
            </div>

            <div class="modal-details">
              <p class="news-date">{{ selectedNews.date }}</p>
              <h2 class="detail-title">{{ selectedNews.title }}</h2>
              <div class="detail-full-content">
                <p v-html="selectedNews.fullContent.replace(/\n/g, '<br>')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedNews = ref(null)

const openModal = (news) => {
  selectedNews.value = news
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedNews.value = null
  document.body.style.overflow = ''
}

const newsList = ref([
  {
    id: 1,
    title: 'IoT Workshop 2025',
    excerpt: 'Join us for an exciting IoT workshop where we will explore the latest trends and technologies in the Internet of Things.',
    fullContent: 'ขอเชิญนักศึกษาและผู้ที่สนใจเข้าร่วมงาน IoT Workshop 2025!\n\nภายในงานจะได้พบกับการอัปเดตเทรนด์ใหม่ๆ ของเทคโนโลยี Internet of Things การทดลองใช้อุปกรณ์จริง และรับฟังบรรยายจากวิทยากรผู้เชี่ยวชาญในอุตสาหกรรม\n\nวันที่: 15 มีนาคม 2026\nสถานที่: ตึกพระจอมเกล้า',
    date: '10 March 2026',
    image: ''
  },
  {
    id: 2,
    title: 'New Research Publication',
    excerpt: 'Our department has published a new research paper on AI and IoT integration. Check it out for cutting-edge insights!',
    fullContent: 'คณาจารย์และนักศึกษาปริญญาโทสาขา IoT ได้ตีพิมพ์ผลงานวิจัยระดับนานาชาติในหัวข้อ "การผสานรวม AI และ IoT สำหรับโรงงานอัจฉริยะ (Smart Factory)"\n\nงานวิจัยนี้นำเสนอโมเดลใหม่ในการลดการใช้พลังงานในโรงงานอุตสาหกรรมด้วยการใช้ Machine Learning วิเคราะห์ข้อมูลจากเซนเซอร์แบบ Real-time',
    date: '05 March 2026',
    image: ''
  },
  {
    id: 3,
    title: 'Student Achievements',
    excerpt: 'Congratulations to our students for winning the national IoT competition! Their innovative projects have been recognized at the highest level.',
    fullContent: 'ขอแสดงความยินดีกับทีมนักศึกษาชั้นปีที่ 2 สาขา IoT ที่คว้ารางวัลชนะเลิศจากการแข่งขัน National IoT Innovation 2026!\n\nผลงาน "ระบบเตือนภัยน้ำท่วมล่วงหน้าด้วยเซนเซอร์วัดระดับน้ำผ่านเครือข่าย LoRaWAN" ได้รับคำชมเชยอย่างมากจากคณะกรรมการและตัวแทนจากภาครัฐ',
    date: '28 February 2026',
    image: ''
  }
])
</script>

<style scoped>
/* ================== Layout ================== */
.news-page {
  /* เปลี่ยนสีพื้นหลังและตัวหนังสือให้ดึงจาก main.css */
  color: var(--text-main);
  background-color: transparent; 
  min-height: 100vh;
}

/* ================== Header Section ================== */
.hero-section {
  padding: 6rem 1rem 3rem;
  text-align: center;
  background-color: transparent; /* ให้โปร่งใสเพื่อโชว์พื้นหลังหลักของเว็บ */
  border-bottom: 1px solid var(--border-color);
}

.main-title {
  font-size: 3.5rem;
  color: var(--heading-color);
  margin: 0 0 1rem 0;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-desc {
  font-size: 1.2rem;
  color: var(--text-muted);
}

/* ================== Content & Grid ================== */
.content-wrapper {
  padding: 4rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ================== News Card ================== */
.news-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--card-shadow);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px var(--card-shadow);
  border-color: #F59E0B; /* ขอบส้มตอน Hover เหมือนหน้าอื่น */
}

/* ================== Card Image / Placeholder ================== */
.news-image-wrapper {
  height: 220px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color); /* เพิ่มเส้นขอบแบ่งรูปกับเนื้อหา */
}

.news-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image-wrapper img {
  transform: scale(1.05);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-color: var(--bg-main); /* ปรับสี placeholder ให้เข้ากับโหมด */
  display: flex;
  padding: 1rem;
}

.placeholder-text {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ================== Card Content ================== */
.news-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.news-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--heading-color);
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.news-excerpt {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

/* ================== Read More Button ================== */
.read-more-btn {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: 1px solid #F59E0B;
  border-radius: 2rem;
  padding: 0.25rem 0.25rem 0.25rem 1.25rem;
  color: var(--text-main); /* เปลี่ยนสีข้อความให้รองรับ Dark Mode */
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background-color: var(--border-color); /* ใช้สีเส้นขอบมาทำพื้นหลังตอน Hover ให้เนียนตา */
  color: #F59E0B;
}

.icon-circle {
  background-color: #F59E0B;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle svg {
  width: 20px;
  height: 20px;
}

/* ================== Modal Styles ================== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* เข้มขึ้นนิดนึงให้เหมือนหน้า Department */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color); /* เพิ่มเส้นขอบ Modal สำหรับ Dark Mode */
  border-radius: 1.5rem;
  width: 100%;
  max-width: 900px;
  position: relative;
  box-shadow: 0 20px 25px -5px var(--card-shadow);
  max-height: 90vh;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-main);
  border: 1px solid var(--border-color); /* เพิ่มขอบปุ่ม */
  cursor: pointer;
  color: var(--text-muted);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 10;
}

.close-btn:hover {
  background-color: var(--border-color);
  color: #F59E0B;
}

.close-btn svg {
  width: 1.5rem;
  height: 1.5rem;
}

.modal-body {
  display: flex;
  flex-direction: column;
}

.modal-body .modal-image-wrapper {
  height: 350px;
  border-radius: 1.5rem 1.5rem 0 0;
  border: none;
  border-bottom: 1px solid var(--border-color);
}

.modal-details {
  padding: 3rem;
  text-align: left;
}

.news-date {
  color: #F59E0B;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.detail-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--heading-color);
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
}

.detail-full-content p {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 1.1rem;
}

/* Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* ================== Responsive ================== */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  .main-title {
    font-size: 2.5rem;
  }
  .modal-details {
    padding: 2rem 1.5rem;
  }
}
</style>