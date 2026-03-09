<template>
  <div class="department-page">
    <div class="hero-fullscreen">
      <Background>
        <div class="title-container">
          <h1 class="main-title">
            {{ $t('pages.department.title') }}
          </h1>
        </div>
      </Background>

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button :class="{ active: activeTab === 'iot' }" @click="selectTab('iot')">
            {{ $t('pages.department.iote') }}
          </button>
          <button :class="{ active: activeTab === 'physics' }" @click="selectTab('physics')">
            {{ $t('pages.department.physics') }}
          </button>
        </div>

        <div class="scroll-hint" @click="scrollToDetails" style="cursor: pointer;" title="เลื่อนลงเพื่อดูรายละเอียด">
          <Icon name="mdi:chevron-down" style="width: 2rem; height: 2rem;" />
        </div>
      </div>
    </div>

    <transition name="slide-up">
      <button v-if="showScroll" class="scroll-top-btn" @click="scrollToTop" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </transition>
    <div ref="contentSection" class="content-wrapper">
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'iot'" key="iot" class="tab-content">
          <div class="section-header">
            <h2 class="section-title">
              IoT and Information Engineering
            </h2>
            <h3 class="section-subtitle">
              Department Faculty Members
            </h3>
            <p class="section-desc">
              คณาจารย์ประจำภาควิชาวิศวกรรมไอโอทีและสารสนเทศ
            </p>
          </div>

          <div class="member-grid">
            <div v-for="member in iotFaculty" :key="member.id" class="member-card clickable-card"
              @click="openModal(member)">
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ member.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ member.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="member-img">
              </div>
            </div>
          </div>

          <div class="section-header staff-header">
            <h3 class="section-subtitle">
              Department Staff
            </h3>
            <p class="section-desc">
              บุคลากรสายสนับสนุนภาควิชาวิศวกรรมไอโอทีและสารสนเทศ
            </p>
          </div>

          <div class="staff-grid">
            <div v-for="staff in iotStaff" :key="staff.id" class="member-card clickable-card" @click="openModal(staff)">
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ staff.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ staff.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="member-img">
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'physics'" key="physics" class="tab-content">
          <div class="section-header">
            <h2 class="section-title">
              Industrial Physics
            </h2>
            <h3 class="section-subtitle">
              Faculty Members
            </h3>
            <p class="section-desc">
              คณาจารย์ประจำสาขาวิชาฟิสิกส์อุตสาหกรรม
            </p>
          </div>

          <div class="member-grid">
            <div v-for="member in physicsFaculty" :key="member.id" class="member-card clickable-card"
              @click="openModal(member)">
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ member.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ member.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="member-img">
              </div>
            </div>
          </div>

          <div class="section-header staff-header">
            <h3 class="section-subtitle">
              Department Staff
            </h3>
            <p class="section-desc">
              บุคลากรสายสนับสนุนสาขาวิชาฟิสิกส์อุตสาหกรรม
            </p>
          </div>

          <div class="staff-grid">
            <div v-for="staff in physicsStaff" :key="staff.id" class="member-card clickable-card"
              @click="openModal(staff)">
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ staff.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ staff.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="member-img">
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
            <Icon name="mdi:close" />
          </button>

          <div class="modal-body">
            <div class="modal-image-wrapper">
              <img :src="selectedMember.image" :alt="selectedMember.nameTh">
            </div>

            <div class="modal-details">
              <h2 class="detail-name-th">
                {{ selectedMember.nameTh }}
              </h2>
              <h3 class="detail-name-en">
                {{ selectedMember.nameEn.split('\n')[0] }}
              </h3>

              <div class="detail-info-group">
                <p v-if="selectedMember.position || selectedMember.nameEn.split('\n')[1]">
                  <strong>ตำแหน่ง :</strong> {{ selectedMember.position || selectedMember.nameEn.split('\n')[1] }}
                </p>
                <p v-if="selectedMember.email">
                  <strong>e-mail :</strong> {{ selectedMember.email }}
                </p>
              </div>

              <div v-if="selectedMember.education && selectedMember.education.length" class="detail-section">
                <h4>ประวัติการศึกษา</h4>
                <ul>
                  <li v-for="(edu, idx) in selectedMember.education" :key="idx" v-html="edu.replace(/\n/g, '<br>')" />
                </ul>
              </div>

              <div v-if="selectedMember.expertise && selectedMember.expertise.length" class="detail-section">
                <h4>ความเชี่ยวชาญ</h4>
                <ul>
                  <li v-for="(exp, idx) in selectedMember.expertise" :key="idx">
                    {{ exp }}
                  </li>
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
import { ref, computed, onMounted, onUnmounted } from 'vue' // เพิ่ม onMounted, onUnmounted

const activeTab = ref('iot')
const selectedMember = ref(null)
const savedScrollPosition = ref(0)

const contentSection = ref(null)

