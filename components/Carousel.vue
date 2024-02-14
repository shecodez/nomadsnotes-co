<script setup lang="ts">
const { slides, altText, startImgUrl, endImgUrl } = defineProps([
  "slides",
  "altText",
  "startImgUrl",
  "endImgUrl",
]);

const activeSlideIdx = ref(1);
function setActiveSlideIdx(index: number) {
  activeSlideIdx.value = index;
}

const prevSlideIdx = computed(() => Math.max(activeSlideIdx.value - 1, 0));
const nextSlideIdx = computed(() =>
  Math.min(activeSlideIdx.value + 1, slides.length - 1)
);

const autoPlayEnabled = ref(false); // TODO: set true for mobile and touch devices
const timeoutDuration = ref(3000); // ms
const autoPlayTimer = ref();
const autoPlay = () => {
  autoPlayTimer.value = setInterval(() => {
    setActiveSlideIdx((activeSlideIdx.value + 1) % slides.length);
  }, timeoutDuration.value);
};

watch(
  () => autoPlayEnabled.value,
  (autoPlayEnabled) => {
    if (autoPlayEnabled) autoPlay();
    else clearInterval(autoPlayTimer.value);
  }
);
</script>

<template>
  <div class="carousel" relative flex items-center justify-center gap-2>
    <button
      @click="activeSlideIdx -= 1"
      :disabled="activeSlideIdx <= 0"
      hover:text-primary
    >
      <div i-carbon:chevron-left text-4xl />
    </button>

    <div
      @mouseover="autoPlayEnabled = true"
      @mouseleave="autoPlayEnabled = false"
      class="flex items-center justify-center gap-2"
    >
      <img
        v-if="startImgUrl && activeSlideIdx <= 0"
        :src="startImgUrl"
        :alt="`${altText}-start-img`"
        class="object-fit h-80 w-auto hidden md:block"
        format="webp"
      />
      <template v-for="(s, i) in slides" :key="s">
        <transition name="slide-fade">
          <img
            v-if="
              prevSlideIdx === i || activeSlideIdx === i || nextSlideIdx === i
            "
            :class="activeSlideIdx === i ? 'h-100' : 'h-80 hidden md:block'"
            :src="s"
            :alt="`slide-${altText}-${i}`"
            class="object-fit w-auto"
            format="webp"
          />
        </transition>
      </template>
    </div>
    <img
      v-if="endImgUrl && activeSlideIdx >= slides.length - 1"
      :src="endImgUrl"
      :alt="`${altText}-end-img`"
      class="object-fit h-80 w-auto hidden md:block"
      format="webp"
    />

    <button
      @click="activeSlideIdx += 1"
      :disabled="activeSlideIdx >= slides.length - 1"
      hover:text-primary
    >
      <div i-carbon:chevron-right text-4xl />
    </button>

    <div absolute bottom-4 inset-x-0 flex items-center justify-center gap-2>
      <template v-for="(s, i) in slides" :key="`${s}-nav-${i}`">
        <div
          w-2
          h-2
          rounded-full
          bg-primary
          hover:bg-opacity-100
          cursor-pointer
          :class="activeSlideIdx === i ? 'bg-opacity-100' : 'bg-opacity-40'"
          @click="setActiveSlideIdx(i)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
</style>
