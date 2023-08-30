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
      v-if="loading"
      class="flex justify-center rounded-lg items-center absolute top-0 bottom-0 right-0 left-0 w-full h-full base-button__loading-content"
    >
      <app-loader></app-loader>
      <span v-if="loadingText" class="ml-2">{{ loadingText }}</span>
      <span v-else class="ml-2">Loading...</span>
    </span>

    <social-icons-base
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

<script>
export default {
  name: "BaseButton",
  props: {
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
  },
  computed: {
    buttonClasses() {
      const classes = {};
      if (this.icon) {
        classes.padding = 0;
        classes["icon-button"] = true;
      }

      if (this.outline) {
        classes.outline = true;
      }

      return classes;
    },
    sizeClasses() {
      if (this.size === "x-large") return { "h-16": true, "px-7": true };

      return { "h-9": true, "px-4": true };
    },
    outlineClasses() {
      if (this.outline) {
        return {
          outline: true,
        };
      }
      return {};
    },
  },
};
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
