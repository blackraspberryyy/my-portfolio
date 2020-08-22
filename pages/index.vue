<template>
  <v-container
    style="max-width: 1024px;"
    class="mb-12"
    v-scroll-spy="{ offset: $breakpoint.mdAndDown ? 56 : 8, data: 'section' }"
  >
    <template v-for="(sectionComp, sectionKey) in sections">
      <component
        :is="sectionComp.section"
        :key="sectionKey"
        class="my-12 py-4"
      ></component>
    </template>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

import Landing from '@/components/Home/Landing'
import AboutMe from '@/components/Home/AboutMe'
import Career from '@/components/Home/Career'
import Skills from '@/components/Home/Skills'
import Projects from '@/components/Home/Projects'
import Hobbies from '@/components/Home/Hobbies'

export default {
  components: {
    Landing,
    AboutMe,
    Career,
    Skills,
    Projects,
    Hobbies,
  },
  data() {
    return {
      section: 0,
      sections: [
        {
          section: Landing,
        },
        {
          section: AboutMe,
        },
        {
          section: Career,
        },
        {
          section: Skills,
        },
        {
          section: Projects,
        },
        {
          section: Hobbies,
        },
      ],
    }
  },
  watch: {
    section: function (newSection, oldSection) {
      this.setSection(newSection)
    },
  },
  methods: {
    ...mapMutations({
      setSection: 'app/setSection',
    }),
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
