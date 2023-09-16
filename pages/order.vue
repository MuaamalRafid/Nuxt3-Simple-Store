<template>
  <div v-for="product in order" :key="product.id">
    <h2>{{ product.title }}</h2>
    <hr />
  </div>
</template>

<script setup>
import nuxtStorage from 'nuxt-storage';
import { storeToRefs } from 'pinia';
import { useProductsStore } from "~/stores/ProductsStore";
const productsStore = useProductsStore();

const { order } = storeToRefs(productsStore);
</script>
