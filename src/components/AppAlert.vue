<template>
  <div
    class="w-full text-left py-4 lg:px-4 rounded flex items-center"
    :class="{
      'bg-primary': messageComputed.success,
      'bg-red-700': messageComputed.success,
      'text-white': !messageComputed.success,
    }"
    role="alert"
  >
    <SocialIconsBase
      class="mx-3"
      :icon="messageComputed.success ? 'mdiCheck' : 'mdiAlert'"
      height="30px"
      width="30px"
    />

    <span> {{ messageComputed.text }} </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

import SocialIconsBase from "./SocialIconsBase.vue";

import { useStore } from "@nanostores/vue";
import { message } from "@/stores/formStore.js";

const storeMessage = useStore(message);

const props = defineProps({
  message: {
    type: Object,
    default: null,
  },
});

const messageComputed = computed(() => {
  return props.message || storeMessage.value;
});
</script>
