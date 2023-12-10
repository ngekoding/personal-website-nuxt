<script lang="ts" setup>
import type WorkParsedContent from '@/types/work-parsed-content'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const { path: _path, params: { slug } } = useRoute()

const { data: work } = await useAsyncData(`work:${locale.value}:${slug}`, () => {
  return queryContent<WorkParsedContent>('work', (slug as string[]).join('/'))
    .where({ _locale: locale.value })
    .findOne()
})

const { data: surroundWorks } = await useAsyncData(`surround-work:${locale.value}:${slug}`, () => {
  return queryContent('work')
    .where({ _locale: locale.value })
    .only(['_path', 'title', 'thumbnail'])
    .findSurround({ _path: (work.value?._path as string) })
})

const { data: firstWork } = await useAsyncData(`first-work:${locale.value}`, () => {
  return queryContent<WorkParsedContent>('work')
    .where({ _locale: locale.value })
    .sort({ _id: 1 })
    .only(['_path', 'title', 'thumbnail'])
    .findOne()
})

const { data: lastWork } = await useAsyncData(`last-work:${locale.value}`, () => {
  return queryContent<WorkParsedContent>('work')
    .where({ _locale: locale.value })
    .sort({ _id: -1 })
    .only(['_path', 'title', 'thumbnail'])
    .findOne()
})

const prevWork = computed(() => surroundWorks.value?.at(0) ?? lastWork.value)
const nextWork = computed(() => surroundWorks.value?.at(1) ?? firstWork.value)

const pageTitle = computed(() => work.value?.title ?? t('pageNotFound.title'))
useHead({ title: pageTitle })
</script>

<template>
  <main class="container mx-auto pt-24 lg:pt-28 pb-8 px-8 lg:px-28">
    <template v-if="!work">
      <p>{{ $t('pageNotFound.message') }}</p>
      <NuxtLink :to="localePath('/')" class="block mt-4 text-sm text-purple-500 group">
        <Icon name="material-symbols:keyboard-backspace" size="18px" class="group-hover:-translate-x-0.5" /> {{ $t('goToHome') }}
      </NuxtLink>
    </template>
    <template v-else>
      <NuxtLink
        :to="{ path: localePath('/'), hash: '#work' }"
        class="relative mb-7 w-10 h-10 md:w-11 md:h-11 lg:fixed lg:top-20 lg:left-9 lg:w-12 lg:h-12 flex items-center justify-center bg-gray-50 hover:bg-purple-50 rounded-full group"
      >
        <Icon name="material-symbols:arrow-back" />
        <p class="absolute text-sm left-full pl-1.5 transition ease-in-out lg:translate-x-5 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
          {{ $t('back') }}
        </p>
      </NuxtLink>
      <div class="inline-block text-sm text-gray-700 relative">
        {{ work.category }}
        <span class="absolute w-1 h-1 rounded-full bg-purple-400 top-1/2 -translate-y-1/2 -right-2" />
      </div>
      <h1 class="mt-2 text-[11vw] md:text-5xl lg:text-6xl leading-none font-bold md:max-w-[80%] lg:max-w-[60%]">
        {{ work.title }}
      </h1>
      <div class="mt-10 max-w-5xl flex flex-col gap-y-5 lg:flex-row lg:gap-x-24">
        <p class="lg:flex-auto" v-html="nl2br(work.content)" />
        <div class="lg:basis-1/3 lg:flex-shrink-0">
          <div>
            <h4 class="font-bold">
              {{ $t('technologies') }}
            </h4>
            <div class="flex flex-wrap gap-1 font-mono text-xs mt-1">
              <span
                v-for="tech in work.technologies"
                :key="tech"
                class="inline-block px-3 py-1 bg-purple-400 text-white rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <NuxtLink
            :to="work.url"
            target="_blank"
            class="block mt-5 text-purple-500 group"
          >
            {{ $t('openProject') }}
            <Icon
              name="material-symbols:arrow-right-alt"
              size="18px"
              class="group-hover:translate-x-0.5"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="mt-6 space-y-4">
        <div
          v-for="screenshot in work.screenshots"
          :key="screenshot.alt"
          class="border border-gray-100"
        >
          <NuxtImg
            :src="screenshot.url"
            :alt="screenshot.alt"
            class="w-full"
            loading="lazy"
            placeholder
          />
        </div>
      </div>
      <div class="w-full mt-6 lg:fixed lg:w-[300px] lg:bottom-9 lg:right-9 group">
        <img
          :src="nextWork?.thumbnail"
          :alt="nextWork?.title"
          class="hidden lg:block absolute -z-10 h-24 w-full object-cover rounded-t-lg bottom-full transition duration-300 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-2 group-hover:opacity-100"
        >
        <div class="h-full bg-white rounded-lg py-5 lg:px-6">
          <div class="flex items-center justify-between">
            <h4 class="font-semibold">
              {{ $t('nextProject') }}
            </h4>
            <div class="flex gap-x-2">
              <NuxtLink
                :to="localePath(prevWork?._path)"
                class="bg-gray-50 hover:bg-purple-50 w-11 h-11 rounded-full flex items-center justify-center"
              >
                <Icon name="material-symbols:arrow-back" />
              </NuxtLink>
              <NuxtLink
                :to="localePath(nextWork?._path)"
                class="bg-gray-50 hover:bg-purple-50 w-11 h-11 rounded-full flex items-center justify-center"
              >
                <Icon name="material-symbols:arrow-forward" />
              </NuxtLink>
            </div>
          </div>
          <h2 class="text-xl font-medium mt-2">
            {{ nextWork?.title }}
          </h2>
        </div>
      </div>
    </template>
  </main>
</template>
