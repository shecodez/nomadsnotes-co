<script lang="ts" setup>
import useMarkdownContentRender from "@/composables/useMarkdownContentRender";

import TagList from "@/components/ui/TagList.vue";
import TableOfContents from "@/components/app/TableOfContents.vue";

definePageMeta({
  layout: "note",
});

const route = useRoute();

const resolveRelations = ["note.author"];
const story = await useAsyncStoryblok(
  route.path,
  { version: "draft", resolve_relations: resolveRelations },
  { customParent: "https://app.storyblok.com" }
);
//if (!story) throw error(`Note: ${route.params.slug} not found`)

const note = {
  ...story.value.content,
  author: story.value.content.author.content,
};

const { record } = useMarkdownContentRender(note.body);

const tag = story.value.tag_list[0];

// const q = queryContent("notes")
//   .only(["_path", "title", "description"])
//   .where({ tags: { $contains: tag } })
//   .limit(3)
//   .find();

//   const { data: taggedNotes } = await useAsyncData("tagged-notes", async () => {
//   return await q;
// });

const runtimeConfig = useRuntimeConfig();
useHead({
  title: `${story.value.content?.title} | ${runtimeConfig.public.app.name}`,
  meta: [
    { name: "description", content: story.value.content?.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `${story.value.content?.cover_image.filename}`,
    },
  ],
});
</script>

<template>
  <div class="note-page">
    <div class="pg-bg-color mx-10 p-10 center flex-col gap-4 grid-bg">
      <div class="font-cursive text-4xl text-primary">{{ tag }}</div>
      <h1 class="text-7xl font-statement text-center">{{ note.title }}</h1>
      <hr w-24 border-t-1 border-t-primary pb-3 />

      <p class="font-semibold text-2xl mb-4 text-center">
        {{ note.description }}
      </p>

      <div class="author center gap-2">
        <div class="img-frame w-20 aspect-square relative">
          <img
            class="w-full h-auto rounded-full"
            :src="note.author?.image.filename"
            :alt="note.author?.image.alt"
          />
        </div>
        <div>
          <h5
            class="text-3xl font-cursive text-primary"
            :title="note.author.name"
          >
            @{{ note.author?.at_username }}
          </h5>
          <p class="text-xs font-thin">
            <span v-if="story.updated_at">
              updated &middot; {{ formatDate(new Date(story.created_at)) }}
            </span>
            <span v-else>
              posted &middot; {{ formatDate(new Date(story.created_at)) }}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="cover-image-container relative aspect-[16/9] mx-10">
      <img
        :src="note.cover_image.filename"
        :alt="note.cover_image.alt"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />
      <div class="overlay" absolute inset-0 h-full w-full bg-black opacity-0 />

      <div absolute bottom-2 right-2 font-mono text-yellow>
        <time :datetime="story.published_at">
          {{ story.created_at }}
        </time>
      </div>
    </div>

    <div class="pg-bg-color mx-10 px-10 pb-10 flex flex-col gap-10">
      <div flex gap-10>
        <div
          v-if="!!record?.body.toc.links.length"
          class="w-80 hidden md:block mt-10"
        >
          <div sticky top-40>
            <TableOfContents :links="record?.body.toc.links" />
          </div>
        </div>

        <article
          class="prose mt-2.5 first-letter:text-4xl first-letter:text-primary first-letter:font-cursive"
        >
          <content-renderer :value="record">
            <template #empty>
              <p>No content found.</p>
            </template>
          </content-renderer>
        </article>
      </div>

      <div class="border-y-1 border-black py-2">
        <TagList :tags="story.tag_list" />
      </div>

      <div>
        <h4 text-4xl mb-4>
          More <span class="text-primary font-cursive">{{ tag }}</span> Notes
        </h4>
        <ul grid grid-cols-1 md:grid-cols-3 gap-5>
          <li v-for="(n, i) in 3" :key="i">
            {{ n }}
          </li>
        </ul>
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

.author .img-frame:before {
  content: "";
  width: inherit;
  height: 100%;
  position: absolute;
  left: 0;
  box-shadow: inset 0 0 0 2.5px var(--bg-color);
  border: 3px solid var(--primary-color);
  border-radius: 50%;
}

.grid-bg {
  background-image: linear-gradient(
      rgba(32, 52, 144, 0.16) 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      rgba(32, 52, 144, 0.16) 1px,
      rgba(247, 247, 247, 0.16) 1px
    );
  background-size: 24px 24px;
}
</style>
