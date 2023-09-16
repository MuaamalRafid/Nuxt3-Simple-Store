<template>
  <Header />
  <div class="container m-auto mt-36 flex justify-around items-center">
    <div class="flex flex-col basis-1/2">
      <h1 class="text-5xl font-bold mb-7 mt-10">Welcome to our store</h1>
      <p class="text-2xl font-bold ml-1">We have the best products for you</p>
      <p class="text-2xl font-bold mt-5 ml-1">
        in our store, we combine quality and variety to offer you a unique
        shopping experience. We pride ourselves on offering a variety of
        high-quality products that meet all your needs.
      </p>

      <div class=" mt-40 flex items-center gap-4 ml-16 ">
        <nuxt-link to="/products">
          <button class="bg-[#12b886] text-xl p-3 rounded-lg  hover:text-white hover:bg-[#276d58]">Discover Products 
            <Icon
            class="self-center  cursor-pointer"
          name="line-md:watch-loop"
          size="30px"
        />
          </button>
        </nuxt-link>
        <NuxtLink to="/about">
          <button class="bg-[#12b886] text-xl p-3 rounded-lg ml-5 hover:text-white hover:bg-[#276d58]">About Us
            <Icon
            class="self-center hover:text-white cursor-pointer"
          name="line-md:watch-loop"
          size="30px"
        />
          </button>
        </NuxtLink>
      </div>
    </div>

    <transition name="image" appear>
    <div class="image basis-1/2">
      <img
        src="~/assets/homepage.png"
        alt=""
      />
    </div>
    </transition>
  </div>
</template>
<script setup>
</script>
<style>
body {
  background-color: #fbfbfb;
}

.image-enter-from{
  opacity: 0;
  transform: translateX(100%);
}
.image-enter-to{
  opacity: 1;
  transform: translateX(0%);
}
.image-enter-active{
  animation: slide-in 1s ease-out forwards;
}

</style>

