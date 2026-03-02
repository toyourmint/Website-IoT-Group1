<template>
  <div class="home-container">
    <div class="global-background-decoration">
      <div class="g-square sq-a" />
      <div class="g-square sq-b" />
      <div class="g-square sq-c" />
      <div class="g-square sq-d" />
      <div class="g-square sq-e" />
      <div class="g-square sq-f" />
      <div class="g-square sq-g" />
      <div class="g-square sq-h" />
      <div class="g-square sq-i" />
      <div class="g-square sq-j" />
      <div class="g-square sq-k" />
      <div class="g-square sq-l" />
    </div>

    <section class="hero-section">
      <div class="hero-floating-elements">
        <Icon
          name="fa6-solid:wifi"
          class="hero-float-item icon-wifi"
        />
        <Icon
          name="bi:sd-card"
          class="hero-float-item icon-sd"
        />
        <div class="hero-float-item text-binary">
          <span>0101</span><br><span>1001</span>
        </div>
        <Icon
          name="bx:chip"
          class="hero-float-item icon-chip"
        />
        <Icon
          name="carbon:network-4"
          class="hero-float-item icon-network"
        />
        <div class="hero-float-item icon-iot-text">
          <Icon
            name="mdi:wifi"
            class="iot-wifi"
          />
          <span>IoT</span>
        </div>
        <Icon
          name="mdi:monitor-cellphone"
          class="hero-float-item icon-devices"
        />
        <div class="hero-float-item hero-square sq-1" />
        <div class="hero-float-item hero-square sq-2" />
        <div class="hero-float-item hero-square sq-3" />
        <div class="hero-float-item hero-square sq-4" />
      </div>

      <div class="hero-content">
        <h1>Department of IoT and<br>Information Engineering</h1>
        <p>ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
      </div>
    </section>

    <section
      ref="featuresSectionRef"
      class="features-section"
    >
      <div class="section-content">
        <h2>Curriculum Information</h2>
        <div class="slider-wrapper">
          <div
            class="features-grid"
            :class="{ 'is-visible': isFeaturesVisible }"
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
        </div>
      </div>
    </section>

    <section class="info-section">
      <div class="info-grid section-content">
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
              style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="news-section">
      <div class="section-content">
        <h2>News & Announcements</h2>
        <div class="news-list">
          <div
            v-for="(news, index) in newsItems"
            :key="index"
            class="news-item"
          >
            <div class="news-image-container">
              <img
                :src="news.image"
                alt="News Image"
              >
            </div>
            <div class="news-text-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.summary }}</p>
              <NuxtLink
                :to="news.link"
                class="btn-more"
              >
                <span>Read More</span>
                <div class="icon-circle">
                  <Icon name="mdi:arrow-right" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="fame-section">
      <div class="section-content">
        <h2>Hall of Fame</h2>
        <div class="fame-container">
          <div class="card-stack">
            <button
              class="fame-nav-btn fame-left"
              @click.stop="prevCard"
            >
              ❮
            </button>
            <div
              v-for="(fame, index) in fameCards.slice(0, 3)"
              :key="fame.id"
              :class="['stack-card', `pos-${index}`]"
              @click="nextCard"
            >
              <div class="fame-image">
                <img
                  :src="fame.image"
                  :alt="fame.description"
                >
              </div>
            </div>
            <button
              class="fame-nav-btn fame-right"
              @click.stop="nextCard"
            >
              ❯
            </button>
          </div>
          <div class="fame-description-box">
            <p v-if="fameCards.length > 0">
              {{ fameCards[0].description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="act-section">
      <div class="act-content section-content">
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
import { ref, onMounted } from 'vue'

// --- ข้อมูล Curriculum ---
const features = ref([
  { title: 'Bachelor of Engineering (Computer and IoT)(Continuing Program)', description: 'ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (คอมพิวเตอร์และไอโอที) หลักสูตรต่อเนื่อง', icon: 'mdi:school-outline' },
  { title: 'Bachelor of Engineering (IoT System and Information)', description: 'ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมไอโอทีและสารสนเทศ)', icon: 'carbon:skill-level-advanced' },
  { title: 'Dual Degree (B.Eng. IoT System and Information + B.Sc.Industrial Physics)', description: 'วท.บ. ฟิสิกส์อุตสาหกรรม และ วศ.บ. วิศวกรรมระบบไอโอทีและสารสนเทศ (หลักสูตรสองปริญญา)', icon: 'ph:certificate-fill' },
  { title: 'Master of Engineering  and Doctor of Philosophy(AIOT and Information)', description: 'ปริญญาโท วิศวกรรมศาสตรมหาบัณฑิต (เอไอโอทีและสารสนเทศ) และ ปริญญาเอก ปรัชญาดุษฎีบัณฑิต (เอไอโอทีและสารสนเทศ)', icon: 'mdi:head-cog-outline' }
])

const featuresSectionRef = ref(null)
const isFeaturesVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isFeaturesVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.2 })

  if (featuresSectionRef.value) { observer.observe(featuresSectionRef.value) }
})

