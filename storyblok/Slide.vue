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
        class="img w-full h-full duration-500"
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
.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: auto 100%;
}
</style>
