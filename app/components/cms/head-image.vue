<template>
  <div :class="[
    'cms-head-image',
    {
      'is-simple-layout': layout === 'simple',
      'has-vertical-gradient-line': hasVerticalGradientLine
    },
  ]">
    <div class="cms-head-image__image-wrapper">
      <psm-image
        :image="image"
        image-class="cms-head-image__image"
      />
    </div>

    <div class="cms-head-image__text-wrapper">
      <div
        v-if="!Utilities.isEmpty(overline) && layout !== 'simple'"
        class="cms-head-image__overline-wrapper"
      >
        <div class="cms-head-image__overline h4">
          <slot name="overline">
            {{ overline }}
          </slot>
        </div>
      </div>

      <div v-if="!Utilities.isEmpty(headline)" class="cms-head-image__headline-wrapper">
        <component :is="headlineType" :class="['cms-head-image__headline', headlineAppearanceClass]">
          {{ headline }}
        </component>
      </div>

      <div
        v-if="!Utilities.isEmpty(subline) && layout !== 'simple'"
        class="cms-head-image__subline-wrapper"
      >
        <p class="cms-head-image__subline">
          <slot name="subline">
            {{ subline }}
          </slot>
        </p>
      </div>

      <div
        v-if="!Utilities.isEmpty(copy) && layout !== 'simple'"
        class="cms-head-image__copy-wrapper"
      >
        <p class="cms-head-image__copy">
          <slot name="copy">
            {{ copy }}
          </slot>
        </p>
      </div>

      <div v-if="link && !Utilities.isEmpty(link.url)" class="cms-head-image__link-wrapper">
        <psm-link
          :url="link.url"
          :text="link.text"
          icon="arrow-right"
          is-external
          has-hover-underline
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CmsHeadImageProperties } from '@/interfaces/components/cms/head-image.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<CmsHeadImageProperties>(), {
  overline: undefined,
  headline: undefined,
  headlineType: 'h1',
  headlineAppearance: undefined,
  subline: undefined,
  copy: undefined,
  link: undefined,
  image: undefined,
  layout: 'default',
  hasVerticalGradientLine: false,
});

const headlineAppearanceClass = computed(() => {
  if (!Utilities.isEmpty(properties.headlineAppearance)) {
    return properties.headlineAppearance;
  }

  return properties.headlineType;
});
</script>

<style lang="scss" scoped>
.cms-head-image {
  position: relative;

  &__image-wrapper {
    :deep(.psm-image) {
      width: 100%;
    }
  }

  &__text-wrapper {
    background-color: $color-body-dark;
    padding: 45px 30px;
    color: $color-text-light;
  }

  &__overline,
  &__headline {
      margin-bottom: 20px;
      color: $color-text-light;
  }

  &__subline {
    margin-bottom: 30px;
  }

  &__copy {
    opacity: .6;
    margin-bottom: 25px;
  }

  &.is-simple-layout {
    .cms-head-image__text-wrapper {
      width: 100%;
      height: 100%;
      padding: 60px 30px;
    }
  }

  &.has-vertical-gradient-line {
    .cms-head-image__text-wrapper {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        display: block;
        width: 34.133%;
        height: 6px;
        background: linear-gradient(to right top, #FFC593, #BC7198 55%, #5A77FF);
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .cms-head-image {
    &__text-wrapper {
      position: absolute;
      top: 0;
      display: flex;
      flex-flow: column;
      justify-content: center;
      width: 50.39%;
      min-width: 378px;
      height: 100%;
      background-color: transparent;
      padding: 60px 40px;
    }

    &.is-simple-layout {
      .cms-head-image__image-wrapper {
        :deep(.psm-image) {
          max-height: 280px;
        }
      }

      .cms-head-image__text-wrapper {
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        padding: 60px 40px;
      }

      .cms-head-image__headline {
        max-width: 400px;
      }
    }

    &.has-vertical-gradient-line {
      .cms-head-image__text-wrapper {
        &::before {
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(to right top, #FFC593, #BC7198 55%, #5A77FF);
        }
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  .cms-head-image {
    &__text-wrapper {
      width: 38%;
      background-color: transparent;
      padding: 80px 0 80px 110px;
    }

    &.is-simple-layout {
      .cms-head-image__text-wrapper {
        padding: 60px 165px;
      }
    }
  }
}
</style>
