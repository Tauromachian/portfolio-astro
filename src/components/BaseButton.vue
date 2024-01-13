<template>
  <component
    :is="downloadLink ? 'a' : 'button'"
    :href="downloadLink"
    type="button"
    role="button"
    class="transition rounded-lg bg-primary outline-none hover:bg-green-300 px-5 inline-grid items-center relative button"
    :class="{ ...buttonClasses, ...outlineClasses, ...sizeClasses }"
    v-bind="$attrs"
    :download="!!downloadLink"
  >
    <span
      v-if="loadingComputed"
      class="flex justify-center rounded-lg items-center absolute top-0 bottom-0 right-0 left-0 w-full h-full base-button__loading-content"
    >
      <AppLoader></AppLoader>
      <span v-if="loadingText" class="ml-2">{{ loadingText }}</span>
      <span v-else class="ml-2">Loading...</span>
    </span>

    <SocialIconsBase
      v-if="prependIcon"
      class="mr-2 base-button__prepend"
      height="30px"
      width="30px"
      :icon="prependIcon"
      :class="prependIcon"
    />

    <span class="base-button__content">
      <slot> </slot>
    </span>
  </component>
</template>

<script setup>
import { computed } from "vue";

import AppLoader from "./AppLoader.vue";
import SocialIconsBase from "./SocialIconsBase.vue";

import { useStore } from "@nanostores/vue";
import { loading } from "@/stores/formStore.js";

const storeLoading = useStore(loading);

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  isActivable: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "",
  },

  outline: {
    type: Boolean,
    default: false,
  },
  downloadLink: {
    type: String,
    default: "",
  },
  prependIcon: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "regular",
    validator(value) {
      if (value === "") return true;
      return ["regular", "x-large"].includes(value);
    },
  },
});

const loadingComputed = computed(() => {
  return storeLoading.value || props.loading;
});

const buttonClasses = computed(() => {
  const classes = {};
  if (props.icon) {
    classes.padding = 0;
    classes["icon-button"] = true;
  }

  if (props.outline) {
    classes.outline = true;
  }

  return classes;
});
const sizeClasses = computed(() => {
  if (props.size === "x-large") return { "h-16": true, "px-7": true };

  return { "h-9": true, "px-4": true };
});
const outlineClasses = computed(() => {
  if (props.outline) {
    return {
      outline: true,
    };
  }
  return {};
});
</script>

<style scoped>
.icon-button {
  background-color: transparent !important;
  border-radius: 50%;
  height: 2.3em;
  width: 2.3em;
  padding: 0.5em;
  margin: 0.2em;
}

.button {
  grid-template-areas: "prepend content";
  grid-template-columns: max-content auto;
}

.base-button__prepend {
  grid-area: prepend;
}
.base-button__content {
  grid-area: content;
}
.button:hover {
  background-color: var(--color-secondary) !important;
}

.border-top-primary {
  border-top-color: var(--color-primary) !important;
}

.outline {
  border: 1px solid;
  background-color: transparent !important;
}

.base-button__loading-content {
  background-color: var(--color-primary) !important;
}
</style>
