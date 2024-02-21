<script setup lang="ts">
import { formatDate } from "@/utils";
import type { Card } from "@/storyblok/types";

defineProps<{
  blok: Card;
}>();
</script>

<template>
  <div v-editable="blok">
    <div relative>
      <div>
        <StoryblokComponent
          v-for="blok in blok.slider"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
      <figure w-full h-auto border-1>
        <nuxt-img
          v-if="blok.image.id"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>

      <div text-justify absolute left-4 bottom-3 text-white text-shadow>
        <div flex gap-1 text-lg class="font-cursive">
          <h3>{{ blok.category }}</h3>
          —
          <h4>{{ blok.subtitle }}</h4>
        </div>
        <h2 class="text-3xl font-bold">
          {{ blok.title }}
        </h2>
      </div>
    </div>

    <div flex flex-col gap-3 text-justify my-3 divide-y divide-black>
      <div>
        <ul inline-flex items-center gap-1>
          <template v-for="t in blok.tags" :key="t">
            <li font-bold text-sm>#{{ t }}</li>
          </template>
        </ul>
        —
        <time text-lg>{{ blok.published_date }}</time>
      </div>
      <a
        :href="blok.link.url"
        class="block pt-2 font-bold hover:underline text-sm text-right"
      >
        read more
      </a>
    </div>
  </div>
</template>
