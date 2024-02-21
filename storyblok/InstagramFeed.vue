<script setup lang="ts">
import type { InstagramFeed } from "@/storyblok/types";
import { storeToRefs } from "pinia";
import { useInstagramApiStore } from "@/stores/instagram-api";

defineProps<{
  blok: InstagramFeed;
}>();

const store = useInstagramApiStore();
const { fetchInstagramFeed } = store;
//const posts = computed(() => store.posts);
const { posts } = storeToRefs(store);

await fetchInstagramFeed();
</script>

<template>
  <div v-editable="blok">
    <a
      :href="`https://www.instagram.com/${blok.username}/`"
      target="_blank"
      class="mb-4 font-bold text-center text-primary"
    >
      @{{ blok.username }}
    </a>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-1 my-5">
      <template v-for="p in posts" :key="p.id">
        <div relative aspect-square w-full h-auto bg-black bg-opacity-20>
          <nuxt-img
            :src="p.url"
            :alt="p.caption"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </template>
    </div>
  </div>
</template>
