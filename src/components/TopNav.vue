<template>
  <nav class="flex bg-primary">
    <div
      class="container ml-auto mr-auto flex justify-center text-2xl ml-14 z-50 px-3"
    >
      <div class="flex items-center">
        <img
          class="w-16 h-full"
          src="/logo-extra-compressed.png"
          alt="Logo of the portfolio"
        />
        <h4 class="text-3xl ml-5">José García</h4>
      </div>

      <ul class="flex items-center text-xl mx-auto">
        <li
          v-for="link in links"
          :key="link.link + link.text"
          class="px-3 relative mx-0 transition-colors transition-200 navbar__link"
        >
          <a :href="link.link" @click.prevent="scrollToPosition(link.link)">
            {{ $t(link.text) }}
          </a>
        </li>
      </ul>
      <div class="flex items-center">
        <BaseButton
          title="Translate"
          class="relative mx-0 transition-colors transition-200 navbar__link"
          icon
        >
          <SocialIconsBase icon="mdiTranslate" />
        </BaseButton>
        <BaseMenu bottom="initial" top="3rem">
          <template #activator="{ on }">
            <BaseButton
              title="Theme changer"
              class="relative mx-0 transition-colors transition-200 navbar__link"
              icon
              v-on="on"
            >
              <SocialIconsBase icon="mdiInvertColors" />
            </BaseButton>
          </template>
          <theme-selector :themes="themes" :value="theme" @input="saveTheme" />
        </BaseMenu>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { setTheme } from "../utils/themeHelper";
import { scrollToPosition } from "@/utils/scrollToPosition";

import BaseButton from "./BaseButton.vue";
import BaseMenu from "./BaseMenu.vue";
import ThemeSelector from "./ThemeSelector.vue";
import SocialIconsBase from "./SocialIconsBase.vue";

import { useStore } from "@nanostores/vue";
import { t } from "../stores/langStore";

const $t = useStore(t);

defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  themes: {
    type: Array,
    default: () => [],
  },
});
const theme = ref("default");

const saveTheme = (value) => {
  theme.value = value;
  setTheme(value);
};

onMounted(() => {
  const localStorageTheme = localStorage.getItem("theme") ?? "default";
  theme.value = localStorageTheme;
});
</script>

<style scoped>
.navbar__link {
  color: var(--text-color-primary);
}

.navbar__link:hover {
  color: var(--text-color-secondary);
}
</style>
