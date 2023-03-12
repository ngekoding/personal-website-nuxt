import VueLazyLoad from 'vue3-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyLoad, {
    delay: 500,
    observerOptions: {
      rootMargin: '350px',
    },
  })
})
