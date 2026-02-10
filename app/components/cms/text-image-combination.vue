<template>
  <div
    :class="[
      'text-image-combination',
      `is-image-${imagePosition}`,
      `is-theme-${theme}`,
      `is-size-${size}`,
      { 'has-vertical-gradient-line': hasVerticalGradientLine },
    ]"
  >
    <div class="text-image-combination__text-wrapper">
      <div v-if="!Utilities.isEmpty(headline)" class="text-image-combination__heading">
        <component :is="headlineType" :class="['heading', headlineAppearanceClass]">
          {{ headline }}
        </component>
      </div>

      <div v-if="!Utilities.isEmpty(copy)" class="text-image-combination__copy">
        <p>{{ copy }}</p>
      </div>

      <div v-if="link && !Utilities.isEmpty(link.url)" class="text-image-combination__link-wrapper">
        <psm-link
          :url="link.url"
          :text="link.text"
          icon="arrow-right"
          is-external
          has-hover-underline
        />
      </div>
    </div>

    <div class="text-image-combination__image-wrapper">
      <psm-image
        v-if="image && !Utilities.isEmpty(image.url)"
        :image="image"
        image-class="text-image-combination__image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  CmsTextImageCombinationProperties,
} from '@/interfaces/components/cms/text-image-combination.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<CmsTextImageCombinationProperties>(), {
  headline: undefined,
  headlineType: 'h1',
  headlineAppearance: undefined,
  copy: undefined,
  link: undefined,
  image: undefined,
  imagePosition: 'left',
  size: 'normal',
  hasVerticalGradientLine: false,
  theme: 'light',
});

const headlineAppearanceClass = computed(() => {
  if (!Utilities.isEmpty(properties.headlineAppearance)) {
    return properties.headlineAppearance;
  }

  return properties.headlineType;
});
</script>

<style lang="scss" scoped>
.text-image-combination {
  display: grid;

  &__text-wrapper {
    padding: 75px 35px;
  }

  &__heading,
  &__copy {
    margin-bottom: 20px;
  }

  &__copy {
    opacity: .6;
  }

  &__link-wrapper {
    font-size: $font-size-smaller;
    font-weight: $font-weight-bold;
  }

  &__image-wrapper {
    order: -1;
  }

  &.is-theme-dark {
    .text-image-combination__text-wrapper {
      background-color: $color-body-dark;
      color: $color-text-light;
    }

    .text-image-combination__heading .heading {
      color: $color-text-light;
    }
  }

  &.has-vertical-gradient-line {
    .text-image-combination__text-wrapper {
      position: relative;

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

  &.is-size-smaller {
    .text-image-combination__text-wrapper {
      padding: 70px 25px;
    }
  }
}

@include media-breakpoint-up(md) {
  .text-image-combination {
    grid-template-rows: 600px;
    grid-template-columns: 35.546% 28.908% 35.546%;

    &__text-wrapper {
      display: flex;
      flex-flow: column;
      grid-column: 2/4;
      justify-content: center;
      padding: 75px 55px;
    }

    &__image-wrapper {
      grid-column: 1/2;

      :deep(.psm-image) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &.is-image-right {
      .text-image-combination__image-wrapper {
        grid-column: 3/4;
        order: 2;
      }

      .text-image-combination__text-wrapper {
        grid-column: 1/3;
      }
    }

    &.is-size-smaller {
      grid-template-rows: 490px;

      .text-image-combination__text-wrapper {
        padding: 80px 50px;
      }

      &.has-vertical-gradient-line {
        .text-image-combination__text-wrapper {
          position: relative;

          &::before {
            top: auto;
            left: 0;
            width: 6px;
            height: 46.77%;
            background: linear-gradient(to right top, #FFC593, #BC7198 55%, #5A77FF);
          }
        }
      }
    }

    &.is-size-bigger {
      grid-template-rows: 650px;

      &.has-vertical-gradient-line {
        .text-image-combination__text-wrapper {
          position: relative;

          &::before {
            top: auto;
            left: 0;
            width: 6px;
            height: 46.77%;
            background: linear-gradient(to right top, #FFC593, #BC7198 55%, #5A77FF);
          }
        }
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  .text-image-combination {
    grid-template-columns: 42.361% 15.278% 42.361%;

    &__text-wrapper {
      grid-column: 3/4;
    }

    &__image-wrapper {
      grid-column: 1/3;
    }

    &.is-image-right {
      .text-image-combination__text-wrapper {
        grid-column: 1/2;
      }

      .text-image-combination__image-wrapper {
        grid-column: 2/4;
      }
    }

    &.is-size-smaller {
      .text-image-combination__text-wrapper {
        padding: 100px;
      }
    }
  }
}
</style>
