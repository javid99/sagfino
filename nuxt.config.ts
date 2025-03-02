// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@pinia/nuxt"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "fa_IR",
        dir: "rtl",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  css: ["~/assets/css/font.css"],
  icon: {
    provider: "server",
    customCollections: [
      {
        prefix: "my-iconsax",
        dir: "./assets/icons",
      },
    ],
  },
  devServer: {
    port: 8000,
  }
});
