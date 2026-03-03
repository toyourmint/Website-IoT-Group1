<template>
  <div class="department-page">

    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">Departments</h1>
      </div>

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button :class="{ active: activeTab === 'iot' }" @click="selectTab('iot')">
            the Department of IoT<br>and Information Engineering
          </button>
          <button :class="{ active: activeTab === 'physics' }" @click="selectTab('physics')">
            Industrial Physics
          </button>
        </div>

        <div class="scroll-hint">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>

    <transition name="slide-up">
      <button v-if="showScrollTop" class="scroll-top-btn" @click="scrollToTop" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </transition>

    <div class="content-wrapper" ref="contentSection">
      <transition name="fade" mode="out-in">

        <div v-if="activeTab === 'iot'" key="iot" class="tab-content">
          <div class="section-header">
            <h2 class="section-title">IoT and Information Engineering</h2>
            <h3 class="section-subtitle">Department Faculty Members</h3>
            <p class="section-desc">คณาจารย์ประจำภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
          </div>

          <div class="member-grid">
            <div v-for="member in iotFaculty" :key="member.id" class="member-card clickable-card" @click="openModal(member)">
              <div class="member-info">
                <h4 class="member-name-th">{{ member.nameTh }}</h4>
                <p class="member-name-en">{{ member.nameEn }}</p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="member-img" />
              </div>
            </div>
          </div>

          <div class="section-header staff-header">
            <h3 class="section-subtitle">Department Staff</h3>
            <p class="section-desc">บุคลากรสายสนับสนุนภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
          </div>

          <div class="staff-grid">
            <div v-for="staff in iotStaff" :key="staff.id" class="member-card clickable-card" @click="openModal(staff)">
              <div class="member-info">
                <h4 class="member-name-th">{{ staff.nameTh }}</h4>
                <p class="member-name-en">{{ staff.nameEn }}</p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="member-img" />
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'physics'" key="physics" class="tab-content">
          <div class="section-header">
            <h2 class="section-title">Industrial Physics Department Faculty Members</h2>
            <p class="section-desc">คณาจารย์ประจำภาควิชาฟิสิกส์อุตสาหกรรม</p>
          </div>

          <div class="member-grid">
            <div v-for="member in physicsFaculty" :key="member.id" class="member-card clickable-card" @click="openModal(member)">
              <div class="member-info">
                <h4 class="member-name-th">{{ member.nameTh }}</h4>
                <p class="member-name-en">{{ member.nameEn }}</p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="member-img" />
              </div>
            </div>
          </div>

          <div class="section-header staff-header">
            <h3 class="section-subtitle">Department Staff</h3>
            <p class="section-desc">บุคลากรสายสนับสนุนภาควิชาฟิสิกส์อุตสาหกรรม</p>
          </div>

          <div class="staff-grid">
            <div v-for="staff in physicsStaff" :key="staff.id" class="member-card clickable-card" @click="openModal(staff)">
              <div class="member-info">
                <h4 class="member-name-th">{{ staff.nameTh }}</h4>
                <p class="member-name-en">{{ staff.nameEn }}</p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="member-img" />
              </div>
            </div>
          </div>
        </div>

      </transition>
    </div>

    <transition name="modal-fade">
      <div v-if="selectedMember" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="modal-body">
            <div class="modal-image-wrapper">
              <img :src="selectedMember.image" :alt="selectedMember.nameTh" />
            </div>

            <div class="modal-details">
              <h2 class="detail-name-th">{{ selectedMember.nameTh }}</h2>
              <h3 class="detail-name-en">{{ selectedMember.nameEn.split('\n')[0] }}</h3>
              
              <div class="detail-info-group">
                <p v-if="selectedMember.position || selectedMember.nameEn.split('\n')[1]">
                  <strong>ตำแหน่ง :</strong> {{ selectedMember.position || selectedMember.nameEn.split('\n')[1] }}
                </p>
                <p v-if="selectedMember.email">
                  <strong>e-mail :</strong> {{ selectedMember.email }}
                </p>
              </div>

              <div class="detail-section" v-if="selectedMember.education && selectedMember.education.length">
                <h4>ประวัติการศึกษา</h4>
                <ul>
                  <li v-for="(edu, idx) in selectedMember.education" :key="idx" v-html="edu.replace(/\n/g, '<br>')"></li>
                </ul>
              </div>

              <div class="detail-section" v-if="selectedMember.expertise && selectedMember.expertise.length">
                <h4>ความเชี่ยวชาญ</h4>
                <ul>
                  <li v-for="(exp, idx) in selectedMember.expertise" :key="idx">{{ exp }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeTab = ref('iot')

const { data } = await useFetch(
  'http://localhost:1337/api/professors?populate=*&pagination[pageSize]=100'
)

// ฟังก์ชันแปลง Strapi 5 Blocks (Rich Text) → array of strings
const parseBlocks = (blocks) => {
  if (!blocks || !Array.isArray(blocks)) return []
  const result = []
  for (const block of blocks) {
    if (block.type === 'list' && Array.isArray(block.children)) {
      for (const listItem of block.children) {
        const text = listItem.children?.map(c => c.text).join('') ?? ''
        if (text) result.push(text)
      }
    } else if (block.children) {
      const text = block.children.map(c => c.text).join('')
      if (text) result.push(text)
    }
  }
  return result
}

const professors = computed(() =>
  data.value?.data.map(item => ({
    id: item.id,
    nameTh: item.name_th,
    nameEn: item.name_en,
    department: item.department,   // "IoT" | "Physics"
    role: item.role,               // "Faculty" | "Staff"
    email: item.email,
    position: item.position,
    education: parseBlocks(item.education),
    expertise: parseBlocks(item.expertise),
    image: item.image?.url
      ? `http://localhost:1337${item.image.url}`
      : null
  })) || []
)

const iotFaculty = computed(() =>
  professors.value.filter(p => p.department === 'IoT' && p.role === 'Faculty')
)
const iotStaff = computed(() =>
  professors.value.filter(p => p.department === 'IoT' && p.role === 'Staff')
)
const physicsFaculty = computed(() =>
  professors.value.filter(p => p.department === 'Physics' && p.role === 'Faculty')
)
const physicsStaff = computed(() =>
  professors.value.filter(p => p.department === 'Physics' && p.role === 'Staff')
)

const contentSection = ref(null)
const showScrollTop = ref(false)
const selectedMember = ref(null)

const openModal = (member) => {
  selectedMember.value = member
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMember.value = null
  document.body.style.overflow = ''
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const selectTab = (tab) => {
  activeTab.value = tab
  setTimeout(() => {
    if (contentSection.value) {
      const y = contentSection.value.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, 100)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* ================== Layout ================== */
.department-page {
  /* background-color: #FFFDF9; */
  font-family: sans-serif;
  color: #2D3142;
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

/* ================== Scroll Hint ================== */
.scroll-hint {
  margin-top: 2rem;
  color: #9ca3af;
  animation: bounce 1s infinite;
}

.scroll-hint svg {
  width: 1.5rem;
  height: 1.5rem;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* ================== Content Wrapper ================== */
.content-wrapper {
  min-height: 100vh;
  padding: 5rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

/* ================== Section Header ================== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header.staff-header {
  margin-top: 5rem;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-top: 0.5rem;
}

.section-desc {
  font-size: 1rem;
  color: #6b7280;
  margin-top: 0.75rem;
  font-weight: 500;
}

/* ================== Member Grid ================== */
.member-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto 6rem;
}

.staff-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.staff-grid .member-card {
  width: calc(50% - 1rem);
  max-width: 350px;
}

/* ================== Member Card ================== */
.member-card {
  background-color: #F6F5F2;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

/* ================== Card Hover Effect ================== */
.clickable-card {
  cursor: pointer;
}
.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.member-info {
  margin-bottom: 1.5rem;
  min-height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.member-name-th {
  font-weight: bold;
  color: #1f2937;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.member-name-en {
  font-size: 0.875rem;
  color: #6b7280;
  white-space: pre-line;
  line-height: 1.6;
}

.member-img-wrapper {
  margin-top: auto;
  width: 10rem;
  height: 12rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #e5e7eb;
  border: 4px solid white;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ================== Scroll To Top Button ================== */
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

/* ================== Transitions ================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ================== Modal Styles ================== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: #E6E5E3;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 800px;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  max-height: 90vh; /* เผื่อเนื้อหาเยอะให้ scroll ได้ */
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s;
  z-index: 10;
}

.close-btn:hover {
  background-color: rgba(0,0,0,0.1);
  color: #1f2937;
}

.close-btn svg {
  width: 1.5rem;
  height: 1.5rem;
}

.modal-body {
  display: flex;
  flex-direction: row;
  padding: 3rem;
  gap: 3rem;
}

.modal-image-wrapper {
  flex-shrink: 0;
  width: 200px;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #fff;
  border: 4px solid white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.modal-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  flex-grow: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.detail-name-th {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
}

.detail-name-en {
  font-size: 1.1rem;
  font-weight: 500;
  color: #475569;
  margin: 0 0 1.5rem 0;
}

.detail-info-group p {
  margin: 0.25rem 0;
  font-size: 0.95rem;
  color: #334155;
}

.detail-section {
  margin-top: 1.5rem;
}

.detail-section h4 {
  font-size: 1rem;
  font-weight: bold;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.detail-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-section li {
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 0.5rem;
  line-height: 1.5;
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
  .member-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .tab-buttons {
    flex-direction: column;
  }

  .member-grid {
    grid-template-columns: 1fr;
  }

  .staff-grid .member-card {
    width: 100%;
  }

  /* Responsive สำหรับ Modal */
  .modal-body {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
  .modal-details {
    text-align: center;
  }
  .modal-footer-action {
    justify-content: center;
    margin-top: 1.5rem;
  }
  .modal-content {
    max-height: 85vh;
  }
}
</style>