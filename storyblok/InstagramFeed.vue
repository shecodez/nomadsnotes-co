<script setup lang="ts">
import type { InstagramFeed } from "@/storyblok/types";

defineProps<{
  blok: InstagramFeed;
}>();

type InstagramPost = {
  id: string;
  url: string;
  caption: string;
};

const state = reactive({
  loading: false,
  instagramFeed: [] as InstagramPost[],
  error: "",
});

async function getInstagramFeed() {
  state.loading = true;

  try {
    const response = await fetch("/.netlify/functions/instagram-api");

    // Throw an error if the response was not successful
    if (!response.ok) throw new Error(response.statusText);

    state.instagramFeed = await response.json();
  } catch (e: any) {
    state.error = e;
  } finally {
    state.loading = false;
  }
}

onMounted(() => getInstagramFeed());
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

    <!-- <pre>{{ state.instagramFeed }}</pre> -->
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-1 my-5">
      <template v-for="p in 6" :key="p.id">
        <div relative aspect-square w-full h-auto bg-black bg-opacity-20>
          <div absolute inset-0 h-full w-full object-cover />
          <!-- <nuxt-img
            :src="p.url"
            :alt="p.caption"
            class="absolute inset-0 h-full w-full object-cover"
          /> -->
        </div>
      </template>
    </div>
  </div>
</template>
