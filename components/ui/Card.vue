<script lang="ts" setup>
import { formatDate } from "@/utils";
import type { Author } from "@/storyblok/types";

defineProps({
  slug: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: Object as PropType<Author>,
  },
  published_at: {
    type: Date,
  },
});
</script>

<template>
  <nuxt-link
    :to="`/${slug}`"
    class="sticky-note block relative overflow-hidden max-w-xs shadow hover:shadow-lg mb-8"
    style="background-color: rgb(253, 255, 164)"
  >
    <div class="note-wrapper p-5">
      <header class="text-2xl font-bold">{{ title }}</header>

      <p class="mt-3 text-sm font-thin">{{ description }}</p>

      <footer class="flex items-center mt-5">
        <img
          class="w-20 rounded-full border-4 border-primary"
          :src="author?.image.filename"
          :alt="author?.image.alt"
        />
        <div class="ml-3">
          <p class="text-3xl font-cursive text-primary">
            @{{ author?.at_username }}
          </p>
          <p v-if="published_at" class="text-xs">
            {{ formatDate(new Date(published_at)) }}
          </p>
        </div>
      </footer>
    </div>
  </nuxt-link>
</template>

<style scoped>
.sticky-note {
  border-bottom-right-radius: 1.5rem;
}
.sticky-note .note-wrapper:after {
  content: "";
  position: absolute;
  z-index: 1;
  right: -5px;
  bottom: -5px;
  width: 20px;
  height: 20px;
  box-shadow: 0 5px 20px #00000080;
}
</style>
