import Splide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core"; // Import Splide CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Splide); // Register Splide as a Vue plugin
});
