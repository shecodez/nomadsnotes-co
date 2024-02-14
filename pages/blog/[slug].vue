<script lang="ts" setup>
definePageMeta({
  layout: "post",
});

const route = useRoute();

const post = await queryContent("/blog").where({ _path: route.path }).findOne();

// const { data: post } = await useAsyncData("post", () =>
//   queryContent("/blog").where({ _path: route.path }).findOne()
// );

// const { data } = await useAsyncData("post", async () => {
//   const post = await queryContent("/blog")
//     .where({ _path: route.path })
//     .findOne();
//   const [prev, next] = await queryContent("/blog")
//     .only(["_path", "title"])
//     .sort({ date: 1 })
//     .where({ isArchived: false })
//     .findSurround(route.path);

//   return {
//     prev,
//     post,
//     next,
//   };
// });

const runtimeConfig = useRuntimeConfig();
useHead({
  title: `${post?.title} | ${runtimeConfig.public.app.name}`,
  meta: [
    { name: "description", content: post?.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `${runtimeConfig.public.app.url}${post?.featureImage.url}`,
    },
  ],
});
</script>

<template>
  <div>
    <div class="feature-image-container relative aspect-[16/9]">
      <img
        :src="post.featureImage.url"
        :alt="post.featureImage.title"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />

      <div class="overlay" absolute inset-0 h-full w-full bg-black opacity-0 />

      <div
        absolute
        inset-0
        flex
        flex-col
        items-center
        justify-center
        text-white
      >
        <nuxt-link to="/blog" class="fx-2-ic">
          <div i-carbon:arrow-left />
          Back to Blog
        </nuxt-link>
        <h1 p-3 text-4xl font-bold font-courgette>
          {{ post.title }}
        </h1>
        <div font-thin>Tags...</div>
      </div>

      <div absolute bottom-2 right-2 font-mono text-yellow>
        <time :datetime="post.publishDate">{{ post.publishDate }}</time>
      </div>
    </div>

    <article mx-auto prose first-letter:text-3xl>
      <content-renderer :value="post">
        <template #empty>
          <p>No content found.</p>
        </template>
      </content-renderer>
      <div w-full border-b py-4 />
    </article>

    <div flex justify-center my-8>
      <nuxt-link to="/blog" class="fx-2-ic">
        <div i-carbon:arrow-left />
        Back to Blog
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  transition: 0.5s ease-in-out;
}
.feature-image-container:hover .overlay {
  opacity: 0.8;
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
