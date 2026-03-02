<script setup>
const { locale } = useI18n()
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

      <li class="nav-item-last">
        <NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>
      </li>

      
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: block;
  width: 100%;
}

/* Desktop layout */
.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #f26522 !important;
  border-bottom: 2px solid #f26522;
}

/* tools */
.nav-tools-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 12px;
}

/* language */
.lang-toggle {
  display: flex;
  background-color: rgba(0,0,0,0.05);
  padding: 2px;
  border-radius: 50px;
}

.lang-link {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  opacity: 0.6;
}

.lang-link.active {
  background-color: #fff;
  color: #f26522 !important;
  opacity: 1;
}

/* font controls */
.font-size-controls {
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.05);
  border-radius: 20px;
  padding: 2px 4px;
}

.font-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
}

.font-btn:hover {
  background-color: #f26522;
  color: #fff;
}

.font-divider {
  width: 1px;
  height: 12px;
  background-color: currentColor;
  opacity: 0.2;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 16px;
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
</style>