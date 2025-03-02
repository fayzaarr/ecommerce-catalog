<template> 
  <div :class="categoryClass" class="container">
    <!-- Loader tampil saat loading aktif -->
    <div v-if="loading" class="loader-container">
      <div class="loader" />
    </div>

    <!-- Produk hanya muncul kalau loading sudah selesai -->
    <div v-else-if="product" class="product-card">
      <img :src="product.image" :alt="product.title" class="product-image">
      <div class="description-image">
        <h2 class="product-title" :class="titleColorClass">
          {{ product.title }}
        </h2>
        <div class="desc-box">
          <p class="product-category">
            {{ product.category }}
          </p>
          <div class="product-rating">
            <span>{{ product.rating.rate }}/5</span>
            <span 
              v-for="n in 5" 
              :key="n" 
              class="star" 
              :class="n <= Math.round(product.rating.rate) ? filledStarClass : 'star-empty'" 
            />
          </div>
        </div>
        <p class="product-description">
          {{ product.description }}
        </p>
        <hr>
        <p class="product-price" :class="priceColorClass">
          ${{ product.price }}
        </p>
        <div class="button-group">
          <button class="buy-btn" :class="buttonColorClass">
            Buy now
          </button>
          <button class="next-btn" :class="buttonBorderColorClass" @click="fetchNextProduct">
            Next product
          </button>
        </div>
      </div>
    </div>

    <!-- Jika tidak ada produk -->
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
    product: {
      type: Object,
      required: true
    },
    fetchNextProduct: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    categoryClass() {
      if (this.product && this.product.category === "women's clothing") {
        return 'page-women';
      } else if (this.product && this.product.category === "men's clothing") {
        return 'page-men';
      } else {
        return 'page-unavailable';
      }
    },
    filledStarClass() {
      return this.product.category === "men's clothing" ? "star-filled-men" : "star-filled-women";
    },
    titleColorClass() {
      if (this.product.category === "women's clothing") {
        return "title-women";
      } else if (this.product.category === "men's clothing") {
        return "title-men";
      }
      return "";
    },
    priceColorClass() {
      if (this.product.category === "women's clothing") {
        return "price-women";
      } else if (this.product.category === "men's clothing") {
        return "price-men";
      }
      return "";
    },
    buttonColorClass() {
      if (this.product.category === "women's clothing") {
      return "buy-btn-women";
    } else if (this.product.category === "men's clothing") {
      return "buy-btn-men";
    }
    return "";
    },
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

<style scoped>
@import "../assets/style/page.css";
</style>