<script setup lang="ts">
import AppHeader from "@/components/core/AppHeader.vue";
import AppFooter from "@/components/core/AppFooter.vue";
import AdminBar from "@/components/ui/AdminBar.vue";
import SocialLinks from "@/components/core/SocialLinks.vue";
import ALink from "@/components/atomic/atoms/ALink.vue";
</script>

<template>
  <div relative min-h-screen flex flex-col>
    <AppHeader />

    <main class="pg-border-x">
      <AdminBar class="mx-10 mb-2">
        <p>
          Disclosure: This post may contain affiliate links. If you buy
          something through them,
          <span class="text-primary font-brand">NONOCO</span> will receive a
          small commission at no additional cost to you. Thank you for your
          support.
          <ALink :link="{ url: '/legal/disclosure', name: 'learn more' }" />
        </p>
      </AdminBar>

      <slot />
    </main>

    <AppFooter />
  </div>

  <SocialLinks />
</template>

<style scoped></style>
@/components/AdminBar.vue
