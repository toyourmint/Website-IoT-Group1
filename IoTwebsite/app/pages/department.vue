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
  { id: 1, nameTh: 'ผศ.ดร.พิกุลแก้ว ตังติสานนท์', nameEn: 'Asst.Prof.Dr.Pikulkaew Tangtisanon\n(หัวหน้าภาควิชา)', image: '/img/profIoT/ajkaew.jpg' },
  { id: 2, nameTh: 'รศ.ดร. สุวิทย์ รุ่งเรือง', nameEn: 'Assoc. Prof. Dr. Suwit Rungruang', image: '/images/iot-2.jpg' },
  { id: 3, nameTh: 'อ.ดร. เจริญชัย ใจดี', nameEn: 'Dr. Charoenchai Jaidee', image: '/images/iot-3.jpg' },
  { id: 4, nameTh: 'ผศ.ดร. ใจดี มีสุข', nameEn: 'Asst. Prof. Dr. Jaidee Meesuk', image: '/images/iot-4.jpg' },
  { id: 5, nameTh: 'อ.ดร. รักเรียน ขยันยิ่ง', nameEn: 'Dr. Rakrian Kayanying', image: '/images/iot-5.jpg' },
  { id: 6, nameTh: 'อ.ดร. สมหญิง งามพร้อม', nameEn: 'Dr. Somying Ngamprom', image: '/images/iot-6.jpg' },
])

const iotStaff = ref([
  { id: 1, nameTh: 'นายสมชาย รักดี', nameEn: 'Mr. Somchai Rakdee', image: '/images/staff-1.jpg' },
  { id: 2, nameTh: 'นายสมเกียรติ ยอดเยี่ยม', nameEn: 'Mr. Somkiat Yodyiam', image: '/images/staff-2.jpg' },
])

// ==========================================
// ข้อมูลสาขา Industrial Physics
// ==========================================
const physicsFaculty = ref([
  { id: 1, nameTh: 'รศ.ดร. สมปอง รักวิทย์', nameEn: 'Assoc. Prof. Dr. Sompong Rakwit\n(หัวหน้าภาควิชา)', image: '/images/phy-1.jpg' },
  { id: 2, nameTh: 'ผศ.ดร. มานี มีตา', nameEn: 'Asst. Prof. Dr. Manee Meeta', image: '/images/phy-2.jpg' },
  { id: 3, nameTh: 'อ.ดร. ปิติ ดีใจ', nameEn: 'Dr. Piti Deejai', image: '/images/phy-3.jpg' },
])

const physicsStaff = ref([
  { id: 1, nameTh: 'นางสุดา ใจดี', nameEn: 'Mrs. Suda Jaidee', image: '/images/staff-3.jpg' },
  { id: 2, nameTh: 'นายวิชาญ รักงาน', nameEn: 'Mr. Wichan Rakngan', image: '/images/staff-4.jpg' },
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