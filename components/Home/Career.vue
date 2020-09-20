<template>
  <v-layout column>
    <h4
      class="text-h4 mb-4"
      :class="{ 'text-h5': $breakpoint.smAndDown }"
      v-text="title"
      style="font-family: 'PT Serif', serif !important;"
    ></h4>
    <v-timeline
      class="mb-6 mx-auto"
      :dense="$breakpoint.smAndDown || true"
      style="max-width: 780px;"
      align-top
    >
      <v-timeline-item
        v-for="(career, careerKey) in sortedCareers"
        :key="careerKey"
        :color="career.color"
        :icon="career.icon"
        fill-dot
        v-scroll-reveal
      >
        <h6
          :class="`${$breakpoint.smAndDown ? 'text-subtitle-1' : 'text-h6'} ${
            career.color
          }--text`"
          v-text="career.title"
        />
        <span class="mb-0" :class="`text-subtitle-2`">
          {{ career.year }} <span class="mx-1">•</span>
          <span :class="`${career.color}--text text--darken-2`">
            {{ career.type }}
          </span>
        </span>

        <p class="body-1 mt-2 text-caption" v-text="career.description"></p>
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
      sort: '',
      careers: [
        {
          title: 'Won 3rd place on Web Design',
          year: new Date('November 2014'),
          description:
            'Won the 3rd Place on Web Design using Adobe Dreamweaver at CAL Battle of the ICT Wizards 2014 - Regionals.',
          ...careerType.AWARD,
        },
        {
          title: 'Won 2nd place on Web Design',
          year: new Date('January 2015'),
          description:
            'Won 2nd Place on Web Design using Adobe Dreamweaver at CAL Battle of the ICT Wizards - Nationals.',
          ...careerType.AWARD,
        },
        {
          title: 'Highschool Valedictorian',
          year: new Date('March 2015'),
          description:
            'Graduated Highschool as a valedictorian at Sto. Rosario Montessori School Batch 2014-2015, along with other awards.',
          ...careerType.AWARD,
        },
        {
          title: 'Presidential Scholar of FEU Institute of Technology',
          year: new Date('July 2015'),
          description: '100% discount on enrollment fees.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: 'Outstanding Student of A.Y. 2015-2016',
          year: new Date('June 2016'),
          description:
            'Recognized as one of the outstanding student of BS Information Technology.',
          ...careerType.AWARD,
        },
        {
          title: 'Technofest Web Design Competition Champions',
          year: new Date('March 2017'),
          description:
            'Created a site for TechnoWeb Event using plain HTML, CSS, and Javascript.',
          ...careerType.AWARD,
        },
        {
          title: 'Outstanding Student of A.Y. 2016-2017',
          year: new Date('July 2017'),
          description:
            'Recognized as one of the outstanding student of BS Information Technology.',
          ...careerType.AWARD,
        },
        {
          title: 'Candidate for Technofest Best Capstone Projects 2018',
          year: new Date('April 2018'),
          description:
            'Created "PetEx: Web Based Pet Adoption System with NFC Mobile Locator" using CodeIgniter, Bootstrap, MySQL, and Android, and was nominated as Technofest Best Capstone Projects 2018.',
          ...careerType.PARTICIPATED,
        },
        {
          title: 'Certified Microsoft Technology Associate',
          year: new Date('July 2018'),
          description:
            'Recognized as certified Microsoft Technology Associate for Introduction to Programming using HTML and CSS.',
          ...careerType.ACHIEVEMENT,
        },
        {
          title: "Participated on Unionbank's U-Hackademia Hackathon",
          year: new Date('October 2018'),
          description:
            'Created "LazyPush", an app that pushes user to do their todos with the concept of monetization using blockchain, and is made by Laravel, Android, MySQL, and VueJS.',
          ...careerType.PARTICIPATED,
        },
        {
          title: 'Outstanding Student of A.Y. 2018-2019',
          year: new Date('July 2019'),
          description:
            'Recognized as one of the outstanding student of BS Information Technology.',
          ...careerType.AWARD,
        },
        {
          title: 'Cum Laude of Batch 2018-2019',
          year: new Date('August 2019'),
          description:
            'Graduated with 3.48 CGPA with the course of BS Information Technolology with Specialization in Web and Mobile Application.',
          ...careerType.AWARD,
        },
        {
          title: 'Intern @ FEU Institute of Technology',
          year: new Date('August 2018'),
          endYear: new Date('April 2019'),
          description:
            'Created Syllabus Generator for FEU Faculty members using VueJS, Laravel, and MySQL.',
          ...careerType.WORK,
        },
        {
          title: 'Full Stack Developer @ ISBX Phils. Inc.',
          year: new Date('September 2019'),
          endYear: new Date(),
          description:
            'Developed Apps using Angular, NestJS, Jest, React Native, and PostgreSQL.',
          ...careerType.WORK,
        },
      ],
    }
  },
  computed: {
    sortedCareers() {
      const x = this.careers.map((career) => {
        career.year = career.year.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        })

        if (career.endYear) {
          const today = new Date()
          career.year =
            career.year +
            ' - ' +
            (career.endYear.getMonth() === today.getMonth() &&
            career.endYear.getFullYear() === today.getFullYear()
              ? 'Present'
              : career.endYear.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                }))
        }

        return career
      })
      return x
    },
  },
}
</script>
