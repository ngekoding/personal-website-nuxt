// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
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
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image',
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
  content: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'EN',
        file: 'en.ts',
        icon: 'flag:us-1x1',
      },
      {
        code: 'id',
        name: 'ID',
        file: 'id.ts',
        icon: 'flag:id-1x1',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
})
