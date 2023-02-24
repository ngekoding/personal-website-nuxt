<script lang="ts" setup>
const mobileNav = ref<boolean>(false)

useHead({
  bodyAttrs: {
    class: computed(() => mobileNav.value ? 'overflow-hidden' : ''),
  },
})

const router = useRouter()
const route = useRoute()

const toLandingSection = (hash: string): void => {
  mobileNav.value = false
  router.replace({
    hash,
    name: route.name !== 'home' ? 'home' : undefined,
  })
}

const navLinks = ref([
  { url: '#about', text: 'About' },
  { url: '#experience', text: 'Experience' },
  { url: '#work', text: 'Work' },
  { url: '#contact', text: 'Contact' },
])
</script>

<template>
  <div>
    <header class="fixed w-full top-0 z-30 h-16 flex items-center bg-white/75 backdrop-blur-md">
      <div class="container mx-auto px-8 lg:px-12 flex items-center justify-between">
        <NuxtLink to="/">
          <img src="@/assets/img/logo.png" class="h-9 rounded-md">
        </NuxtLink>
        <nav id="main-nav" class="font-mono text-sm hidden md:block">
          <ul>
            <li v-for="item in navLinks" :key="item.url" class="inline">
              <NuxtLink
                class="cursor-pointer inline-block px-4 py-2 hover:text-purple-500"
                @click="toLandingSection(item.url)"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
            <li class="inline">
              <NuxtLink
                to="/cv-nur-muhammad.pdf"
                target="_blank"
                class="inline-block bg-purple-500 text-white px-4 py-2 ml-2 rounded-lg"
              >
                Resume
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <button class="md:hidden rounded-full" @click="mobileNav = true">
          <Icon name="material-symbols:segment" class="text-purple-500 text-2xl" />
        </button>
      </div>
    </header>
    <nav id="mobile-nav" class="md:hidden">
      <div
        v-if="mobileNav"
        class="fixed h-screen dura w-screen bg-black/50 backdrop-blur-sm z-40"
        @click="mobileNav = false"
      />
      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="transform translate-x-full"
        enter-to-class="transform translate-x-0"
        leave-active-class="transition duration-150 ease-out"
        leave-from-class="transform translate-x-0"
        leave-to-class="transform translate-x-full"
      >
        <div v-if="mobileNav" class="fixed h-screen w-10/12 right-0 bg-white p-6 z-50">
          <button class="absolute right-8 rounded-full" @click="mobileNav = false">
            <Icon name="material-symbols:close" class="text-purple-500 text-2xl" />
          </button>
          <ul class="h-full w-full flex flex-col items-center justify-center">
            <li v-for="item in navLinks" :key="item.url">
              <NuxtLink
                class="inline-block py-4 hover:text-purple-500 text-2xl"
                @click="toLandingSection(item.url)"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
            <li class="mt-10">
              <NuxtLink
                href="/cv-nur-muhammad.pdf"
                target="_blank"
                class="inline-block bg-purple-500 text-white text-lg px-8 py-2 rounded-lg"
              >
                Resume
              </NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<style scoped>
#main-nav,
#mobile-nav {
  counter-reset: item 0;
  li {
    counter-increment: item;
    &:not(:last-child) a::before {
      content: "0" counter(item) ".";
      @apply text-purple-500 mr-2;
    }
  }
}
#mobile-nav {
  li {
    &:not(:last-child) a::before {
      @apply block text-center text-base mr-0;
    }
  }
}
</style>
