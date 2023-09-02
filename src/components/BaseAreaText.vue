<template>
  <div class="flex flex-col">
    <label :for="label">{{ label }}</label>
    <textarea
      :id="label"
      v-model="text"
      class="p-1 rounded outline-none text"
      cols="10"
      rows="4"
      v-bind="attrs"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
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
