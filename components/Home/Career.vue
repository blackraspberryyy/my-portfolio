<template>
  <v-layout column my-5>
    <h4 class="text-h4 mb-4" :class="{'text-h5': $breakpoint.smAndDown}" v-text="title"></h4>
    <v-timeline class="mb-6" :dense="$breakpoint.smAndDown">
      <v-timeline-item
        v-for="(career, careerKey) in careers"
        :key="careerKey"
        :color="career.color"
        :icon="career.icon"
        fill-dot
      >
        <template v-slot:opposite>
          <span :class="`font-weight-bold ${career.color}--text`" v-text="career.year"></span>
        </template>
        <div class="py-2">
          <v-chip small :color="career.color" class="white--text mb-2">
            {{ career.type }}
            <v-icon right small class="px-1" v-text="career.icon"></v-icon>
          </v-chip>
          <h5 class="text-h6" v-text="career.title"></h5>
          <span v-if="$breakpoint.smAndDown" class="text-subtitle-1">({{ career.year }})</span>
          <p class="body-1 mt-2" v-text="career.description"></p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-layout>
</template>
<script>
export default {
  name: 'career',
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
      PARTICIPATED: {
        type: 'Participation',
        color: 'purple',
        icon: 'mdi-human-handsup',
      },
    }
    return {
      title: 'Achievements & Career',
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
          ...careerType.PARTICIPATED,
        },
        {
          title: 'Certified Microsoft Technology Associate',
          year: 'July 2018',
          description:
            'Recognized as certified Microsoft Technology Associate for Introduction to Programming using HTML and CSS.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: "Participated on Unionbank's U-Hackademia Hackathon",
          year: 'October 2018',
          description:
            'Created "LazyPush", an app that pushes user to do their todos with the concept of monetization using blockchain, and is made by Laravel, Android, MySQL, and VueJS.',
          ...careerType.PARTICIPATED,
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
    }
  },
}
</script>
