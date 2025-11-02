// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  darkMode: "false",
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  //build: {
  //  transpile: ['gray-matter']
  //},
  vite: {
    build: {
      target: 'es2022'
    }
  },

  app: {
    head: {
      title: 'Everton Tenorio - DevOps Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'keywords', content: 'devops, software enginner, linux, python, llm, terraform, aws' },
        {
          name: 'google-site-verification',
          content: 'KmVSZKTOpdgPFxe0B_009vEhgdOEfpz3r5uT2QGIH-s'
        },
        {
          name: 'google-adsense-account',
          content: 'ca-pub-6910560588851575',
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
})
