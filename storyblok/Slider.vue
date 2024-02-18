<script setup lang="ts">
import type { Slider } from "@/storyblok/types";

defineProps<{
  blok: Slider;
}>();

const slider = ref(50);
watch(slider, (val, _) => {
  const slideDiv = document.querySelector(
    ".img-comparison-slider .img-container .slide:nth-child(2)"
  );
  const slideDividerEl = document.querySelector(".slide-divider");

  slideDiv!.style.width = `${val}%`;
  slideDividerEl!.style.left = `${val}%`;
});

// move slider on hover
function calcMousePos(e: MouseEvent) {
  const el = e.target as HTMLInputElement;
  const x =
    (e.offsetX / el.clientWidth) * parseInt(el.getAttribute("max") + "", 10);
  slider.value = Math.floor(x);
}
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
    <div class="slide-divider center-x" inset-y-0 text-white flex gap-2>
      <div i-carbon:chevron-left self-center />
      <hr border-l-1 border-white h-full />
      <div i-carbon:chevron-right self-center />
    </div>
    <input
      v-model="slider"
      @mousemove="calcMousePos"
      type="range"
      min="1"
      max="100"
    />
  </div>
</template>

<style>
.center-x {
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
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  outline: none;
  width: 100%;
  height: 100%;
}
.img-comparison-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
}
</style>
