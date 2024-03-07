<script setup lang="ts">
import PageHeader from "~/components/pageHeader.vue";
import PageFooter from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";
import SocialLinks from "~/components/SocialLinks.vue";

//const config = useRuntimeConfig();
</script>

<template>
  <div relative min-h-screen flex flex-col>
    <AdminBar :closeable="true">
      <p>
        2024 <span class="text-primary font-brand relative z-1">NoNo</span>
        <span ml--1.5 opacity-80 class="font-brand">DiGi</span>
        <em> ZenBuJo</em> Yang Edition is live!!
      </p>
    </AdminBar>
    <PageHeader />

    <main class="pg-border-x">
      <div mx-10 mb-2>
        <AdminBar>
          Disclosure: This post may contain affiliate links. If you buy
          something through them,
          <span class="text-primary font-brand">NONOCO</span> will receive a
          small commission at no additional cost to you. Thank you for your
          support.
          <nuxt-link
            to="/legal/disclosure"
            text-sm
            font-bold
            hover:text-primary
          >
            learn more
          </nuxt-link>
        </AdminBar>
      </div>
      <slot />
    </main>
    <PageFooter />
  </div>
  <SocialLinks />
</template>

<style scoped></style>
