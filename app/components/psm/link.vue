<template>
  <span class="psm-link-wrapper">
    <nuxt-link
      v-if="!isExternal"
      :to="url"
      class="psm-link"
    >
      <span :class="[
        'psm-link__text',
        {
          'hover-underline': hasHoverUnderline,
          'is-uppercase': isUppercase,
        },
      ]">
        <slot>{{ text }}</slot>
      </span>

      <slot name="icon">
        <span v-if="!Utilities.isEmpty(icon)" class="psm-link__icon">
          <nuxt-icon
            :name="icon"
            filled
          />
        </span>
      </slot>
    </nuxt-link>

    <a
      v-else
      :href="url"
      class="psm-link"
    >
      <span :class="[
        'psm-link__text',
        {
          'hover-underline': hasHoverUnderline,
          'is-uppercase': isUppercase,
        },
      ]">
        <slot>{{ text }}</slot>
      </span>

      <slot name="icon">
        <span v-if="!Utilities.isEmpty(icon)" class="psm-link__icon">
          <nuxt-icon :name="icon" filled />
        </span>
      </slot>
    </a>
  </span>
</template>

<script lang="ts" setup>
import type { PsmLinkProperties } from '@/interfaces/components/link.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<PsmLinkProperties>(), {
  url: undefined,
  text: undefined,
  icon: undefined,
  isExternal: false,
  hasHoverUnderline: false,
  isUppercase: false,
});
</script>

<style lang="scss" scoped>
.psm-link {
  color: inherit !important;

  &__text {
    &.is-uppercase {
      text-transform: uppercase;
    }
  }

  &__icon {
    margin-left: 20px;

    :deep(svg) {
      transform: translateX(0);
      transition: transform $animation-speed;
    }
  }

  &:hover {
    .psm-link__icon {
      :deep(svg) {
        transform: translateX(8px);
      }
    }
  }
}
</style>
