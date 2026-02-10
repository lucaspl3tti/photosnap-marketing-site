<template>
  <div :class="['cms-membership-card', `cms-membership-card--${type}`]">
    <div class="cms-membership-card__title">
      <h2>{{ title }}</h2>
    </div>

    <div v-if="!Utilities.isEmpty(copy)" class="cms-membership-card__copy">
      <p>{{ copy }}</p>
    </div>

    <div class="cms-membership-card__price-wrapper">
      <div class="cms-membership-card__price h1">
        {{ billingPeriod === 'monthly' ? priceMonthly : priceYearly }}
      </div>

      <div class="cms-membership-card__price-label">
        {{ billingPeriod === 'monthly' ? 'per Month' : 'per Year' }}
      </div>
    </div>

    <div class="cms-membership-card__action">
      <psm-button
        :theme="type === 'primary' ? 'secondary' : 'primary'"
        href="javascript:void(0)"
        block
      >
        Pick Plan
      </psm-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CmsMembershipCardProperties } from '@/interfaces/components/cms/membership-card.interface';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const properties = withDefaults(defineProps<CmsMembershipCardProperties>(), {
  id: undefined,
  title: undefined,
  copy: undefined,
  priceMonthly: undefined,
  priceYearly: undefined,
  billingPeriod: 'monthly',
  type: 'secondary',
});
</script>

<style lang="scss" scoped>
.cms-membership-card {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 407px;
  background-color: $color-gray-50;
  padding: 0 30px;
  text-align: center;

  &__title {
    margin-bottom: 20px;
  }

  &__copy,
  &__price-wrapper {
    margin-bottom: 40px;
  }

  &__price {
    &-label {
      margin-bottom: 0;
    }
  }

  &__action {
    width: 100%;

    :deep(.psm-button) {
      height: 40px;
    }
  }

  &--primary {
    background-color: $color-body-dark;
    color: $color-text-light;

    h1,
    .h1,
    h2,
    .h2 {
      color: $color-text-light;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 6px;
      background: linear-gradient(to right top, #FFC593, #BC7198 55%, #5A77FF);
    }
  }
}

@include media-breakpoint-between(md, xl) {
  .cms-membership-card {
    align-items: flex-start;
    height: auto;
    padding: 40px;
    text-align: start;

    &__title,
    &__copy,
    &__action {
      width: 50%;
    }

    &__price-wrapper {
      position: absolute;
      top: 40px;
      right: 40px;
      width: calc(50% - 40px);
      text-align: right;
    }
  }
}

@include media-breakpoint-up(xl) {
  .cms-membership-card {
    &--primary {
      height: 100%;
    }
  }
}
</style>
