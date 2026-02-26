<template>
  <nav class="nav">
    <ul class="nav-links">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/academics">Academics</NuxtLink></li>
      <li><NuxtLink to="/admission">Admission</NuxtLink></li>
      <li><NuxtLink to="/information">Information</NuxtLink></li>
      <li><NuxtLink to="/department">Department</NuxtLink></li>
      <li><NuxtLink to="/performance">Performance</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: 0.25s;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover {
  color: #f26522;
}

.nav-links a.router-link-exact-active {
  color: #f26522;
  border-bottom: 2px solid #f26522;
}

/* ซ่อนบนมือถือ (เตรียมทำ hamburger) */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>