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
    class="pg-bg-color my-10 mb-10 py-5 px-10 grid lg:grid-rows-3 lg-grid-cols-3--equal lg:grid-flow-col gap-4 grid-cols-1 md:grid-cols-3 divide-y divide-black"
  />
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style>
@media (min-width: 1024px) {
  .lg-grid-cols-3--equal {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
