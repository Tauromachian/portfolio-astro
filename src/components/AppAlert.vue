<template>
  <div
    class="w-full text-left py-4 lg:px-4 rounded flex items-center"
    :class="{
      'bg-primary': message.type === 'success',
      'bg-red-700': message.type !== 'success',
      'text-white': message.type !== 'success',
    }"
    role="alert"
  >
    <span class="mr-3">
      <SocialIconsBase v-if="message.type === 'success'" icon="mdiCheck" />
      <SocialIconsBase v-else icon="mdiAlert" />
    </span>

    <span> {message.text} </span>
  </div>
</template>

<script setup>
import SocialIconsBase from "./SocialIconsBase.vue";

defineProps({
  message: {
    type: Object,
    default: () => ({}),
  },
});
</script>
