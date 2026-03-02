<script setup>
import Navbar from '~/components/Navbar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mobileMenuOpen = ref(false)

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { increase, decrease, reset, load } = useFontSize()

useHead({
  htmlAttrs: { lang: locale }
})

const handleResize = () => {
  if (window.innerWidth >= 768) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  load()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <UApp>
    <UHeader class="header">

      <!-- logo -->
      <template #left>
        <NuxtLink to="/" class="logo-link">
          <AppLogo />
        </NuxtLink>
      </template>

      <!-- hamburger: ซ่อน default toggle ของ UHeader แล้วทำเอง -->
      <template #toggle>
        <span />
      </template>

      <!-- right side -->
      <template #right>
        <div class="flex items-center gap-3">

          <!-- Desktop menu -->
          <div class="hidden md:flex">
            <Navbar />
          </div>

          <!-- 🌐 language -->
          <div class="lang-toggle">
            <NuxtLink
              :to="switchLocalePath('th')"
              :class="['lang-link', { active: locale === 'th' }]"
            >TH</NuxtLink>
            <NuxtLink
              :to="switchLocalePath('en')"
              :class="['lang-link', { active: locale === 'en' }]"
            >EN</NuxtLink>
          </div>

          <!-- 🔤 font size -->
          <div class="font-size-controls">
            <button class="font-btn" @click="decrease">A-</button>
            <span class="font-divider" />
            <button class="font-btn" @click="reset">A</button>
            <span class="font-divider" />
            <button class="font-btn" @click="increase">A+</button>
          </div>

          <UColorModeButton />

          <!-- Hamburger button (mobile only) -->
          <button
            class="hamburger-btn md:hidden"
            aria-label="Open menu"
            @click="mobileMenuOpen = true"
          >
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
          </button>

        </div>
      </template>

    </UHeader>

    <!-- ✅ MOBILE OVERLAY -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="mobileMenuOpen"
          class="mobile-overlay"
          @click="mobileMenuOpen = false"
        />
      </Transition>

      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="mobile-drawer">

          <!-- header -->
          <div class="drawer-header">
            <div class="drawer-title">
              Department of IoT and<br />
              Information Engineering
            </div>
            <button class="close-btn" aria-label="Close menu" @click="mobileMenuOpen = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div class="drawer-divider" />

          <!-- menu -->
          <Navbar @click="mobileMenuOpen = false" />

          <!-- footer -->
          <div class="drawer-footer">
            © 2026 IoT and Information Engineering, KMITL.
          </div>

        </div>
      </Transition>
    </Teleport>

    <UMain>
      <NuxtPage />
    </UMain>

    <Footer />
  </UApp>
</template>

<style>
/* ===== HEADER ===== */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}

:deep(.dark) .header {
  border-bottom: 1px solid #334155;
}

.logo-link {
  display: flex;
  align-items: center;
}

/* ===== HAMBURGER BUTTON ===== */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: background 0.2s;
}

.hamburger-btn:hover {
  background: rgba(242, 101, 34, 0.1);
}

.hamburger-btn .bar {
  display: block;
  width: 100%;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transition: 0.2s;
}

/* ===== OVERLAY ===== */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

/* ===== MOBILE DRAWER ===== */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(320px, 85vw);
  background: #fff;
  z-index: 9999;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
}

:root.dark .mobile-drawer {
  background: #0f172a;
  color: #f1f5f9;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.drawer-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.close-btn:hover {
  background: rgba(242, 101, 34, 0.1);
  color: #f26522;
}

.drawer-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 16px 0;
}

:root.dark .drawer-divider {
  background: #334155;
}

/* nav items inside drawer */
.mobile-drawer :deep(.nav-links) {
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 4px !important;
}

.mobile-drawer :deep(.nav-links a) {
  display: block;
  width: 100%;
  padding: 10px 8px;
  border-radius: 8px;
  border-bottom: none !important;
}

.mobile-drawer :deep(.nav-links a:hover),
.mobile-drawer :deep(.nav-links a.router-link-exact-active) {
  background: rgba(242, 101, 34, 0.08);
  color: #f26522 !important;
  border-bottom: none !important;
}

.drawer-footer {
  margin-top: auto;
  padding-top: 16px;
  font-size: 12px;
  color: #9ca3af;
}

/* ===== TRANSITIONS ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* ===== CAPSULE TOOLS ===== */
.lang-toggle {
  display: flex;
  background: rgba(0, 0, 0, 0.05);
  padding: 2px;
  border-radius: 999px;
}

.lang-link {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  opacity: 0.6;
  transition: 0.2s;
  text-decoration: none;
  color: inherit;
}

.lang-link.active {
  background: #fff;
  color: #f26522 !important;
  opacity: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.font-size-controls {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 999px;
  padding: 2px 6px;
}

.font-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 999px;
  transition: 0.2s;
  font-size: 12px;
}

.font-btn:hover {
  background: #f26522;
  color: #fff;
}

.font-divider {
  width: 1px;
  height: 12px;
  background: currentColor;
  opacity: 0.2;
  margin: 0 2px;
}
</style>