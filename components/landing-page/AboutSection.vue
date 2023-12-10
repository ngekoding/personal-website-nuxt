<script lang="ts" setup>
import technologies from '@/data/technologies'
</script>

<template>
  <section id="about" class="scroll-mt-20 pb-4 mt-20">
    <h2 class="text-2xl font-semibold text-purple-500">
      {{ $t('landing.about.title') }}
    </h2>
    <div class="mt-4 flex flex-col md:flex-row gap-5 md:gap-14">
      <div class="flex-1 order-last md:order-first">
        <p v-html="nl2br($t('landing.about.description'))" />
        <p class="my-4">
          {{ $t('landing.about.usedTechnologiesTitle') }}
        </p>
        <ul class="font-mono text-sm grid grid-flow-col grid-rows-8 sm:grid-rows-5 auto-cols-max gap-y-2 gap-x-6">
          <li v-for="(item, key) in technologies" :key="`technology-${key}`">
            <Icon name="material-symbols:play-arrow-outline" class="text-purple-500" />
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="md:basis-1/3 lg:basis-1/4 order-first md:order-last">
        <div class="sm:max-w-sm mx-auto overflow-hidden rounded-3xl border border-gray-300 shadow-xl">
          <img
            src="/img/profile.png"
            alt="Profile"
            class="object-cover"
          >
        </div>
      </div>
    </div>
  </section>
</template>
