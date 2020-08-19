<template>
  <v-app class="app">
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fixed
          fab
          top
          right
          small
          color="_black"
          v-bind="attrs"
          v-on="on"
          @click="darkMode"
        >
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
      </template>
      <span>Toggle Dark Mode</span>
    </v-tooltip>
    <v-main>
      <v-container style="max-width: 1024px;">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      title: 'Vuetify.js',
    }
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
<style scoped>
.app {
  transition: background 250ms ease-in-out;
}
</style>
