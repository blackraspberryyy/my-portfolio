<template>
  <v-layout column justify-center align-center>
    <v-avatar size="140">
      <img src="/logo.png" alt="JC Valencia" />
    </v-avatar>

    <h1
      class="text-h1 text-center"
      :class="{ 'text-h3': $breakpoint.smAndDown }"
      v-html="greetings"
    ></h1>
    <h4
      class="text-h4 text-center"
      :class="{ 'text-h6': $breakpoint.smAndDown }"
      v-text="role"
    ></h4>
    <v-chip class="mt-12" :color="status.color">
      <v-icon left class="mr-1">{{ status.icon }}</v-icon>
      {{ status.description }}
    </v-chip>
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
