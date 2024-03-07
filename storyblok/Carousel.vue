<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import type { Carousel } from "@/storyblok/types";

const props = defineProps<{
  blok: Carousel;
}>();

const splideRef = ref();

// onMounted(() => {
//   if (splideRef.value && splideRef.value.splide) {
//     console.log(splideRef.value.splide.length);
//   }
// });

const splideOptions = ref({
  type: "slide",
  cover: true,
  rewind: true,
  perPage: props.blok.items_per_slide || 1,
  pagination: true,
  classes: {
    pagination: "splide__pagination",
    page: "splide__pagination__page pagination-btn",
  },
  gap: "1rem",
  height: props.blok.height,
  autoPlay: props.blok.autoplay,
  animationDuration: 1000,
  // Splide uses max-width(desktop-first)
  breakpoints: {
    // < 768px
    768: {
      //height: "70vh",
      perPage: 1,
    },
  },
});
</script>

<template>
  <div v-editable="blok" class="splide-carousel">
    <div ref="splideRef" class="relative">
      <splide :options="splideOptions" :has-track="false">
        <splide-track>
          <splide-slide v-for="b in blok.slides" :key="b._uid">
            <storyblok-component :blok="b" />
          </splide-slide>
        </splide-track>

        <div w-full class="center-y">
          <div class="splide__arrows text-primary">
            <button class="splide__arrow splide__arrow--prev">
              <div i-carbon:chevron-left text-4xl />
            </button>
            <button class="splide__arrow splide__arrow--next">
              <div i-carbon:chevron-right text-4xl />
            </button>
          </div>
        </div>

        <ul class="splide__pagination pagination-track"></ul>
      </splide>
    </div>
  </div>

  <!-- registers all the classes from storyblok schema -->
  <div hidden class="bg-center bg-cover" />
</template>

<style>
.splide-carousel .img {
  width: 100%;
  object-fit: cover;
}

.splide__arrows {
  display: flex;
  justify-content: space-between;
}

.pagination-track {
  position: absolute;
  top: 1.25rem;
  left: -1rem;
  flex-direction: column;
  gap: 0.5rem;
}

.pagination-btn {
  display: block;
  height: 0.25rem;
  border-radius: 1rem;
  content: "";
  width: 1rem;
  background-color: rgb(255 0 79 / 0.5);
}
.pagination-btn.is-active {
  width: 2rem;
  background-color: rgb(255 0 79 / 1);
}
</style>
