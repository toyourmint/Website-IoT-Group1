<template>
  <div class="performance-page">

    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">{{ $t('pages.performance.title') }}</h1>
      </div>
      <Background />
      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button :class="{ active: activeTab === 'cyber' }" @click="selectTab('cyber')">
            Cybersecurity Laboratory
          </button>
          <button :class="{ active: activeTab === 'ierl' }" @click="selectTab('ierl')">
            IERL
          </button>
          <button :class="{ active: activeTab === 'aiot' }" @click="selectTab('aiot')">
            AIoT
          </button>
        </div>
        <div class="scroll-hint" @click="scrollToDetails" style="cursor: pointer;" title="เลื่อนลงเพื่อดูรายละเอียด">
          <Icon name="mdi:chevron-down" style="width: 2rem; height: 2rem;" />
        </div>
      </div>
    </div>

    <div class="content-wrapper" ref="contentArea">
      <transition name="fade" mode="out-in">

        <div v-if="activeTab === 'cyber'" key="cyber" class="tab-content">

          <div class="lab-header-box">
            <div class="lab-logo-container">
              <img :src="'/img/cybersecurity/logo_cyber.png'" alt="Cyber Security Lab Logo" class="lab-logo">
            </div>

            <div class="lab-desc-container">
              <h2 class="text-navy" style="margin-top: 0;">
                Cyber Security Laboratory
              </h2>
              <p class="desc-text">
                {{ $t('pages.performance.cyber.desc1') }}
              </p>
              <p class="desc-text" style="margin-top: 10px;">
                {{ $t('pages.performance.cyber.desc2') }}
              </p>
              <div class="desc-text" style="margin-top: 5px;">
                <div style="margin-bottom: 8px;">
                  {{ $t('pages.performance.cyber.point1') }}
                </div>
                <div>
                  {{ $t('pages.performance.cyber.point2') }}
                </div>
              </div>
            </div>
          </div>

          <div class="team-section">
            <h2 class="section-title">Researcher</h2>
            <div class="profile-flex">
              <div class="profile-card head-card" v-for="member in teamData.head" :key="member.id">
                <div class="profile-info">
                  <div class="name-th">{{ member.nameTh }}</div>
                  <div class="name-en">{{ member.nameEn }}</div>
                  <div class="role" v-if="member.role">{{ member.role }}</div>
                </div>
                <div class="profile-img-wrapper">
                  <img :src="member.img" :alt="member.nameEn">
                </div>
              </div>
            </div>
          </div>

          <div class="team-section" style="margin-top: 60px;">
            <h2 class="section-title">Researcher Assistant</h2>

            <h3 class="sub-team-title">AI Data analytics</h3>
            <div class="profile-flex">
              <div class="profile-card" v-for="member in teamData.ai" :key="member.id">
                <div class="profile-info">
                  <div class="name-th">{{ member.nameTh }}</div>
                  <div class="name-en">{{ member.nameEn }}</div>
                </div>
                <div class="profile-img-wrapper">
                  <img :src="member.img" :alt="member.nameEn">
                </div>
              </div>
            </div>

            <h3 class="sub-team-title" style="margin-top: 50px;">Penetration Testing<br>and Cyber attack</h3>
            <div class="profile-flex">
              <div class="profile-card" v-for="member in teamData.pentest" :key="member.id">
                <div class="profile-info">
                  <div class="name-th">{{ member.nameTh }}</div>
                  <div class="name-en">{{ member.nameEn }}</div>
                </div>
                <div class="profile-img-wrapper">
                  <img :src="member.img" :alt="member.nameEn">
                </div>
              </div>
            </div>

            <h3 class="sub-team-title" style="margin-top: 50px;">Network Infrastructure</h3>
            <div class="profile-flex">
              <div class="profile-card" v-for="member in teamData.network" :key="member.id">
                <div class="profile-info">
                  <div class="name-th">{{ member.nameTh }}</div>
                  <div class="name-en">{{ member.nameEn }}</div>
                </div>
                <div class="profile-img-wrapper">
                  <img :src="member.img" :alt="member.nameEn">
                </div>
              </div>
            </div>

          </div>

        </div>

        <div v-else-if="activeTab === 'ierl'" key="ierl" class="tab-content">
          <div class="text-center-box" style="padding: 100px 0;">
            <h2 class="text-navy">{{ $t('pages.performance.ierlComingSoon') }}</h2>
          </div>
        </div>

        <div v-else-if="activeTab === 'aiot'" key="aiot" class="tab-content">
          <div class="text-center-box" style="padding: 100px 0;">
            <h2 class="text-navy">{{ $t('pages.performance.aiotComingSoon') }}</h2>
          </div>
        </div>

      </transition>
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

