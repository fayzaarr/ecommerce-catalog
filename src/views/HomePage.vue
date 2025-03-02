<template>
  <div class="home">
    <h1 class="click-here">
      Click Here!
    </h1>

    <div class="category-buttons">
      <div class="category-one">
        <router-link to="/products?category=men" class="category-btn men">
          Men's Clothing
        </router-link>
        <router-link to="/products?category=women" class="category-btn women">
          Women's Clothing
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
@import "../assets/style/page.css";
</style>
  