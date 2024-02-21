// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@formkit/nuxt",
    "vue-recaptcha/nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@storyblok/nuxt",
    "@pinia/nuxt",
  ],
  // image: {
  //   domains: ["cloudinary.com"],
  // },
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      region: "us",
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      app: {
        url: "https://nomadsnotes.co",
        name: "Nomad's Notes .Co【NONOCO】",
        desc: "",
      },
      // https://dansnow.github.io/vue-recaptcha/guide/nuxt
      recaptcha: {
        //v2SiteKey: 'YOUR_V3_SITEKEY_HERE',
        v3SiteKey: process.env.RECAPTCHA_V3_SITE_KEY,
      },
      FORMSPARK_ACTION_URL: process.env.FORMSPARK_ACTION_URL,
      BOTPOISON_PUBLIC_KEY: process.env.BOTPOISON_PUBLIC_KEY,
      STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
    },
  },
  devtools: { enabled: true },
  css: ["@unocss/reset/tailwind.css"],
  experimental: {
    renderJsonPayloads: false,
  },
});
