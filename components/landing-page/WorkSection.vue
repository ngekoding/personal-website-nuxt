<script lang="ts" setup>
import type WorkParsedContent from '@/types/work-parsed-content'

const localePath = useLocalePath()
const { locale } = useI18n()
const { data: works } = await useAsyncData(`works:${locale.value}`, () => {
  return queryContent<WorkParsedContent>('work')
    .where({ _locale: locale.value })
    .only(['_path', 'title', 'category', 'thumbnail'])
    .find()
})
</script>

<template>
  <section id="work" class="scroll-mt-20 mt-20">
    <h2 class="leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500" v-html="nl2br($t('landing.work.title'))" />
    <p class="max-w-xl text-xl mt-6" v-html="nl2br($t('landing.work.description'))" />
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
      <NuxtLink
        v-for="work in works"
        :key="work.title"
        :to="localePath(work._path)"
        class="rounded-3xl xl:rounded-[32px] md:p-2.5 md:hover:shadow-[0_0_56px_rgba(54,54,86,0.12)] transition duration-300"
      >
        <NuxtImg
          :src="work.thumbnail"
          class="w-full aspect-video object-cover rounded-2xl xl:rounded-3xl"
          loading="lazy"
          placeholder
        />
        <div class="px-3 mt-3 mb-2">
          <h4 class="text-lg font-medium line-clamp-1">
            {{ work.title }}
          </h4>
          <div>
            {{ work.category }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
