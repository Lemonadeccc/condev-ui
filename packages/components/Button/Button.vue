<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { ref, computed, inject } from "vue";
import { throttle } from "lodash-es";
import { BUTTON_GROUP_CTX_KEY } from "./constants";
import CdIcon from "../Icon/Icon.vue";

defineOptions({
  name: "CdButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>();
const size = computed(() => {
  return ctx?.size ?? props?.size ?? "";
});
const type = computed(() => {
  return ctx?.type ?? props?.type ?? "";
});
const disabled = computed(() => {
  return ctx?.disabled || props?.disabled || false;
});

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  { trailing: false }
);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    :autofocus="autofocus"
    class="cd-button"
    :class="{
      [`cd-button--${type}`]: type,
      [`cd-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    @click="(e:MouseEvent) => useThrottle?handleBtnClickThrottle(e):handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <cd-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <cd-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
