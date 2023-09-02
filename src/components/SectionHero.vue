<template>
  <section class="flex flex-col lg:flex-row mb-32 p-3 relative" id="home">
    <div
      class="flex flex-col h-full justify-center hero__text md:mr-5 xl:mr-0 md:basis-1/2 shrink-0"
    >
      <h1 class="text-6xl xl:text-7xl 2xl:text-8xl">
        {{ $t("hero.title") }}
      </h1>
      <p class="mt-10 text-xl">
        <strong>
          {{ $t("hero.description1") }}
        </strong>
      </p>
      <p class="text-xl">
        <strong>
          {{ $t("hero.description2") }}
        </strong>
      </p>
      <div
        class="flex flex-col sm:flex-row lg:flex-col xl:flex-row max-w-sm sm:max-w-none"
      >
        <base-button-call-to-action
          download-link="/cv.pdf"
          class="mt-12 text-center"
          prepend-icon="mdiDownload"
          size="x-large"
        >
          {{ $t("hero.button1") }}
        </base-button-call-to-action>
        <base-button-call-to-action
          class="mt-2 sm:mt-12 lg:mt-2 xl:mt-12 sm:ml-2 lg:ml-0 xl:ml-2"
          is-call-to-action
          outline
          prepend-icon="mdiEmail"
          size="x-large"
          @click="scrollToPosition('social-networks')"
        >
          {{ $t("hero.button2") }}
        </base-button-call-to-action>
      </div>
    </div>
    <z-dog class="mt-10 md:mt-0 md:basis-1/2" :key="zdogKey"></z-dog>

    <SocialIconsBase
      class="absolute invisible xl:visible ml-2 scroll-icon"
      width="60px"
      height="60px"
      icon="arrow-down"
    />
  </section>
</template>

<script setup>
import BaseButtonCallToAction from "./BaseButtonCallToAction.vue";
import SocialIconsBase from "./SocialIconsBase.vue";
import ZDog from "./ZDog.vue";

import { useStore } from "@nanostores/vue";
import { t } from "../stores/langStore";

const $t = useStore(t);
</script>

<script>
export default {
  name: "SectionHero",

  data() {
    return {
      colorIcons: "",
      isHidden: true,

      theme: "default",
      zdogKey: 0,
    };
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.zdogKey++;
    });
  },

  methods: {
    scrollToPosition(postitionId) {
      const elmnt = document.getElementById(postitionId.spli$t("#").pop());
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 1024px) {
  section {
    height: calc(100vh - 64px);
  }
}

.hero__code .code-toolbar {
  height: 100% !important;
}

.scroll-icon {
  animation: up-and-down 1s infinite ease-out;
  bottom: 0.4em;
}

@keyframes up-and-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
