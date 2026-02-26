<script setup>
import { ref } from 'vue'

// State สำหรับเก็บว่าเลือกหน้าไหนอยู่ ('iot' หรือ 'physics')
const activeTab = ref('iot')

// ==========================================
// ข้อมูลสาขา IoT
// ==========================================
const iotFaculty = ref([
  { id: 1, nameTh: 'ผศ.ดร. นงนุช โชติพุฒ', nameEn: 'Asst. Prof. Dr. Nongnuch Chotput\n(หัวหน้าภาควิชา)', image: '/images/iot-f1.jpg' },
  { id: 2, nameTh: 'รศ.ดร. สุวิทย์ รุ่งเรือง', nameEn: 'Assoc. Prof. Dr. Suwit Rungruang', image: '/images/iot-f2.jpg' },
  { id: 3, nameTh: 'อ.ดร. เจริญชัย ใจดี', nameEn: 'Dr. Charoenchai Jaidee', image: '/images/iot-f3.jpg' },
  // เพิ่มท่านอื่นๆ ตรงนี้...
])

const iotStaff = ref([
  { id: 1, nameTh: 'นายสมชาย รักดี', nameEn: 'Mr. Somchai Rakdee', image: '/images/iot-s1.jpg' },
  { id: 2, nameTh: 'นางสาวสมศรี ใจกว้าง', nameEn: 'Ms. Somsri Jaikwang', image: '/images/iot-s2.jpg' },
])

// ==========================================
// ข้อมูลสาขา Industrial Physics
// ==========================================
const physicsFaculty = ref([
  { id: 1, nameTh: 'รศ.ดร. สมปอง รักวิทย์', nameEn: 'Assoc. Prof. Dr. Sompong Rakwit\n(หัวหน้าภาควิชา)', image: '/images/phy-f1.jpg' },
  { id: 2, nameTh: 'ผศ.ดร. มานี มีตา', nameEn: 'Asst. Prof. Dr. Manee Meeta', image: '/images/phy-f2.jpg' },
  { id: 3, nameTh: 'อ.ดร. ปิติ ดีใจ', nameEn: 'Dr. Piti Deejai', image: '/images/phy-f3.jpg' },
  // เพิ่มท่านอื่นๆ ตรงนี้... (ในรูปมีเยอะมาก สามารถใส่เพิ่มได้เลย)
])

const physicsStaff = ref([
  { id: 1, nameTh: 'นางสุดา ใจดี', nameEn: 'Mrs. Suda Jaidee', image: '/images/phy-s1.jpg' },
  { id: 2, nameTh: 'นายวิชาญ รักงาน', nameEn: 'Mr. Wichan Rakngan', image: '/images/phy-s2.jpg' },
  { id: 3, nameTh: 'นางสาววิไล สวยงาม', nameEn: 'Ms. Wilai Suayngam', image: '/images/phy-s3.jpg' },
  // เพิ่มท่านอื่นๆ ตรงนี้...
])
</script>

<template>
  <div class="bg-[#FFFDF9] min-h-screen py-12 font-sans">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <button 
          @click="activeTab = 'iot'"
          :class="activeTab === 'iot' 
            ? 'bg-gradient-to-b from-[#FFEDD5] to-[#FED7AA] shadow-sm border border-orange-200' 
            : 'bg-white border border-orange-200 hover:bg-orange-50 text-gray-600'"
          class="w-full sm:w-[320px] py-3 rounded-lg text-[15px] font-semibold transition-all duration-200"
        >
          The Department of IoT<br>and Information Engineering
        </button>

        <button 
          @click="activeTab = 'physics'"
          :class="activeTab === 'physics' 
            ? 'bg-gradient-to-b from-[#FFEDD5] to-[#FED7AA] shadow-sm border border-orange-200' 
            : 'bg-white border border-orange-200 hover:bg-orange-50 text-gray-600'"
          class="w-full sm:w-[320px] py-3 rounded-lg text-[15px] font-semibold transition-all duration-200 flex items-center justify-center"
        >
          Industrial Physics
        </button>
      </div>

      <div v-if="activeTab === 'iot'" class="animate-fade-in">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-gray-800">IoT and Information Engineering</h2>
          <h3 class="text-xl font-bold text-gray-800 mt-1">Department Faculty Members</h3>
          <p class="text-sm text-gray-500 mt-2 font-light">คณาจารย์ประจำภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div v-for="member in iotFaculty" :key="member.id" class="bg-[#F6F5F2] rounded-3xl p-6 flex flex-col items-center text-center">
            <div class="mb-4 min-h-[4rem]">
              <h4 class="font-bold text-gray-800 text-sm mb-1">{{ member.nameTh }}</h4>
              <p class="text-xs text-gray-500 whitespace-pre-line leading-snug">{{ member.nameEn }}</p>
            </div>
            <div class="mt-auto w-32 h-40 rounded-2xl overflow-hidden bg-gray-200">
              <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="text-center mb-8">
          <h3 class="text-xl font-bold text-gray-800">Department Staff</h3>
          <p class="text-sm text-gray-500 mt-2 font-light">บุคลากรสายสนับสนุนภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</p>
        </div>

        <div class="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          <div v-for="staff in iotStaff" :key="staff.id" class="bg-[#F6F5F2] rounded-3xl p-6 flex flex-col items-center text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[300px]">
            <div class="mb-4 min-h-[3rem]">
              <h4 class="font-bold text-gray-800 text-sm mb-1">{{ staff.nameTh }}</h4>
              <p class="text-xs text-gray-500 whitespace-pre-line leading-snug">{{ staff.nameEn }}</p>
            </div>
            <div class="mt-auto w-32 h-40 rounded-2xl overflow-hidden bg-gray-200">
              <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'physics'" class="animate-fade-in">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-gray-800">Industrial Physics Department Faculty Members</h2>
          <p class="text-sm text-gray-500 mt-2 font-light">คณาจารย์ประจำภาควิชาฟิสิกส์อุตสาหกรรม</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div v-for="member in physicsFaculty" :key="member.id" class="bg-[#F6F5F2] rounded-3xl p-6 flex flex-col items-center text-center">
            <div class="mb-4 min-h-[4rem]">
              <h4 class="font-bold text-gray-800 text-sm mb-1">{{ member.nameTh }}</h4>
              <p class="text-xs text-gray-500 whitespace-pre-line leading-snug">{{ member.nameEn }}</p>
            </div>
            <div class="mt-auto w-32 h-40 rounded-2xl overflow-hidden bg-gray-200">
              <img v-if="member.image" :src="member.image" :alt="member.nameTh" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="text-center mb-8">
          <h3 class="text-xl font-bold text-gray-800">Department Staff</h3>
          <p class="text-sm text-gray-500 mt-2 font-light">บุคลากรสายสนับสนุนภาควิชาฟิสิกส์อุตสาหกรรม</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          <div v-for="staff in physicsStaff" :key="staff.id" class="bg-[#F6F5F2] rounded-3xl p-6 flex flex-col items-center text-center w-full max-w-[300px]">
            <div class="mb-4 min-h-[3rem]">
              <h4 class="font-bold text-gray-800 text-sm mb-1">{{ staff.nameTh }}</h4>
              <p class="text-xs text-gray-500 whitespace-pre-line leading-snug">{{ staff.nameEn }}</p>
            </div>
            <div class="mt-auto w-32 h-40 rounded-2xl overflow-hidden bg-gray-200">
              <img v-if="staff.image" :src="staff.image" :alt="staff.nameTh" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* เพิ่ม Animation สลับหน้าเบาๆ ให้ดูสมูทขึ้น */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>