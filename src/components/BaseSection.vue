<template>
  <section class="flex flex-col my-32 p-3" :id="id">
    <h2
      v-if="title"
      class="mb-3 text-3xl text-5xl self-start sm:self-center"
      :class="titleAlignment"
    >
      {{ title }}
    </h2>
    <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  titleAlignment: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
});
</script>
