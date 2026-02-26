<script setup>
import { ref } from 'vue'

// State ควบคุมแท็บ (ค่าเริ่มต้นคือ iot)
const activeTab = ref('iot')

// อ้างอิง (Ref) ไปที่ส่วนเนื้อหาเพื่อใช้ทำฟังก์ชันเลื่อนจอลงมา
const contentSection = ref(null)

// ฟังก์ชันเปลี่ยนแท็บ + เลื่อนหน้าจอ
const selectTab = (tab) => {
  activeTab.value = tab
  // รอให้ Vue อัปเดต DOM แป๊บนึงก่อนเลื่อน (เผื่อ Animation)
  setTimeout(() => {
    if (contentSection.value) {
      const yOffset = -80; // ปรับให้เหลือที่ว่างด้านบนนิดหน่อย (เผื่อมี Header)
      const element = contentSection.value;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }, 100)
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
  { id: 14, nameTh: 'รศ.ดร.อรรถสิทธิ์ หล่าสกุล', nameEn: 'Assoc.Prof.Dr.Attasit Lasakul\nอาจารย์พิเศษ', image: '/img/profIoT/ajattasit.jpg' },
])

const iotStaff = ref([
  { id: 1, nameTh: 'นายธนาตย์ จอมใจเอกชน', nameEn: 'Mr. Thanat Chomjaiakchan', image: '/img/profIoT/pchai.jpg' },
  { id: 2, nameTh: 'นายธีรสิทธิ์ โท้ทอง', nameEn: 'Mr. Theerasit Toongtong', image: '/img/profIoT/pkhai.jpg' },
])

