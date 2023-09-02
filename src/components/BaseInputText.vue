<template>
  <div class="flex flex-col">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      v-bind="attrs"
      v-model="text"
      class="p-1 rounded outline-none mt-0 text"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInputText",
  props: {
    label: {
      type: String,
      default: "input",
    },

    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  computed: {
    attrs() {
      return { ...this.$attrs, class: "" };
    },

    text: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>

<style scoped>
.text {
  color: var(--text-color-gray-900);
  transition: all 0.1s;
  --shadow-color: #9ca3af;
  box-shadow: 6px 6px 0px 1px var(--shadow-color);
}

.text:focus {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 1px var(--shadow-color);
}
</style>
