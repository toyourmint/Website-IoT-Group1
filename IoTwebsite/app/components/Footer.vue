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
        />

        <div class="contact-list">
          <div class="contact-item">
            <i class="fas fa-phone-alt icon"></i>
            <span>+662 329 8000</span>
          </div>

          <div class="contact-item">
            <i class="fas fa-map-marker-alt icon"></i>
            <div class="contact-text">
              {{ $t('footer.address') }}
            </div>
          </div>

          <div class="contact-item">
            <i class="far fa-envelope icon"></i>
            <span>iote@kmitl.ac.th</span>
          </div>

          <div class="contact-item">
            <i class="fab fa-line icon"></i>
            <span>@iotekmitl</span>
          </div>
        </div>

        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>

      <div class="footer-right">
        <h3 class="footer-heading">{{ $t('footer.admissionTitle') }}</h3>
        <ul class="footer-links">
          <li><NuxtLink to="/admission">{{ $t('footer.round1') }}</NuxtLink></li>
          <li><NuxtLink to="/admission">{{ $t('footer.round2') }}</NuxtLink></li>
          <li><NuxtLink to="/admission">{{ $t('footer.round3') }}</NuxtLink></li>
        </ul>
      </div>

    </div>

    <div class="container">
      <hr class="footer-divider" />
      <div class="footer-bottom">
        <p>{{ $t('footer.university') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1c29;
  color: #FFDCB7;
  padding: 60px 0 20px 0;
  font-family: 'Prompt', sans-serif;
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
  align-items: flex-start; /* ⭐ ให้ icon อยู่บน */
  gap: 15px;
  font-size: 14px;
}
.contact-text {
  line-height: 1.7;
  max-width: 520px;   /* ⭐ คุมความยาวบรรทัด */
}

.icon {
  width: 22px;       /* ⭐ ทำให้ทุกไอคอนเริ่มตำแหน่งเท่ากัน */
  flex-shrink: 0;    /* ⭐ ป้องกัน icon หด */
  margin-top: 3px;   /* ⭐ ปรับให้ตรงบรรทัดแรก */
  color: #FFDCB7;
}
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-icons a {
  color: #FFDCB7;
  font-size: 20px;
}

.social-icons a:hover {
  color: #f26522;
}

.footer-right {
  flex: 1;
  min-width: 250px;
}

.footer-heading {
  color: #FFDCB7;
  margin-bottom: 25px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links a {
  color: #FFDCB7;
  text-decoration: none;
}

.footer-links a:hover {
  color: #f26522;
}

.footer-divider {
  height: 1px;
  background-color: #FFDCB7;
  border: 0;
  margin-bottom: 20px;
}

.footer-bottom {
  font-size: 12px;
  color: #FFDCB7;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
}
</style>