<script setup lang="ts">
// const { data } = await useAsyncData("tags", () =>
//   queryContent("notes").only(["tags"]).find()
// );
// const tags = new Set(data.value?.map(Object.values).flat(2));

const { data } = await useStoryblokApi().get("cdn/tags", {
  version: import.meta.env.DEV ? "draft" : "published",
});
const tags = data.tags;

const config = useRuntimeConfig();
useHead({
  title: `Tags | ${config.public.appName}`,
});
</script>

<template>
  <div container mx-auto>
    <div class="pg-bg-color m-10 p-10">
      <h2 text-center text-7xl class="font-statement">Tags</h2>

      <ul py-10 flex flex-wrap gap-2 justify-center>
        <template v-for="t in tags" :key="t.name">
          <li
            class="tag px-4 py-2 rounded text-2xl whitespace-nowrap transition-all bg-white hover:-translate-y-0.5 cursor-pointer"
          >
            <nuxt-link :to="`/tags/${t.name}`" font-semibold>
              # {{ t.name }} <span hidden>({{ t.taggings_count }})</span>
            </nuxt-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
