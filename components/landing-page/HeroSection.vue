<template>
  <section id="hero" class="min-h-screen pt-16 flex flex-col justify-center">
    <p class="flex items-center font-mono">
      <span class="inline-block w-1 h-1 bg-purple-500 rounded-full" />
      <span class="ml-2 text-base lg:text-lg">
        {{ $t('landing.hero.intro') }}
      </span>
    </p>
    <h1 class="big-heading text-purple-500">
      Nur Muhammad.
    </h1>
    <h1 class="big-heading">
      {{ $t('landing.hero.slogan') }}
    </h1>
    <p class="mt-6 max-w-xl text-base lg:max-w-lg lg:text-xl">
      {{ $t('landing.hero.summary') }}
    </p>
  </section>
</template>

<style>
.big-heading {
  font-size: clamp(40px, 8vw, 80px);
  @apply font-semibold leading-none;
}
</style>
