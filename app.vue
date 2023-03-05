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
