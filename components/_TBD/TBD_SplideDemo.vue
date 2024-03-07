<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

const images = [
  {
    src: "https://images.pexels.com/photos/20272816/pexels-photo-20272816/free-photo-of-defocused-photo-of-a-car-on-a-dirt-road-with-silhouetted-mountains-in-distance-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Image 1",
  },
  {
    src: "https://images.pexels.com/photos/20391917/pexels-photo-20391917/free-photo-of-a-long-road-with-snow-capped-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Image 2",
  },
  {
    src: "https://images.pexels.com/photos/19887047/pexels-photo-19887047/free-photo-of-a-traffic-light-is-hanging-from-a-wire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Image 3",
  },
  {
    src: "https://images.pexels.com/photos/20165766/pexels-photo-20165766/free-photo-of-winter-in-porto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Image 4",
  },
  {
    src: "https://images.pexels.com/photos/7175578/pexels-photo-7175578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Image 5",
  },
  {
    src: "https://images.pexels.com/photos/18614182/pexels-photo-18614182/free-photo-of-a-small-church-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Image 6",
  },
];

const splideRef = ref();

// onMounted(() => {
//   if (splideRef.value && splideRef.value.splide) {
//     console.log(splideRef.value.splide.length);
//   }
// });

const splideOptions = ref({
  type: "slide",
  perPage: 3,
  cover: true,
  rewind: true,
  pagination: true,
  classes: {
    pagination: "splide__pagination",
    page: "splide__pagination__page pagination-btn",
  },
  gap: "1rem",
  height: "24rem",
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
  <div ref="splideRef" class="splide-carousel relative">
    <splide :options="splideOptions" :has-track="false">
      <splide-track>
        <splide-slide v-for="(image, i) in images" :key="i">
          <img
            :src="image.src"
            :alt="image.alt"
            :data-splide-lazy="image.src"
            class="img"
          />
        </splide-slide>
      </splide-track>

      <div class="splide__arrows text-primary">
        <button class="splide__arrow splide__arrow--prev">
          <div i-carbon:chevron-left text-4xl />
        </button>
        <button class="splide__arrow splide__arrow--next">
          <div i-carbon:chevron-right text-4xl />
        </button>
      </div>

      <ul class="splide__pagination pagination-track"></ul>
    </splide>
  </div>
</template>

<style>
.splide-carousel .img {
  width: 100%;
  object-fit: cover;
}

.splide__arrows {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.splide__arrow--prev {
  left: 0;
}
.splide__arrow--next {
  right: 0;
  position: inherit !important;
}

.pagination-track {
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
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
