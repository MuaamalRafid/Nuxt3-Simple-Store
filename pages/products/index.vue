<template>
  <Header />
  <div class="container m-auto">
      <div class="grid grid-cols-4 gap-4 mt-20 mb-20">
        <div v-for="product in products">
             <Products :product="product"/>
        </div>
      </div>
    
  </div>

</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
