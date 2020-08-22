<template>
  <v-footer :absolute="!fixed" app padless>
    <v-card flat tile class="text-center _grey" width="100%">
      <v-card-text>
        <h5 class="text-h5 mt-4" v-text="contactMe.title"></h5>
        <span class="text-caption mb-4" v-text="contactMe.description"></span>
        <v-layout
          justify-center
          align-center
          :column="$breakpoint.mdAndDown"
          class="mt-8"
        >
          <v-chip class="mx-2">
            <v-icon
              class="mx-1"
              v-text="contactMe.mobilePhone.icon"
              left
            ></v-icon>
            <span
              class="text-caption"
              v-text="contactMe.mobilePhone.description"
            ></span>
          </v-chip>
          <v-chip class="mx-2 mt-2">
            <v-icon class="mx-1" v-text="contactMe.email.icon" left></v-icon>
            <span
              class="text-caption"
              v-text="contactMe.email.description"
            ></span>
          </v-chip>
        </v-layout>
        <v-tooltip v-for="(link, i) in contactMe.links" :key="i" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mt-2"
              :class="`${$breakpoint.mdAndDown ? 'mx-1' : 'mx-4'}`"
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
          <span class="text-caption">{{ link.name }}</span>
        </v-tooltip>
        <div class="text-caption mt-4" v-text="madeWith"></div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text
        class="text-overline"
        :class="{ 'd-flex flex-column': $breakpoint.mdAndDown }"
      >
        <span v-text="copyright"></span>
        <span v-text="author"></span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      fixed: false,
      contactMe: {
        title: 'Contact Me',
        description: "Feel free to connect with me. Let's have a chat.",
        mobilePhone: {
          icon: 'mdi-phone',
          description: '+639474263372',
        },
        email: {
          icon: 'mdi-email',
          description: 'carlo.valencia066@gmail.com',
        },
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
      },
      madeWith: 'Made with Vue, Vuetify, & Nuxt',
      copyright: `Copyright ${new Date().getFullYear()}`,
      author: '@ Juan Carlo Valencia',
    }
  },
}
</script>
