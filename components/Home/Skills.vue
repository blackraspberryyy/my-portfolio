<template>
  <v-layout column my-5>
    <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}" v-text="title"></h4>
    <v-row justify="center" align-content="center">
      <v-col
        v-for="(skill, skillKey) in skills"
        :key="skillKey"
        :sm="getSm(skills, 3, 4)"
        cols="12"
        class="ma-0"
      >
        <v-card class="fill-height">
          <v-card-title class="d-flex flex-column justify-center align-center">
            <v-img
              class="flex-1 my-2"
              :src="skill.img"
              :alt="skill.name"
              max-height="120px"
              contain
              eager
            ></v-img>
            <h6 class="text-h6">{{ skill.name }}</h6>
            <v-rating
              v-model="skill.rating"
              half-increments
              readonly
              large
              half-icon="mdi-star-half-full"
            ></v-rating>
          </v-card-title>
          <v-card-text>
            <h6 class="text-overline" v-text="hasExpWith"></h6>
            <ul>
              <li v-for="(tech, i) in skill.tech" :key="i">{{ tech }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  name: 'skills',
  data() {
    return {
      title: 'Skills & Technologies',
      hasExpWith: 'Has experience with:',
      skills: [
        {
          name: 'Frontend Web Development',
          img: '/frontend.svg',
          rating: 4.5,
          tech: ['VueJS', 'Nuxt.js', 'Angular 6+', 'ReactJS'],
        },

        {
          name: 'Backend Web Development',
          img: '/backend.svg',
          rating: 4,
          tech: ['NestJS', 'MySQL', 'PostgreSQL', 'Firebase'],
        },
        {
          name: 'Version Control',
          img: '/versionControl.svg',
          rating: 4,
          tech: ['Git', 'GitFlow'],
        },
        {
          name: 'Mobile Development',
          img: '/mobileDev.svg',
          rating: 3.5,
          tech: ['React Native'],
        },
        {
          name: 'Testing',
          img: '/testing.svg',
          rating: 3,
          tech: ['Jest'],
        },
        {
          name: 'Dev Ops',
          img: '/devOps.svg',
          rating: 2,
          tech: ['Netlify'],
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
