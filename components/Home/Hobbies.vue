<template>
  <v-layout column>
    <h4 class="text-h4 mb-4" :class="{ 'text-h5': $breakpoint.smAndDown }" v-text="title"></h4>
    <v-row>
      <v-col
        v-for="(hobby, hobbyKey) in hobbies"
        :key="hobbyKey"
        :sm="getSm(hobbies, 3, 4)"
        cols="12"
        class="ma-0"
      >
        <v-card outlined shaped width="100%" class="fill-height">
          <v-card-title class="d-flex flex-column justify-start align-start">
            <div class="overline" v-text="hobby.category"></div>
            <h5
              class="text-h5 mb-1"
              :class="{ 'text-h6': $breakpoint.smAndDown }"
              v-text="hobby.title"
            ></h5>
          </v-card-title>
          <v-card-text style="line-height: 1.4em;" v-html="hobby.description"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  name: 'hobbies',
  data() {
    return {
      title: 'Hobbies / Recreational Activities',
      hobbies: [
        {
          title: 'Dungeons & Dragons',
          img: '',
          description:
            "I just discovered this lately and I loved it! It's a game where you can do whatever you want, and you can also weave your own story! You can be a Warrior who lusts battle and blood. You can be a Bard that uses music to defeat its foes. Or a Rogue that can stealthily assassinate some villain. I am currently playing my character as a Drow Elf Rogue, if you're curious.",
          category: '🎲 Board Game',
        },
        {
          title: 'Guitar / Ukelele / Piano',
          img: '',
          description:
            "I just use these instruments when I feel like I wanted to sing, wanted to play a song, or just wanted to pass time. I'm not very good at it though. I am not pushing myself to learn Music Theory and stuff yet, but maybe someday...",
          category: '🎸 Music',
        },
        {
          title: 'Games',
          img: '',
          description:
            "PC, Mobile, and Nintendo Switch Games is the hobby where I spend my time the most. It's addictive, interactive, and requires your full attention. Each game has its own thing and you can always learn from them. ",
          category: '🎮 Gaming',
        },
        {
          title: 'Movies & TV Series',
          img: '',
          description:
            'I seldom watch movies/tv series because I usually fall asleep. But my favorite ones are The Office, Game of Thrones, Lord of the Rings, Harry Potter, Sherlock Holmes, Marvel Movies, etc. just to name a few.',
          category: '🍿 Movies',
        },
        {
          title: 'Learning French',
          img: '',
          description:
            'I recently tried learning French, using Duolingo App, because my curiousity has been touched by this language. I\'m only a beginner so I only know some words and short sentences like: <i>"Bonjour!"</i>, <i>"Je prend mon cafè"</i>, and <i>"Je mange des enfants pour les petit déjeuners"</i>. Just kidding. Don\'t Google Translate it please.',
          category: '🥖 Learning',
        },
        {
          title: 'Basketball',
          img: '',
          description:
            "I loved Basketball as long as I can remember. I think I'm already shooting hoops since I was 8 years old. I actually became a varsity player during elementary and highschool, I never did well though. Today, I can't really find the chance to play hoops because: priorities, and besides, I have few friends to play with and they are not available most of the time.",
          category: '🏀 Sports',
        },
      ],
    }
  },
  methods: {
    getSm(array, max, defaultSm) {
      if (!defaultSm) {
        defaultSm = 12
      }
      const length = (array && array.length) || 0
      if (length > 0 && length < max) {
        return 12 / length
      } else {
        return defaultSm
      }
    },
  },
}
</script>
