<script setup lang="ts">
import { onMounted } from 'vue';
import BulletPoint from './components/BulletPoint.vue';

onMounted(() => {
  document.body.className = 'font-roboto'
})
</script>

<template>

  <!-- Page Layout -->
  <div class="flex flex-col justify-start items-center min-h-screen">
    <img src="./assets/illustration-sign-up-mobile.svg" alt="banner">

    <!-- Content -->
    <div class="flex flex-col gap-6 m-6">
      <p class="text-[30pt] font-bold -mb-2">Stay updated!</p>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <!-- List -->
      <div class="flex flex-col gap-2">
        <BulletPoint 
        :content="'Product discovery and building what matters'"
        ></BulletPoint>
        <BulletPoint 
        :content="'Measuring to ensure updates are a success'"
        ></BulletPoint>        
        <BulletPoint 
        :content="'And much more!'"
        ></BulletPoint>  
      </div>              

      <!-- Email Input -->
      <div class="flex flex-col mt-2 gap-2">
        <p class="text-xs font-bold">Email address</p>
        <input 
          class="w-full p-4 outline-none rounded-lg border-solid border-[1px] border-grey/50"
          type="text" 
          placeholder="email@company.com">
      </div>

      <!-- Subscribe Button -->
      <p class="
        w-full 
        p-4 
        
        text-center 
        rounded-lg 
        font-bold 
        text-white 
        bg-dark-slate-gray
        
        hover:bg-gradient-to-l from-tomato to-orange
        hover:cursor-pointer
        ">Subscribe to monthly newsletter</p>
    </div>
  </div>
</template>