// --- ข้อมูล Info ---
const infoCards = ref([
  { title: 'What is IoTE?', description: '" วิศวกรรมไอโอทีและสารสนเทศ " มุ่งเน้นการบูรณาการความรู้แบบสหวิทยาการอย่างครบวงจร ทั้งด้าน ฮาร์ดแวร์ , ซอฟต์แวร์ , ระบบเครือข่าย, และปัญญาประดิษฐ์โดยมีเป้าหมายให้ผู้เรียนสามารถประยุกต์ความรู้ เพื่อสร้างสรรค์นวัตกรรมใหม่ๆ และต่อยอดไปสู่การเป็นผู้ประกอบการสตาร์ทอัพได้ด้วยตนเอง', Image: '/images/image3.jpg', link: '/academics' }
])

// --- ข้อมูล News & Announcements ---
const newsItems = ref([
  {
    title: 'IoT Workshop 2025',
    summary: 'Join us for an exciting IoT workshop where we will explore the latest trends and technologies in the Internet of Things.',
    image: '/images/news1.jpg', // เพิ่มรูปสำหรับข่าว
    link: '/information' // ลิงก์ไปหน้า Information
  },
  {
    title: 'New Research Publication',
    summary: 'Our department has published a new research paper on AI and IoT integration. Check it out for cutting-edge insights!',
    image: '/images/news2.jpg',
    link: '/information'
  },
  {
    title: 'Student Achievements',
    summary: 'Congratulations to our students for winning the national IoT competition! Their innovative projects have been recognized at the highest level.',
    image: '/images/news3.jpg',
    link: '/information'
  }
])

// --- ข้อมูล Hall of Fame ---
const fameCards = ref([
  { id: 1, image: '/images/fame1.jpg', description: 'Thailand Cyber Security Product and Service Awards 2025', link: '/fame/1' },
  { id: 2, image: '/images/fame2.jpg', description: 'AI & Robotics Hackathon and Competitions 2025', link: '/fame/2' },
  { id: 3, image: '/images/fame3.jpg', description: 'SPACE QUEST 2025', link: '/fame/3' }
])

const currentIndex = ref(0)
const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % fameCards.value.length
  const first = fameCards.value.shift()
  fameCards.value.push(first)
}
const prevCard = () => {
  const last = fameCards.value.pop()
  fameCards.value.unshift(last)
}

// --- ข้อมูล Activities ---
const activities = ref([
  { image: '/images/act1.jpg' }, { image: '/images/act2.jpg' }, { image: '/images/act3.jpg' },
  { image: '/images/act4.jpg' }, { image: '/images/act5.jpg' }, { image: '/images/act6.jpg' }, { image: '/images/act7.jpg' }
])
</script>

<style scoped>
/* =========================================
   Base & Typography
========================================= */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home-container {
  position: relative;
  overflow-x: hidden;
}

.section-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 40px;
  font-weight: 700;
  text-align: center;
}

/* =========================================
   Global Background Decoration
========================================= */
.global-background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.g-square {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(45, 49, 66, 0.15);
  border-radius: 4px;
  opacity: 0.6;
  animation: globalFloatAnim 8s ease-in-out infinite;
}

@keyframes globalFloatAnim {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(10deg);
  }

  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.sq-a {
  top: 10%;
  left: 3%;
  animation-delay: 0s;
}

.sq-b {
  top: 25%;
  right: 4%;
  animation-delay: 1s;
  width: 12px;
  height: 12px;
}

.sq-c {
  top: 40%;
  left: 6%;
  animation-delay: 2s;
}

.sq-d {
  top: 55%;
  right: 5%;
  animation-delay: 0.5s;
  width: 18px;
  height: 18px;
}

.sq-e {
  top: 70%;
  left: 2%;
  animation-delay: 1.5s;
}

.sq-f {
  top: 85%;
  right: 3%;
  animation-delay: 2.5s;
  width: 10px;
  height: 10px;
}

.sq-g {
  bottom: 10%;
  left: 5%;
  animation-delay: 0.2s;
}

.sq-h {
  bottom: 25%;
  right: 6%;
  animation-delay: 1.2s;
  width: 20px;
  height: 20px;
}

