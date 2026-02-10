<template>
  <div class="cms-feature-card">
    <div class="cms-feature-card__icon-wrapper">
      <nuxt-icon :name="icon" filled />
    </div>

    <div class="cms-feature-card__text-wrapper">
      <div v-if="!Utilities.isEmpty(headline)" class="cms-feature-card__headline-wrapper">
        <component :is="headlineType" :class="['cms-feature-card__headline', headlineAppearanceClass]">
          {{ headline }}
        </component>
      </div>

      <div v-if="!Utilities.isEmpty(copy)" class="cms-feature-card__copy-wrapper">
        <p>{{ copy }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CmsFeatureCardProperties } from '@/interfaces/components/cms/feature-card.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<CmsFeatureCardProperties>(), {
  headline: undefined,
  headlineType: 'h1',
  headlineAppearance: undefined,
  copy: undefined,
  icon: undefined,
});

const headlineAppearanceClass = computed(() => {
  if (!Utilities.isEmpty(properties.headlineAppearance)) {
    return properties.headlineAppearance;
  }

  return properties.headlineType;
});
</script>

<style lang="scss" scoped>
.cms-feature-card {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 45px;

  &__text-wrapper {
    text-align: center;
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    width: 72px;
    height: 72px;
    aspect-ratio: 1/1;
  }
}

@include media-breakpoint-up(md) {
  .cms-feature-card {
    max-width: 350px;
  }
}
</style>
