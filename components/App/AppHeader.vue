<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fixed fab top right small color="_black" v-bind="attrs" v-on="on" @click="darkMode">
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>
    </template>
    <span>Toggle Dark Mode</span>
  </v-tooltip>
</template>
<script>
export default {
  name: 'app-header',
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
<style lang="scss" scoped>
.dark-mode-toggle-button {
  position: absolute;
  top: 14px;
  right: 14px;
}
</style>
