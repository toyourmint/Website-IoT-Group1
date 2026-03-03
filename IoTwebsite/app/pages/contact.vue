<template>
  <div class="contact-page">
    <div class="hero-section">
      <h1 class="main-title">{{ $t('pages.contact.title') }}</h1>
    </div>

    <div class="content-section">
      <div class="container">

        <div class="department-block">
          <div class="dept-header">
            <h2 class="title-th">ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ</h2>
            <h3 class="title-en">Department of IoT and Information Engineering</h3>
          </div>

          <div class="location-wrapper">
            <div class="address-col">
              <h4>{{ $t('pages.contact.locationLabel') }}</h4>
              <p>
                {{ $t('pages.contact.iote.l1') }}<br>
                {{ $t('pages.contact.iote.l2') }}<br>
                {{ $t('pages.contact.iote.l3') }}<br>
                {{ $t('pages.contact.iote.l4') }}<br>
                {{ $t('pages.contact.iote.l5') }}<br>
                {{ $t('pages.contact.iote.l6') }}
              </p>
            </div>
            <div class="map-col">
              <iframe
                src="https://maps.google.com/maps?q=Faculty+of+Engineering+KMITL&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" class="map-iframe">
              </iframe>
            </div>
          </div>

          <div class="contact-details">
            <h4 class="details-title">Contact Details</h4>
            <div class="contact-grid">

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="mdi:phone-outline" />
                </div>
                <div class="contact-info">
                  <span class="label">mobile</span>
                  <span class="value">
                    <a href="tel:023298000" class="text-link">02-329-8000 ext.5129</a><br>
                    <a href="tel:023298301" class="text-link">02-329-8301 ext.235</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="mdi:email-outline" />
                </div>
                <div class="contact-info">
                  <span class="label">email</span>
                  <span class="value">
                    <a href="mailto:iote@kmitl.ac.th" class="text-link">iote@kmitl.ac.th</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="fa-brands:line" />
                </div>
                <div class="contact-info">
                  <span class="label">Line</span>
                  <span class="value">
                    <a href="https://line.me/R/ti/p/@iotekmitl" target="_blank" rel="noopener noreferrer"
                      class="text-link">@iotekmitl</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="fa-brands:tiktok" />
                </div>
                <div class="contact-info">
                  <span class="label">TikTok</span>
                  <span class="value">
                    <a href="https://www.tiktok.com/@kmitl.iote" target="_blank" rel="noopener noreferrer"
                      class="text-link">kmitl.iote.official</a>
                  </span>
                </div>
              </div>

              <div class="contact-item facebook-item">
                <div class="icon-circle">
                  <Icon name="mdi:facebook" />
                </div>
                <div class="contact-info">
                  <span class="label">Facebook</span>
                  <span class="value">
                    <a href="https://www.facebook.com/IOTE.KMITL/" target="_blank" rel="noopener noreferrer"
                      class="text-link">Department of IoT and<br>Information Engineering, KMITL</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="mdi:instagram" />
                </div>
                <div class="contact-info">
                  <span class="label">Instagram</span>
                  <span class="value">
                    <a href="https://www.instagram.com/kmitl.iote.official" target="_blank" rel="noopener noreferrer"
                      class="text-link">@kmitl.iote.official</a><br>
                    <a href="https://www.instagram.com/iote_camp" target="_blank" rel="noopener noreferrer"
                      class="text-link">@iote_camp</a>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr class="section-divider" />

        <div class="department-block">
          <div class="dept-header">
            <h2 class="title-th">หลักสูตรฟิสิกส์อุตสาหกรรม</h2>
            <h3 class="title-en">Industrial Physics</h3>
          </div>

          <div class="location-wrapper reverse-layout">
            <div class="map-col">
              <iframe src="https://maps.google.com/maps?q=Faculty+of+Science+KMITL&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" class="map-iframe">
              </iframe>
            </div>
            <div class="address-col">
              <h4>{{ $t('pages.contact.locationLabel') }}</h4>
              <p>
                {{ $t('pages.contact.physics.l1') }}<br>
                {{ $t('pages.contact.physics.l2') }}<br>
                {{ $t('pages.contact.physics.l3') }}<br>
                {{ $t('pages.contact.physics.l4') }}<br>
                {{ $t('pages.contact.physics.l5') }}<br>
                {{ $t('pages.contact.physics.l6') }}
              </p>
            </div>
          </div>

          <div class="contact-details">
            <h4 class="details-title">Contact Details</h4>
            <div class="contact-grid">

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="mdi:phone-outline" />
                </div>
                <div class="contact-info">
                  <span class="label">mobile</span>
                  <span class="value">
                    <a href="tel:023298000" class="text-link">02-329-8000 ext.6214</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="mdi:email-outline" />
                </div>
                <div class="contact-info">
                  <span class="label">email</span>
                  <span class="value">
                    <a href="mailto:SCIENCE@kmitl.ac.th" class="text-link">SCIENCE@kmitl.ac.th</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="fa-brands:line" />
                </div>
                <div class="contact-info">
                  <span class="label">Line</span>
                  <span class="value">
                    <a href="https://line.me/R/ti/p/@842xlplr" target="_blank" rel="noopener noreferrer"
                      class="text-link">@842xlplr</a>
                  </span>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle">
                  <Icon name="mdi:instagram" />
                </div>
                <div class="contact-info">
                  <span class="label">Instagram</span>
                  <span class="value">
                    <a href="https://www.instagram.com/physiot_kmitl" target="_blank" rel="noopener noreferrer"
                      class="text-link">@physiot_kmitl</a>
                  </span>
                </div>
              </div>

              <div class="contact-item facebook-item-full">
                <div class="icon-circle">
                  <Icon name="mdi:facebook" />
                </div>
                <div class="contact-info">
                  <span class="label">Facebook</span>
                  <ul class="value-list">
                    <li><a href="https://www.facebook.com/physiotkmitl/" target="_blank" rel="noopener noreferrer"
                        class="text-link">Physiot KMITL - Physics and IoT System Engineering, Dual Degree Program</a>
                    </li>
                    <li><a href="https://www.facebook.com/SciKmitl/" target="_blank" rel="noopener noreferrer"
                        class="text-link">Sci KMITL</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// ปรับ Icon เป็นการเรียกผ่าน component Icon ของ Nuxt แทน SVG สดเพื่อให้โค้ดคลีนขึ้น
