<template>
  <v-footer
    :absolute="!fixed"
    app
    padless
    class="flex-column flex-end"
    color="transparent"
  >
    <v-spacer />
    <h5 class="text-h5" v-text="contactMe.title"></h5>
    <span
      class="text-caption"
      :class="{ 'mb-4': !$breakpoint.smAndDown }"
      v-text="contactMe.description"
    ></span>
    <div
      class="mt-2 d-flex justify-center align-center"
      :class="{ 'flex-column': $breakpoint.smAndDown }"
    >
      <v-chip class="mx-2 mt-2">
        <v-icon class="mx-1" v-text="contactMe.mobilePhone.icon" left></v-icon>
        <span
          class="text-caption"
          v-text="contactMe.mobilePhone.description"
        ></span>
      </v-chip>
      <v-chip class="mx-2 mt-2">
        <v-icon class="mx-1" v-text="contactMe.email.icon" left></v-icon>
        <span class="text-caption" v-text="contactMe.email.description"></span>
      </v-chip>
    </div>
    <div :class="`${$breakpoint.smAndDown ? 'mt-6' : 'mt-10'}`">
      <v-tooltip
        v-for="(link, i) in contactMe.links"
        :key="i"
        top
        nudge-top="-4px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :class="`${$breakpoint.smAndDown ? 'mx-1' : 'mx-4'}`"
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
    </div>
    <div class="text-caption pb-4 pt-12" v-text="madeWith"></div>
    <v-divider width="100%"></v-divider>
    <div
      class="text-overline py-4"
      :class="{
        'd-flex flex-column align-center justify-center': $breakpoint.smAndDown,
      }"
    >
      <span v-text="copyright"></span>
      <span v-text="author"></span>
    </div>
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
          description: '(+63)-947-426-3372',
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