// ==========================================
// ข้อมูลสาขา Industrial Physics
// ==========================================
// ==========================================
// ข้อมูลสาขา Industrial Physics (อัปเดตตามรูปภาพล่าสุด)
// ==========================================
const physicsFaculty = ref([
  // แถวที่ 1
  { 
    id: 1, 
    nameTh: 'รศ.ดร.ภัทรียา ดำรงศักดิ์', 
    nameEn: 'Assoc. Prof. Dr. Pattareeya Damrongsak\n(หัวหน้าภาควิชาฟิสิกส์)', 
    image: '/img/profPhy/pattareeya.png' 
  },
  { 
    id: 2, 
    nameTh: 'รศ.ดร.สาหร่าย เล็กชะอุ่ม', 
    nameEn: 'Assoc. Prof. Dr. Sarai Lekchaum\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/sarai.png' 
  },
  { 
    id: 3, 
    nameTh: 'รศ.ดร.รัชนก สมพรเสน่ห์', 
    nameEn: 'Assoc. Prof. Dr. Ratchanok Sompornsane\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/ratchanok.png' 
  },
  { 
    id: 4, 
    nameTh: 'ผศ.ดร.ศ.ทิพวรรณ คล้ายบุญมี', 
    nameEn: 'Asst. Prof. Dr. S.Tipawan Khlayboonme\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/tipawan.png' 
  },
  { 
    id: 5, 
    nameTh: 'รศ.ดร.อาภาภรณ์ สกุลการะเวก', 
    nameEn: 'Assoc. Prof. Dr. Aparporn Sakulkalavek\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/aparporn.png' 
  },
  { 
    id: 6, 
    nameTh: 'ดร.พิชชานันท์ ธีเศรษฐ์โศภน', 
    nameEn: 'Dr. Pichanan Teesetsopon\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/pichanan.png' 
  },
  { 
    id: 7, 
    nameTh: 'ผศ.ดร.เมตยา กิติวรรณ', 
    nameEn: 'Asst. Prof. Dr. Metaya Kittiwan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/mettaya.png' 
  },
  { 
    id: 8, 
    nameTh: 'ผศ.ธนภรณ์ ลีลาวัฒนานนท์', 
    nameEn: 'Asst. Prof. Thanaporn Leelawattananon\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/thanaporn.png' 
  },
  // แถวที่ 3
  { 
    id: 9, 
    nameTh: 'ผศ.สุรศักดิ์ พิพัฒน์ศาสตร์', 
    nameEn: 'Asst. Prof. Surasak Phiphatsart\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/surasak.png' 
  },
  { 
    id: 10, 
    nameTh: 'ผศ.ดร.ประธาน บุรณศิริ', 
    nameEn: 'Asst. Prof. Dr. Prathan Buranasiri\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/prathan.png' 
  },
  { 
    id: 11, 
    nameTh: 'อ.ธรรมรัตน์ แต่งตั้ง', 
    nameEn: 'Mr. Thammarat Tangtang\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/thammarat.png' 
  },
  { 
    id: 12, 
    nameTh: 'อ.สุรชาติ กมลดิลก', 
    nameEn: 'Mr. Surachat Kamol-dilok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/surachart.png' 
  },
  // แถวที่ 4
  { 
    id: 13, 
    nameTh: 'ผศ.ดร.ณัฐพร พรหมรส', 
    nameEn: 'Asst. Prof. Dr. Nattaporn Promros\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/nathaporn.png' 
  },
  { 
    id: 14, 
    nameTh: 'ศ.ดร.เชรษฐา รัตนพันธ์', 
    nameEn: 'Prof. Dr. Chettra Rattanaphan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/chesta.png' 
  },
  { 
    id: 15, 
    nameTh: 'รศ.ดร.กฤษกร โล้เจริญรัตน์', 
    nameEn: 'Assoc. Prof. Dr. Kitsakorn Locharoenrat\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/kitsakorn.png' 
  },
  { 
    id: 16, 
    nameTh: 'ผศ.ดร.ภาณุพล โขลนกระโทก', 
    nameEn: 'Asst. Prof. Dr. Panupol Khlonkratok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/bhanupol.png' 
  },
  // แถวที่ 5
  { 
    id: 17, 
    nameTh: 'ผศ.ดร.พิศาล ศรีราช', 
    nameEn: 'Asst. Prof. Dr. Phisan Srirach\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/pisan.png' 
  },
  { 
    id: 18, 
    nameTh: 'ดร.ชินพรรธน์ รัตนศิรวิทย์', 
    nameEn: 'Dr. Chinnaphat Rattanasirawit\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/chinnapat.png' 
  },
  { 
    id: 19, 
    nameTh: 'ผศ.ดร.กีรยุทธ์ ศรีนวลจันทร์', 
    nameEn: 'Asst. Prof. Dr. Keerayut Srinuanjan\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/keerayoot.png' 
  },
  { 
    id: 20, 
    nameTh: 'ดร.วิฑูรย์ ยินดีสุข', 
    nameEn: 'Dr. Witoon Yindeesuk\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/witoon.png' 
  },
  // แถวที่ 6
  { 
    id: 21, 
    nameTh: 'ผศ.ดร.ณัฏกฤษ สมดอก', 
    nameEn: 'Asst. Prof. Dr. Natthakrit Somdok\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/nuttakrit.png' 
  },
  { 
    id: 22, 
    nameTh: 'ผศ.ดร.ลัญจกร ตันนุกิจ', 
    nameEn: 'Asst. Prof. Dr. Lanchakorn Tannukij\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/lunchakurn.png' 
  },
  { 
    id: 23, 
    nameTh: 'ดร.เฉลิมพล รุจรดาวงศ์', 
    nameEn: 'Dr. Chalermpol Rudradawong\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/chalermpol.png' 
  },
  { 
    id: 24, 
    nameTh: 'ดร.ยงยุทธ แก้วจำรัส', 
    nameEn: 'Dr. Yongyut Kaewjumras\n(อาจารย์ผู้รับผิดชอบหลักสูตร)', 
    image: '/img/profPhy/yongyut.png' 
  }
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

<template>
  <div class="bg-[#FFFDF9] font-sans text-[#2D3142]">
    
    <section class="h-screen flex flex-col px-4 relative overflow-hidden">
      
      <div class="flex-grow flex items-center justify-center">
        <h1 class="text-5xl md:text-6xl lg:text-[7rem] font-bold text-[#32363f] tracking-wide text-center">
          Department
        </h1>
      </div>

      <div class="w-full flex flex-col items-center pb-12 md:pb-16">
        
        <div class="flex flex-col md:flex-row justify-center gap-6 w-full max-w-5xl px-4">
          <button 
            @click="selectTab('iot')"
            :class="activeTab === 'iot' ? 'ring-4 ring-orange-200 scale-[1.02]' : 'hover:scale-[1.02] opacity-90 hover:opacity-100'"
            class="flex-1 bg-gradient-to-b from-[#FDE8D0] to-[#F8C694] py-6 md:py-8 px-6 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center group"
          >
            <span class="font-bold text-[#32363f] text-sm md:text-xl leading-relaxed text-center group-hover:text-black">
              the Department of IoT<br>and Information Engineering
            </span>
          </button>

          <button 
            @click="selectTab('physics')"
            :class="activeTab === 'physics' ? 'ring-4 ring-orange-200 scale-[1.02]' : 'hover:scale-[1.02] opacity-90 hover:opacity-100'"
            class="flex-1 bg-gradient-to-b from-[#FDE8D0] to-[#F8C694] py-6 md:py-8 px-6 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center group"
          >
            <span class="font-bold text-[#32363f] text-sm md:text-xl text-center group-hover:text-black">
              Industrial Physics
            </span>
          </button>
        </div>

        <div class="mt-8 animate-bounce text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

      </div>
    </section>

    <section ref="contentSection" class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FFFDF9]">
      <div v-if="activeTab === 'iot'" class="animate-fade-in">
         <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800">IoT and Information Engineering</h2>
            <h3 class="text-2xl font-bold text-gray-800 mt-2">Department Faculty Members</h3>
            <p class="text-base text-gray-500 mt-3 font-medium">คณาจารย์ประจำภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            <div v-for="member in iotFaculty" :key="member.id" class="bg-[#F6F5F2] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div class="mb-6 min-h-[4.5rem] flex flex-col justify-center">
                <h4 class="font-bold text-gray-800 text-base mb-1">{{ member.nameTh }}</h4>
                <p class="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{{ member.nameEn }}</p>
              </div>
              <div class="mt-auto w-40 h-48 rounded-2xl overflow-hidden bg-gray-200 border-4 border-white shadow-inner">
                <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="w-full h-full object-cover" />
              </div>
            </div>
         </div>
         <div class="text-center mb-12">
            <h3 class="text-2xl font-bold text-gray-800">Department Staff</h3>
            <p class="text-base text-gray-500 mt-2 font-medium">บุคลากรสายสนับสนุนภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
          </div>
          <div class="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div v-for="staff in iotStaff" :key="staff.id" class="bg-[#F6F5F2] rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[350px] shadow-sm hover:shadow-md transition-all duration-300">
              <div class="mb-6 min-h-[3.5rem] flex flex-col justify-center">
                <h4 class="font-bold text-gray-800 text-base mb-1">{{ staff.nameTh }}</h4>
                <p class="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{{ staff.nameEn }}</p>
              </div>
              <div class="mt-auto w-40 h-48 rounded-2xl overflow-hidden bg-gray-200 border-4 border-white shadow-inner">
                <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
      </div>

      <div v-else-if="activeTab === 'physics'" class="animate-fade-in">
         <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800">Industrial Physics Department Faculty Members</h2>
          <p class="text-base text-gray-500 mt-3 font-medium">คณาจารย์ประจำภาควิชาฟิสิกส์อุตสาหกรรม</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          <div v-for="member in physicsFaculty" :key="member.id" class="bg-[#F6F5F2] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div class="mb-6 min-h-[4.5rem] flex flex-col justify-center">
              <h4 class="font-bold text-gray-800 text-base mb-1">{{ member.nameTh }}</h4>
              <p class="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{{ member.nameEn }}</p>
            </div>
            <div class="mt-auto w-40 h-48 rounded-2xl overflow-hidden bg-gray-200 border-4 border-white shadow-inner">
              <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-800">Department Staff</h3>
          <p class="text-base text-gray-500 mt-2 font-medium">บุคลากรสายสนับสนุนภาควิชาฟิสิกส์อุตสาหกรรม</p>
        </div>
        <div class="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <div v-for="staff in physicsStaff" :key="staff.id" class="bg-[#F6F5F2] rounded-[2rem] p-8 flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[350px] shadow-sm hover:shadow-md transition-all duration-300">
            <div class="mb-6 min-h-[3.5rem] flex flex-col justify-center">
              <h4 class="font-bold text-gray-800 text-base mb-1">{{ staff.nameTh }}</h4>
              <p class="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{{ staff.nameEn }}</p>
            </div>
            <div class="mt-auto w-40 h-48 rounded-2xl overflow-hidden bg-gray-200 border-4 border-white shadow-inner">
              <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
/* Animation สำหรับตอนสลับแท็บและตอนโหลดหน้า */
.animate-fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>