<script setup lang="ts">
import type { SocialAt } from "@/storyblok/types";

defineProps<{
  blok: SocialAt;
}>();
</script>

<template>
  <div v-editable="blok" :class="blok.css">
    <a :href="blok.link.url" target="_blank"><div :class="blok.icon_css" /></a>
  </div>
</template>
