<template>
  <v-container
    style="max-width: 1024px;"
    class="mb-12"
    v-scroll-spy="{ offset: $breakpoint.smAndDown ? 56 : 8 }"
  >
    <Landing class="pt-12 pb-8" id="landing" />
    <AboutMe class="my-8" id="aboutMe" />
    <Career class="my-8" id="career" />
    <Skills class="my-8" id="skills" />
    <Projects class="my-8" id="projects" />
    <Hobbies class="my-8" id="hobbies" />
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
