<script lang="ts" setup>
import type LocaleObjectExtended from '@/types/locale-object-extended'

defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const { locale, locales, setLocale } = useI18n()
const typedLocales: LocaleObjectExtended[] = locales.value as LocaleObjectExtended[]
</script>

<template>
  <div v-if="isMobile">
    <span class="flex space-x-1">
      <button
        v-for="l in typedLocales"
        :key="l.code"
        class="w-8 h-8 relative"
        @click="setLocale(l.code)"
      >
        <Icon :name="l.icon" class="w-8 h-8 rounded-full border border-gray-200" />
        <span
          class="w-1.5 h-1.5 rounded-full bg-purple-400 absolute mt-1 top-full left-1/2 -translate-x-1/2"
          :class="{ hidden: l.code !== locale }"
        />
      </button>
    </span>
  </div>
  <span
    v-else
    class="w-5 h-5 relative inline-block group"
  >
    <Icon name="material-symbols:language" size="22px" />
    <span class="absolute flex space-x-1 top-0 left-full pl-1.5 transition ease-in-out translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
      <button
        v-for="l in typedLocales"
        :key="l.code"
        class="w-5 h-5 relative hover:opacity-100 hover:grayscale-0"
        :class="{
          'grayscale-0 opacity-100': l.code === locale,
          'grayscale opacity-70': l.code !== locale,
        }"
        @click="setLocale(l.code)"
      >
        <Icon :name="l.icon" size="20px" class="rounded-full border border-gray-200" />
        <span
          class="w-1 h-1 rounded-full bg-purple-400 absolute mt-1 top-full left-1/2 -translate-x-1/2"
          :class="{ hidden: l.code !== locale }"
        />
      </button>
    </span>
  </span>
</template>
