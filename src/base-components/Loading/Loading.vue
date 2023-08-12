<script setup lang="ts">
import LoadingIcon from "../LoadingIcon";

let props = withDefaults(defineProps<{
  active?: boolean,
  icon?: "audio"
  | "ball-triangle"
  | "bars"
  | "circles"
  | "grid"
  | "hearts"
  | "oval"
  | "puff"
  | "rings"
  | "spinning-circles"
  | "tail-spin"
  | "three-dots",
}>(), {
  active: false,
  icon: "circles"
})
</script>

<template>
  <div class="relative">
    <div v-if="active" style="cursor: progress; background: #1c3faa14" class="
        absolute
        inset-0
        flex
        items-center
        justify-center
        bg-black bg-opacity-10
        z-50
      ">
      <LoadingIcon :icon="icon" class="w-16 h-16" />
    </div>
    <slot></slot>
  </div>
</template>
