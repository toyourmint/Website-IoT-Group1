<template>
  <div class="news-page">

    <!-- ========== LIST VIEW ========== -->
    <transition name="page-slide">
      <div v-if="!selectedNews" key="list">

        <div class="hero-section">
          <Background>
          <div class="title-container">
            <h1 class="main-title">{{ $t('pages.information.title') }}</h1>
          </div>
        </Background>

        </div>

        <div class="content-wrapper">
          <div v-if="!data" class="loading-state">
            <p>กำลังโหลดข้อมูล...</p>
          </div>
          <div v-else-if="newsList.length === 0" class="empty-state">
            <p>ยังไม่มีข่าวสาร</p>
          </div>
          <div v-else class="news-grid">
            <div v-for="news in newsList" :key="news.id" class="news-card">
              <div class="news-image-wrapper">
                <img v-if="news.image" :src="news.image" :alt="news.title" />
                <div v-else class="placeholder-image">
                  <span class="placeholder-text">News Image</span>
                </div>
              </div>

              <div class="news-content">
                <h3 class="news-title">{{ news.title }}</h3>
                <p class="news-excerpt">{{ news.excerpt }}</p>

                <button class="read-more-btn" @click="openDetail(news)">
                  <span>Read More</span>
                  <div class="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>

    <!-- ========== DETAIL VIEW (Full Page) ========== -->
    <transition name="page-slide">
      <div v-if="selectedNews" key="detail" class="detail-page">

        <!-- Hero Image -->
        <div class="detail-hero">
          <img v-if="selectedNews.image" :src="selectedNews.image" :alt="selectedNews.title" class="detail-hero-img" />
          <div v-else class="detail-hero-placeholder"></div>

          <!-- Gradient overlay -->
          <div class="detail-hero-overlay"></div>

          <!-- Back button (top left) -->
          <button class="back-btn" @click="closeDetail">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>กลับ</span>
          </button>

          <!-- Title overlay on image -->
          <div class="detail-hero-text">
            <p class="detail-hero-date">{{ selectedNews.date }}</p>
            <h1 class="detail-hero-title">{{ selectedNews.title }}</h1>
          </div>
        </div>

        <!-- Content Body -->
        <div class="detail-body">
          <div class="detail-excerpt">{{ selectedNews.excerpt }}</div>
          <div class="detail-divider"></div>
          <div class="detail-full-content">
            <p v-html="selectedNews.fullContent.replace(/\n/g, '<br>')"></p>
          </div>
        </div>

        <!-- Bottom back button -->
        <div class="detail-footer">
          <button class="read-more-btn" @click="closeDetail">
            <span>ดูข่าวทั้งหมด</span>
            <div class="icon-circle icon-circle--left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </transition>
             <transition name="slide-up">
      <button 
        v-if="showScroll" 
        class="scroll-top-btn" 
        @click="scrollToTop" 
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue' // เพิ่ม onMounted, onUnmounted
import Background from '~/components/Background.vue'

const selectedNews = ref(null)
// =========================================
//  Scroll to Top Logic
// =========================================
const showScroll = ref(false)

