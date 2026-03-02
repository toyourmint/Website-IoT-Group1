<template>
  <div class="performance-page">
    
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">Performance</h1>
      </div>

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
              <h2 class="text-navy" style="margin-top: 0;">Cyber Security Laboratory</h2>
              <p class="desc-text">
                คือพื้นที่เรียนรู้เฉพาะทางที่ออกแบบมาเพื่อให้นักศึกษา ผู้เชี่ยวชาญ และนักวิจัย ได้ฝึกฝนและพัฒนาทักษะในการป้องกันและวิเคราะห์ภัยคุกคามทางไซเบอร์ ภายในห้องปฏิบัติการเพียบพร้อมด้วยเครื่องมือและเทคโนโลยีที่สามารถ จำลองสถานการณ์การโจมตีและการป้องกันเสมือนจริง (Simulation) ช่วยให้ผู้เรียนสามารถทดสอบองค์ความรู้และกลยุทธ์ต่างๆ ได้ในสภาพแวดล้อมที่ปลอดภัยและมีการควบคุม
              </p>
              <p class="desc-text" style="margin-top: 10px;">
                โดยทั่วไป การเรียนรู้ในห้องปฏิบัติการนี้จะมุ่งเน้นที่ 2 ด้านหลัก ได้แก่:
              </p>
              <div class="desc-text" style="margin-top: 5px;">
                <div style="margin-bottom: 8px;">
                  1. ความมั่นคงปลอดภัยเชิงรับ (Defensive Security): เน้นการสร้างเกราะป้องกันระบบ เช่น การตั้งค่าไฟร์วอลล์ (Firewall), การติดตั้งระบบตรวจจับการบุกรุก (IDS), การเข้ารหัสข้อมูล (Encryption) และการกำหนดค่าความปลอดภัยของเครือข่ายเพื่อป้องกันการถูกโจมตี
                </div>
                <div>
                  2. ความมั่นคงปลอดภัยเชิงรุก (Offensive Security): เน้นการเรียนรู้ผ่านมุมมองของผู้โจมตี เช่น การแฮกอย่างมีจริยธรรม (Ethical Hacking) และการทดสอบเจาะระบบ (Penetration Testing) เพื่อค้นหาและระบุช่องโหว่ของระบบ เว็บไซต์ หรือเครือข่าย ทำให้เข้าใจวิธีการทำงานของผู้ไม่หวังดีได้อย่างลึกซึ้ง
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
            <h2 class="text-navy">IERL Content Coming Soon...</h2>
          </div>
        </div>

        <div v-else-if="activeTab === 'aiot'" key="aiot" class="tab-content">
          <div class="text-center-box" style="padding: 100px 0;">
            <h2 class="text-navy">AIoT Content Coming Soon...</h2>
          </div>
        </div>

      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('cyber')
const contentArea = ref(null)

