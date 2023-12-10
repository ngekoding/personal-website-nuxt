<script lang="ts" setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nur Muhammad` : 'Nur Muhammad - Full Stack Developer'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- <script setup>
const { locale, locales } = useI18n()
</script>

<template>
  <div>
    {{ locales }}
    <form>
      <select v-model="locale">
        <option v-for="l in locales" :key="l.code" :value="l.code">
          {{ l.name }}
        </option>
      </select>
      <p>{{ $t('welcome') }}</p>
      <p>{{ $t('nav.about') }}</p>
    </form>
  </div>
</template> -->
