<script lang="ts" setup>
import TagList from "~/components/notes/TagList.vue";
import TableOfContents from "~/components/TableOfContent.vue";

definePageMeta({
  layout: "post",
});

const route = useRoute();

const post = await queryContent("/notes")
  .where({ _path: route.path })
  .findOne();

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
      content: `${runtimeConfig.public.app.url}${post?.cover_image.url}`,
    },
  ],
});
</script>

<template>
  <div class="note-page">
    <div class="pg-bg-color mx-10 p-10 center flex-col gap-4">
      <div class="font-cursive text-4xl text-primary">note.category</div>
      <h1 class="text-7xl font-statement">{{ post.title }}</h1>
      <hr w-24 border-t-1 border-t-primary pb-3 />

      <p class="font-thin text-2xl mb-4">{{ post.description }}</p>
      <div class="h-16 center gap-2">
        <img :src="post.author.image.url" w-full h-full rounded-full />
        <p text-primary font-cursive text-3xl>@{{ post.author.at }}</p>
      </div>
    </div>

    <div class="cover-image-container relative aspect-[16/9] mx-10">
      <img
        :src="post.cover_image.url"
        :alt="post.cover_image.alt"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />
      <div class="overlay" absolute inset-0 h-full w-full bg-black opacity-0 />

      <div absolute bottom-2 right-2 font-mono text-yellow>
        <time :datetime="post.published_at">{{ post.published_at }}</time>
      </div>
    </div>

    <div class="pg-bg-color mx-10 px-10 pb-10 flex flex-col gap-10">
      <div flex gap-5>
        <div
          v-if="!!post.body?.toc?.links.length"
          class="w-60 hidden md:block mt-10"
        >
          <div sticky top-40>
            <TableOfContents :links="post.body?.toc?.links" />
          </div>
        </div>

        <article prose first-letter:text-3xl>
          <content-renderer :value="post">
            <template #empty>
              <p>No content found.</p>
            </template>
          </content-renderer>
        </article>
      </div>

      <div class="border-y-1 border-black py-2">
        <TagList :tags="post.tags" />
      </div>

      <div>
        <h4 text-4xl mb-4>
          More <span class="text-primary font-cursive">Photography</span> Notes
        </h4>
        3 notes carousel on mobile
      </div>
    </div>

    <div class="center p-1">
      <nuxt-link to="/notes" class="btn font-bold text-sm">
        <div i-carbon:arrow-left />
        back to notes
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  transition: 0.5s ease-in-out;
}
.cover-image-container:hover .overlay {
  opacity: 0.3;
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
