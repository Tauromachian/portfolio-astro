<template>
  <list-wrapper>
    <list-item
      v-for="(theme, index) in themes"
      :key="theme.value + index"
      class="text-xl"
      :active="theme.value === selectedTheme"
      @click="setTheme(theme.value)"
    >
      {{ theme.text }}
    </list-item>
  </list-wrapper>
</template>

<script>
import ListWrapper from "./ListWrapper.vue";
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListWrapper,
    ListItem,
  },
  props: {
    value: {
      type: String,
      default: "default",
    },
    themes: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["input", "click"],
  computed: {
    selectedTheme: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    setTheme(themeValue) {
      this.selectedTheme = themeValue;
      this.$emit("click", themeValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
