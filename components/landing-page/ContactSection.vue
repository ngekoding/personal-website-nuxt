<script lang="ts" setup>
import contactLinks from '@/data/contact-links'
import type Recommendation from '@/types/recommendation'

const { tm, rt } = useI18n()
const recommendations: Recommendation[] = tm('recommendations') as Recommendation[]
</script>

<template>
  <footer id="contact" class="scroll-mt-20 mt-20 bg-purple-50">
    <div class="container mx-auto px-8 flex flex-col xl:flex-row lg:px-28">
      <div class="flex-none order-2 xl:order-1 py-16 xl:py-20">
        <div class="max-w-lg flex flex-col items-start lg:pr-8">
          <h3 class="text-4xl font-bold text-purple-600" v-html="nl2br($t('landing.contact.title'))" />
          <p class="mt-4" v-html="nl2br($t('landing.contact.description'))" />
          <NuxtLink to="mailto:about.nurmuhammad@gmail.com" class="inline-block font-bold text-lg md:text-xl lg:text-2xl my-10 border-b-2 border-dotted border-purple-300 hover:border-purple-500">
            about.nurmuhammad@gmail.com
          </NuxtLink>
          <ul class="leading-8">
            <li v-for="item in contactLinks" :key="item.url">
              <NuxtLink
                :to="item.url"
                target="_blank"
                class="flex items-center py-0.5 hover:text-purple-500"
              >
                <Icon :name="item.icon" class="mr-3" />
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1 order-1 -mt-5 xl:order-2 xl:-mt-0 xl:flex xl:flex-col">
        <div
          v-for="(recommendation, key) in recommendations"
          :key="`recommendation-${key}`"
          class="text-white p-6 md:p-10 first:rounded-t-lg last:rounded-b-lg xl:first:rounded-t-none xl:last:rounded-b-none xl:flex-1 xl:flex xl:flex-col xl:justify-center"
          :class="rt(recommendation.meta.class)"
        >
          <div class="flex flex-col text-center items-center gap-5 lg:flex-row lg:text-left">
            <img
              :src="rt(recommendation.author.avatar)"
              :alt="rt(recommendation.author.name)"
              class="w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-full border-2 border-white"
            >
            <div>
              <div class="font-medium leading-tight">
                {{ rt(recommendation.author.name) }}
              </div>
              <div class="mt-1 text-xs italic">
                {{ rt(recommendation.author.position) }}
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="relative">
              <Icon
                name="bx:bxs-quote-alt-right"
                class="absolute z-0 -top-3 -left-3 md:-left-5 text-black/20 text-[50px] rotate-180"
              />
              <p class="relative z-10">
                {{ rt(recommendation.message) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
