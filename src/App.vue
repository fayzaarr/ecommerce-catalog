<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-links">
        <router-link to="/">
          Home
        </router-link>
        <span class="nav-title">FindYourFav</span>
        <router-link to="/products">
          Products
        </router-link>
      </div>
    </nav>

    <!-- Router-view untuk navigasi antar halaman -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "@/assets/style/page.css";
</style>


