<template>
  <picture>
    <template v-if="!Utilities.isEmpty(image.sources)">
      <source
        v-for="imageSource in image.sources"
        :media="getResponsiveImageMediaQuery(imageSource.type)"
        :srcset="imageSource.url"
      >
    </template>

    <img
      :class="['psm-image', imageClass]"
      :src="image.url"
      :alt="image.alt"
    >
  </picture>
</template>

<script lang="ts" setup>
import type { PsmImageProperties } from '@/interfaces/components/image.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<PsmImageProperties>(), {
  image: undefined,
  imageClass: undefined,
});
</script>
