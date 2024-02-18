<script setup lang="ts">
import type { Slide } from "@/storyblok/types";

defineProps<{
  blok: Slide;
}>();
</script>

<template>
  <div class="slide" v-editable="blok">
    <figure relative w-full min-h-82 class="pg-bg-color">
      <div
        v-if="blok.image.id"
        :style="{ backgroundImage: `url(${blok.image.filename})` }"
        class="img"
      />
      <span
        v-if="blok.image.copyright"
        class="absolute bottom-2 right-2 text-xs text-white font-thin"
      >
        © {{ blok.image.copyright }}
      </span>
    </figure>

    <div
      v-if="!blok.hide_text"
      class="center-flex-2 flex flex-col justify-center absolute inset-0"
    >
      <h3 class="text-7xl font-statement">
        {{ blok.title }}
      </h3>
      <h4 font-bold>{{ blok.subtitle }}</h4>
      <hr w-12 border-t-1 border-t-primary pb-3 />
      <a :href="blok.link.url" font-bold hover:underline text-sm>read more</a>
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