const selectTab = (tabName) => {
  activeTab.value = tabName
  setTimeout(() => {
    if (contentArea.value) {
      contentArea.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

// ฐานข้อมูลรายชื่อและรูปภาพทีม (แก้ไขข้อมูลจริงตรงนี้ได้เลย)
const teamData = ref({
  head: [
    { 
      id: 1, 
      nameTh: 'ผศ.ดร.อรรถพล ป้อมสถิตย์', 
      nameEn: 'Asst.Prof.Dr.Auttapon Pomsathit', 
      role: 'อาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการภายนอก)', // เพิ่ม Role ตามรูปภาพ
      img: '/img/cybersecurity/Asst.Prof.Dr.Auttapon Pomsathit.webp' 
    } 
  ],
  ai: [
    { id: 1, nameTh: 'ชินวัตร ศิลาธนสาร', nameEn: 'Chinnawat Silathanasan', img: '/img/cybersecurity/Chinnawat Silathanasan.webp' },
    { id: 2, nameTh: 'ฐิติพันต์ สอนโคตร', nameEn: 'thitipan Sornkot', img: '/img/cybersecurity/thitipan Sornkot.webp' },
    { id: 3, nameTh: 'โกเมศ ประกอบผล', nameEn: 'Komet Prakopphon', img: '/img/cybersecurity/Komet Prakopphon.webp' },
    { id: 4, nameTh: 'จตุภัทร ขจรชัยกุล', nameEn: 'Jatupat Kajornchaikul', img: '/img/cybersecurity/Jatupat Kajornchaikul.webp'},
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
  background-color: #fdfbf7;
  color: #333;
  font-family: 'Sarabun', 'Kanit', sans-serif;
  min-height: 100vh;
}
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
  font-size: 4.5rem;
  color: #1e293b;
  margin: 0;
  font-weight: 800;
  letter-spacing: 3px;
}

/* ================== Tab Buttons ================== */
.tab-buttons-wrapper {
  background-color: transparent; 
  padding: 20px 30px;
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
  border: none;
  border-radius: 8px;
  background: linear-gradient(to bottom, #ffe4cc, #ffcc99);
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.tab-buttons button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}
.tab-buttons button.active {
  background: linear-gradient(to bottom, #ffcc99, #ffb366);
  border: 1px solid #e68a00;
  color: #000;
}

/* ================== Content Area ================== */
.content-wrapper {
  max-width: 1100px; 
  margin: 40px auto; 
  padding: 0 20px 60px;
}
.text-navy {
  color: #1e3a8a;
}
.desc-text {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}
.custom-list {
  padding-left: 20px;
}
.custom-list li {
  margin-bottom: 8px;
}
.text-center-box {
  text-align: center;
}

/* ================== Lab Header Box ================== */
.lab-header-box {
  display: flex;
  background-color: #e5e7eb; 
  border-radius: 20px;
  padding: 40px;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}
.lab-logo-container {
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
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
.section-title {
  font-size: 2rem;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 30px;
}
.sub-team-title {
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 25px;
}

/* Flexbox จัดเรียงการ์ดให้อยู่ตรงกลางอัตโนมัติ */
.profile-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

/* ดีไซน์กล่องรูปคน */
.profile-card {
  background-color: #ffffff; 
  border-radius: 16px;
  padding: 15px; 
  width: 190px; 
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}
.profile-card:hover {
  transform: translateY(-5px);
}

/* กล่อง Head Researcher ให้ใหญ่กว่าปกตินิดนึง */
.head-card {
  width: 300px; /* ขยายความกว้างขึ้นนิดหน่อยเพื่อรองรับข้อความตำแหน่งที่ยาว */
  padding: 20px; 
}
.head-card .name-th {
  font-size: 1.2rem;
}
.head-card .name-en {
  font-size: 1rem;
}

/* ข้อมูลชื่อ (อยู่ด้านบนรูปภาพ) */
.profile-info {
  margin-bottom: 12px;
  min-height: 40px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; /* จัดข้อความให้อยู่กึ่งกลาง */
}
.name-th {
  font-weight: bold;
  color: #2c3e50;
  font-size: 0.95rem;
  line-height: 1.3;
}
.name-en {
  font-size: 0.75rem;
  color: #7f8c8d;
  margin-top: 3px;
  line-height: 1.2;
}

/* CSS สำหรับตำแหน่ง (Role) */
.role {
  font-size: 0.8rem;
  color: #475569;
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
  background-color: #f1f3f5;
  display: flex;
}
.profile-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top; 
  border-radius: 12px;
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
  .lab-header-box {
    flex-direction: column;
    padding: 25px;
    text-align: center;
  }
  .lab-logo-container {
    flex: 0 0 auto;
    width: 200px;
  }
  .custom-list {
    text-align: left;
  }
  .profile-flex {
    gap: 15px;
  }
  .profile-card {
    width: calc(50% - 10px); 
  }
  .head-card {
    width: 100%; /* ในมือถือให้กล่องหัวหน้ากว้างเต็มจอ */
    max-width: 300px;
  }
}
</style>