</script>

<style scoped>
/* ================== Global & Layout ================== */
.contact-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ================== Hero Section ================== */
.hero-section {
  height: 100vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-title {
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  color: var(--text-main);
}

/* ================== Content Section ================== */
.content-section {
  /* ดึงสีการ์ดมาใช้แทนสีน้ำเงินทึบของเดิม */
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  flex-grow: 1;
  padding: 5rem 1rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.department-block {
  margin-bottom: 3rem;
}

/* ================== Headers ================== */
.dept-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title-th {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--heading-color);
}

.title-en {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-muted);
  margin: 0;
}

/* ================== Location Wrapper ================== */
.location-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
}

.location-wrapper.reverse-layout {
  grid-template-columns: 1fr 1fr;
}

.address-col h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.address-col p {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 0.95rem;
}

/* ================== Map ================== */
.map-col {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--card-shadow);
}

.map-iframe {
  width: 100%;
  height: 100%;
  min-height: 250px;
  border-radius: 12px;
}

/* ================== Contact Details ================== */
.contact-details {
  text-align: center;
}

.details-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: var(--text-main);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.facebook-item {
  grid-column: 2 / 3;
}

.facebook-item-full {
  grid-column: 1 / -1;
  max-width: 600px;
  margin: 0 auto;
}

/* ================== Icons & Labels ================== */
.icon-circle {
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--bg-main);
  /* ใช้พื้นหลังเว็บหลัก */
  border: 1px solid var(--border-color);
  color: #ff9800;
  /* ไอคอนสีส้ม */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 6px var(--card-shadow);
  font-size: 1.25rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
  text-transform: capitalize;
}

.value {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.value-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.8;
}

.value-list li::before {
  content: "- ";
}

/* ================== Text Link Styles ================== */
.text-link {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.text-link:hover {
  color: #ff9800;
  text-decoration: underline;
}

/* ================== Divider ================== */
.section-divider {
  border: 0;
  height: 1px;
  background-color: var(--border-color);
  margin: 5rem 0;
}

/* ================== Responsive Design ================== */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .facebook-item {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 30vh;
  }

  .main-title {
    font-size: 3rem;
  }

  .location-wrapper,
  .location-wrapper.reverse-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .location-wrapper.reverse-layout .map-col {
    order: 2;
  }

  .location-wrapper.reverse-layout .address-col {
    order: 1;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>