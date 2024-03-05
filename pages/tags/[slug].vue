<script setup lang="ts">
const {
  params: { tag },
} = useRoute();

const filter = tag.split(",");
const blogQuery = queryContent("blog")
  .only(["_path", "title", "description", "date"])
  .where({ tags: { $contains: filter } })
  // .sort({ date: -1 })
  .find(); // ; <ContentList :query="blogQuery">
const { data: posts } = await useAsyncData("posts-by-tag", async () => {
  return await blogQuery;
});

const config = useRuntimeConfig();
useHead({
  title: `${tag} | ${config.public.appName}`,
  meta: [{ name: "description", content: `Nomad's ${tag} notes` }],
});
</script>

<template>
  <div container mx-auto class="p-tags-tag">
    <nuxt-link
      to="/tags"
      my-4
      py-1
      px-2
      inline-flex
      border
      rounded
      items-center
      gap-2
      hover:text-orange
    >
      <div class="i-carbon:arrow-left" />
      Back to Tags
    </nuxt-link>

    <h2
      my-10
      capitalize
      font-black
      text-2xl
      flex
      gap-2
      items-center
      justify-center
    >
      <div i-carbon:tag />
      <span v-if="tag">"{{ filter.toString().replace("-", " ") }}"</span>
    </h2>

    <section pb-10>
      <ul v-if="posts?.length" flex items-center justify-center gap-2>
        <template v-for="(p, i) in posts" :key="`${tag}-post-${i}`">
          <li p-4 bg-gray-300 dark:bg-gray-900 hover:underline>
            <nuxt-link :to="p._path" font-semibold>
              {{ p.title }}
            </nuxt-link>
          </li>
        </template>
      </ul>

      <div v-else text-center>No notes found</div>
    </section>
  </div>
</template>
