<script setup lang="ts">
const { data } = await useAsyncData("tags", () =>
  queryContent("notes").only(["tags"]).find()
);

const tags = new Set(data.value?.map(Object.values).flat(2));

const config = useRuntimeConfig();
useHead({
  title: `Tags | ${config.public.appName}`,
});
</script>

<template>
  <div container mx-auto>
    <h2 mt-10 text-center capitalize font-black text-2xl>Tags</h2>

    <ul py-10 flex flex-wrap gap-2 justify-center>
      <template v-for="t in tags" :key="t">
        <li
          class="tag px-4 py-2 rounded text-2xl whitespace-nowrap transition-all bg-gray-300 dark:bg-black hover:-translate-y-0.5"
        >
          <nuxt-link :to="`/tags/${t}`" font-semibold> # {{ t }} </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>
