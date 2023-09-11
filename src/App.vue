<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  document.body.className = 'font-roboto'
})
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <p class="text-3xl font-bold underline">Hello world!</p>
  </div>
</template>