<template>
  <v-layout column>
    <h4
      class="text-h4 mb-4"
      :class="{ 'text-h5': $breakpoint.smAndDown }"
      v-text="title"
    ></h4>
    <v-row>
      <v-col
        v-for="(project, projectKey) in projects"
        :key="projectKey"
        cols="12"
        :sm="getSm(projects, 2, 6)"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card class="fill-height">
            <v-img
              class="project-image white--text grey lighten-3"
              :class="{ 'on-hover': hover }"
              eager
              :src="project.src"
              :contain="project.contain"
              :aspect-ratio="$breakpoint.smAndDown ? '1.33333' : '1.77778'"
            >
              <v-card-title class="justify-end" v-show="project.link">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      x-large
                      v-on="on"
                      v-bind="attrs"
                      color="primary"
                      :href="project.link"
                    >
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </template>
                  <span>Github Repository</span>
                </v-tooltip>
              </v-card-title>
            </v-img>
            <v-card-text>
              <h6 class="text-h6" v-text="project.name"></h6>
              <v-chip
                v-for="(tech, techKey) in project.techs"
                :key="techKey"
                color="primary"
                small
                class="mr-1"
                >{{ tech }}</v-chip
              >
              <p class="mt-6" v-text="project.description"></p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-btn class="mt-6 align-self-center" :small="$breakpoint.smAndDown">
      <v-icon class="mr-2">mdi-github</v-icon>
      <span>Complete List of Repositories</span>
    </v-btn>
  </v-layout>
</template>
<script>
export default {
  name: 'projects',
  data() {
    const projectType = {
      SCHOOL: {
        type: 'School Project',
      },
      PERSONAL: {
        type: 'Personal Project',
      },
      WORK: {
        type: 'Work Project',
      },
    }
    return {
      title: 'Accomplished Projects',
      description: 'Some of my notable projects: ',
      projects: [
        {
          name: 'My Portfolio',
          description: 'A ton of info about me.',
          src: '/portfolio.png',
          techs: ['Nuxt.js', 'Vuetify'],
          link:
            'https://github.com/blackraspberryyy/blackraspberryyy.github.io',
          ...projectType.SCHOOL,
        },
        {
          name: 'FEU Curriculum Mapping',
          description:
            'A Web Based Syllabus Generator for FEU Faculty members.',
          src: '/fcm.png',
          techs: ['VueJS', 'Laravel', 'MySQL'],
          ...projectType.WORK,
        },
        {
          name: 'CrimeScoop',
          description:
            'A Mobile Based App for allowing user to record and send crimes caught on act.',
          src: '/crimescoop.png',
          techs: ['React Native', 'Firebase'],
          link: 'https://github.com/blackraspberryyy/CrimeScoop',
          ...projectType.SCHOOL,
        },
        {
          name: 'PetEx: Web Based Pet Adoption System',
          description:
            'Web Based Pet Adoption System Thesis Capstone Project for Philippine Animal Welfare Society.',
          src: '/petex.jpg',
          techs: ['Bootstrap', 'CodeIgniter', 'MySQL'],
          link: 'https://github.com/blackraspberryyy/petex-v2.0',
          ...projectType.SCHOOL,
        },
        {
          name: 'LocateMyPet App: Pet Locator using NFC',
          description:
            "Mobile Based Pet Locating app, in partial fulfillment of PetEx, that uses NFC scanning to the pet's NFC tag on their collars.",
          src: '/petexApp.jpg',
          techs: ['Android (Java)'],
          link: 'https://github.com/blackraspberryyy/LocateMyPet',
          ...projectType.SCHOOL,
        },
        {
          name: 'Binary Game',
          description: 'A simple Binary Game. Built using Construct 2.',
          src: '/binaryGame.gif',
          techs: ['Construct2'],
          contain: true,
          ...projectType.PERSONAL,
        },
      ],
    }
  },
  methods: {
    getSm(array, max, defaultSm) {
      if (!defaultSm) {
        defaultSm = 12
      }
      const length = (array && array.length) || 0
      if (length > 0 && length < max) {
        return 12 / length
      } else {
        return defaultSm
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.text-elevation {
  text-shadow: 1px 2px #2b2b2b;
}
.project-image {
  transition: opacity 0.4s ease-in-out;
  &:not(.on-hover) {
    opacity: 0.8;
  }
}
</style>
