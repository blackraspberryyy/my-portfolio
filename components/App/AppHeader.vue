<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      disable-resize-watcher
      :class="{ transparent: !$breakpoint.smAndDown }"
      :clipped="!$breakpoint.smAndDown"
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
          @click="drawer = $breakpoint.smAndDown ? !drawer : !!drawer"
        >
          <v-list-item-content>
            <v-list-item-title v-text="link.title"> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      class="transparent"
      :clipped-left="!$breakpoint.smAndDown"
      :hide-on-scroll="$breakpoint.smAndDown"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn class="app-btn" fab small @click="darkMode()">
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>
    </v-app-bar>
    <v-fab-transition>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        class="app-btn"
        fab
        bottom
        right
        fixed
        small
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
  data() {
    return {
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
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 728
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
.transparent {
  background: transparent !important;
}
.app-btn.v-btn--active::before {
  opacity: 0;
}
</style>
