// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   modules: ["@nuxtjs/tailwindcss"],
   app: {
      head: {
         titleTemplate: "Sagfino - %s",
         meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
         ],
         htmlAttrs: {
            lang: "fa_IR",
            dir: "rtl",
         },
      },
   },
   css: ["~/assets/css/fonts.css"],
});
