<script lang="ts" setup>
const config = useRuntimeConfig();

const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);

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

// async function getInstagramFeed() {
//   state.loading = true;

//   try {
//     const response = await fetch("/.netlify/functions/instagram-api");

//     // Throw an error if the response was not successful
//     if (!response.ok) throw new Error(response.statusText);

//     state.instagramFeed = await response.json();
//   } catch (e: any) {
//     state.error = e;
//   } finally {
//     state.loading = false;
//   }
// }

//onMounted(() => getInstagramFeed());

useHead({
  title: `${config.public.app.name}`,
});
</script>

<template>
  <storyblok-component v-if="story" :blok="story.content" />
</template>

<style scoped>
.centered-axis-xy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#instagram-feed {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.marquee-left span {
  line-height: 1.5rem;
  /* Starting position */
  transform: translateX(100%);
  /* Apply animation to this element */
  animation: scroll-left 30s linear infinite;
}
/* Move it (define the animation) */
@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
