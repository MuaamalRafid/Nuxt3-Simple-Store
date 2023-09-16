<template>
  <Header />
  <div class="container m-auto mt-24 p-24 rounded-md border-[#2ee599] border-2">
    <div class="flex gap-96 items-center">
      <img
        class="ml-40 border-[#2ee599] p-6 border-2 rounded-md w-96 h-96"
        :src="product.image"
        alt=""
      />
      <div class="flex flex-col gap-6">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <div class="w-[450px]">
          <h3 class="text-xl font-bold">Product Description:</h3>
          <p class="text-lg font-light">{{ product.description }}</p>
        </div>
        <p
          class="font-bold text-xl self-center mt-10 bg-[#2ee599] px-3 py-2 rounded-md"
        >
          Price: ${{ product.price }}
        </p>
          <div class="flex gap-2 justify-center items-center"> 
          <button @click="increment" class="bg-[#2ee599] hover:bg-black hover:text-[#2ee599] px-4 py-1 rounded-md font-bold flex justify-center items-center">+</button>
          <div class="bg-gray-100 w-7 text-center ">{{productCounter}}</div>
          <button @click="decrement" class="bg-[#2ee599] hover:bg-black hover:text-[#2ee599] px-4 py-1 rounded-md font-bold text-xl flex justify-center items-center">-</button>
        </div>
        <NuxtLink
          @click="productsStore.addToOrder(product,productCounter)"
          to="/products"
          class="self-center hover:text-[#2ee599] cursor-pointer"
        >
          <div
            class="flex gap-3 justify-center items-center bg-gray-200 p-2 rounded-md hover:bg-black"
          >
            <h2 class="text-lg font-bold">Add To Cart</h2>
            <Icon name="tabler:shopping-cart-plus" size="30px" />
          </div>
        </NuxtLink>
      
      </div>
    </div>

    <div class="flex justify-center items-center mt-4">
      <nuxt-link to="/products">
        <button
          class="font-bold hover:bg-[#2ee599] hover:text-black bg-black text-white px-2 py-1 rounded-md mt-10"
        >
          <Icon name="line-md:upload-loop" size="30px" rotate="3" />
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";
import { useProductsStore } from "~/stores/ProductsStore";
const { id } = useRoute().params;
const productCounter = ref(1);
function increment() {
  if (productCounter.value > 0) {
    productCounter.value++;
  }
}
function decrement() {
  if (productCounter.value > 1) {
    productCounter.value--;
  }
}
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id }
);

const productsStore = useProductsStore();

</script>

<style></style>
