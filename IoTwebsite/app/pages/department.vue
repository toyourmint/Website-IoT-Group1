<template>
  <div class="department-page">
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">
          {{ $t('pages.department.title') }}
        </h1>
      </div>

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button :class="{ active: activeTab === 'iot' }" @click="selectTab('iot')">
            {{ $t('pages.department.iote') }}
          </button>
          <button :class="{ active: activeTab === 'physics' }" @click="selectTab('physics')">
            {{ $t('pages.department.physics') }}
          </button>
        </div>

        <div class="scroll-hint">
          <Icon name="mdi:chevron-down" style="width: 2rem; height: 2rem;" />
        </div>
      </div>
    </div>

    <transition name="slide-up">
      <button v-if="showScrollTop" class="scroll-top-btn" aria-label="Scroll to top" @click="scrollToTop">
        <Icon name="mdi:arrow-up" />
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
              IoT and Information Engineering
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
              บุคลากรสายสนับสนุนภาควิชาฟิสิกส์อุตสาหกรรม
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
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref('iot')
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const selectTab = (tab) => {
  activeTab.value = tab
  setTimeout(() => {
    if (contentSection.value) {
      const yOffset = -80
      const element = contentSection.value
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, 100)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ฐานข้อมูล (ข้อมูลเดิมของคุณ)
const iotFaculty = ref([
  { id: 1, nameTh: 'ผศ.ดร.พิกุลแก้ว ตังติสานนท์', nameEn: 'Asst.Prof.Dr.Pikulkaew Tangtisanon\nหัวหน้าภาควิชา', image: '/img/profIoT/ajkaew.jpg', position: 'อาจารย์ประจำหลักสูตร', email: 'pikulkaew.ta@kmitl.ac.th', education: ['- วศ.บ. (วิศวกรรมสารสนเทศ)\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', '- วศ.ม. (วิศวกรรมสารสนเทศ)\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', '- D.Eng. (Science and Technology) Tokai University, JAPAN'], expertise: ['- Web Application', '- Mobile Application', '- Information Security'] },
  { id: 2, nameTh: 'รศ.ดร.บุณย์ชนะ ภู่ระหงษ์', nameEn: 'Assoc.Prof.Dr.Boonchana Purahong\nประธานหลักสูตรวิศวกรรมระบบไอโอทีและสารสนเทศ', image: '/img/profIoT/ajboon.jpg', position: 'ผู้ประสานงานสาขาวิชาวิศวกรรมสารสนเทศ', email: 'boonchana.pu@kmitl.ac.th', education: ['- อส.บ. (เทคโนโลยีอิเล็กทรอนิกส์)\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', '- วศ.ม. (วิศวกรรมสารสนเทศ)\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง'], expertise: ['- Microprocessor Application', '- Microcontroller', '- Robotic', '- Internet of Things and Smart System'] },
  { id: 3, nameTh: 'ศ.ดร. อภิรัฐ ศิริธราธิวัตร', nameEn: 'Prof. Dr. Apirat Siritaratiwat\nรองหัวหน้าภาควิชา (ฝ่ายวิจัยและนวัตกรรม)', image: '/img/profIoT/ajapirat.jpg' },
  { id: 4, nameTh: 'ผศ.ดร.วันวิสา ชัชวงษ์', nameEn: 'Asst.Prof.Dr.Vanvisa Chutchavong\nรองหัวหน้าภาควิชา (ฝ่ายการเงิน)', image: '/img/profIoT/ajkai.jpg', position: 'อาจารย์ประจำหลักสูตร', email: 'vanvisa.ch@kmitl.ac.th', education: ['- อส.บ. เกียรตินิยมอันดับ 2 (เทคโนโลยีอิเล็กทรอนิกส์)\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', '- วศ.ม. (วิศวกรรมสารสนเทศ)\nสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', '- วศ.ด. (วิศวกรรมไฟฟ้า) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง'], expertise: ['- Electronic', '- Bernstein Filter', '- Railway Signaling and Operation', '- Pattern recognition', '- Railway Communications'] },
  { id: 5, nameTh: 'ผศ.ดร.นัชนัยน์ รุ่งเหมือนฟ้า', nameEn: 'Asst.Prof.Dr.Natchanai Roongmuanpha\nรองหัวหน้าภาควิชา (ฝ่ายต่างประเทศและกิจกรรมคณะ)', image: '/img/profIoT/ajohm.jpg', position: 'อาจารย์ประจำหลักสูตร', email: 'natchanai.ro@kmitl.ac.th', education: ['- B.Eng.(Electronics Engineering) KMITL', '- M.Eng.(Control Engineering) KMITL', '- D.Eng.(Electrical Engineering) KMITL'], expertise: ['- immittance function simulators', '- active analog filters', '- oscillator design', '- chaotic circuit realization'] },
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

const physicsFaculty = ref([
  { id: 1, nameTh: 'รศ.ดร.ภัทรียา ดำรงศักดิ์', nameEn: 'Assoc. Prof. Dr. Pattareeya Damrongsak\n(หัวหน้าภาควิชาฟิสิกส์)', image: '/img/profPhy/pattareeya.png' },
  { id: 2, nameTh: 'รศ.ดร.สาหร่าย เล็กชะอุ่ม', nameEn: 'Assoc. Prof. Dr. Sarai Lekchaum\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/sarai.png' },
  { id: 3, nameTh: 'รศ.ดร.รัชนก สมพรเสน่ห์', nameEn: 'Assoc. Prof. Dr. Ratchanok Sompornsane\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/ratchanok.png' },
  { id: 4, nameTh: 'ผศ.ดร.ศ.ทิพวรรณ คล้ายบุญมี', nameEn: 'Asst. Prof. Dr. S.Tipawan Khlayboonme\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/tipawan.png' },
  { id: 5, nameTh: 'รศ.ดร.อาภาภรณ์ สกุลการะเวก', nameEn: 'Assoc. Prof. Dr. Aparporn Sakulkalavek\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/aparporn.png' },
  { id: 6, nameTh: 'ดร.พิชชานันท์ ธีเศรษฐ์โศภน', nameEn: 'Dr. Pichanan Teesetsopon\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/pichanan.png' },
  { id: 7, nameTh: 'ผศ.ดร.เมตยา กิติวรรณ', nameEn: 'Asst. Prof. Dr. Metaya Kittiwan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/mettaya.png' },
  { id: 8, nameTh: 'ผศ.ธนภรณ์ ลีลาวัฒนานนท์', nameEn: 'Asst. Prof. Thanaporn Leelawattananon\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/thanaporn.png' },
  { id: 9, nameTh: 'ผศ.สุรศักดิ์ พิพัฒน์ศาสตร์', nameEn: 'Asst. Prof. Surasak Phiphatsart\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/surasak.png' },
  { id: 10, nameTh: 'ผศ.ดร.ประธาน บุรณศิริ', nameEn: 'Asst. Prof. Dr. Prathan Buranasiri\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/prathan.png' },
  { id: 11, nameTh: 'อ.ธรรมรัตน์ แต่งตั้ง', nameEn: 'Mr. Thammarat Tangtang\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/thammarat.png' },
  { id: 12, nameTh: 'อ.สุรชาติ กมลดิลก', nameEn: 'Mr. Surachat Kamol-dilok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/surachart.png' },
  { id: 13, nameTh: 'ผศ.ดร.ณัฐพร พรหมรส', nameEn: 'Asst. Prof. Dr. Nattaporn Promros\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/nathaporn.png' },
  { id: 14, nameTh: 'ศ.ดร.เชรษฐา รัตนพันธ์', nameEn: 'Prof. Dr. Chettra Rattanaphan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/chesta.png' },
  { id: 15, nameTh: 'รศ.ดร.กฤษกร โล้เจริญรัตน์', nameEn: 'Assoc. Prof. Dr. Kitsakorn Locharoenrat\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/kitsakorn.png' },
  { id: 16, nameTh: 'ผศ.ดร.ภาณุพล โขลนกระโทก', nameEn: 'Asst. Prof. Dr. Panupol Khlonkratok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', image: '/img/profPhy/bhanupol.png' },
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
  position: relative;
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

/* ================== Scroll To Top Button ================== */
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
  transition: transform 0.2s ease, border-color 0.2s;
}

.scroll-top-btn:hover {
  transform: scale(1.1);
  border-color: #ff9800;
  color: #ff9800;
}

.scroll-top-btn svg {
  width: 1.25rem;
  height: 1.25rem;
  color: inherit;
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