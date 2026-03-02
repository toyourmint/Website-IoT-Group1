<script setup>
const { locale } = useI18n()
//const { load } = useFontSize()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&display=swap' }
  ],
  htmlAttrs: {
<<<<<<< HEAD
    lang: locale // ⭐ เปลี่ยนอัตโนมัติตามภาษา
=======
    lang: locale
>>>>>>> dev
  }
})

const title = 'IoTE KMITL'
const description = 'Internet of Things Engineering - KMITL'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

//onMounted(() => {
//  load()
//})
</script>

<template>
  <UApp>
    <UHeader class="header">
      <template #left>
        <NuxtLink
          to="/"
          class="logo-link"
        >
          <AppLogo />
        </NuxtLink>
      </template>

      <template #right>
        <Navbar />

        <UColorModeButton />

        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <Footer />
  </UApp>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(6px);
  border-bottom: 1px solid #eee;
}

.logo-link {
  display: flex;
  align-items: center;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* 🌙 Dark mode navbar */
.dark .header {
  background-color: #101022;
  border-bottom: 1px solid #333;
}

.dark .nav-links a {
  color: #fff;
}

.dark .nav-links a:hover {
  color: #f26522;
}

/* 🌙 Dark mode footer */
.dark .footer {
  background-color: #101022;
  color: #e5e7eb;
}

.dark .footer-heading {
  color: #cbd5e1;
}

.dark .footer .icon {
  color: #94a3b8;
}

.dark .footer-links a {
  color: #cbd5e1;
}

.dark .footer-links a:hover {
  color: #f26522;
}

.dark .social-icons a {
  color: #e5e7eb;
}

.dark .footer-divider {
  background-color: #2a2f45;
}

.dark .footer-bottom {
  color: #9ca3af;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> dev
