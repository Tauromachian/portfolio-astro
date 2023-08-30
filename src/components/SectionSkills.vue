<template>
  <base-section class="items-center justify-center" :title="t('skills')">
    <div class="flex flex-col">
      <base-card
        v-for="(skill, index) in skills"
        :key="`skill-${index}`"
        class="bg-secondary md:mx-4 mt-4 md:mt-8"
      >
        <card-text class="flex p-0 md:p-3" no-padding>
          <div>
            <SocialIconsBase
              height="100px"
              width="100px"
              class="w-20 md:w-32 color-primary"
              :icon="skill.icon"
            />
          </div>

          <div class="flex flex-col">
            <h3>{{ skill.name }}</h3>
            <p>{{ t(skill.description) }}</p>
            <chip-river :values="skill.technologies" class="mt-2" />
          </div>
        </card-text>
      </base-card>
    </div>
  </base-section>
</template>

<script setup>
import { getLangFromUrl, useTranslations } from "../i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const skills = [
  {
    name: "Frontend",
    icon: "mdiCodeTags",
    description: "frontendDescription",
    technologies: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Vuetify",
      "Javascript",
      "Typescript",
      "Vue.js",
      "Nuxt.js",
      "Antdv",
    ],
  },
  {
    name: "Backend",
    icon: "mdiServer",
    description: "backendDescription",
    technologies: ["Javascript", "PHP", "Node.js", "Express.js", "Laravel"],
  },
  {
    name: "Database",
    icon: "mdiDatabase",
    description: "databaseDescription",
    technologies: ["MariaDB", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Testing",
    icon: "mdiBug",
    description: "testingDescription",
    technologies: ["Mocha", "Chai", "Jest"],
  },
  {
    name: "Languages",
    icon: "mdiTranslate",
    description: "languagesDescription",
    technologies: ["English", "Español"],
  },
];
</script>

<style></style>
