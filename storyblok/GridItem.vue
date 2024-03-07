<script setup lang="ts">
import type { GridItem } from "@/storyblok/types";

defineProps<{
  blok: GridItem;
}>();
</script>

<template>
  <div
    class="grid-item w-full center flex-col"
    v-editable="blok"
    :class="blok.css"
  >
    <h3 class="text-3xl font-cursive text-primary">
      {{ blok.title }}
    </h3>

    <p>{{ blok.description }}</p>
    <storyblok-component v-for="b in blok.item" :key="b._uid" :blok="b" />

    <a :href="blok.link.url" mt-2 text-xs font-bold hover:underline>
      {{ blok.link_text }}
    </a>
  </div>

  <!-- registers all the classes from storyblok schema -->
  <div hidden class="border-8 row-span-2 row-span-3 center" />
</template>

<style scoped>
.title-font-brand h3 {
  font-family: "Major Mono Display";
  font-size: 2.25rem;
  line-height: 2.5rem;
}
</style>
