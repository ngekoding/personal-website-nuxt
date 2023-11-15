<script lang="ts" setup>
import contactLinks from '@/data/contact-links'
import technologies from '@/data/technologies'
import recommendations from '@/data/recommendations'

definePageMeta({ name: 'home' })

const experienceTechnologies = technologies.filter(tech => tech.usedIn.includes('ftugm'))

const works = await queryContent('work')
  .only(['_path', 'title', 'category', 'thumbnail'])
  .find()
</script>

<template>
  <div id="landing-page">
    <main class="container mx-auto px-8 lg:px-28">
      <section id="hero" class="min-h-screen pt-16 flex flex-col justify-center">
        <p class="flex items-center font-mono">
          <span class="inline-block w-1 h-1 bg-purple-500 rounded-full" />
          <span class="ml-2 text-base lg:text-lg">Hi, my name is</span>
        </p>
        <h1 class="big-heading text-purple-500">
          Nur Muhammad.
        </h1>
        <h1 class="big-heading">
          I help simplify your lives.
        </h1>
        <p class="mt-6 max-w-xl text-base lg:max-w-lg lg:text-xl">
          I'm a full-stack developer, my experience in both front-end and back-end development allows me to build and maintain web applications with a deep understanding of the user experience. I enjoy solving complex problems and implementing innovative solutions.
        </p>
      </section>
      <section id="about" class="scroll-mt-20 pb-4 mt-20">
        <h2 class="text-2xl font-semibold text-purple-500">
          About Me
        </h2>
        <div class="mt-4 flex flex-col md:flex-row gap-5 md:gap-14">
          <div class="flex-1 order-last md:order-first">
            <p class="mb-4">
              Hello! I'm Nur Muhammad, and I'm passionate about creating
              innovative web-based solutions that make people's lives easier. My
              love for web development began in 2012 when I first saw my senior
              write HTML code with the &lt;marquee&gt; tag on the blackboard. I
              was fascinated by how technology could be used to make things
              happen on the internet.
            </p>
            <p class="mb-4">
              Today, I spend my days writing code and creating projects both for
              my job and personal endeavors. These projects allow me to explore
              my creativity and improve my skills, all with the intention of
              developing solutions that are relevant and valuable to others.
              Ultimately, my goal is to make a positive impact by using
              technology to enhance people's lives.
            </p>
            <p class="mb-4">
              Here are a few technologies I've been working with:
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
      <section id="experience" class="scroll-mt-20 mt-20">
        <h2 class="leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500 text-center">
          Professional<br>
          Experience
        </h2>
        <div class="max-w-2xl mx-auto mt-8">
          <HeadlessDisclosure v-slot="{ open }" :default-open="true">
            <HeadlessDisclosureButton
              class="w-full text-white flex items-center py-2 px-4 rounded-lg"
              :class="[open ? 'bg-purple-500' : 'bg-purple-700']"
            >
              <div class="grow text-left">
                Full Stack Developer @ Fakultas Teknik UGM
              </div>
              <div class="hidden md:block">
                2018 - Present
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
                  <div class="text-gray-600 text-sm flex flex-wrap flex-col md:flex-row gap-1 md:gap-x-5 md:gap-y-1">
                    <div class="flex items-center gap-2">
                      <Icon name="material-symbols:date-range-outline" />
                      <div class="flex flex-wrap items-center gap-x-2">
                        <div>2018 - 2022, July 2023 - Present (FT)</div>
                        <Icon name="radix-icons:dot-filled" size="10" class="text-gray-400" />
                        <div>April - June 2023 (PT)</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="material-symbols:location-on" />
                      <div>Yogyakarta, Indonesia</div>
                    </div>
                    <NuxtLink
                      to="http://ft.ugm.ac.id"
                      target="_blank"
                      class="flex items-center gap-2"
                    >
                      <Icon name="material-symbols:open-in-new" />
                      <div>ft.ugm.ac.id</div>
                    </NuxtLink>
                  </div>
                  <p class="mt-4">
                    Administer the full lifecycle of software development for
                    20+ projects of the company with successful result while
                    staying limited resources.
                  </p>
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
      <section id="work" class="scroll-mt-20 mt-20">
        <h2 class="leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500">
          My<br>
          Work
        </h2>
        <p class="max-w-xl text-xl mt-6">
          Utilizing a wide variety of programs and tools to provide high-quality
          and cost-effective applications to boost organizational efficiency and
          productivity.
        </p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
          <NuxtLink
            v-for="work in works"
            :key="work.title"
            :to="work._path"
            class="rounded-3xl xl:rounded-[32px] md:p-2.5 md:hover:shadow-[0_0_56px_rgba(54,54,86,0.12)] transition duration-300"
          >
            <img
              v-lazy="{
                src: work.thumbnail,
                loading: getMinifiedImg(work.thumbnail),
              }"
              :alt="work.title"
              class="w-full aspect-video object-cover rounded-2xl xl:rounded-3xl"
            >
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
    </main>
    <footer id="contact" class="scroll-mt-20 mt-20 bg-purple-50">
      <div class="container mx-auto px-8 flex flex-col xl:flex-row lg:px-28">
        <div class="flex-none order-2 xl:order-1 py-16 xl:py-20">
          <div class="max-w-lg flex flex-col items-start lg:pr-8">
            <h3 class="text-4xl font-bold text-purple-600">
              Get in Touch!
            </h3>
            <p class="mt-4">
              Hey, it's wonderful to hear from you! Although I'm not actively
              seeking new opportunities, my inbox is always open for you.
              Don't hesitate to reach out if you have any questions or simply
              want to say hi - I'll be more than happy to get back to you!
            </p>
            <NuxtLink to="mailto:about.nurmuhammad@gmail.com" class="inline-block font-bold text-lg md:text-xl lg:text-2xl my-10 border-b-2 border-dotted border-purple-300 hover:border-purple-500">
              about.nurmuhammad@gmail.com
            </NuxtLink>
            <ul class="leading-8">
              <li v-for="item in contactLinks" :key="item.url">
                <NuxtLink
                  :to="item.url"
                  target="_blank"
                  class="hover:text-purple-500"
                >
                  {{ item.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 order-1 -mt-5 xl:order-2 xl:-mt-0">
          <div
            v-for="(recommendation, key) in recommendations"
            :key="`recommendation-${key}`"
            class="text-white p-6 md:p-10 first:rounded-t-lg last:rounded-b-lg xl:first:rounded-t-none xl:last:rounded-b-none"
            :class="recommendation.meta.class"
          >
            <div class="flex flex-col text-center items-center gap-5 lg:flex-row lg:text-left">
              <img
                :src="recommendation.author.avatar"
                :alt="recommendation.author.name"
                class="w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-full border-2 border-white"
              >
              <div>
                <div class="font-medium leading-tight">
                  {{ recommendation.author.name }}
                </div>
                <div class="mt-1 text-xs italic">
                  {{ recommendation.author.position }}
                </div>
              </div>
            </div>
            <div class="flex-1 mt-6">
              <div class="relative">
                <Icon
                  name="bx:bxs-quote-alt-right"
                  class="absolute z-0 -top-3 -left-3 md:-left-5 text-black/20 text-[50px] rotate-180"
                />
                <p class="relative z-10">
                  {{ recommendation.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.big-heading {
  font-size: clamp(40px, 8vw, 80px);
  @apply font-semibold leading-none;
}
</style>
