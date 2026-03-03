<template>
    <div class="global-background-decoration">
      <div class="g-square sq-a" />
      <div class="g-square sq-b" />
      <div class="g-square sq-c" />
      <div class="g-square sq-d" />
      <div class="g-square sq-e" />
      <div class="g-square sq-f" />
      <div class="g-square sq-g" />
      <div class="g-square sq-h" />
      <div class="g-square sq-i" />
      <div class="g-square sq-j" />
      <div class="g-square sq-k" />
      <div class="g-square sq-l" />
    </div>

    <section class="hero-section">
      <div class="hero-floating-elements">
        <Icon
          name="fa6-solid:wifi"
          class="hero-float-item icon-wifi"
        />
        <Icon
          name="bi:sd-card"
          class="hero-float-item icon-sd"
        />
        <div class="hero-float-item text-binary">
          <span>0101</span><br><span>1001</span>
        </div>
        <Icon
          name="bx:chip"
          class="hero-float-item icon-chip"
        />
        <Icon
          name="carbon:network-4"
          class="hero-float-item icon-network"
        />
        <div class="hero-float-item icon-iot-text">
          <Icon
            name="mdi:wifi"
            class="iot-wifi"
          />
          <span>IoT</span>
        </div>
        <Icon
          name="mdi:monitor-cellphone"
          class="hero-float-item icon-devices"
        />
        <div class="hero-float-item hero-square sq-1" />
        <div class="hero-float-item hero-square sq-2" />
        <div class="hero-float-item hero-square sq-3" />
        <div class="hero-float-item hero-square sq-4" />
      </div>
    </section>
</template>

<style scoped>
/* =========================================
   Global Background Decoration
========================================= */
.global-background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.g-square {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(45, 49, 66, 0.15);
  border-radius: 4px;
  opacity: 0.6;
  animation: globalFloatAnim 8s ease-in-out infinite;
}

@keyframes globalFloatAnim {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(10deg);
  }

  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.sq-a {
  top: 10%;
  left: 3%;
  animation-delay: 0s;
}

.sq-b {
  top: 25%;
  right: 4%;
  animation-delay: 1s;
  width: 12px;
  height: 12px;
}

.sq-c {
  top: 40%;
  left: 6%;
  animation-delay: 2s;
}

.sq-d {
  top: 55%;
  right: 5%;
  animation-delay: 0.5s;
  width: 18px;
  height: 18px;
}

.sq-e {
  top: 70%;
  left: 2%;
  animation-delay: 1.5s;
}

.sq-f {
  top: 85%;
  right: 3%;
  animation-delay: 2.5s;
  width: 10px;
  height: 10px;
}

.sq-g {
  bottom: 10%;
  left: 5%;
  animation-delay: 0.2s;
}

.sq-h {
  bottom: 25%;
  right: 6%;
  animation-delay: 1.2s;
  width: 20px;
  height: 20px;
}

.sq-i {
  bottom: 40%;
  left: 4%;
  animation-delay: 2.2s;
}

.sq-j {
  bottom: 55%;
  right: 2%;
  animation-delay: 0.7s;
  width: 14px;
  height: 14px;
}

.sq-k {
  bottom: 70%;
  left: 7%;
  animation-delay: 1.7s;
}

.sq-l {
  bottom: 85%;
  right: 4%;
  animation-delay: 2.7s;
}
/* =========================================
   1. Hero Section
========================================= */
.hero-section {
  position: relative;
  text-align: center;
  padding: 150px 20px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5rem;
  font-weight: 500;
}

.hero-floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-float-item {
  position: absolute;
  opacity: 0.7;
  animation: heroFloatAnim 6s ease-in-out infinite;
}

@keyframes heroFloatAnim {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

.icon-wifi {
  top: 15%;
  left: 5%;
  font-size: 6rem;
  transform: rotate(-15deg);
}

.icon-sd {
  bottom: 15%;
  left: 10%;
  font-size: 3rem;
}

.text-binary {
  top: 60%;
  left: 15%;
  font-size: 1.5rem;
  font-weight: 800;
  font-family: monospace;
  line-height: 1.1;
}

.icon-chip {
  bottom: 5%;
  left: 50%;
  font-size: 7rem;
  transform: translateX(-50%);
  opacity: 0.4;
}

.icon-network {
  top: 15%;
  right: 5%;
  font-size: 7rem;
}

.icon-devices {
  top: 45%;
  right: 8%;
  font-size: 3rem;
}

.icon-iot-text {
  bottom: 12%;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 900;
}

.iot-wifi {
  margin-bottom: -10px;
  font-size: 3rem;
}

.hero-square {
  width: 25px;
  height: 25px;
  border: 3px solid #1a1a1a;
  border-radius: 8px;
  opacity: 0.5;
}

.sq-1 {
  top: 10%;
  left: 20%;
}

.sq-2 {
  bottom: 40%;
  left: 5%;
  width: 20px;
  height: 20px;
}

.sq-3 {
  top: 10%;
  right: 25%;
  width: 20px;
  height: 20px;
}

.sq-4 {
  bottom: 30%;
  right: 5%;
}
</style>