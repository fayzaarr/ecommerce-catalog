<template>
  <div id="app">
    <!-- parent navbar -->
    <nav class="navbar">
      <div class="nav-links">
        <!-- link ke halaman homepage -->
        <router-link to="/">
          Home
        </router-link>

        <!-- judul brand -->
        <span class="nav-title">FindYourFav</span>

        <!-- link ke halaman produk -->
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

<!-- styling css -->
<style>
@import "@/assets/style/page.css";
</style>


