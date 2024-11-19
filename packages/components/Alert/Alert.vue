<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from "./types";
import { typeIconMap } from "@condev-element/utils";
import { ref, computed } from "vue";

import CdIcon from "../Icon/Icon.vue";

defineOptions({
  name: "CdAlert",
});

const props = withDefaults(defineProps<AlertProps>(), {
  effect: "light",
  type: "info",
  closable: true,
});

const emits = defineEmits<AlertEmits>();
const slots = defineSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");
const withDescription = computed(() => props.description || slots.default);

function close() {
  visible.value = false;
  emits("close");
}

function open() {
  visible.value = true;
}

defineExpose<AlertInstance>({
  close,
  open,
});
</script>

<template>
  <transition name="cd-alert-fade">
    <div
      v-show="visible"
      class="cd-alert"
      role="alert"
      :class="{
        [`cd-alert__${type}`]: type,
        [`cd-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <cd-icon
        v-if="showIcon"
        class="cd-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="cd-alert__content">
        <span
          class="cd-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="cd-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="cd-alert__close" v-if="closable">
          <cd-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "./style.css";
</style>
