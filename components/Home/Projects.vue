<template>
  <v-layout column my-5>
    <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}" v-text="title"></h4>
    <!-- <v-carousel cycle hide-delimiter-background eager height="auto">
      <v-carousel-item v-for="(project, projectKey) in projects" :key="projectKey">
        <v-img
          eager
          :src="project.src"
          :alt="project.name"
          :aspect-ratio="$breakpoint.smAndDown ? 1.33333 : 1.777778"
        ></v-img>
      </v-carousel-item>
    </v-carousel>-->
  </v-layout>
</template>
<script>
export default {
  name: 'projects',
  data() {
    return {
      title: 'Projects Made',
      projects: [
        {
          name: 'Something',
          description: 'Lorem ipsum dolor sit amet.',
          src: 'http://placekitten.com/1280/720',
          color: 'grey',
        },
        {
          name: 'Something',
          description: 'Lorem ipsum dolor sit amet.',
          src: 'http://placekitten.com/g/1280/720',
          color: 'grey',
        },
        {
          name: 'Something',
          description: 'Lorem ipsum dolor sit amet.',
          src: 'http://placekitten.com/1920/1080',
          color: 'grey',
        },
        {
          name: 'Something',
          description: 'Lorem ipsum dolor sit amet.',
          src: 'http://placekitten.com/g/1920/1080',
          color: 'grey',
        },
      ],
    }
  },
}
</script>
