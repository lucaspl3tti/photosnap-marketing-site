<template>
  <div class="cms-feature-card-list">
    <cms-feature-card
      v-for="(feature, index) in features"
      :key="index"
      :headline="feature.headline"
      :headline-type="feature.headlineType"
      :headline-appearance="feature.headlineAppearance"
      :copy="feature.copy"
      :icon="feature.icon"
    />
  </div>
</template>

<script lang="ts" setup>
import type { CmsFeatureCardListProperties } from '@/interfaces/components/cms/feature-card.interface';

const properties = withDefaults(defineProps<CmsFeatureCardListProperties>(), {
  features: undefined,
});
</script>

<style lang="scss" scoped>
.cms-feature-card-list {
  display: grid;
  gap: 56px;
  padding: 80px 0;
}

@include media-breakpoint-up(md) {
  .cms-feature-card-list {
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 75px 30px;
    padding: 120px 0;
  }
}

@include media-breakpoint-up(xl) {
  .cms-feature-card-list {
    grid-template-rows: 236px;
    grid-template-columns: repeat(3, 350px);
    gap: 100px 0;
  }
}
</style>
