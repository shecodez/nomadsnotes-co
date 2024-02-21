<template>
  <div
    v-editable="blok"
    class="pg-bg-color flex flex-col my-10 p-4 divide-y divide-black"
  >
    <StoryblokComponent
      v-for="blok in blok.grid_items"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
