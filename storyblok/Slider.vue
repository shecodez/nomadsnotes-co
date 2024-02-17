<script setup lang="ts">
import type { Slide } from "@/storyblok/Slide.vue";

type Slider = {
  _uid: string;
  slides: Slide[];
};

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
  <div class="slider" relative flex items-center justify-center gap-2>
    <transition-group name="fade" tag="div" class="w-full">
      <div v-editable="blok">
        <StoryblokComponent :blok="currentSlide" />
      </div>
    </transition-group>

    <button @click="prev" text-primary absolute left-0>
      <div i-carbon:chevron-left text-4xl />
    </button>
    <button @click="next" text-primary absolute right-0>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
