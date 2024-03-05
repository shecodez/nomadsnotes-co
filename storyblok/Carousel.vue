<script setup lang="ts">
import type { Slider } from "@/storyblok/types";

const props = defineProps<{
  blok: Slider;
}>();

const timer = ref();
const currentIdx = ref(0);

function next() {
  currentIdx.value += 1;
}
function prev() {
  currentIdx.value -= 1;
}

function setSlideIdx(i: number) {
  currentIdx.value = i;
}

function startSlider() {
  timer.value = setInterval(next, 9000);
}

onMounted(() => startSlider());

const currentSlideIdx = computed(
  () => Math.abs(currentIdx.value) % props.blok.slides.length
);
const currentSlide = computed(() => props.blok.slides[currentSlideIdx.value]);
</script>

<template>
  <!-- <div class="carousel" relative flex items-center justify-center gap-2> -->
  <div
    v-editable="blok"
    class="carousel relative max-w-[1400px] h-lg w-full m-auto"
  >
    <storyblok-component :blok="currentSlide" :key="currentSlide._uid" />

    <button
      @click="prev"
      class="text-primary absolute left-0 top-[50%] translate-x-0 translate-y-[-50%]"
    >
      <div i-carbon:chevron-left text-4xl />
    </button>
    <button
      @click="next"
      class="text-primary absolute right-0 top-[50%] translate-x-0 translate-y-[-50%]"
    >
      <div i-carbon:chevron-right text-4xl />
    </button>

    <div absolute bottom-5 inset-x-0 flex items-center justify-center gap-2>
      <template v-for="(_, i) in blok?.slides.length" :key="`dot-${i}`">
        <button
          class="w-2 h-2 rounded-full bg-primary hover:bg-opacity-100"
          :class="currentSlideIdx === i ? 'bg-opacity-100' : 'bg-opacity-40'"
          @click="setSlideIdx(i)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
