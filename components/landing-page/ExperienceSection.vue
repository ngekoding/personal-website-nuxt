<script lang="ts" setup>
import technologies from '@/data/technologies'
const experienceTechnologies = technologies.filter(tech => tech.usedIn.includes('ftugm'))
</script>

<template>
  <section id="experience" class="scroll-mt-20 mt-20">
    <h2
      class="leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500 text-center"
      v-html="nl2br($t('landing.experience.title'))"
    />
    <div class="max-w-3xl mx-auto mt-8">
      <HeadlessDisclosure v-slot="{ open }" :default-open="true">
        <HeadlessDisclosureButton
          class="w-full text-white flex items-center py-2 px-4 rounded-lg"
          :class="[open ? 'bg-purple-500' : 'bg-purple-700']"
        >
          <div class="grow text-left">
            Full Stack Developer @ Fakultas Teknik UGM
          </div>
          <div class="hidden md:block">
            {{ $t('landing.experience.dateShort') }}
          </div>
          <Icon
            :name="open ? 'material-symbols:remove' : 'material-symbols:add'"
            size="18px"
            class="text-white ml-4"
          />
        </HeadlessDisclosureButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform -translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <HeadlessDisclosurePanel class="bg-purple-50 p-4 rounded-lg mt-1 flex flex-col md:flex-row md:items-center gap-5">
            <div class="flex-1 order-last md:order-first">
              <div class="text-gray-600 text-sm flex flex-col gap-1">
                <div class="flex items-start gap-2">
                  <Icon name="material-symbols:date-range-outline" class="flex-shrink-0 mt-[3px]" />
                  <div v-html="nl2br($t('landing.experience.date'))" />
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="material-symbols:location-on" class="flex-shrink-0" />
                  <div>Yogyakarta, Indonesia</div>
                </div>
                <NuxtLink
                  to="http://ft.ugm.ac.id"
                  target="_blank"
                  class="flex items-center gap-2"
                >
                  <Icon name="material-symbols:open-in-new" class="flex-shrink-0" />
                  <div>ft.ugm.ac.id</div>
                </NuxtLink>
              </div>
              <p class="mt-4" v-html="nl2br($t('landing.experience.description'))" />
              <div class="mt-4 font-mono text-xs text-white flex flex-wrap gap-x-1 gap-y-1">
                <span
                  v-for="(item, key) in experienceTechnologies"
                  :key="`ftugm-technology-${key}`"
                  class="inline-block bg-purple-400 py-1 px-3 rounded-full"
                >
                  {{ item.label }}
                </span>
              </div>
            </div>
            <div>
              <img
                src="/img/logo-ugm.png"
                alt="Logo UGM"
                class="w-24"
              >
            </div>
          </HeadlessDisclosurePanel>
        </transition>
      </HeadlessDisclosure>
    </div>
  </section>
</template>
