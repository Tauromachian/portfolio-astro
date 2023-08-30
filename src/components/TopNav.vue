<template>
  <nav class="flex bg-primary">
    <div class="container flex justify-center text-2xl ml-14 z-50 px-3">
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
        <base-button
          title="Translate"
          class="relative mx-0 transition-colors transition-200 navbar__link"
          icon
          @click="changeLocale($i18n)"
        >
          <SocialIconsBase icon="mdiTranslate" />
        </base-button>
        <base-menu bottom="initial" top="3rem">
          <template #activator="{ on }">
            <base-button
              title="Theme changer"
              class="relative mx-0 transition-colors transition-200 navbar__link"
              icon
              v-on="on"
            >
              <SocialIconsBase icon="mdiInvertColors" />
            </base-button>
          </template>
          <theme-selector :themes="themes" :value="theme" @input="setTheme" />
        </base-menu>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { setTheme } from "../utils/themeHelper";

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
