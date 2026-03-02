<script setup>
import { useFontSize } from '../../composables/useFontSize'

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const { increase, decrease, reset } = useFontSize()
</script>

<template>
  <nav class="nav">
    <ul class="nav-links">
      <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
      <li><NuxtLink :to="localePath('/academics')">{{ $t('nav.academics') }}</NuxtLink></li>
      <li><NuxtLink :to="localePath('/admission')">{{ $t('nav.admission') }}</NuxtLink></li>
      <li><NuxtLink :to="localePath('/information')">{{ $t('nav.information') }}</NuxtLink></li>
      <li><NuxtLink :to="localePath('/department')">{{ $t('nav.department') }}</NuxtLink></li>
      <li><NuxtLink :to="localePath('/performance')">{{ $t('nav.performance') }}</NuxtLink></li>
      <li class="nav-item-last"><NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink></li>

      <li class="nav-tools-wrapper">
        <div class="lang-switch-container">
          <div class="lang-toggle">
            <NuxtLink 
              :to="switchLocalePath('th')" 
              :class="['lang-link', { active: $i18n.locale === 'th' }]"
            >
              TH
            </NuxtLink>
            <NuxtLink 
              :to="switchLocalePath('en')" 
              :class="['lang-link', { active: $i18n.locale === 'en' }]"
            >
              EN
            </NuxtLink>
          </div>
        </div>

        <div class="font-size-controls">
          <button class="font-btn" @click="decrease" title="ลดขนาดตัวอักษร">A-</button>
          <span class="font-divider"></span>
          <button class="font-btn" @click="reset" title="ขนาดปกติ">A</button>
          <span class="font-divider"></span>
          <button class="font-btn" @click="increase" title="เพิ่มขนาดตัวอักษร">A+</button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-links {
  display: flex;
  gap: 24px; /* ระยะห่างระหว่างเมนูมาตรฐาน */
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: 0.25s;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.nav-links a:hover {
  color: #f26522;
}

.nav-links a.router-link-exact-active {
  color: #f26522;
  border-bottom: 2px solid #f26522;
}

/* --- 🔧 ส่วนการจัดการระยะห่างใหม่ --- */

/* สร้างเส้นคั่นระหว่างเมนูสุดท้ายกับเครื่องมือ */
.nav-item-last {
  position: relative;
  margin-right: 12px;
}

.nav-item-last::after {
  content: "";
  position: absolute;
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 20px;
  background-color: #ddd;
}

/* รวมกลุ่ม Language และ Font */
.nav-tools-wrapper {
  display: flex;
  align-items: center;
  gap: 16px; /* ระยะห่างระหว่างก้อนภาษา กับ ก้อนปรับฟอนต์ */
  margin-left: 12px;
}

/* 🌐 สไตล์เปลี่ยนภาษา */
.lang-toggle {
  display: flex;
  background-color: #f1f1f1;
  padding: 3px;
  border-radius: 50px;
  border: 1px solid #e2e2e2;
}

.lang-link {
  font-size: 11px;
  font-weight: 700;
  text-decoration: none !important;
  color: #666 !important;
  padding: 4px 10px;
  border-radius: 50px;
  transition: all 0.3s ease;
  border-bottom: none !important;
  line-height: 1;
}

.lang-link.active {
  background-color: #ffffff;
  color: #f26522 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

/* 🔤 สไตล์ปรับฟอนต์ */
.font-size-controls {
  display: flex;
  align-items: center;
  background-color: #f4f4f5;
  border-radius: 20px;
  padding: 2px 4px;
  border: 1px solid #e2e2e2;
}

.font-btn {
  background: transparent;
  border: none;
  color: #555;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  min-width: 28px;
  border-radius: 16px;
  transition: 0.2s;
  line-height: 1;
}

.font-btn:hover {
  background-color: #f26522;
  color: #fff;
}

.font-divider {
  width: 1px;
  height: 12px;
  background-color: #d4d4d8;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-links { gap: 16px; } /* ลด gap เมื่อจอเล็กลงระดับหนึ่ง */
}

@media (max-width: 768px) {
  .nav-links { display: none; }
}
</style>
