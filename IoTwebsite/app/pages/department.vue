<template>
  <div class="department-page">
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">
          Department
        </h1>
      </div>

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button
            :class="{ active: activeTab === 'iot' }"
            @click="selectTab('iot')"
          >
            the Department of IoT<br>and Information Engineering
          </button>
          <button
            :class="{ active: activeTab === 'physics' }"
            @click="selectTab('physics')"
          >
            Industrial Physics
          </button>
        </div>

        <div class="scroll-hint">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- ปุ่ม Scroll to Top -->
    <transition name="slide-up">
      <button
        v-if="showScrollTop"
        class="scroll-top-btn"
        aria-label="Scroll to top"
        @click="scrollToTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </transition>

    <div
      ref="contentSection"
      class="content-wrapper"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="activeTab === 'iot'"
          key="iot"
          class="tab-content"
        >
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
            <div
              v-for="member in iotFaculty"
              :key="member.id"
              class="member-card"
            >
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ member.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ member.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.nameTh"
                  class="member-img"
                >
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
            <div
              v-for="staff in iotStaff"
              :key="staff.id"
              class="member-card"
            >
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ staff.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ staff.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img
                  v-if="staff.image"
                  :src="staff.image"
                  :alt="staff.nameTh"
                  class="member-img"
                >
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="activeTab === 'physics'"
          key="physics"
          class="tab-content"
        >
          <div class="section-header">
            <h2 class="section-title">
              Industrial Physics Department Faculty Members
            </h2>
            <p class="section-desc">
              คณาจารย์ประจำภาควิชาฟิสิกส์อุตสาหกรรม
            </p>
          </div>

          <div class="member-grid">
            <div
              v-for="member in physicsFaculty"
              :key="member.id"
              class="member-card"
            >
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ member.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ member.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.nameTh"
                  class="member-img"
                >
              </div>
            </div>
          </div>

          <div class="section-header staff-header">
            <h3 class="section-subtitle">
              Department Staff
            </h3>
            <p class="section-desc">
              บุคลากรสายสนับสนุนภาควิชาฟิสิกส์อุตสาหกรรม
            </p>
          </div>

          <div class="staff-grid">
            <div
              v-for="staff in physicsStaff"
              :key="staff.id"
              class="member-card"
            >
              <div class="member-info">
                <h4 class="member-name-th">
                  {{ staff.nameTh }}
                </h4>
                <p class="member-name-en">
                  {{ staff.nameEn }}
                </p>
              </div>
              <div class="member-img-wrapper">
                <img
                  v-if="staff.image"
                  :src="staff.image"
                  :alt="staff.nameTh"
                  class="member-img"
                >
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// State ควบคุมแท็บ (ค่าเริ่มต้นคือ iot)
const activeTab = ref('iot')

// อ้างอิง (Ref) ไปที่ส่วนเนื้อหาเพื่อใช้ทำฟังก์ชันเลื่อนจอลงมา
const contentSection = ref(null)

// State ควบคุมการแสดงปุ่ม scroll top
const showScrollTop = ref(false)