const activeTab = ref('cyber')
const contentArea = ref(null)

const selectedNews = ref(null)

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

// ฐานข้อมูลรายชื่อและรูปภาพทีม
const teamData = ref({
  head: [
    {
      id: 1,
      nameTh: 'ผศ.ดร.อรรถพล ป้อมสถิตย์',
      nameEn: 'Asst.Prof.Dr.Auttapon Pomsathit',
      role: 'อาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการภายนอก)',
      img: '/img/cybersecurity/Asst.Prof.Dr.Auttapon Pomsathit.webp'
    }
  ],
  ai: [
    { id: 1, nameTh: 'ชินวัตร ศิลาธนสาร', nameEn: 'Chinnawat Silathanasan', img: '/img/cybersecurity/Chinnawat Silathanasan.webp' },
    { id: 2, nameTh: 'ฐิติพันต์ สอนโคตร', nameEn: 'thitipan Sornkot', img: '/img/cybersecurity/thitipan Sornkot.webp' },
    { id: 3, nameTh: 'โกเมศ ประกอบผล', nameEn: 'Komet Prakopphon', img: '/img/cybersecurity/Komet Prakopphon.webp' },
    { id: 4, nameTh: 'จตุภัทร ขจรชัยกุล', nameEn: 'Jatupat Kajornchaikul', img: '/img/cybersecurity/Jatupat Kajornchaikul.webp' },
    { id: 5, nameTh: 'ณัชกานต์ อุ่นทรัพย์', nameEn: 'Natchakan Unsap', img: '/img/cybersecurity/Natchakan Unsap.webp' },
    { id: 6, nameTh: 'อภิสรา สมมุติ', nameEn: 'Apitsara Sommut', img: '/img/cybersecurity/Apitsara Sommut.webp' },
    { id: 7, nameTh: 'อภิรัก จีนทั่ง', nameEn: 'Apilak Jeentang', img: '/img/cybersecurity/Apilak Jeentang.webp' }
  ],
  pentest: [
    { id: 1, nameTh: 'ศุภฤกษ์ หาระสาร', nameEn: 'Supareak Harasan', img: '/img/cybersecurity/Supareak Harasan.webp' },
    { id: 2, nameTh: 'สรพัศ พิศิลป์', nameEn: 'Sorrapat Pisil', img: '/img/cybersecurity/Sorrapat Pisil.webp' },
    { id: 3, nameTh: 'ภัทรชนน เมธาวุฒิยาภรณ์', nameEn: 'Patchanon Methavutthiyaporn', img: '/img/cybersecurity/Patchanon Methavutthiyaporn.webp' },
    { id: 4, nameTh: 'พันวินทร์ ชุติกาญจนโรจน์', nameEn: 'Phanwin Chutikanchanarot', img: '/img/cybersecurity/Phanwin Chutikanchanarot.webp' },
    { id: 5, nameTh: 'ปณวัฒน์ นามสง่า', nameEn: 'Panawat Namsa-nga', img: '/img/cybersecurity/Panawat Namsa-nga.webp' },
    { id: 6, nameTh: 'บุศราพร มิทธิศร', nameEn: 'Bootsaraphorn​ Mit-thisorn​', img: '/img/cybersecurity/Bootsaraphorn​.webp' }
  ],
  network: [
    { id: 1, nameTh: 'กฤษณ์ เกษมเทวินทร์', nameEn: 'Krit Kasemtewin', img: '/img/cybersecurity/Krit Kasemtewin.webp' },
    { id: 2, nameTh: 'ธีรเมธ พินทุไพศิษฎ์วงศ์', nameEn: 'Teeramet Pintupaisitwong', img: '/img/cybersecurity/Teeramet Pintupaisitwong.webp' },
    { id: 3, nameTh: 'อิทธิกร แป้นบางนา', nameEn: 'Ittikorn Panbangna', img: '/img/cybersecurity/Ittikorn Panbangna.webp' },
    { id: 4, nameTh: 'นพรุจ จิตถวิล', nameEn: 'Noppharuj Jitthawil', img: '/img/cybersecurity/Noppharuj Jitthawil.webp' }
  ]
})
</script>

