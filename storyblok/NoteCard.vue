<script setup lang="ts">
import { formatDate } from "@/utils";
import type { NoteCard } from "@/storyblok/types";

import TagList from "@/components/ui/TagList.vue";

defineProps<{
  blok: NoteCard;
}>();
</script>

<template>
  <div v-editable="blok" class="note-card" :class="blok.container_css">
    <div relative>
      <storyblok-component
        v-for="b in blok.content_blok"
        :key="b._uid"
        :blok="b"
      />

      <figure
        v-if="blok.image.filename"
        class="relative relative max-w-[1400px] h-sm w-full m-auto bg-black"
      >
        <div
          v-if="blok.image.id"
          :style="{ backgroundImage: `url(${blok.image.filename})` }"
          class="img"
        />
        <span
          v-if="blok.image.copyright"
          class="absolute bottom-1 right-2 text-xs text-white font-thin"
        >
          © {{ blok.image.copyright }}
        </span>
      </figure>

      <div text-left absolute left-4 bottom-3 text-white text-shadow>
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
        <!-- <ul inline-flex items-center gap-1>
          <template v-for="t in blok.tags" :key="t">
            <li font-bold text-sm>#{{ t }}</li>
          </template>
        </ul> -->
        <TagList :tags="blok.tags" />
        —
        <time text-lg>{{ formatDate(blok.published_at) }}</time>
      </div>
      <a
        :href="blok.link.url"
        class="block pt-2 font-bold hover:underline text-sm text-right"
      >
        read more
      </a>
    </div>
  </div>

  <!-- registers all the classes from storyblok schema -->
  <div hidden class="md:col-span-2" />
</template>

<style scoped>
.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.overlay {
  transition: 0.5s ease-in-out;
}

.feature-image-container:hover .overlay {
  opacity: 0.8;
  backdrop-filter: saturate(180%) blur(20px);
}

.feature-image-container:hover .note-description {
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
