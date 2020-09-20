<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      disable-resize-watcher
      :clipped="!vbreakpoint.mdAndDown"
      :color="`${!vbreakpoint.mdAndDown ? 'transparent' : ''}`"
    >
      <v-list
        shaped
        v-scroll-spy-active="{ class: 'v-list-item--active' }"
        v-scroll-spy-link="{ selector: '.link' }"
      >
        <v-list-item
          v-for="(link, linkKey) in links"
          :key="linkKey"
          link
          class="link"
          @click="drawer = vbreakpoint.smAndDown ? !drawer : !!drawer"
        >
          <v-list-item-content>
            <v-list-item-title v-text="link.title" class="link-title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      :color="$breakpoint.smAndDown ? '_white' : 'transparent'"
      :dense="$breakpoint.smAndDown"
      :clipped-left="!$breakpoint.smAndDown"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-slide-x-transition>
        <v-toolbar-title
          class="text-subtitle-1"
          :class="{ 'pl-0': $breakpoint.smAndDown }"
          v-text="links[activeSection].title"
          v-show="(!$breakpoint.smAndDown && drawer) || $breakpoint.smAndDown"
        />
      </v-slide-x-transition>
      <v-spacer></v-spacer>
      <div class="mt-4">
        <v-switch v-model="$vuetify.theme.dark" color="primary" inset flat>
          <template slot="prepend">
            <v-icon
              :color="`${!$vuetify.theme.dark ? 'primary' : 'none'}`"
            >mdi-weather-partly-cloudy</v-icon>
          </template>
          <template slot="append">
            <v-icon
              :color="`${$vuetify.theme.dark ? 'primary' : 'none'}`"
              style="margin-left: -16px;"
            >mdi-weather-night</v-icon>
          </template>
        </v-switch>
      </div>
    </v-app-bar>
    <v-fab-transition>
      <v-btn
        v-scroll="fabOnScroll"
        v-show="fab"
        fab
        small
        bottom
        right
        fixed
        color="primary"
        @click="$vuetify.goTo(0)"
      >
        <v-icon>mdi-chevron-double-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
export default {
  name: 'app-header',
  mounted() {
    this.isHydrated = true
  },
  computed: {
    activeSection() {
      return this.$store.getters['app/section']
    },
    vbreakpoint() {
      return this.isHydrated ? this.$vuetify.breakpoint : {} // "empty" $breakpoint object with initial values
    },
  },
  data() {
    return {
      isHydrated: false,
      fab: false,
      activeLink: 1,
      drawer: false,
      links: [
        {
          href: '#landing',
          title: 'Home',
        },
        {
          href: '#aboutMe',
          title: 'About Me',
        },
        {
          href: '#career',
          title: 'Achievements & Career',
        },
        {
          href: '#skills',
          title: 'Skills & Technologies',
        },
        {
          href: '#projects',
          title: 'Accomplished Projects',
        },
        {
          href: '#hobbies',
          title: 'Hobbies',
        },
      ],
    }
  },
  methods: {
    fabOnScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 728
    },
  },
}
</script>
<style lang="scss">
.link {
  &.v-list-item--active {
    .link-title {
      color: #3498da;
      font-weight: bold;
    }
  }
}
</style>
