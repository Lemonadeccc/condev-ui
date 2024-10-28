<script setup lang="ts">
import type { ButtonProps } from "./types";
import { ref } from "vue";

defineOptions({
  name: "CdButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});

const slot = defineSlots();

const _ref = ref<HTMLButtonElement>();
</script>

<template>
  <component
    :is="props.tag"
    class="cd-button"
    :class="[
      `cd-button--${type}`,
      `cd-button--${size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
  >
    <slot />
  </component>
</template>
