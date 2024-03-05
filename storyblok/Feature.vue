<script setup lang="ts">
import type { Feature } from "@/storyblok/types";

defineProps<{
  blok: Feature;
}>();
</script>

<template>
  <div v-editable="blok" class="w-full py-8 text-center">
    <h3 class="text-6xl font-statement">
      {{ blok.title }}
    </h3>
    <h4 text-2xl font-bold mb-2>{{ blok.subtitle }}</h4>

    <StoryblokComponent
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />

    <div flex flex-col items-center gap-2>
      <div w-16 v-if="blok.icon.filename">
        <nuxt-img :src="blok.icon.filename" :alt="blok.icon.alt" w-full />
      </div>
      <p font-bold>
        {{ blok.description }}
      </p>
      <a lowercase text-xs font-bold>{{ blok.link_text }}</a>
    </div>
  </div>
</template>
