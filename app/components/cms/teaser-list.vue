<template>
  <div class="cms-teaser-list">
    <cms-teaser
      v-for="(teaser, index) in teasers"
      :key="index"
      :headline="teaser.headline"
      :headline-type="teaser.headlineType"
      :headline-appearance="teaser.headlineAppearance"
      :copy="teaser.copy"
      :link="teaser.link"
      :image="teaser.image"
    />
  </div>
</template>

<script lang="ts" setup>
import type { CmsTeaserListProperties } from '@/interfaces/components/cms/teaser.interface';

const properties = withDefaults(defineProps<CmsTeaserListProperties>(), {
  teasers: undefined,
});
</script>

<style lang="scss" scoped>
.cms-teaser-list {
  display: grid;
  grid-template-columns: 100%;
}

@include media-breakpoint-up(md) {
  .cms-teaser-list {
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
  }
}

@include media-breakpoint-up(xl) {
  .cms-teaser-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
