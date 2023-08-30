<template>
  <base-section :title="t('projects.title')">
    <div class="sm:columns-2 md:columns-3 gap-4 w-100">
      <div
        v-for="(project, index) in projects"
        :key="`project-card-${index}`"
        class="inline-block"
      >
        <card-project
          class="w-full mb-4"
          :title="project.title"
          :description="project.description"
          :site-url="project.link"
          :src="project.src"
          :alt="project.alt"
        />
      </div>
    </div>
  </base-section>
</template>

<script setup>
import { getLangFromUrl, useTranslations } from "../i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const projects = [
  {
    src: "monarch-starter-site",
    title: "MonarchStarter",
    link: "https://monarchstarter.jose-garcia.net/",
    alt: "Queues app picture",
  },
  {
    src: "johnson-turbine-support-website",
    title: "Johnson Turbine Support",
    link: "https://www.johnsonturbine.com/",
    alt: "Jhonson Turbine company's portfolio site.",
  },
  {
    src: "succubus",
    title: "Succubus",
    link: "https://www.succubus-bdsm.com/",
    alt: "Succubus site",
  },

  {
    src: "zaru",
    title: "Zaru Arquitectura",
    link: "https://zaruarquitectura.onrender.com/",
    alt: "Site of architectural displays.",
  },
  {
    src: "monarch-starter-admin-dashboard",
    title: "Admin dashboard",
    link: "https://monarchstarter.jose-garcia.net/dashboard",
    alt: "Site of all asian culture fanatics",
  },
  {
    src: "flowers-site",
    title: "Flowers",
    link: "https://master--superb-beignet-7b06bd.netlify.app/",
    alt: "Simple template of a possible flower store.",
  },
];
</script>

<style></style>
