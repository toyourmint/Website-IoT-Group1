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

      <!-- hamburger -->
      <template #toggle>
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          class="md:hidden"
          @click="mobileMenuOpen = true"
        />
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
              :class="['lang-link', { active: locale==='th'}]"
            >TH</NuxtLink>

            <NuxtLink
              :to="switchLocalePath('en')"
              :class="['lang-link', { active: locale==='en'}]"
            >EN</NuxtLink>
          </div>

          <!-- 🔤 font size -->
          <div class="font-size-controls">
            <button class="font-btn" @click="decrease">A-</button>
            <span class="font-divider"></span>
            <button class="font-btn" @click="reset">A</button>
            <span class="font-divider"></span>
            <button class="font-btn" @click="increase">A+</button>
          </div>

          <UColorModeButton />

        </div>
      </template>

    </UHeader>

    
    <!-- ✅ MOBILE MENU -->
      <USlideover
        v-if="mobileMenuOpen"
        v-model="mobileMenuOpen"
      >
        <div class="mobile-panel">
          <Navbar @click="mobileMenuOpen = false" />
        </div>
      </USlideover>

    <UMain>
      <NuxtPage />
    </UMain>

    <Footer />
  </UApp>
</template>
<style>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}

.logo-link {
  display: flex;
  align-items: center;
}

/* ⭐ override เฉพาะตอนอยู่ใน panel */
.mobile-panel :deep(.nav-links) {
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
}

.mobile-panel {
  padding: 20px;
}

:deep(.dark) .header {
  border-bottom: 1px solid #334155;
}

.mobile-panel :deep(nav) {
  width: 100%;
}

.mobile-panel :deep(.nav-links) {
  display: flex !important;
  flex-direction: column;
}
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    width: 100%;
    padding: 10px 0;
  }
}
.mobile-tools {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
/* ===== CAPSULE TOOLS ===== */

.lang-toggle {
  display: flex;
  background: rgba(0,0,0,0.05);
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
}

.lang-link.active {
  background: #fff;
  color: #f26522 !important;
  opacity: 1;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.font-size-controls {
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.05);
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

