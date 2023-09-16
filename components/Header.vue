<template>
  <div class="">
    <header class="container m-auto flex items-center justify-between p-1 mt-4">
      <div class="logo mr-12">
        <img src="~/assets/icons8-online-store-50.png" alt="" />
      </div>
      <nav class="font-bold text-xl">
        <ul class="flex gap-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
      </nav>
      <div class="profile-pic flex gap-6 items-center">
        <button @click="toogleClick" class="shooping-cart" :data-count="order.length">
          <Icon 
            name="ic:outline-add-shopping-cart"
            class="hover:text-[#12b886]"
            size="30px"
            id="shopping-cart"
          />
          <div  v-if="click"><Test /></div>
        </button>

        <img
          class="rounded-full w-10 h-10"
          src="~/assets/2919906.png"
          alt="profile-pic"
        />
      </div>
    </header>
  </div>
</template>

<script setup>
const click = ref(false);
function toogleClick() {
  click.value = !click.value;
}
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/stores/ProductsStore";
const productsStore = useProductsStore();

const { order } = storeToRefs(productsStore);
</script>
<style>
.router-link-active {
  color: #12b886;
}

.shooping-cart::before {
 content: attr(data-count);
 background: #12b886;
  color: #000000;
  font-weight: bold;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
top: 14px;
right: 250px;
padding: 11px;
}
</style>