const handleScroll = () => {
  // แสดงปุ่มเมื่อเลื่อนหน้าจอลงมามากกว่า 300px
  showScroll.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // ทำให้เลื่อนขึ้นแบบนุ่มนวล
  })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const openDetail = (news) => {
  selectedNews.value = news
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const closeDetail = () => {
  selectedNews.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ดึงข้อมูลจาก Strapi
const config = useRuntimeConfig()

const { data } = await useFetch(
  `${config.public.apiBase}/informations?populate=*&sort=date:desc`
)

// แปลง Rich Text Blocks → plain text (สำหรับ fullContent)
const parseBlocks = (blocks) => {
  if (!blocks || !Array.isArray(blocks)) return ''
  const lines = []
  for (const block of blocks) {
    if (block.type === 'paragraph') {
      const text = block.children?.map(c => c.text).join('') ?? ''
      if (text) lines.push(text)
    } else if (block.type === 'list') {
      for (const item of block.children ?? []) {
        const text = item.children?.map(c => c.text).join('') ?? ''
        if (text) lines.push(`• ${text}`)
      }
    } else if (block.type === 'heading') {
      const text = block.children?.map(c => c.text).join('') ?? ''
      if (text) lines.push(text)
    }
  }
  return lines.join('\n\n')
}

const newsList = computed(() =>
  data.value?.data.map(item => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    fullContent: parseBlocks(item.full_content),
    date: item.date
      ? new Date(item.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      : '',
    image: item.image?.[0]?.url
    ? `${config.public.apiBase.replace('/api','')}${item.image[0].url}`
    : null
  })) || []
)
</script>

<style scoped>
/* ================== Layout ================== */
.news-page {
  color: var(--text-main);
  background-color: transparent;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ================== Header Section ================== */
.hero-section {
  position: relative;
  text-align: center;
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

/* ตั้งค่าให้ title ลอยอยู่ตรงกลางจอทับ Background */
.title-container {
  /* ทำให้กล่อง title มีพื้นที่พอเหมาะ */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.main-title {
  font-size: var(--fs-h1);
  margin: 0;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--text-main);
  text-align: center;
  transition: color 0.3s ease;
}

.section-desc {
  font-size: 1.2rem;
  color: var(--text-muted);
}

/* ================== Content & Grid ================== */
.content-wrapper {
  padding: 4rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

/* ===== Grid แนวตั้ง 3 คอลัมน์ ===== */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ===== Card แนวตั้ง ===== */
.news-card {
  display: flex;
  flex-direction: column;   /* ⭐ ทำให้เป็นแนวตั้ง */
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.35s ease;
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
}

/* ===== รูปด้านบน ===== */
.news-image-wrapper {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.news-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.news-card:hover .news-image-wrapper img {
  transform: scale(1.08);
}

/* ===== เนื้อหาด้านล่าง ===== */
.news-content {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.news-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
}

.news-content p {
  color: #555;
  line-height: 1.6;
}
.news-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3c72;
}

/* ===== ปุ่ม ===== */
.btn-more {
  margin-top: auto;
  padding: 6px 8px 6px 24px;
  background-color: white;
  color: #1e3c72;
  border: 2px solid #ff9800;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  width: fit-content;
}

.btn-more .icon-circle {
  background-color: #ff9800;
  color: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.btn-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
}

.btn-more:hover .icon-circle {
  transform: translateX(3px);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}

/* ================== Read More Button ================== */
.read-more-btn {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 8px 14px 8px 18px;   /* ลด padding ด้านขวา */
  border: 2px solid #F59E0B;
  border-radius: 999px;
  background: transparent;
  color:#1e3c72;
  font-weight: 600;
  cursor: pointer;
  transition: .25s;

  width: fit-content;   /* ⭐ สำคัญ: ให้กรอบพอดีเนื้อหา */
}
.read-more-btn:hover {
  background: rgba(250, 187, 71, 0.332);
}

.read-more-btn:hover .icon-circle {
  background-color: #F59E0B;
}

.icon-circle {
  width: 32px;
  height: 32px;
  background: #F59E0B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.icon-circle svg {
  width: 16px;
  height: 16px;
  stroke-width: 2.5;
  transform: translateX(1px); /* ปรับตำแหน่งให้ดูสมดุล */
}

/* ===== icon-circle สำหรับปุ่ม "ดูข่าวทั้งหมด" (ลูกศรซ้าย) ===== */
.read-more-btn:has(.icon-circle--left) {
  flex-direction: row-reverse;
  padding: 0.25rem 1.25rem 0.25rem 0.25rem;
}

/* ================== DETAIL PAGE ================== */
.detail-page {
  min-height: 100vh;
  background-color: var(--bg-main, #fff);
  animation: fadeUp 0.4s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Hero Image Area */
.detail-hero {
  position: relative;
  width: 100%;
  height: 75vh;
  min-height: 420px;
  overflow: hidden;
}

.detail-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detail-hero-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--border-color, #e5e7eb);
}

/* Dark gradient at bottom of hero for readability */
.detail-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.15) 0%,
    rgba(0,0,0,0) 40%,
    rgba(0,0,0,0.75) 100%
  );
}

/* Back button (floating top-left) */
.back-btn {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 2rem;
  padding: 0.5rem 1.25rem 0.5rem 0.75rem;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.back-btn:hover {
  background: rgba(245,158,11,0.85);
  border-color: #F59E0B;
}

.back-btn svg {
  width: 20px;
  height: 20px;
}

/* Title overlaid on hero */
.detail-hero-text {
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  right: 0;
  padding: 0 3rem;
  z-index: 5;
}

.detail-hero-date {
  color: #F59E0B;
  font-weight: 700;
  font-size: 0.9rem;
  margin: 0 0 0.6rem 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.detail-hero-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  max-width: 900px;
}

/* Content Body */
.detail-body {
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
}

.detail-excerpt {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--heading-color);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.detail-divider {
  height: 3px;
  width: 60px;
  background: #F59E0B;
  border-radius: 2px;
  margin-bottom: 2rem;
}

.detail-full-content p {
  color: var(--text-muted);
  line-height: 1.9;
  font-size: 1.1rem;
}

/* Footer back button */
.detail-footer {
  max-width: 860px;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
}

/* ================== Page Transition ================== */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* ================== Responsive ================== */
@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  .main-title {
    font-size: 2.5rem;
  }
  .detail-hero {
    height: 55vh;
  }
  .detail-hero-text {
    padding: 0 1.5rem;
  }
  .detail-body,
  .detail-footer {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}
/* ================== ปุ่มเลื่อนขึ้นบนสุด ================== */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--card-bg);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
}

.scroll-top-btn:hover {
  transform: scale(1.1);
  border-color: #ff9800;
  color: #ff9800;
  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.2);
}

.scroll-top-btn svg {
  width: 1.25rem;
  height: 1.25rem;
  color: inherit;
}
/* ================== Transition ปุ่มเลื่อนขึ้นบนสุด ================== */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px); /* ให้ปุ่มเลื่อนลงไปซ่อนด้านล่างตอนหายไป */
}

</style>