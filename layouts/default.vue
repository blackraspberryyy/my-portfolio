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
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app padless>
      <v-card flat tile class="text-center _grey" width="100%">
        <v-card-text>
          <h5 class="text-h5 mb-4">Get in Touch</h5>
          <v-layout
            justify-center
            align-center
            my-2
            :column="this.$breakpoint.smAndDown"
          >
            <div class="mx-4 contact-deets">
              <v-icon>mdi-phone</v-icon>
              <span class="body-1">{{ mobilePhone }}</span>
            </div>
            <div class="mx-4 contact-deets">
              <v-icon>mdi-email-outline</v-icon>
              <span class="body-1">{{ email }}</span>
            </div>
          </v-layout>
          <v-tooltip v-for="(link, i) in links" :key="i" top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mx-4"
                large
                icon
                target="_blank"
                :href="link.href"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>{{ link.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ link.name }}</span>
          </v-tooltip>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          All Rights Reserved &copy;
          {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      mobilePhone: '+639474263372',
      email: 'carlo.valencia066@gmail.com',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      links: [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/juan-carlo-valencia-a0997418b',
          icon: 'mdi-linkedin',
        },
        {
          name: 'Github',
          href: 'https://github.com/blackraspberryyy',
          icon: 'mdi-github',
        },
        {
          name: 'Stack Overflow',
          href: 'https://stackoverflow.com/users/9183405/blackraspberryyy',
          icon: 'mdi-stack-overflow',
        },
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/blackraspberryyy',
          icon: 'mdi-facebook',
        },
        {
          name: 'Messenger',
          href: 'https://www.messenger.com/t/blackraspberryyy',
          icon: 'mdi-facebook-messenger',
        },
      ],
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
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23888888' fill-opacity='0.06'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.dark-mode-toggle-button {
  position: absolute;
  top: 14px;
  right: 14px;
}
</style>
