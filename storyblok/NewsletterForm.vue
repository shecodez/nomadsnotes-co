<script setup lang="ts">
import type { NewsletterForm } from "@/storyblok/types";

defineProps<{
  blok: NewsletterForm;
}>();
</script>

<template>
  <div
    v-editable="blok"
    class="mx-auto relative flex items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:lang="en"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="500"
      height="125"
      class="max-w-full"
    >
      <defs>
        <path d="M 10 10 q 90 -110 242 -10 t 242 0" id="wave" />
      </defs>
      <g font-size="24px" fill="white">
        <text transform="translate(0,75)" letter-spacing="5">
          <textPath xlink:href="#wave" uppercase>
            {{ blok.bg_text }}
          </textPath>
        </text>
      </g>
    </svg>

    <form id="newsletter" class="absolute-centered max-w-sm">
      <div relative class="center">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          class="flex-1 rounded-l-full py-2 px-4"
          autocomplete="email"
        />
        <button
          type="submit"
          class="btn btn-primary hover:bg-green hover:text-white rounded-r-full"
          title="subscribe"
        >
          <div i-carbon:checkmark text-lg />
          <span sr-only>subscribe</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.absolute-centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
