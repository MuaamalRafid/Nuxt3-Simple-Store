import { defineStore } from "pinia";
import nuxtStorage from "nuxt-storage";
export const useProductsStore = defineStore("products", () => {
  const products = ref([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
  ]);
  const order = ref(nuxtStorage.localStorage.getData("order") || []);
  function addToOrder(products,count) {
    for (let index = 0; index < count; index++) {
      order.value.push(products);
      nuxtStorage.localStorage.setData("order", order.value);
    }
  }

  function removeFromOrder(index) {
    order.value.splice(index, 1);
    nuxtStorage.localStorage.setData("order", order.value);
  }

 




  return {
    products,
    addToOrder,
    order,
  };
});
