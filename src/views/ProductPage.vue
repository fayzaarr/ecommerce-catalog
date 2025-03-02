<template>
  <div class="productpages">
    <div v-if="loading" class="loader-container">
      <div class="loader" />
      <p>Loading product...</p>
    </div>

    <ProductDisplay 
      v-else-if="product" 
      :product="product" 
      :loading="loading"
      :fetch-next-product="fetchNextProduct" 
    />

    <!-- Tampilkan Unavailable Page kalau kategori tidak valid -->
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
  import ProductDisplay from "@/components/ProductDisplay.vue";
  
  export default {
    components: { ProductDisplay },
    data() {
      return {
        product: null,
        currentIndex: 1,
        loading: true,
        category: null,
        unavailable: false
      };
    },
    watch: {
      "$route.query.category"(newCategory) {
        this.category = newCategory;
        this.fetchProduct();
      }
    },
    mounted() {
      this.category = this.$route.query.category;
      this.fetchProduct();
    },
    methods: {
      async fetchProduct() {
        this.loading = true;
        this.unavailable = false; // Reset state unavailable setiap fetch
        console.log("Fetching product with index:", this.currentIndex);

        // Jika kategori bukan "men" atau "women", langsung Unavailable Page
        const validCategories = ["men", "women"];
        if (!validCategories.includes(this.category)) {
          this.unavailable = true;
          this.product = null; // Hapus produk sebelumnya biar Unavailable Page muncul
          this.loading = false;
          return;
        }

        try {
          const response = await fetch(`https://fakestoreapi.com/products/${this.currentIndex}`);
          if (!response.ok) throw new Error("Failed to fetch product");
          const data = await response.json();

          // Cek apakah kategori produk sesuai
          if (data.category === `${this.category}'s clothing`) {
            this.product = data;
            this.unavailable = false;
          } else {
            // Kalau tidak sesuai, jangan looping terus, set langsung ke unavailable
            this.unavailable = true;
            this.product = null;
          }
        } catch (error) {
          console.error("Error fetching product:", error);
          this.unavailable = true;
          this.product = null;
        } finally {
          this.loading = false;
        }
      },
      fetchNextProduct() {
        this.currentIndex = (this.currentIndex % 20) + 1;
        console.log("Fetching next product with index:", this.currentIndex);
        this.fetchProduct();
      }
    }
  };
  </script>
  