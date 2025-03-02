<template>
  <!-- styling homepage dengan class="home" -->
  <div class="home">
    <!-- text click here untuk menunjukkan tombol -->
    <h1 class="click-here">
      Click Here!
    </h1>

    <!-- button class -->
    <div class="category-buttons">
      <div class="category-one">
        <!-- button navigasi ke halaman kategori produk "Men's Clothing" -->
        <router-link to="/products?category=men" class="category-btn men">
          Men's Clothing
        </router-link>

        <!-- button navigasi ke halaman kategori produk "Women's Clothing" -->
        <router-link to="/products?category=women" class="category-btn women">
          Women's Clothing
        </router-link>
      </div>
    </div>
  </div>
</template>

<!-- styling css -->
<style scoped>
@import "../assets/style/page.css";
</style>
  