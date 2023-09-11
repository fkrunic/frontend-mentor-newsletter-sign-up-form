<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="flex flex-row gap-4">
    <img class="w-5 h-5" src="../assets/icon-list.svg">
    <p>{{ content }}</p>
  </div>
</template>