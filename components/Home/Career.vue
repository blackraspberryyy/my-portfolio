<template>
  <v-layout column>
    <h4
      class="text-h4 mb-4"
      :class="{ 'text-h5': $breakpoint.smAndDown }"
      v-text="title"
      style="font-family: 'PT Serif', serif !important"
    ></h4>
    <v-timeline
      class="mb-6"
      :dense="$breakpoint.smAndDown"
      :class="`${!$breakpoint.smAndDown ? 'px-12 mx-12' : ''}`"
    >
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
        <div class="py-2" v-scroll-reveal>
          <v-chip small :color="career.color" class="white--text mb-2">
            {{ career.type }}
            <v-icon right small class="px-1" v-text="career.icon"></v-icon>
          </v-chip>
          <h6 :class="`${$breakpoint.smAndDown ? 'subtitle-1' : 'text-h6'}`" v-text="career.title"></h6>
          <span v-show="$breakpoint.smAndDown" class="text-subtitle-1">({{ career.year }})</span>
          <p class="body-1 mt-2 text-caption" v-text="career.description"></p>
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
      AWARD: {
        type: 'Award',
        color: 'darken-2 amber',
        icon: 'mdi-medal',
      },
    }
    return {
      title: 'Achievements & Career',
      careers: [
        {
          title: 'Won 3rd place on Web Design',
          year: 'November 2014',
          description:
            'Won the 3rd Place on Web Design using Adobe Dreamweaver at CAL Battle of the ICT Wizards 2014 - Regionals.',
          ...careerType.AWARD,
        },
        {
          title: 'Won 2nd place on Web Design',
          year: 'January 2015',
          description:
            'Won 2nd Place on Web Design using Adobe Dreamweaver at CAL Battle of the ICT Wizards - Nationals.',
          ...careerType.AWARD,
        },
        {
          title: 'Highschool Valedictorian',
          year: 'March 2015',
          description:
            'Graduated Highschool as a valedictorian at Sto. Rosario Montessori School Batch 2014-2015, along with other awards.',
          ...careerType.AWARD,
        },
        {
          title: 'Presidential Scholar of FEU Institute of Technology',
          year: 'July 2015',
          description: '100% discount on enrollment fees.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Outstanding Student of A.Y. 2015-2016',
          year: 'June 2016',
          description:
            'Recognized as one of the outstanding student of BS Information Technology.',
          ...careerType.AWARD,
        },
        {
          title: 'Technofest Web Design Competition Champions',
          year: 'March 2017',
          description:
            'Created a site for TechnoWeb Event using plain HTML, CSS, and Javascript.',
          ...careerType.AWARD,
        },
        {
          title: 'Outstanding Student of A.Y. 2016-2017',
          year: 'July 2017',
          description:
            'Recognized as one of the outstanding student of BS Information Technology.',
          ...careerType.AWARD,
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
          title: 'Outstanding Student of A.Y. 2018-2019',
          year: 'July 2019',
          description:
            'Recognized as one of the outstanding student of BS Information Technology.',
          ...careerType.AWARD,
        },
        {
          title: 'Cum Laude of Batch 2018-2019',
          year: 'August 2019',
          description:
            'Graduated with 3.48 CGPA with the course of BS Information Technolology with Specialization in Web and Mobile Application.',
          ...careerType.AWARD,
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
            'Developed Apps using Angular, NestJS, Jest, React Native, and PostgreSQL.',
          ...careerType.WORK,
        },
      ],
    }
  },
}
</script>
