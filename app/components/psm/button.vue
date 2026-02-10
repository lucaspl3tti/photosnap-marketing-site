<template>
  <component
    :is="buttonTag"
    :class="[
      'btn',
      'psm-button',
      `btn-${theme}`,
      `psm-button--${theme}`,
      `btn-${size}`,
      { 'psm-button--block': block },
      { 'psm-button--icon': isIconBtn },
      ...(styleClasses || []),
    ]"
    :href="href"
    :type="buttonType"
    @click="onClick"
  >
    <slot name="prepend" />

    <span v-if="!isIconBtn" class="psm-button__text">
      <slot>
        {{ text }}
      </slot>
    </span>

    <span v-else class="psm-button__icon">
      <slot>
        <psm-icon
          v-if="icon"
          v-bind="icon"
        />
      </slot>
    </span>

    <slot name="append" />
  </component>
</template>

<script lang="ts" setup>
import type { PsmButtonProperties } from '@/interfaces/components/button.interface';

const properties = withDefaults(defineProps<PsmButtonProperties>(), {
  size: 'md',
  tag: 'button',
  theme: 'primary',
  block: false,
  styleClasses: undefined,
  href: undefined,
  icon: undefined,
  isIconBtn: false,
  target: undefined,
  text: undefined,
  to: undefined,
  type: undefined,
});

const emit = defineEmits(['click']);

const router = useRouter();
const buttonTag = computed<string>(() => {
  return properties.href || properties.to ? 'a' : properties.tag;
});
const buttonType = computed<string|undefined>(() => {
  return buttonTag.value === 'button' ? properties.type : undefined;
});

function onClick(event: MouseEvent) {
  event.preventDefault();

  if (properties.href) {
    if (properties.target && properties.target === '_blank') {
      window.open(properties.href, '_blank');
    } else {
      window.location.href = properties.href;
    }

    return;
  }

  if (properties.to && router) {
    router.push(properties.to);
  }

  emit('click', event);
}
</script>

<style lang="scss" scoped>
.btn.psm-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid $color-body-dark;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  color: $color-text;
  font-size: $font-size-normal-mobile;
  font-weight: $font-weight-bold;
  letter-spacing: 2.5px;
  text-transform: uppercase;

  &--primary {
      border: 0;
      background-color: $color-body-dark;
      color: $color-text-light;
  }

  &--secondary {
      border: 0;
      background-color: $color-body;
      color: $color-text;
  }

  &--primary,
  &--secondary {
      &:hover {
          background-color: $color-gray-100;
          color: $color-text;
      }
  }

  .psm-button__icon {
    display: inline-flex;
  }

  // **other styles**
  &--block {
    display: flex;
    width: 100%;
  }
}
</style>
