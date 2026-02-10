<template>
  <div class="form-check form-switch psm-switch">
    <input :id="id" class="form-check-input psm-switch__input" type="checkbox" :aria-label="inputAriaLabel"
      @click="onClick">
    <slot>
      <label v-if="!Utilities.isEmpty(label)" class="form-check-label psm-switch__label" :for="id">
        {{ label }}
      </label>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type { PsmSwitchProperties } from '@/interfaces/components/switch.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<PsmSwitchProperties>(), {
  id: undefined,
  label: undefined,
  inputAriaLabel: undefined,
});

const isChecked = ref(false);
const emit = defineEmits(['click']);

function onClick() {
  isChecked.value = !isChecked.value;
  emit('click', isChecked.value);
}
</script>

<style lang="scss" scoped>
.form-switch.psm-switch {
  .psm-switch__input {
    width: 64px;
    height: 32px;
    border: 0;
    background-color: $color-gray-100;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%0, 0, 0, 1%29'/%3e%3c/svg%3e");

    &:checked {
      background-color: $color-body-dark;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }

    &:focus,
    &:focus-visible {
      outline-color: $color-body;
    }
  }
}
</style>
