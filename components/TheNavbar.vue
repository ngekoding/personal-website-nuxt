<script lang="ts" setup>
const mobileNav = ref<boolean>(false)

useHead({
  bodyAttrs: {
    class: computed(() => mobileNav.value ? 'overflow-hidden' : ''),
  },
})

const localePath = useLocalePath()

const navLinks = ref([
  { hash: '#about', text: 'nav.about' },
  { hash: '#experience', text: 'nav.experience' },
  { hash: '#work', text: 'nav.work' },
  { hash: '#contact', text: 'nav.contact' },
])

const hideNavbar = ref<boolean>(false)
const el = ref<Document | null>(null)
const scroll = useScroll(el)

onMounted(() => el.value = document)

watchEffect(() => {
  if (scroll.isScrolling && scroll.directions.bottom && scroll.y.value > 64)
    hideNavbar.value = true

  else if (scroll.isScrolling && scroll.directions.top)
    hideNavbar.value = false
})
</script>

<template>
  <div>
    <header
      class="fixed w-full top-0 z-30 h-16 flex items-center bg-white/75 backdrop-blur-md transition-transform duration-300"
      :class="{ '-translate-y-16': hideNavbar }"
    >
      <div class="container mx-auto px-8 lg:px-28 flex items-center justify-between">
        <NuxtLink :to="localePath('/')">
          <img src="/img/logo.png" class="h-9 rounded-md">
        </NuxtLink>
        <nav id="main-nav" class="font-mono text-sm hidden md:block">
          <ul>
            <li v-for="item in navLinks" :key="item.hash" class="inline">
              <NuxtLink
                class="cursor-pointer inline-block px-4 py-2 hover:text-purple-500"
                :to="{ path: localePath('/'), hash: item.hash }"
              >
                {{ $t(item.text) }}
              </NuxtLink>
            </li>
            <li class="inline no-numbering">
              <NuxtLink
                to="/cv-nur-muhammad.pdf"
                target="_blank"
                class="inline-block border border-purple-500 text-purple-500 px-4 py-2 ml-2 rounded-lg"
              >
                {{ $t('nav.resume') }}
              </NuxtLink>
            </li>
            <li class="inline no-numbering pl-4">
              <LocaleSwitcher />
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
        class="fixed h-screen w-screen bg-black/50 backdrop-blur-sm z-40"
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
        <div v-if="mobileNav" class="fixed h-full w-10/12 right-0 bg-white p-6 z-50">
          <button class="absolute right-8 rounded-full" @click="mobileNav = false">
            <Icon name="material-symbols:close" class="text-purple-500 text-2xl" />
          </button>
          <ul class="h-full overflow-y-auto w-full flex flex-col items-center tall:justify-center">
            <li v-for="item in navLinks" :key="item.hash">
              <NuxtLink
                class="inline-block py-4 hover:text-purple-500 text-2xl"
                :to="{ path: localePath('/'), hash: item.hash }"
              >
                {{ $t(item.text) }}
              </NuxtLink>
            </li>
            <li class="mt-10 no-numbering">
              <NuxtLink
                href="/cv-nur-muhammad.pdf"
                target="_blank"
                class="inline-block border border-purple-500 text-purple-500 text-lg px-8 py-2 rounded-lg"
              >
                {{ $t('nav.resume') }}
              </NuxtLink>
            </li>
            <li class="mt-10 no-numbering">
              <LocaleSwitcher is-mobile />
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
    &:not(.no-numbering) a::before {
      content: "0" counter(item) ".";
      @apply text-purple-500 mr-2;
    }
  }
}
#mobile-nav {
  li {
    &:not(.no-numbering) a::before {
      @apply block text-center text-base mr-0;
    }
  }
}
</style>
