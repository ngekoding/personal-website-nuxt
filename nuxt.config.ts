// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nur Muhammad - Full Stack Developer',
      meta: [
        {
          name: 'keywords',
          content: 'Nur Muhammad, Full Stack Developer',
        },
        {
          name: 'description',
          content: 'Experienced full stack developer that helps simplify your lives.',
        },
      ],
    },
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-headlessui',
  ],
  tailwindcss: {
    cssPath: '@/assets/css/main.css',
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      'tailwindcss': {},
    },
  },
})
