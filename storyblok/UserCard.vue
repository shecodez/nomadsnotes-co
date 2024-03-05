<script setup lang="ts">
import { formatDate } from "@/utils";
import type { UserCard } from "@/storyblok/types";

defineProps<{
  blok: UserCard;
}>();
</script>

<template>
  <div v-editable="blok" class="flex flex-col gap-2 center">
    <h3 class="mt--5 text-4xl font-cursive">@{{ blok.username }}</h3>

    <div>
      <nuxt-img
        v-if="blok.image.id"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="h-80 w-80 rounded-full"
      />
    </div>

    <p my-2>{{ blok.description }}</p>

    <StoryblokComponent
      v-for="blok in blok.social_ats"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
