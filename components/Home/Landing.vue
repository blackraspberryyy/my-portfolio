<template>
  <v-layout column justify-center align-center>
    <v-avatar size="140" v-scroll-reveal="{ delay: 120 }">
      <img src="/logo.png" alt="JC Valencia" />
    </v-avatar>

    <h1
      class="text-h1 text-center"
      :class="{ 'text-h3': $breakpoint.mdAndDown }"
      v-html="greetings"
      v-scroll-reveal="{ delay: 360 }"
    ></h1>
    <h4
      class="text-h4 text-center"
      :class="{ 'text-h6': $breakpoint.mdAndDown }"
      v-text="role"
      v-scroll-reveal="{ delay: 600 }"
    ></h4>
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
      greetings: 'Hi! I am <span class="primary--text">JC.</span>',
      role: 'Full Stack Developer',
      status: status.EMPLOYED,
    }
  },
}
</script>
