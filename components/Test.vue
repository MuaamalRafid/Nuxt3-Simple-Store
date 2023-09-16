<template>
  <div class="relative shopping-cart-slidebar">
    <div
      class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
    >
      <div
        class="w-screen max-w-[320px] max-h-80 overflow-y-scroll 	  flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
      >
        <div class="p-4">
          <div
            v-for="product in uniqueOrder"
            :key="product.id"
            class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 text-center"
          >
            <div
            
              class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
            >
              <img :src=" product.image " alt="" />
            </div>
            <div>
              <a href="#" class="font-semibold text-gray-900 ">
                {{ product.title }}
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">
                {{ product.price }}$
              </p>
            </div>
          </div>
        </div>
       <div class="sticky bottom-0 ">
         <div class=" divide-gray-900/5 bg-[#5acdab] grid grid-cols-2 justify-center items-center">
        <a href="#" class="flex items-center justify-center w-full text-center p-3 font-semibold text-gray-900 hover:bg-[#12b886]">
          <Icon class="mr-2" name="mdi:credit-card-fast-outline" size="25px"></Icon> Complate Order 
        </a>
        <h1>Total Price :  {{ TotalPrice || 0 }} </h1>
      </div>
       </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/stores/ProductsStore";
const productsStore = useProductsStore();

const { order } = storeToRefs(productsStore);
const TotalPrice = computed(() => {
  return order.value.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
});

 let uniqueOrder = [];
 let count = {};
order.value.forEach((product) => {

    if (!uniqueOrder.includes(product)) {
        uniqueOrder.push(product);
        }
    });



</script>