<style scoped>
/* ================== Global & Layout ================== */
.performance-page {
  position: relative;
  min-height: 100vh;
}

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
  top: -100px; /* ขยับตัวหนังสือ Laboratories ขึ้นหรือลงได้ที่นี่ */
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
  position: absolute;
  bottom: 5rem; /* 💡 ปรับเลขตรงนี้! ยิ่งเลขเยอะ ปุ่มยิ่งลอยสูงขึ้น (เช่น 6rem, 8rem) */
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 950px;
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
  
  /* ปรับความสูงและการจัดข้อความในปุ่มให้เหมือนหน้า Department */
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
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px 60px;
}

/* จัดการสีข้อความด้วยตัวแปร */
.text-navy {
  color: var(--heading-color);
}

.section-title {
  color: var(--heading-color);
  text-align: center;
  font-weight: 700;
  margin-bottom: 30px;
}

.sub-team-title {
  color: var(--text-main);
  text-align: center;
  font-weight: 600;
  margin-bottom: 25px;
}

.desc-text {
  color: var(--text-muted);
  line-height: 1.6;
}

.highlight-text {
  color: var(--text-main);
}

.text-center-box {
  text-align: center;
}

/* ================== Lab Header Box ================== */
.lab-header-box {
  display: flex;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
  border-radius: 20px;
  padding: 40px;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;

  /* เอฟเฟกต์กระจก */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s ease;
}

.lab-header-box:hover {
  border-color: rgba(255, 152, 0, 0.5);
  box-shadow: var(--card-shadow), var(--glow-accent);
  transform: translateY(-5px);
}

.lab-logo-container {
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
}

.lab-logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.lab-desc-container {
  flex: 1;
}

/* ================== Profile Team Sections ================== */
.team-section {
  text-align: center;
  margin-bottom: 50px;
}

.profile-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

/* ดีไซน์กล่องรูปคน */
.profile-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 15px;
  width: 190px;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s;
}

.profile-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 152, 0, 0.5);
  box-shadow: var(--card-shadow), var(--glow-accent);
}

/* กล่อง Head Researcher */
.head-card {
  width: 300px;
  padding: 20px;
}

.head-card .name-th {
  font-size: 1.2rem;
}

.head-card .name-en {
  font-size: 1rem;
}

/* ข้อมูลชื่อ */
.profile-info {
  margin-bottom: 12px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.name-th {
  font-weight: bold;
  color: var(--text-main);
  font-size: 0.95rem;
  line-height: 1.3;
}

.name-en {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 3px;
  line-height: 1.2;
}

.role {
  font-size: 0.8rem;
  color: #ff9800;
  /* ไฮไลท์ตำแหน่งด้วยสีส้ม */
  margin-top: 6px;
  line-height: 1.3;
}

.head-card .role {
  font-size: 0.9rem;
  font-weight: 500;
}

/* รูปภาพ */
.profile-img-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--bg-main);
  border: 4px solid var(--border-color);
  display: flex;
}

.profile-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
  /* ปรับให้เข้ากับขอบใน */
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

/* ================== Responsive ================== */
@media (max-width: 768px) {
  .main-title {
    font-size: 3.5rem;
  }

  /* 1. ดันหัวข้อ Laboratories ขึ้นไปข้างบน ไม่ให้โดนทับ */
  .title-container {
    top: -180px; 
  }

  /* 2. ขยับกลุ่มปุ่มลงมาด้านล่างนิดหน่อย */
  .tab-buttons-wrapper {
    bottom: 3rem; 
  }

  /* 3. ลดช่องว่างระหว่างปุ่ม */
  .tab-buttons {
    flex-direction: column;
    gap: 8px; 
  }

  /* 4. ปรับขนาดปุ่มให้กะทัดรัดขึ้น */
  .tab-buttons button {
    min-height: 55px; /* ลดความสูงปุ่มลง */
    padding: 10px 15px;
    font-size: 1rem; /* ลดฟอนต์ลงนิดนึง */
  }

  .lab-header-box {
    flex-direction: column;
    padding: 25px;
    text-align: center;
  }

  .lab-logo-container {
    flex: 0 0 auto;
    width: 200px;
  }

  .profile-flex {
    gap: 15px;
  }

  .profile-card {
    width: calc(50% - 10px);
  }

  .head-card {
    width: 100%;
    max-width: 300px;
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