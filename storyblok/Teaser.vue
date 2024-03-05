<template>
  <div v-editable="blok" class="py-8 text-6xl text-center font-statement">
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
