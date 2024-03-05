<script setup lang="ts">
import type { Slide } from "@/storyblok/types";

defineProps<{
  blok: Slide;
}>();
</script>

<template>
  <div v-editable="blok" class="slide w-full h-full">
    <figure v-if="blok.image.filename" relative w-full h-full bg-black>
      <div
        :style="{ backgroundImage: `url(${blok.image.filename})` }"
        class="w-full h-full transition-500"
        :class="blok.css"
      />
      <span
        v-if="blok.image.copyright"
        class="absolute bottom-1 right-2 text-xs text-white text-shadow font-thin"
      >
        © {{ blok.image.copyright }}
      </span>
    </figure>
    <div
      v-if="!blok.hide_text"
      class="center flex-col gap-2 absolute inset-0 text-white text-shadow"
    >
      <h3 class="text-7xl font-statement">
        {{ blok.title }}
      </h3>
      <h4 font-bold>{{ blok.subtitle }}</h4>
      <hr w-12 border-t-1 border-t-primary pb-3 />
      <a :href="blok.link.url" text-sm font-bold hover:underline>read more</a>
    </div>
  </div>
</template>

<style scoped>
.spacing-animation {
  animation: in 3s ease-out forwards infinite;
  animation-delay: 3600s;
}
@keyframes in {
  0% {
    letter-spacing: -17px;
    opacity: 0;
  }
  30% {
    letter-spacing: 4px;
    opacity: 1;
  }
  100% {
    letter-spacing: 4px;
    opacity: 1;
  }
}
</style>
