// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Abhishek Aligh",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt", "@nuxt/image"],

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", //
  },
});