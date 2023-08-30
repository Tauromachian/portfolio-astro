<template>
  <base-button v-bind="$attrs">
    <span class="text-2xl font-bold">
      <slot></slot>
    </span>
  </base-button>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
</script>
