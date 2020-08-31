<template>
  <v-layout column justify-center align-center>
    <v-avatar size="140" v-scroll-reveal="{ delay: 120 }">
      <img src="/logo.png" alt="JC Valencia" />
    </v-avatar>

    <h1
      class="text-h1 text-center"
      :class="{ 'text-h3': $breakpoint.smAndDown }"
      v-html="greetings"
      v-scroll-reveal="{ delay: 360 }"
    ></h1>
    <h4
      class="text-h4 text-center"
      :class="{ 'text-h6': $breakpoint.smAndDown }"
      v-text="role"
      v-scroll-reveal="{ delay: 600 }"
    ></h4>
    <div
      class="my-4 d-flex flex-row flex-wrap justify-center"
      style="max-width: 460px;"
      v-scroll-reveal="{ delay: 700 }"
    >
      <v-chip
        color="primary"
        small
        class="ma-1"
        :x-small="$breakpoint.smAndDown"
        v-for="(tech, techKey) in techs"
        :key="techKey"
      >
        <v-icon small :x-small="$breakpoint.smAndDown">mdi-pound</v-icon>
        {{ tech }}
      </v-chip>
    </div>
    <div v-scroll-reveal="{ delay: 840 }">
      <v-chip class="mt-12" :color="status.color">
        <v-icon left class="mr-1">{{ status.icon }}</v-icon>
        {{ status.description }}
      </v-chip>
    </div>
  </v-layout>
</template>
<script>
export default {
  name: 'landing',
  data() {
    const status = {
      EMPLOYED: {
        icon: 'mdi-briefcase',
        description: 'Currently Employed',
        color: '',
      },
      LOOKING: {
        icon: 'mdi-binoculars',
        description: 'Looking for work',
        color: 'primary',
      },
    }

    return {
      greetings: 'Hi! I\'m <span class="primary--text">JC.</span>',
      role: 'Full Stack Developer',
      techs: [
        'Javscript',
        'Typescript',
        'VueJS',
        'Nuxt.js',
        'Vuetify',
        'Angular 6+',
        'React Native',
        'Jest',
        'NestJS',
        'MySQL',
        'PostgreSQL',
      ],
      status: status.EMPLOYED,
    }
  },
}
</script>
