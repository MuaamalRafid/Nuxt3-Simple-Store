<template>
  <div
    class="flex flex-col items-center justify-center gap-8 border-2 rounded-sm p-6 border-[#12b886]"
  >
    <div class="image">
      <img class="w-28 h-32" :src="product.image" alt="" />
    </div>
    <div class="title font-bold truncate text-center w-72">
      {{ product.title }}
      <div class="mt-2">{{ product.price }}$</div>
    </div>
    <div>
      <nuxt-link :to="`Products/${product.id}`">
        <button
          class="rounded-xl bg-[#12b886] px-2 py-1 w-60 transition ease-in-out delay-75 hover:-translate-y-1 hover:bg-[#15dea1] duration-150"
        >
          Show Detiles
        </button>
      </nuxt-link>
    </div>
  </div>
  <Footer />
</template>

<script setup>
const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
