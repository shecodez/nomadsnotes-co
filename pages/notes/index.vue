<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
useHead({
  title: `Notes | ${runtimeConfig.public.app.name}`,
});

const story = await useAsyncStoryblok(
  "notes",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);
</script>

<template>
  <storyblok-component v-if="story" :blok="story.content" />
</template>