const scrollToDetails = () => {
  if (contentSection.value) {
    contentSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const openModal = (member) => {
  savedScrollPosition.value = window.scrollY   // จำตำแหน่งไว้
  selectedMember.value = member
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMember.value = null
  document.body.style.overflow = ''

  window.scrollTo({
    top: savedScrollPosition.value,
    behavior: 'auto'   // ✅ ถูกต้อง
  })
}

/* =============================
   🔥 Fetch แบบเดียวกับหน้า News
============================= */
const config = useRuntimeConfig()
const { data, pending } = useFetch(
  `${config.public.apiBase}/professors?populate=*&pagination[limit]=100`,
  { server: false }
)
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
  // เพิ่ม Event Listener สำหรับ Scroll อย่างเดียวพอครับ
  window.addEventListener('scroll', handleScroll)
})

// ลบ Event Listener ออกเมื่อทำลาย Component เพื่อป้องกัน Memory Leak
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
/* =============================
   🔥 แปลง Rich Text → Array
============================= */

const parseBlocks = (blocks) => {
  if (!blocks || !Array.isArray(blocks)) return []

  const result = []

  for (const block of blocks) {
    if (block.type === 'paragraph') {
      const text = block.children?.map(c => c.text).join('')
      if (text) result.push(text)
    }
    if (block.type === 'list') {
      for (const item of block.children ?? []) {
        const text = item.children?.map(c => c.text).join('')
        if (text) result.push(text)
      }
    }
  }

  return result
}

/* =============================
   🔥 Format ให้เหมือนหน้า News
============================= */

const professorList = computed(() =>
  data.value?.data.map(item => ({
    id: item.id,
    nameTh: item.name_th,
    nameEn: item.name_en,
    position: item.position,
    email: item.email,
    department: item.department,
    role: item.role,
    education: parseBlocks(item.education),
    expertise: parseBlocks(item.expertise),
    image: item.image?.url
      ? `${config.public.apiBase.replace('/api', '')}${item.image.url}`
      : null
  })) || []
)

/* =============================
   🔥 แยกกลุ่ม
============================= */

const iotFaculty = computed(() =>
  professorList.value.filter(
    m =>
      m.department?.toLowerCase() === 'iot' &&
      m.role?.toLowerCase() === 'faculty'
  )
)

const iotStaff = computed(() =>
  professorList.value.filter(
    m =>
      m.department?.toLowerCase() === 'iot' &&
      m.role?.toLowerCase() === 'staff'
  )
)

const physicsFaculty = computed(() =>
  professorList.value.filter(
    m =>
      m.department?.toLowerCase() === 'physics' &&
      m.role?.toLowerCase() === 'faculty'
  )
)

const physicsStaff = computed(() =>
  professorList.value.filter(
    m =>
      m.department?.toLowerCase() === 'physics' &&
      m.role?.toLowerCase() === 'staff'
  )
)
const selectTab = (tab) => {
  activeTab.value = tab
}
</script>
<style scoped>
/* ================== Layout ================== */
.department-page {
  position: relative;
}

/* ================== Hero Section ================== */
/* ตั้งค่าให้ title ลอยอยู่ตรงกลางจอทับ Background */
.title-container {
  /* ทำให้กล่อง title มีพื้นที่พอเหมาะ */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 900px;
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

/* ================== Scroll Hint ================== */
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
  color: var(--heading-color);
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-main);
  margin-top: 0.5rem;
}

.section-desc {
  font-size: 1rem;
  color: var(--text-muted);
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
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 15px var(--card-shadow);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s;
}

.clickable-card {
  cursor: pointer;
}

.clickable-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px var(--card-shadow);
  border-color: #ff9800;
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
  color: var(--text-main);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.member-name-en {
  font-size: 0.875rem;
  color: var(--text-muted);
  white-space: pre-line;
  line-height: 1.6;
}

.member-img-wrapper {
  margin-top: auto;
  width: 10rem;
  height: 12rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--bg-main);
  border: 4px solid var(--border-color);
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ================== Modal Styles ================== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal-content {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 800px;
  position: relative;
  box-shadow: 0 20px 25px -5px var(--card-shadow);
  overflow: hidden;
  max-height: 90vh;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-main);
  border: 1px solid var(--border-color);
  cursor: pointer;
  color: var(--text-muted);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background-color: var(--border-color);
  color: #ff9800;
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
  background-color: var(--bg-main);
  border: 4px solid var(--border-color);
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
  color: var(--text-main);
  margin: 0 0 0.25rem 0;
}

.detail-name-en {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-muted);
  margin: 0 0 1.5rem 0;
}

.detail-info-group p {
  margin: 0.25rem 0;
  font-size: 0.95rem;
  color: var(--text-main);
}

.detail-section {
  margin-top: 1.5rem;
}

.detail-section h4 {
  font-size: 1rem;
  font-weight: bold;
  color: var(--heading-color);
  margin: 0 0 0.5rem 0;
}

.detail-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-section li {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
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
  transform: translateY(20px);
  /* ให้ปุ่มเลื่อนลงไปซ่อนด้านล่างตอนหายไป */
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

  .modal-body {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }

  .modal-details {
    text-align: center;
  }

  .modal-content {
    max-height: 85vh;
  }
}
</style>