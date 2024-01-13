<template>
  <div
    class="w-full text-left py-4 lg:px-4 rounded flex items-center"
    :class="{
      'bg-primary': message.success,
      'bg-red-700': message.success,
      'text-white': !message.success,
    }"
    role="alert"
  >
    <SocialIconsBase
      class="mx-3"
      :icon="messageComputed.success ? 'mdiCheck' : 'mdiAlert'"
      height="30px"
      width="30px"
    />

    <span> {{ message.text }} </span>
  </div>
</template

<script setup>
import SocialIconsBase from "./SocialIconsBase.vue";

defineProps({
  message: {
    type: Object,
    default: () => ({}),
  },
});
</script>
