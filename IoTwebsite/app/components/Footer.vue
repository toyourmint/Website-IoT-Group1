<script setup>
const colorMode = useColorMode()
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-left">
        <!-- Logo เปลี่ยนตาม Dark Mode -->
        <img
          :src="colorMode.value === 'dark'
            ? '/iote-logo-white.png'
            : '/iote-logo-footer.png'"
          alt="iOTE Logo"
          class="footer-logo"
        >

        <div class="contact-list">
          <a href="tel:+6623298000" class="contact-item">
            <UIcon name="i-heroicons-phone" class="icon" />
            <span>+662 329 8000</span>
          </a>

          <a
            href="https://maps.google.com/maps?q=Faculty+of+Engineering+KMITL"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <UIcon name="i-heroicons-map-pin" class="icon" />
            <div class="contact-text">
              {{ $t('footer.address') }}
            </div>
          </a>

          <a href="mailto:iote@kmitl.ac.th" class="contact-item">
            <UIcon name="i-heroicons-envelope" class="icon" />
            <span>iote@kmitl.ac.th</span>
          </a>

          <a
            href="https://line.me/R/ti/p/@iotekmitl"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <UIcon name="i-simple-icons-line" class="icon" />
            <span>@iotekmitl</span>
          </a>
        </div>

        <div class="social-icons">
          <a
            href="https://www.facebook.com/IoTEKMITL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <UIcon name="i-simple-icons-facebook" />
          </a>
          <a
            href="https://www.instagram.com/kmitl.iote.official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <UIcon name="i-simple-icons-instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@kmitl.iote"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <UIcon name="i-simple-icons-tiktok" />
          </a>
        </div>
      </div>

      <div class="footer-right">
        <h3 class="footer-heading">
          {{ $t('footer.admissionTitle') }}
        </h3>
        <ul class="footer-links">
          <li><NuxtLink to="/admission?tab=portfolio">{{ $t('footer.round1') }}</NuxtLink></li>
          <li><NuxtLink to="/admission?tab=quota">{{ $t('footer.round2') }}</NuxtLink></li>
          <li><NuxtLink to="/admission?tab=admission">{{ $t('footer.round3') }}</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <hr class="footer-divider">
      <div class="footer-bottom">
        <p>{{ $t('footer.university') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0 20px 0;
  width: 100%;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 50px;
}

.footer-left {
  flex: 2;
  max-width: 600px;
}

.footer-logo {
  width: 250px;
  margin-bottom: 30px;
  padding: 10px;
  transition: transform .3s ease, opacity .3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 14px;
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}

.contact-item:hover {
  color: #f26522;
}

.contact-text {
  line-height: 1.7;
  max-width: 520px;
}

.icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 2px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-icons a {
  font-size: 20px;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.social-icons a :deep(svg) {
  width: 20px;
  height: 20px;
}

.social-icons a:hover {
  color: #f26522;
}

.footer-right {
  flex: 1;
  min-width: 250px;
}

.footer-heading {
  margin-bottom: 25px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links a {
  text-decoration: none;
}

.footer-links a:hover {
  color: #f26522;
}

.footer-divider {
  height: 1px;
  border: 0;
  margin-bottom: 20px;
}

.footer-bottom {
  font-size: 12px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
}
</style>