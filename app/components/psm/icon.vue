<template>
  <span
    class="psm-icon-wrapper"
    :style="`width: ${size}px; height: ${size}px;`"
  >
    <nuxt-icon
      v-if="pack === 'psm'"
      :name="name"
      :class="iconClasses"
      filled
      :style="`width: ${size}px; height: ${size}px; color: ${color};`"
    />

    <client-only v-else>
      <span
        :class="iconClasses"
        :style="`width: ${size}px; height: ${size}px;`"
      >
        <icon
          :name="`${pack}:${name}`"
          :size="size"
          :color="color"
          :style="`width: ${size}px; height: ${size}px;`"
        />
      </span>
    </client-only>
  </span>
</template>

<script setup lang="ts">
/**
 * psm Pack:
 * Uses the nuxt-icons module to easily import all svgs from ~/assets/icons
 * For documentation look at: https://nuxt.com/modules/icons
 *
 * Other Packs:
 * Uses the <icon /> component from the nuxt-icon module.
 * For all available icons look here: https://icones.js.org
 */
import type { PsmIconProperties } from '@/interfaces/components/icon.interface';

const properties = withDefaults(defineProps<PsmIconProperties>(), {
  name: 'arrow-right',
  pack: 'bi',
  size: '24',
  color: 'currentColor',
  hasNoMargin: false,
  hasNoDefaultAnimation: false,
});

const iconType = computed(() => properties.pack === 'psm' ? 'psm' : 'custom');
const iconClasses = computed(() => {
  return [
    'nuxt-icon',
    `nuxt-icon--${iconType.value}`,
    `${properties.pack}-icon`,
    `${properties.pack}-icon-${properties.name}`,
    {
      'nuxt-icon--no-margin': properties.hasNoMargin,
      'nuxt-icon--no-default-animation': properties.hasNoDefaultAnimation,
    },
  ];
});
</script>

<style lang="scss">
.psm-icon-wrapper {
  display: inline-block;
}

svg.nuxt-icon {
  position: relative;
  top: 0;
  display: inherit !important;

  &--no-margin {
    margin: 0 !important;
  }

  &--no-default-animation {
    transform: translateX(0) !important;
  }
}

span.nuxt-icon {
  display: inline-block;

  .iconify {
    display: inherit !important;
  }

  svg {
    position: relative;
    top: 0;
    display: inherit !important;
    width: inherit !important;
    height: inherit !important;
  }

  &--no-margin {
    svg {
      margin: 0 !important;
    }
  }

  &--no-default-animation {
    svg {
      transform: translateX(0) !important;
    }
  }
}
</style>