// ตรวจจับการเลื่อนหน้าจอ
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ฟังก์ชันเปลี่ยนแท็บ + เลื่อนหน้าจอ
const selectTab = (tab) => {
  activeTab.value = tab
  // รอให้ Vue อัปเดต DOM แป๊บนึงก่อนเลื่อน (เผื่อ Animation)
  setTimeout(() => {
    if (contentSection.value) {
      const yOffset = -80 // ปรับให้เหลือที่ว่างด้านบนนิดหน่อย (เผื่อมี Header)
      const element = contentSection.value
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, 100)
}

// ฟังก์ชัน scroll กลับขึ้นบนสุด
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
// ==========================================
// ข้อมูลสาขา IoT
// ==========================================
const iotFaculty = ref([
  { id: 1, nameTh: 'ผศ.ดร.พิกุลแก้ว ตังติสานนท์', nameEn: 'Asst.Prof.Dr.Pikulkaew Tangtisanon\nหัวหน้าภาควิชา', image: '/img/profIoT/ajkaew.jpg' },
  { id: 2, nameTh: 'รศ.ดร.บุณย์ชนะ ภู่ระหงษ์', nameEn: 'Assoc.Prof.Dr.Boonchana Purahong\nประธานหลักสูตรวิศวกรรมระบบไอโอทีและสารสนเทศ', image: '/img/profIoT/ajboon.jpg' },
  { id: 3, nameTh: 'ศ.ดร. อภิรัฐ ศิริธราธิวัตร', nameEn: 'Prof. Dr. Apirat Siritaratiwat\nรองหัวหน้าภาควิชา (ฝ่ายวิจัยและนวัตกรรม)', image: '/img/profIoT/ajapirat.jpg' },
  { id: 4, nameTh: 'ผศ.ดร.วันวิสา ชัชวงษ์', nameEn: 'Asst.Prof.Dr.Vanvisa Chutchavong\nรองหัวหน้าภาควิชา (ฝ่ายการเงิน)', image: '/img/profIoT/ajkai.jpg' },
  { id: 5, nameTh: 'ผศ.ดร.นัชนัยน์ รุ่งเหมือนฟ้า', nameEn: 'Asst.Prof.Dr.Natchanai Roongmuanpha\nรองหัวหน้าภาควิชา (ฝ่ายต่างประเทศและกิจกรรมคณะ)', image: '/img/profIoT/ajohm.jpg' },
  { id: 6, nameTh: 'ผศ.ดร.เกล็ดดาว สัตย์เจริญ', nameEn: 'Asst.Prof.Dr.Kleddao Satcharoen\nอาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายต่างประเทศและกิจกรรมคณะ)', image: '/img/profIoT/ajfon.jpg' },
  { id: 7, nameTh: 'ผศ.นิจจารีย์ สัตยารักษ์', nameEn: 'Asst.Prof.Nitjaree Satayarak\nรองหัวหน้าภาควิชา (ฝ่ายกิจการนักศึกษา)', image: '/img/profIoT/ajnit.jpg' },
  { id: 8, nameTh: 'ผศ.ดร.ธนวิชญ์ อนุวงศ์พินิจ', nameEn: 'Asst.Prof.Dr.Thanavit Anuwongpinit\nรองหัวหน้าภาควิชา (ฝ่ายวิชาการ)', image: '/img/profIoT/ajneng.jpg' },
  { id: 9, nameTh: 'ดร.สุวิไล พุ่มโพธิ์', nameEn: 'Dr.Suwilai Phumpho\nรองหัวหน้าภาควิชา (ฝ่ายกิจการภายนอก)', image: '/img/profIoT/ajjeng.jpg' },
  { id: 10, nameTh: 'ผศ.ดร.อรรถพล ป้อมสถิตย์', nameEn: 'Asst.Prof.Dr.Auttapon Pomsathit\nอาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการภายนอก)', image: '/img/profIoT/ajped.jpg' },
  { id: 11, nameTh: 'ผศ.ดร.พนารัตน์ เชิญถนอมวงศ์', nameEn: 'Asst.Prof.Dr.Panarat Cherntanomwong\nอาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการภายนอก)', image: '/img/profIoT/ajpanarat.png' },
  { id: 12, nameTh: 'ผศ.สรพงษ์ วชิรรัตนพรกุล', nameEn: 'Asst.Prof.Sorapong Wachirarattanapornkul\nอาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการนักศึกษา)', image: '/img/profIoT/ajtee.jpg' },
  { id: 13, nameTh: 'ผศ.ไพศาล สิทธิโยภาสกุล', nameEn: 'Asst.Prof.Paisan Sithiyopasakul\nอาจารย์พิเศษ', image: '/img/profIoT/ajpaisan.jpg' },
  { id: 14, nameTh: 'รศ.ดร.อรรถสิทธิ์ หล่าสกุล', nameEn: 'Assoc.Prof.Dr.Attasit Lasakul\nอาจารย์พิเศษ', image: '/img/profIoT/ajattasit.jpg' }
])

const iotStaff = ref([
  { id: 1, nameTh: 'นายธนาตย์ จอมใจเอกชน', nameEn: 'Mr. Thanat Chomjaiakchan', image: '/img/profIoT/pchai.jpg' },
  { id: 2, nameTh: 'นายธีรสิทธิ์ โท้ทอง', nameEn: 'Mr. Theerasit Toongtong', image: '/img/profIoT/pkhai.jpg' }
])

// ==========================================
// ข้อมูลสาขา Industrial Physics
// ==========================================
const physicsFaculty = ref([
  // แถวที่ 1
  { id: 1, nameTh: 'รศ.ดร.ภัทรียา ดำรงศักดิ์', nameEn: 'Assoc. Prof. Dr. Pattareeya Damrongsak\n(หัวหน้าภาควิชาฟิสิกส์)', image: '/img/profPhy/pattareeya.png' },
  { id: 2, nameTh: 'รศ.ดร.สาหร่าย เล็กชะอุ่ม', nameEn: 'Assoc. Prof. Dr. Sarai Lekchaum\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/sarai.png' },
  { id: 3, nameTh: 'รศ.ดร.รัชนก สมพรเสน่ห์', nameEn: 'Assoc. Prof. Dr. Ratchanok Sompornsane\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/ratchanok.png' },
  { id: 4, nameTh: 'ผศ.ดร.ศ.ทิพวรรณ คล้ายบุญมี', nameEn: 'Asst. Prof. Dr. S.Tipawan Khlayboonme\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/tipawan.png' },
  { id: 5, nameTh: 'รศ.ดร.อาภาภรณ์ สกุลการะเวก', nameEn: 'Assoc. Prof. Dr. Aparporn Sakulkalavek\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/aparporn.png' },
  { id: 6, nameTh: 'ดร.พิชชานันท์ ธีเศรษฐ์โศภน', nameEn: 'Dr. Pichanan Teesetsopon\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/pichanan.png' },
  { id: 7, nameTh: 'ผศ.ดร.เมตยา กิติวรรณ', nameEn: 'Asst. Prof. Dr. Metaya Kittiwan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/mettaya.png' },
  { id: 8, nameTh: 'ผศ.ธนภรณ์ ลีลาวัฒนานนท์', nameEn: 'Asst. Prof. Thanaporn Leelawattananon\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/thanaporn.png' },
  // แถวที่ 3
  { id: 9, nameTh: 'ผศ.สุรศักดิ์ พิพัฒน์ศาสตร์', nameEn: 'Asst. Prof. Surasak Phiphatsart\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/surasak.png' },
  { id: 10, nameTh: 'ผศ.ดร.ประธาน บุรณศิริ', nameEn: 'Asst. Prof. Dr. Prathan Buranasiri\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/prathan.png' },
  { id: 11, nameTh: 'อ.ธรรมรัตน์ แต่งตั้ง', nameEn: 'Mr. Thammarat Tangtang\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/thammarat.png' },
  { id: 12, nameTh: 'อ.สุรชาติ กมลดิลก', nameEn: 'Mr. Surachat Kamol-dilok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/surachart.png' },
  // แถวที่ 4
  { id: 13, nameTh: 'ผศ.ดร.ณัฐพร พรหมรส', nameEn: 'Asst. Prof. Dr. Nattaporn Promros\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/nathaporn.png' },
  { id: 14, nameTh: 'ศ.ดร.เชรษฐา รัตนพันธ์', nameEn: 'Prof. Dr. Chettra Rattanaphan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/chesta.png' },
  { id: 15, nameTh: 'รศ.ดร.กฤษกร โล้เจริญรัตน์', nameEn: 'Assoc. Prof. Dr. Kitsakorn Locharoenrat\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/kitsakorn.png' },
  { id: 16, nameTh: 'ผศ.ดร.ภาณุพล โขลนกระโทก', nameEn: 'Asst. Prof. Dr. Panupol Khlonkratok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/bhanupol.png' },
  // แถวที่ 5
  { id: 17, nameTh: 'ผศ.ดร.พิศาล ศรีราช', nameEn: 'Asst. Prof. Dr. Phisan Srirach\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/pisan.png' },
  { id: 18, nameTh: 'ดร.ชินพรรธน์ รัตนศิรวิทย์', nameEn: 'Dr.Chinnapat Ruttanasirawit\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/chinnapat.png' },
  { id: 19, nameTh: 'ผศ.ดร.กีรยุทธ์ ศรีนวลจันทร์', nameEn: 'Asst. Prof. Dr. Keerayoot Srinuanjan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/keerayoot.png' },
  { id: 20, nameTh: 'ดร.วิฑูรย์ ยินดีสุข', nameEn: 'Dr.Witoon Yindeesuk\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/witoon.png' },
  { id: 21, nameTh: 'ดร.ณัฏกฤษ สมดอก', nameEn: 'Dr.Nuttakrit Somdock\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/nuttakrit.png' },
  { id: 22, nameTh: 'ผศ.ดร.ลัญจกร ตันนุกิจ', nameEn: 'Asst. Prof. Dr. Lanchakorn Tannukij\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/lunchakurn.png' },
  { id: 23, nameTh: 'ดร.เฉลิมพล รุจรดาวงศ์', nameEn: 'Dr. Chalermpol Rudradawong\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/chalermpol.png' },
  { id: 24, nameTh: 'ดร.ยงยุทธ แก้วจำรัส', nameEn: 'Dr. Yongyut Kaewjumras\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/yongyut.png' }
])

const physicsStaff = ref([
  { id: 1, nameTh: 'นางสาวสายสุดาวัลย์ สุทธิญาณ', nameEn: 'Ms.Saisudawan Suttiyan\nนักวิทยาศาสตร์', image: '/img/profPhy/saisudawan.png' },
  { id: 2, nameTh: 'นางพิมพร อ่อนละออ', nameEn: 'Mrs.Pimporn Onlaor\nนักวิทยาศาสตร์', image: '/img/profPhy/pimporn.png' },
  { id: 3, nameTh: 'นางสาวนลิตา สว่างจิตต์', nameEn: 'Ms.Nalita Sawangjit\nนักวิทยาศาสตร์', image: '/img/profPhy/nalita.png' },
  { id: 4, nameTh: 'นางสาวเกศณี เกตุนวม', nameEn: 'Ms.Kesanee Ketnuam\nเจ้าหน้าที่บริหารงานทั่วไป', image: '/img/profPhy/kesanee.png' },
  { id: 5, nameTh: 'นายวีระพันธ์ ทิพาพงศ์', nameEn: 'Mr.Weraphan Tipaphong\nนักวิทยาศาสตร์', image: '/img/profPhy/weraphan.png' },
  { id: 6, nameTh: 'นายชวนนท์ มะโน', nameEn: 'Mr.Chawanon Mano\nนักวิทยาศาสตร์', image: '/img/profPhy/chawanon.png' },
  { id: 7, nameTh: 'นายสาโรจน์ ชูอำไพ', nameEn: 'Mr.Saroj Chooampai\nผู้ปฏิบัติงานวิทยาศาสตร์', image: '/img/profPhy/saroj.png' }
])
</script>

<style scoped>
/* ================== Layout ================== */
.department-page {
  background-color: #FFFDF9;
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
  transition: box-shadow 0.3s ease;
}

.member-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
}
</style>
