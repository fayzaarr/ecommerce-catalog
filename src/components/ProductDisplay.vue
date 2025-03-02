<template> 
  <div :class="categoryClass" class="container">
    <!-- menampilkan loader saat aktif-->
    <div v-if="loading" class="loader-container">
      <div class="loader" />
    </div>

    <!-- menampilkan product jika tersedia-->
    <div v-else-if="product" class="product-card">
      <img :src="product.image" :alt="product.title" class="product-image">
      <div class="description-image">
        <!-- menampilkan judul produk dengan warna sesuai kategori -->
        <h2 class="product-title" :class="titleColorClass">
          {{ product.title }}
        </h2>
        <div class="desc-box">
          <!-- menampilkan kategori produk -->
          <p class="product-category">
            {{ product.category }}
          </p>
          <!-- menampilkan rating produk dalam bentuk angka dan lingkaran-->
          <div class="product-rating">
            <!-- 5 circle -->
            <span>{{ product.rating.rate }}/5</span>
            <span 
              v-for="n in 5" 
              :key="n" 
              class="star" 
              :class="n <= Math.round(product.rating.rate) ? filledStarClass : 'star-empty'" 
            />
          </div>
        </div>
        <!-- menampilkan deskripsi produk -->
        <p class="product-description">
          {{ product.description }}
        </p>
        <!-- membuat garis lurus pembatas -->
        <hr>
        <!-- menampilkan harga produk sesuai dengan kategori-->
        <p class="product-price" :class="priceColorClass">
          ${{ product.price }}
        </p>
        <div class="button-group">
          <!-- button "buy now" sesuai dengan kategori -->
          <button class="buy-btn" :class="buttonColorClass">
            Buy now
          </button>
          <!-- button untuk menampilkan produk selanjutnya sesuai dengan kategori-->
          <button class="next-btn" :class="buttonBorderColorClass" @click="fetchNextProduct">
            Next product
          </button>
        </div>
      </div>
    </div>

    <!-- menampilkan halaman tidak ada produk yang tersedia -->
    <div v-else class="container page-unavailable">
      <div class="unavailable-card">
        <img src="@/assets/sad-face.png" alt="Sad Face" class="sad-face-img">
        <p class="unavailable-text">
          This product is unavailable to show
        </p>
        <button class="next-btn-un" @click="fetchNextProduct">
          Next product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Properti 'product' menerima objek produk dari parent component
    product: {
      type: Object,
      required: true
    },
    // Properti 'fetchNextProduct' menerima fungsi dari parent component
    fetchNextProduct: {
      type: Function,
      required: true
    },
    // Properti 'loading' digunakan untuk menampilkan atau menyembunyikan loader
    loading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    // menentukan kelas berdasarkan kategori produk
    categoryClass() {
      if (this.product && this.product.category === "women's clothing") {
        return 'page-women';
      } else if (this.product && this.product.category === "men's clothing") {
        return 'page-men';
      } else {
        return 'page-unavailable';
      }
    },
    // menentukan kelas untuk circle yang terisi sesuai kategori
    filledStarClass() {
      return this.product.category === "men's clothing" ? "star-filled-men" : "star-filled-women";
    },
    // menentukan kelas warna untuk judul produk
    titleColorClass() {
      if (this.product.category === "women's clothing") {
        return "title-women";
      } else if (this.product.category === "men's clothing") {
        return "title-men";
      }
      return "";
    },
    // menentukan kelas warna untuk harga produk
    priceColorClass() {
      if (this.product.category === "women's clothing") {
        return "price-women";
      } else if (this.product.category === "men's clothing") {
        return "price-men";
      }
      return "";
    },
    // menentukan kelas warna untuk button buy now
    buttonColorClass() {
      if (this.product.category === "women's clothing") {
      return "buy-btn-women";
    } else if (this.product.category === "men's clothing") {
      return "buy-btn-men";
    }
    return "";
    },
    // menentukan kelas warna untuk tombol next produk
    buttonBorderColorClass() {
      if (this.product.category === "women's clothing") {
      return "next-btn-women";
    } else if (this.product.category === "men's clothing") {
      return "next-btn-men";
    }
    return "";
    }
  }
};
</script>

<!-- styling css -->
<style scoped>
@import "../assets/style/page.css";
</style>