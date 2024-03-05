<template>
  <div v-editable="blok" :class="blok.css">
    <storyblok-component
      v-for="blok in blok.grid_items"
      :key="blok._uid"
      :blok="blok"
    />
  </div>

  <!-- registers all the classes from storyblok schema -->
  <div
    hidden
    class="pg-bg-color my-10 mb-10 p-4 grid lg:grid-rows-3 lg:grid-flow-col gap-4 grid-cols-1 md:grid-cols-3"
  />
</template>

<script setup>
defineProps({ blok: Object });
</script>
