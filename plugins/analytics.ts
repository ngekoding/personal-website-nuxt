import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === 'production') {
    nuxtApp.vueApp.use(VueGtag, {
      config: {
        id: 'G-C7FD5MQRBP',
      },
    }, useRouter())
  }
})
