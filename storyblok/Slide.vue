<script setup lang="ts">
type BlokLink = {
  id: string;
  url: string;
};
type BlokAsset = {
  id: string;
  alt: string;
  source: string;
  copyright: string;
};
export type Slide = {
  _uid: string;
  title: string;
  subtitle: string;
  image: BlokAsset;
  link: BlokLink;
};

defineProps<{
  blok: Slide;
}>();
</script>

<template>
  <div v-editable="blok" relative>
    <div w-full h-142 bg-gray-200>
      <img
        v-if="blok.image.id"
        :src="blok.image.source"
        :alt="blok.image.alt"
      />
    </div>
    <div class="center-flex-2" flex flex-col justify-center absolute inset-0>
      <h3 class="text-4xl font-statement leading">
        {{ blok.title }}
      </h3>
      <h4>{{ blok.subtitle }}</h4>
      <a :href="blok.link.url" font-bold hover:underline>read more</a>
    </div>
  </div>
</template>
