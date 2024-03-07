<script setup lang="ts">
//import type { iTitle } from "./_atomTypes.ts";

defineProps({
  tag: {
    type: String, // h1 h2 h3 h4 h5
  },
  content: {
    type: String,
  },
  font: {
    type: String, // statement cursive
    default: "serif",
  },
});
</script>

<template>
  <component :is="tag" class="text-3xl pb-2" :class="`font-${font}`">
    {{ content }}
  </component>
</template>
