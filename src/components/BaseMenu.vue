<template>
  <div class="relative inline-block text-left bg--primary">
    <div>
      <slot name="activator" v-bind="{ on }" />
    </div>

    <div
      id="menu-content"
      class="menu absolute mt-2 rounded-md shadow-lg bg-white"
      role="menu"
      :style="{ top, bottom, left, right }"
      :class="{ show: isDropdownActive }"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseMenu",
  props: {
    text: {
      type: String,
      default: "Options",
    },
    top: {
      type: [String, Number],
      default: "initial",
    },
    bottom: {
      type: [String, Number],
      default: "initial",
    },
    left: {
      type: [String, Number],
      default: "initial",
    },
    right: {
      type: [String, Number],
      default: "initial",
    },
  },
  data() {
    return {
      isDropdownActive: false,
      display: "none",
      on: this.$attrs,
    };
  },
  mounted() {
    this.on = {
      click: this.showDropdown,
    };
    window.addEventListener("click", this.checkTarget);
  },
  unmounted() {
    window.removeEventListener("click", this.checkTarget);
  },
  methods: {
    showDropdown(event) {
      event.stopPropagation();
      this.isDropdownActive = !this.isDropdownActive;
    },
    checkTarget(event) {
      if (!event.target.matches(".menu")) {
        this.hideDropdown();
      }
    },
    hideDropdown() {
      this.isDropdownActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  transition: opacity 0.3s linear;
  visibility: hidden;
  transition: visibility 0s 0.1s, opacity 0.1s linear;
  opacity: 0;
}
.show {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.1s linear;
}
</style>
