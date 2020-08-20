<template>
  <v-container style="max-width: 1024px;" class="mb-12">
    <Landing />
    <AboutMe class="my-8" />
    <Career class="my-8" />
    <Skills class="my-8" />
    <Projects class="my-8" />
    <Hobbies class="my-8" />
  </v-container>
</template>

<script>
import Landing from '@/components/Home/Landing'
import AboutMe from '@/components/Home/AboutMe'
import Career from '@/components/Home/Career'
import Skills from '@/components/Home/Skills'
import Projects from '@/components/Home/Projects'

export default {
  components: {
    Landing,
    AboutMe,
    Career,
    Skills,
    Projects,
  },
}
</script>
<style lang="scss">
.bg-transparent {
  background: none !important;
}

.no-wrap {
  text-overflow: unset !important;
  white-space: unset !important;
}
</style>
