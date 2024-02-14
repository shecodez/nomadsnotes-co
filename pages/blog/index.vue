<script lang="ts" setup>
import PostCard from "~/components/blog/PostCard.vue";

const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find()
);

const runtimeConfig = useRuntimeConfig();
useHead({
  title: `blog | ${runtimeConfig.public.app.name}`,
});
</script>

<template>
  <nuxt-layout name="list">
    <template #title>
      <div bg-black text-white h-48 flex flex-col items-center justify-center>
        <h1 text-3xl mb-2><span class="font-majorMono">NONOCO</span> DigiJo</h1>
        <p>thoughts and reflections 🙏</p>
      </div>
    </template>

    <article
      v-for="post in posts"
      :key="post.id"
      class="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <PostCard :post="post" />
    </article>
  </nuxt-layout>
</template>
