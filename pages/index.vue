<template>
  <div>
    <v-layout column justify-center align-center my-12>
      <v-avatar size="140">
        <img src="/logo.png" alt="JC Valencia" />
      </v-avatar>
      <h1 class="text-h1">Hi! I am <span class="primary--text">JC.</span></h1>
      <h4 class="text-h4">Full Stack Developer</h4>
      <v-btn small class="mt-6">
        <v-icon left>mdi-file-pdf</v-icon>
        Download my Résumé
      </v-btn>
    </v-layout>
    <!-- About Me -->
    <v-layout column my-5>
      <h3 class="text-h3 mb-4">About Me</h3>
      <p>
        Hi. Et qui proident adipisicing ipsum cillum. Eiusmod do est eiusmod
        veniam id cupidatat aute elit. Duis sit dolor proident consectetur
        exercitation eiusmod. Excepteur proident id dolor adipisicing. Ullamco
        sit non aliqua officia Lorem ullamco sunt velit non esse pariatur ex. Eu
        eu fugiat pariatur ex exercitation tempor magna proident amet.
      </p>
    </v-layout>
    <!-- Career and Achievements -->
    <v-layout column my-5>
      <h3 class="text-h3 mb-4">Career</h3>
      <p>
        Hi. Et qui proident adipisicing ipsum cillum. Eiusmod do est eiusmod
        veniam id cupidatat aute elit.
      </p>
      <v-timeline class="mb-6">
        <v-timeline-item
          v-for="(career, careerKey) in career"
          :key="careerKey"
          :color="career.color"
          :icon="career.icon"
          fill-dot
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold`"
              v-text="career.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4`">
              {{ career.title }}
            </h2>
            <div>{{ career.description }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
    <!-- Skills & Tecnologies -->
    <v-layout column my-5>
      <h3 class="text-h3 mb-4">Skills & Technologies</h3>
      <p>
        Hi. Et qui proident adipisicing ipsum cillum. Eiusmod do est eiusmod
        veniam id cupidatat aute elit. Duis sit dolor proident consectetur
        exercitation eiusmod. Excepteur proident id dolor adipisicing. Ullamco
        sit non aliqua officia Lorem ullamco sunt velit non esse pariatur ex. Eu
        eu fugiat pariatur ex exercitation tempor magna proident amet.
      </p>
      <v-row justify="center" align-content="center">
        <v-col
          v-for="(skill, skillKey) in skills"
          :key="skillKey"
          :sm="getSm(skills)"
          class="my-2"
        >
          <v-card class="fill-height">
            <v-card-title
              class="d-flex justify-center align-center flex-column"
            >
              <h5 class="text-h5">{{ skill.name }}</h5>
              <v-rating
                v-model="skill.rating"
                half-increments
                readonly
                large
                half-icon="mdi-star-half-full"
              ></v-rating>
            </v-card-title>
            <v-card-text>
              <h6 class="text-h6">Technologies</h6>
              <ul>
                <li v-for="(tech, i) in skill.tech" :key="i">{{ tech }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    career: [
      {
        title: 'Lorem Ipsum',
        description:
          'Lorem Ipsum dolor sit amet consectatur adepiscing elit. sad asjdkllasjlkdllasl asd',
        color: 'primary',
        icon: 'mdi-heart',
        year: '1960',
      },
      {
        title: 'Lorem Ipsum',
        description:
          'Lorem Ipsum dolor sit amet consectatur adepiscing elit. dsa dsak kjlsa sa as dasd sad as',
        color: 'primary',
        icon: 'mdi-trophy',
        year: '1970',
      },
    ],
    skills: [
      {
        name: 'Frontend Web Development',
        rating: 4.5,
        tech: ['VueJS', 'Nuxt', 'Angular 6+', 'ReactJS'],
      },
      {
        name: 'Backend Web Development',
        rating: 4,
        tech: ['NestJS'],
      },
      {
        name: 'Database Management',
        rating: 4,
        tech: ['MySQL', 'PostgreSQL'],
      },
      {
        name: 'Mobile Development',
        rating: 3.5,
        tech: ['React Native'],
      },
      {
        name: 'Testing',
        rating: 3,
        tech: ['Jest'],
      },
      {
        name: 'Dev Ops',
        rating: 2,
        tech: ['Netlify'],
      },
      {
        name: 'Others',
        rating: 2,
        tech: ['Git'],
      },
    ],
  }),
  methods: {
    getSm(array) {
      const length = (array && array.length) || 0
      if (length > 0 && length < 2) {
        return 12 / length
      } else {
        return 6
      }
    },
  },
}
</script>
