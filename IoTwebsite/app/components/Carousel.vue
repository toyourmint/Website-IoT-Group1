<template>
  <div class="carousel">
    <div
      class="slider"
      :style="{ transform: `translateX(-${current * 100}%)` }"
      @touchstart="startTouch"
      @touchend="endTouch"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="slide"
      >
        <div class="card">
          <div class="card-header">
            {{ item.title }}
          </div>
          <div class="card-body">
            <img
              v-if="item.image"
              :src="item.image"
              class="image"
            >

            <!-- ถ้ามี items ให้แสดงเป็น list -->
            <ul v-if="item.items">
              <li
                v-for="(text, i) in item.items"
                :key="i"
                :class="{ 'first-line': i === 0 }"
              >
                {{ text }}
              </li>
            </ul>

            <!-- ถ้าเป็น content แบบเดิม -->
            <p v-else>
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- แถวปุ่มลูกศร + dots -->
    <div class="nav-row">
      <button
        class="arrow-inline"
        @click="prev"
      >
        ❮
      </button>

      <div class="dots">
        <span
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index===current }"
          @click="current=index"
        />
      </div>

      <button
        class="arrow-inline"
        @click="next"
      >
        ❯
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: Array
})

const current = ref(0)
let startX = 0

const next = () => {
  if (current.value < props.items.length - 1)
    current.value++
}

const prev = () => {
  if (current.value > 0)
    current.value--
}

const startTouch = (e) => {
  startX = e.touches[0].clientX
}

const endTouch = (e) => {
  const diff = startX - e.changedTouches[0].clientX
  if (diff > 50) next()
  if (diff < -50) prev()
}
</script>

<style scoped>
.carousel {
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  display: flex;
  transition: transform .6s cubic-bezier(.77,0,.18,1);
  width: 100%;
}

.slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  width: 100%;
  height: 420px;
  background-color: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.card-header {
  background: linear-gradient(135deg,#ffb36b,#ff8c00);
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  letter-spacing:0.5px;
}

.card-body{
  padding:30px;
  line-height:1.7;
  font-size:15px;
  overflow-y:auto;
  max-height:320px;
}

/* ทำ scrollbar ให้ดูสะอาด */
.card-body::-webkit-scrollbar{
  width:6px;
}
.card-body::-webkit-scrollbar-thumb{
  background:#ffb36b;
  border-radius:10px;
}
.card-body ul{
  padding-left:20px;
}

.card-body li{
  margin-bottom:8px;
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

/* ===== nav row ===== */
.nav-row{
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

/* ลูกศร */
.arrow-inline{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: #ff8c00;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: .3s;
}

.arrow-inline:hover{
  transform: scale(1.2);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* dots */
.dots{
  display: flex;
  align-items: center;
}

.dots span{
  width: 14px;
  height: 14px;
  background: #ccc;
  border-radius: 50%;
  margin: 0 6px;
  cursor: pointer;
  transition: .3s;
}

.dots span.active{
  background: #ff8c00;
  transform: scale(1.3);
}

.dots span:hover{
  background: #ffb347;
  transform: scale(1.4);
}

.first-line{
  font-weight:700;
}

@media(max-width:1024px){
  .carousel{
    width: 90%;
  }
}
</style>
