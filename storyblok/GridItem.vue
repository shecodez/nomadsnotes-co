<script setup lang="ts">
import type { GridItem } from "@/storyblok/types";

defineProps<{
  blok: GridItem;
}>();
</script>

<template>
  <div v-editable="blok" :class="blok.css">
    <StoryblokComponent
      v-for="blok in blok.item"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
