<template>
  <div>
    <v-container style="max-width: 1024px;" class="mb-12">
      <v-layout column justify-center align-center my-12>
        <v-avatar size="140">
          <img src="/logo.png" alt="JC Valencia" />
        </v-avatar>

        <h1 class="text-h1 text-center" :class="{ 'text-h3': $breakpoint.smAndDown }">
          Hi! I am
          <span class="primary--text">JC.</span>
        </h1>
        <h4
          class="text-h4 text-center"
          :class="{ 'text-h6': $breakpoint.smAndDown }"
        >Full Stack Developer</h4>
        <v-chip class="mt-8">
          <v-icon left>mdi-briefcase</v-icon>Currently Employed
        </v-chip>
      </v-layout>
      <!-- About Me -->
      <v-layout column my-5>
        <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}">About Me</h4>
        <p>I love to develop apps that can contribute to the world, even in the slightest bit. I enjoy making web and mobile apps, especially when I use languages, frameworks, and technologies that I haven't used yet.</p>
        <v-row no-gutters class="px-5" :class="{'px-0': $breakpoint.smAndDown}">
          <v-col cols="12" sm="4">
            <h6 class="text-h6">Personal Info</h6>
            <v-list class="bg-transparent">
              <v-list-item v-for="(info, infoKey) in infos" :key="infoKey">
                <v-list-item-content class="py-2">
                  <v-list-item-title v-text="info.title" class="mb-2 no-wrap"></v-list-item-title>
                  <v-list-item-subtitle v-text="info.description" class="no-wrap"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="4">
            <h6 class="text-h6">Work Options</h6>
            <v-list class="bg-transparent">
              <v-list-item v-for="(workOption, workOptionKey) in workOptions" :key="workOptionKey">
                <v-list-item-content class="py-2">
                  <v-list-item-title v-text="workOption.title" class="mb-2 no-wrap"></v-list-item-title>
                  <v-list-item-subtitle v-text="workOption.description" class="no-wrap"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="4">
            <h6 class="text-h6">Education</h6>
            <v-list class="bg-transparent">
              <v-list-item v-for="(education, educationKey) in educations" :key="educationKey">
                <v-list-item-content>
                  <v-list-item-title class="no-wrap">{{`${education.school} (${education.year})`}}</v-list-item-title>
                  <v-list-item-subtitle v-text="education.title" class="mb-3 no-wrap"></v-list-item-subtitle>
                  <v-list-item-subtitle v-text="education.description" class="no-wrap"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-layout>
      <!-- Career and Achievements -->
      <v-layout column my-5>
        <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}">Achievements & Career</h4>
        <p>Here are my Achievements and Career timeline so far:</p>
        <v-timeline class="mb-6" :dense="$breakpoint.smAndDown">
          <v-timeline-item
            v-for="(career, careerKey) in careers"
            :key="careerKey"
            :color="career.color"
            :icon="career.icon"
            fill-dot
          >
            <template v-slot:opposite>
              <span :class="`headline font-weight-bold ${career.color}--text`" v-text="career.year"></span>
            </template>
            <div class="py-2">
              <v-chip small :color="career.color" class="white--text">
                {{
                career.type
                }}
                <v-icon right small class="px-1">{{ career.icon }}</v-icon>
              </v-chip>
              <h5 class="text-h5" :class="{ 'text-h6': $breakpoint.smAndDown }">{{ career.title }}</h5>
              <span v-if="$breakpoint.smAndDown" class="text-subtitle-1">({{ career.year }})</span>
              <p class="body-1 mt-2">{{ career.description }}</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-layout>
      <!-- Skills & Technologies -->
      <v-layout column my-5>
        <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}">Skills & Technologies</h4>
        <div>
          <blockquote class="blockquote">
            <span class="font-italic">
              "... What I do have are a very particular set of skills, skills I
              have acquired over a very long career, skills that make me a
              developer."
            </span>
            <span class="text-left">&mdash; Liam Neeson</span>
          </blockquote>
        </div>
        <v-row justify="center" align-content="center">
          <v-col
            v-for="(skill, skillKey) in skills"
            :key="skillKey"
            :sm="getSm(skills, 3, 4)"
            cols="12"
            class="ma-0"
          >
            <v-card class="fill-height">
              <v-card-title class="d-flex flex-column justify-center align-center">
                <v-img
                  class="flex-1 my-2"
                  :src="skill.img"
                  :alt="skill.name"
                  max-height="120px"
                  contain
                ></v-img>
                <h6 class="text-h6">{{ skill.name }}</h6>
                <v-rating
                  v-model="skill.rating"
                  half-increments
                  readonly
                  large
                  half-icon="mdi-star-half-full"
                ></v-rating>
              </v-card-title>
              <v-card-text>
                <h6 class="text-h6">Has experience with:</h6>
                <ul>
                  <li v-for="(tech, i) in skill.tech" :key="i">{{ tech }}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
      <!-- Projects Made -->
      <v-layout column my-5>
        <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}">Projects Made</h4>
        <p>I love to develop apps that can contribute to the world, even in the slightest bit. I enjoy making web and mobile apps, especially when I use languages, frameworks, and technologies that I haven't used yet.</p>
      </v-layout>
      <!-- Hobbies / Recreational Activities -->
      <v-layout column my-5>
        <h4
          class="text-h4 mb-4"
          :class="{'text-h5': $breakpoint.smAndDown}"
        >Hobbies / Recreational Activities</h4>
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
                <div class="overline">{{ hobby.category }}</div>
                <h1 class="headline mb-1">{{ hobby.title }}</h1>
              </v-card-title>
              <v-card-text style="line-height: 1.4em;">
                {{
                hobby.description
                }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    const careerType = {
      ACHIEVEMENT: {
        type: 'Achievement',
        color: 'primary',
        icon: 'mdi-trophy',
      },
      WORK: {
        type: 'Work Experience',
        color: 'green',
        icon: 'mdi-briefcase',
      },
    }
    return {
      infos: [
        { title: 'Full Name', description: 'Juan Carlo De Regla Valencia' },
        { title: 'Address', description: 'Valenzuela, Philippines 🇵🇭' },
        { title: 'Email Address', description: 'carlo.valencia066@gmail.com' },
        { title: 'Phone Number', description: '+639474263372' },
      ],
      workOptions: [
        {
          title: 'Willing to work Remotely?',
          description: 'Yes, most definitely.',
          bool: true,
        },
        {
          title: 'Willing to work Night Shifts?',
          description: 'No',
          bool: false,
        },
        {
          title: 'Willing to work Overseas?',
          description: 'It depends.',
          bool: true,
        },
      ],
      educations: [
        {
          title: 'Primary Education',
          school: 'Sto. Rosario Montessori School',
          description: 'Batch 2010-2011. Graduated as 4th honorable mention.',
          year: '2004 - 2011',
        },
        {
          title: 'Secondary Education',
          school: 'Sto. Rosario Montessori School',
          description: 'Batch 2014-2015. Graduated as Valedictorian.',
          year: '2011 - 2015',
        },
        {
          title: 'Tertiary Education',
          school: 'FEU Institute of Technology',
          description:
            'Batch 2018-2019. Took the course of BS Information Technology with specialization in Web and Mobile Application. Graduated as Cum Laude.',
          year: '2015 - 2019',
        },
      ],
      careers: [
        {
          title: 'Regional CAL Battle of the ICT Wizards Winner',
          year: 'November 2014',
          description:
            '3rd Place Finisher on Web Design using Adobe Dreamweaver.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'National CAL Battle of the ICT Wizards Winner',
          year: 'January 2015',
          description:
            '2nd Place Finisher on Web Design using Adobe Dreamweaver.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Highschool Valedictorian',
          year: 'March 2015',
          description:
            'Graduated Highschool at Sto. Rosario Montessori School Batch 2014-2015, along with other achievements.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Presidential Scholar of FEU Institute of Technology',
          year: 'July 2015',
          description: '100% discount on enrollment fees.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Technofest Web Design Competition: Technoweb Champions',
          year: 'March 2017',
          description:
            'Created a site for TechnoWeb Event using plain HTML, CSS, and Javascript.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Candidate for Technofest Best Capstone Projects 2018',
          year: 'April 2018',
          description:
            'Created "PetEx: Web Based Pet Adoption System with NFC Mobile Locator" using CodeIgniter, Bootstrap, MySQL, and Android, and was nominated as Technofest Best Capstone Projects 2018.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Certified Microsoft Technology Associate',
          year: 'July 2018',
          description:
            'Recognized as certified Microsoft Technology Associate for Introduction to Programming using HTML and CSS',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: "Participated on Unionbank's U-Hackademia Hackathon",
          year: 'October 2018',
          description:
            'Created "LazyPush", an app that pushes user to do their todos with the concept of monetization using blockchain, and is made by Laravel, Android, MySQL, and VueJS.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Cum Laude of Batch 2018-2019',
          year: 'August 2019',
          description:
            'Graduated with 3.48 CGPA with the course of BS Information Technolology with Specialization in Web and Mobile Application.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Intern @ FEU Institute of Technology',
          year: 'August 2018 - April 2019',
          description:
            'Created Syllabus Generator for FEU Faculty members using VueJS, Laravel, and MySQL.',
          ...careerType.WORK,
        },
        {
          title: 'Full Stack Developer @ ISBX Phils. Inc.',
          year: 'September 2019 - Present',
          description:
            'Developed Apps using Angular, NestJS, React Native, and PostgreSQL.',
          ...careerType.WORK,
        },
      ],
      skills: [
        {
          name: 'Frontend Web Development',
          img: '/frontend.svg',
          rating: 4.5,
          tech: ['VueJS', 'Nuxt', 'Angular 6+', 'ReactJS'],
        },

        {
          name: 'Backend Web Development',
          img: '/backend.svg',
          rating: 4,
          tech: ['NestJS'],
        },
        {
          name: 'Database Management',
          img: '/database.svg',
          rating: 4,
          tech: ['MySQL', 'PostgreSQL'],
        },
        {
          name: 'Version Control',
          img: '/versionControl.svg',
          rating: 4,
          tech: ['Git', 'GitFlow'],
        },
        {
          name: 'Mobile Development',
          img: '/mobileDev.svg',
          rating: 3.5,
          tech: ['React Native'],
        },
        {
          name: 'Testing',
          img: '/testing.svg',
          rating: 3,
          tech: ['Jest'],
        },
        {
          name: 'Dev Ops',
          img: '/devOps.svg',
          rating: 2,
          tech: ['Netlify'],
        },
      ],
      hobbies: [
        {
          title: 'Dungeons & Dragons',
          img: '',
          description:
            "I just discovered this lately and I loved it! It's a game where you can do whatever you want, and you can also weave your own story! You can be a Warrior who lusts battle and blood. You can be a Bard that uses music to defeat its foes. Or a Rogue that can stealthily assassinate some villain. I am currently playing my character as a Drow Elf Rogue, if you're curious.",
          category: 'Board Game',
        },
        {
          title: 'Guitar / Ukelele / Little bit of Piano',
          img: '',
          description:
            "I just use these instruments when I feel like I wanted to sing, wanted to play a song, or just wanted to pass time. I'm not very good at it though. I am not pushing myself yet to learn Music Theory and stuff, but maybe someday I will...",
          category: 'Music',
        },
        {
          title: 'Games',
          img: '',
          description:
            'PC, Mobile, and Nintendo Switch Games is the hobby where I spend my time the most. Its addictive, interactive, and requires your full attention. Each game has its own thing and you can always learn from them. ',
          category: 'Gaming',
        },
        {
          title: 'Watching Movies / TV Series',
          img: '',
          description:
            'I seldom watch movies/tv series because I usually fall asleep. But my favorite ones are The Office, Game of Thrones, Lord of the Rings, Harry Potter, Sherlock Holmes, Marvel Movies, etc. just to name a few.',
          category: 'Movies',
        },
        {
          title: 'Learing French',
          img: '',
          description:
            'I recently tried learning French, using Duolingo App, because my curiousity has been touched by this language. I\'m only a beginner so I know some words and short sentences like: "Bonjour!", "Je prend mon cafè", and "Je mange des enfants pour les petit déjeuner". Just kidding. Don\'t Google Translate please.',
          category: 'Learning',
        },
        {
          title: 'Basketball',
          img: '',
          description:
            "I loved Basketball as long as I can remember. I think I'm already shooting hoops since I was 8 years old. I actually became a varsity player during elementary and highschool, I never did well though. Today, I can't really find the chance to play hoops because: priorities, and besides, I have few friends to play with and they are not available most of the time.",
          category: 'Sports',
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
<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';
p {
  font-size: 1.2rem;
}

// scss-lint:disable ImportantRule
.bg-transparent {
  background: none !important;
}

.no-wrap {
  text-overflow: unset !important;
  white-space: unset !important;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  p {
    font-size: 1rem;
  }
}
// scss-lint:enable ImportantRule
</style>
