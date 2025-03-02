import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Products from '@/views/ProductPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
