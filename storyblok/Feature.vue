<template>
  <div v-editable="blok" class="w-full p-12 bg-gray-2 rounded text-center">
    <h3 class="text-2xl font-statement">
      {{ blok.name }}
    </h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
