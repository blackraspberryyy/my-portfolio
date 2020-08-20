<template>
  <v-layout column my-5>
    <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}" v-text="title"></h4>
    <p v-text="aboutMe"></p>
    <v-row class="px-5" :class="{'px-0': $breakpoint.smAndDown}">
      <v-col cols="12" sm="3">
        <h6 class="text-h6" v-text="infos.name"></h6>
        <v-list class="bg-transparent">
          <v-list-item v-for="(info, infoKey) in infos.items" :key="infoKey">
            <v-list-item-content class="py-2">
              <v-list-item-title v-text="info.title" class="mb-2 no-wrap"></v-list-item-title>
              <v-list-item-subtitle v-text="info.description" class="no-wrap"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="3">
        <h6 class="text-h6" v-text="workOptions.name"></h6>
        <v-list class="bg-transparent">
          <v-list-item
            v-for="(workOption, workOptionKey) in workOptions.items"
            :key="workOptionKey"
          >
            <v-list-item-content class="py-2">
              <v-list-item-title v-text="workOption.title" class="mb-2 no-wrap"></v-list-item-title>
              <v-list-item-subtitle v-text="workOption.description" class="no-wrap"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="6">
        <h6 class="text-h6" v-text="educations.name"></h6>
        <v-list class="bg-transparent">
          <v-list-item v-for="(education, educationKey) in educations.items" :key="educationKey">
            <v-list-item-avatar size="64">
              <v-img :src="education.img" :alt="education.school" eager></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="no-wrap" v-text="education.school"></v-list-item-title>
              <v-list-item-subtitle>({{ education.year }})</v-list-item-subtitle>
              <v-list-item-subtitle v-text="education.title" class="mb-3 no-wrap"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="education.description" class="no-wrap"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  name: 'about-me',
  data() {
    return {
      title: 'About Me',
      aboutMe:
        "I love to develop apps that can contribute to the world, even in the slightest bit. I enjoy making web and mobile apps, especially when I use languages, frameworks, and technologies that I haven't used yet.",
      infos: {
        name: 'Personal Information',
        items: [
          { title: 'Full Name', description: 'Juan Carlo De Regla Valencia' },
          { title: 'Address', description: 'Valenzuela, Philippines 🇵🇭' },
          {
            title: 'Email Address',
            description: 'carlo.valencia066@gmail.com',
          },
          { title: 'Phone Number', description: '+639474263372' },
        ],
      },
      workOptions: {
        name: 'Work Options',
        items: [
          {
            title: 'Willing to work Remotely?',
            description: 'Yes, most definitely.',
            bool: true,
          },
          {
            title: 'Willing to work Night Shifts?',
            description: 'No.',
            bool: false,
          },
          {
            title: 'Willing to work Overseas?',
            description: 'It depends.',
            bool: true,
          },
        ],
      },
      educations: {
        name: 'Education',
        items: [
          {
            title: 'Primary Education',
            school: 'Sto. Rosario Montessori School',
            description: 'Batch 2010-2011. Graduated as 4th honorable mention.',
            year: '2004 - 2011',
            img: '/srm.png',
          },
          {
            title: 'Secondary Education',
            school: 'Sto. Rosario Montessori School',
            description: 'Batch 2014-2015. Graduated as Valedictorian.',
            year: '2011 - 2015',
            img: '/srm.png',
          },
          {
            title: 'Tertiary Education',
            school: 'FEU Institute of Technology',
            description:
              'Took the course of BS Information Technology with specialization in Web and Mobile Application. Batch 2018-2019. Graduated as Cum Laude.',
            year: '2015 - 2019',
            img: '/feu.png',
          },
        ],
      },
    }
  },
}
</script>