.sq-i {
  bottom: 40%;
  left: 4%;
  animation-delay: 2.2s;
}

.sq-j {
  bottom: 55%;
  right: 2%;
  animation-delay: 0.7s;
  width: 14px;
  height: 14px;
}

.sq-k {
  bottom: 70%;
  left: 7%;
  animation-delay: 1.7s;
}

.sq-l {
  bottom: 85%;
  right: 4%;
  animation-delay: 2.7s;
}

/* =========================================
   1. Hero Section
========================================= */
.hero-section {
  position: relative;
  text-align: center;
  padding: 150px 20px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5rem;
  font-weight: 500;
}

.hero-floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-float-item {
  position: absolute;
  opacity: 0.7;
  animation: heroFloatAnim 6s ease-in-out infinite;
}

@keyframes heroFloatAnim {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

.icon-wifi {
  top: 15%;
  left: 5%;
  font-size: 6rem;
  transform: rotate(-15deg);
}

.icon-sd {
  bottom: 15%;
  left: 10%;
  font-size: 3rem;
}

.text-binary {
  top: 60%;
  left: 15%;
  font-size: 1.5rem;
  font-weight: 800;
  font-family: monospace;
  line-height: 1.1;
}

.icon-chip {
  bottom: 5%;
  left: 50%;
  font-size: 7rem;
  transform: translateX(-50%);
  opacity: 0.4;
}

.icon-network {
  top: 15%;
  right: 5%;
  font-size: 7rem;
}

.icon-devices {
  top: 45%;
  right: 8%;
  font-size: 3rem;
}

.icon-iot-text {
  bottom: 12%;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 900;
}

.iot-wifi {
  margin-bottom: -10px;
  font-size: 3rem;
}

.hero-square {
  width: 25px;
  height: 25px;
  border: 3px solid #1a1a1a;
  border-radius: 8px;
  opacity: 0.5;
}

.sq-1 {
  top: 10%;
  left: 20%;
}

.sq-2 {
  bottom: 40%;
  left: 5%;
  width: 20px;
  height: 20px;
}

.sq-3 {
  top: 10%;
  right: 25%;
  width: 20px;
  height: 20px;
}

.sq-4 {
  bottom: 30%;
  right: 5%;
}

/* =========================================
   2. Curriculum Section
========================================= */
.features-section {
  padding: 80px 20px;
  overflow: hidden;
}

.slider-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.feature-card {
  background: white;
  padding: 40px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  opacity: 0;
  transform: translateY(60px) scale(0.85);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.features-grid.is-visible .feature-card {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.features-grid.is-visible .feature-card:nth-child(1) {
  transition-delay: 0.1s;
}

.features-grid.is-visible .feature-card:nth-child(2) {
  transition-delay: 0.2s;
}

.features-grid.is-visible .feature-card:nth-child(3) {
  transition-delay: 0.3s;
}

.features-grid.is-visible .feature-card:nth-child(4) {
  transition-delay: 0.4s;
}

.feature-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3.5rem;
  color: #ff9800;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-card:hover .card-icon {
  transform: scale(1.1) rotate(-5deg);
}

.feature-card h3 {
  margin-bottom: 15px;
  font-size: 1.15rem;
  color: #333;
  line-height: 1.4;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* =========================================
   3. Info Section
========================================= */
.info-section {
  padding: 80px 20px;
}

.info-grid {
  display: flex;
  justify-content: center;
}

.info-card {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.info-card:hover {
  transform: translateY(-8px);
  border-color: #ff9800;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

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

.info-image {
  flex-shrink: 0;
  width: 350px;
  height: 250px;
}

.info-content {
  flex: 1;
  text-align: left;
}

/* ปุ่ม Read More / More แบบใช้ร่วมกันได้ */
.btn-more {
  margin-top: 25px;
  padding: 6px 8px 6px 24px;
  background-color: white;
  color: #1e3c72;
  border: 2px solid #ff9800;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  width: fit-content;
}

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

.btn-more:hover {

  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
}

.btn-more:hover .icon-circle {
  transform: translateX(3px);
}

/* =========================================
   4. News & Announcements Section (จัดระเบียบใหม่)
========================================= */
.news-section {
  padding: 80px 20px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-item {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #f0f0f0;
}

.news-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.news-image-container {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #eaeaea;
}

.news-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.news-item:hover .news-image-container img {
  transform: scale(1.05);
}

.news-text-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
}

.news-text-content h3 {
  font-size: 1.2rem;
  color: #1e3c72;
  margin-bottom: 12px;
  font-weight: 700;
}

.news-text-content p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 20px;
  flex-grow: 1;
}

.news-text-content .btn-more {
  margin-top: auto;
}

/* =========================================
   5. Hall of Fame
========================================= */
.fame-section {
  padding: 80px 20px;
  overflow: hidden;
}

.fame-container {
  position: relative;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-stack {
  position: relative;
  width: 90%;
  max-width: 600px;
  height: 320px;
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
  cursor: pointer;
}

.pos-0 {
  z-index: 3;
  transform: scale(1) translateX(0);
  opacity: 1;
}

.pos-1 {
  z-index: 2;
  transform: scale(0.85) translateX(120px);
  opacity: 0.7;
}

.pos-2 {
  z-index: 1;
  transform: scale(0.85) translateX(-120px);
  opacity: 0.7;
}

.fame-image {
  width: 100%;
  height: 100%;
}

.fame-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fame-description-box {
  margin-top: 30px;
  text-align: center;
  max-width: 400px;
  min-height: 60px;
  font-weight: 500;
  z-index: 10;
}

.fame-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: white;
  color: #1e3c72;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fame-nav-btn:hover {
  background-color: #ff9800;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.fame-left {
  left: -60px;
}

.fame-right {
  right: -60px;
}

/* =========================================
   6. Activities Section
========================================= */
.act-section {
  padding: 80px 20px;
}

.act-gallery {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 20px;
  height: auto;
  /* ปล่อยให้ความสูงยืดตามรูปภาพอัตโนมัติ */
}

.act-left {
  width: 100%;
  height: 100%;
}

.act-large-image {
  width: 100%;
  height: 100%;
  min-height: 350px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.act-large-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.act-large-image:hover img {
  transform: scale(1.05);
}

.act-right {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* ลบ grid-template-rows ออกเพื่อให้ใช้ aspect-ratio จัดการความสูง */
  gap: 15px;
  align-content: start;
}

.act-small-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  /* ✨ คีย์สำคัญ: บังคับให้เป็นสี่เหลี่ยมจัตุรัสเสมอ (กว้างสูงเท่ากัน) */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
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

/* =========================================
   📱 RESPONSIVE MEDIA QUERIES
========================================= */

@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .news-list {
    grid-template-columns: repeat(2, 1fr);
  }

  /* แท็บเล็ตแสดงข่าว 2 แถว */
  .fame-left {
    left: -20px;
  }

  .fame-right {
    right: -20px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 15px;
    min-height: 60vh;
  }

  .features-section,
  .info-section,
  .news-section,
  .fame-section,
  .act-section {
    padding: 50px 15px;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }

  .icon-chip,
  .text-binary,
  .icon-devices,
  .sq-1,
  .sq-2,
  .sq-3,
  .sq-4 {
    display: none;
  }

  .icon-wifi {
    top: 5%;
    left: -5%;
    font-size: 4rem;
    opacity: 0.15;
  }

  .icon-network {
    top: 5%;
    right: -5%;
    font-size: 4rem;
    opacity: 0.15;
  }

  .info-card {
    flex-direction: column-reverse;
    padding: 30px 20px;
    gap: 25px;
  }

  .info-image {
    width: 100%;
    height: 200px;
  }

  .info-card h3,
  .info-card p {
    text-align: center;
  }

  .info-card .btn-more {
    margin: 25px auto 0;
  }

  .news-list {
    grid-template-columns: 1fr;
  }

  /* มือถือแสดงข่าวทีละการ์ด */

  .fame-container {
    height: 400px;
  }

  .card-stack {
    width: 85%;
    height: 260px;
  }

  .pos-1 {
    transform: scale(0.85) translateX(50px);
  }

  .pos-2 {
    transform: scale(0.85) translateX(-50px);
  }

  .fame-nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .fame-left {
    left: -15px;
  }

  .fame-right {
    right: -15px;
  }

  .act-gallery {
    grid-template-columns: 1fr;
  }

  .act-large-image {
    aspect-ratio: 16 / 9;
    min-height: auto;
  }

  /* รูปใหญ่บนมือถือปรับสัดส่วนแนวนอน */
  .act-right {
    grid-template-columns: repeat(3, 1fr);
  }

  /* บนมือถือรูปเล็กขวายังคงเป็น 3 ช่อง */
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .card-stack {
    width: 75%;
    height: 220px;
  }

  .pos-1 {
    transform: scale(0.85) translateX(30px);
  }

  .pos-2 {
    transform: scale(0.85) translateX(-30px);
  }

  .fame-nav-btn {
    width: 35px;
    height: 35px;
  }

  .fame-left {
    left: -10px;
  }

  .fame-right {
    right: -10px;
  }

  .act-right {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
