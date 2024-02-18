<script setup lang="ts">
import type { Slider } from "@/storyblok/types";

defineProps<{
  blok: Slider;
}>();

const sliderInputEl = ref(null as Element | null);
</script>

<template>
  <div class="img-comparison-slider" relative w-full>
    <div v-editable="blok" class="img-container">
      <StoryblokComponent
        v-for="blok in blok.slides"
        :key="blok._uid"
        :blok="blok"
      />
    </div>

    <input ref="sliderInputEl" type="range" min="1" max="100" value="50" />
    <div class="centered-axis-x inset-y-0 text-white flex gap-2">
      <div i-carbon:chevron-left self-center />
      <hr border-l-1 border-white h-full />
      <div i-carbon:chevron-right self-center />
    </div>
  </div>
</template>

<style>
.centered-axis-x {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.img-comparison-slider .img-container {
  position: relative;
  overflow: hidden;
}
.img-comparison-slider .img-container .slide:nth-child(2) {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
}

.img-comparison-slider input {
  position: absolute;
  top: 0;
  left: 0;
  appearance: none;
  display: none;
  width: 100%;
  height: 100%;
}
</style>
