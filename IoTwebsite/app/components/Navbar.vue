<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
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
      <li><NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink></li>

      <!-- 🌐 ปุ่มเปลี่ยนภาษา -->
      <li class="lang-switch">
        <NuxtLink :to="switchLocalePath('th')">TH</NuxtLink>
        <span>|</span>
        <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-links {
  display: flex;
  gap: 28px;
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
  white-space: nowrap;   /* ⭐ เพิ่มบรรทัดนี้ */
}

.nav-links a:hover {
  color: #f26522;
}

.nav-links a.router-link-exact-active {
  color: #f26522;
  border-bottom: 2px solid #f26522;
}
/* 🌐 จัดแต่งส่วนเปลี่ยนภาษา (TH | EN) */
.lang-switch {
  display: flex;
  align-items: center;
  gap: 6px; /* ระยะห่างระหว่าง TH, เส้นคั่น และ EN */
  margin-left: 8px; /* ขยับให้ห่างจากเมนู Contact เล็กน้อย */
}

/* ตกแต่งเส้นคั่น | */
.lang-switch span {
  color: #555; /* สีเทาเข้มๆ ให้ดูซอฟต์ลงกว่าตัวหนังสือ */
  font-size: 14px;
  font-weight: 400;
  user-select: none; /* ไม่ให้คลิกคลุมดำเส้นคั่นได้ */
  padding-bottom: 4px; /* ดันเส้นคั่นให้สูงพอดีกับตัวอักษรที่มีขอบเส้นใต้ */
}

/* บังคับให้ปุ่ม TH และ EN มีขนาดเท่าๆ กัน (ไม่ให้ขยับเวลาสลับไปมา) */
.lang-switch a {
  min-width: 24px;
  text-align: center;
}

/* ซ่อนบนมือถือ (เตรียมทำ hamburger) */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>