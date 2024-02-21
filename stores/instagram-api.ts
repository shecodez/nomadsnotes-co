import { defineStore } from "pinia";

import type { InstagramPost } from "@/stores/types";

export const useInstagramApiStore = defineStore("instagramApi", {
  state: () => ({
    loading: false,
    error: "",
    posts: [] as InstagramPost[],
  }),
  actions: {
    async fetchInstagramFeed() {
      this.loading = true;

      try {
        const response = await fetch("/.netlify/functions/instagram-api");

        // Throw an error if the response was not successful
        if (!response.ok) throw new Error(response.statusText);

        this.posts = await response.json();
      } catch (e: any) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
  },
});
