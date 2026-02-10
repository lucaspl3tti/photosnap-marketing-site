<template>
  <div class="cms-teaser" @click="onClickTeaser">
    <div class="cms-teaser__image-wrapper">
      <div class="cms-teaser__image-overlay"></div>
      <img class="cms-teaser__image" :src="image.url" :alt="image.alt">
    </div>

    <div class="cms-teaser__text-wrapper">
      <div class="cms-teaser__meta">
        <div v-if="!Utilities.isEmpty(headline)" class="cms-teaser__headline-wrapper">
            <component
              :is="headlineType"
              :class="['cms-teaser__headline', headlineAppearanceClass]"
            >
              {{ headline }}
            </component>
        </div>
        <div v-if="!Utilities.isEmpty(copy)" class="cms-teaser__copy">
            <p>{{ copy }}</p>
        </div>
      </div>

      <div v-if="link && !Utilities.isEmpty(link.url)" class="cms-teaser__action">
        <a ref="teaserLink" :href="link.url" class="cms-teaser__link">
          <span class="link__text">{{ link.text }}</span>
          <span class="link__icon">
              <nuxt-icon name="arrow-right" filled />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CmsTeaserProperties } from '@/interfaces/components/cms/teaser.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<CmsTeaserProperties>(), {
  headline: undefined,
  headlineType: 'h1',
  headlineAppearance: undefined,
  copy: undefined,
  link: undefined,
  image: undefined,
});

const teaserLink = useTemplateRef('teaserLink');
const headlineAppearanceClass = computed(() => {
  if (!Utilities.isEmpty(properties.headlineAppearance)) {
    return properties.headlineAppearance;
  }

  return properties.headlineType;
});

function onClickTeaser() {
  if (teaserLink && properties.link && !Utilities.isEmpty(properties.link.url)) {
    teaserLink.value?.click();
  }
}
</script>

<style lang="scss" scoped>
.cms-teaser {
  position: relative;

  &__image-wrapper {
    position: relative;
  }

  &__image-overlay {
    position: absolute;
    z-index: $z-tooltip;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba($color: $color-body-dark, $alpha: 0.1%), rgba($color: $color-body-dark, $alpha: 66.12%));
  }

  &__image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  &__text-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: calc($z-tooltip + 1);
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 40px 30px;
    color: $color-text-light;
  }

  &__meta {
    margin-bottom: 16px;
    border-bottom: 1px solid rgba($color: $color-text-light, $alpha: 25%);
    font-size: $font-size-small-mobile;
  }

  &__headline {
    color: $color-text-light;
  }

  &__link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: $color-text-light;
    font-size: $font-size-small-mobile;
    font-weight: $font-weight-bold;

    .link__icon {
      & > svg > g {
        stroke: $color-text-light;
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .cms-teaser {
    transform: translateY(0);
    transition: transform $animation-speed;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      opacity: 0;
      width: 100%;
      height: 6px;
      background: linear-gradient(to right top, #FFC593, #BC7198 55%, #5A77FF);
      transition: opacity $animation-speed;
    }

    &:hover {
      cursor: pointer;
      transform: translateY(-25px);

      &::after {
        opacity: 1;
      }

      .cms-teaser__image-overlay {
        height: calc(100% - 6px);
      }
    }

    &__image {
      aspect-ratio: 18/25;
      object-fit: contain;
    }
  }
}
</style>
