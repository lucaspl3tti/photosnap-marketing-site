<template>
  <div class="cms-comparison-table">
    <div class="cms-comparison-table__headline-wrapper d-none d-md-block">
      <p class="h1 text-center cms-comparison-table__headline">Comparison</p>
    </div>

    <div class="cms-comparison-table__table">
      <div class="cms-comparison-table__table__row cms-comparison-table__table__row--header row">
        <div class="cms-comparison-table__table__col col-6">The Features</div>
        <div class="cms-comparison-table__table__col col d-none d-md-block">Basic</div>
        <div class="cms-comparison-table__table__col col d-none d-md-block">Pro</div>
        <div class="cms-comparison-table__table__col col d-none d-md-block">Business</div>
      </div>

      <div
        v-for="feature, index in features"
        :key="index"
        class="cms-comparison-table__table__row cms-comparison-table__table__row--content row"
      >
        <div class="cms-comparison-table__table__col col-12 col-md-6">
          <p>{{ feature.title }}</p>
        </div>

        <div
          v-for="plan, index in plans"
          :key="index"
          class="cms-comparison-table__table__col col"
        >
          <p class="cms-comparison-table__table__col-label d-md-none">{{ plan.name }}</p>

          <nuxt-icon v-if="feature[plan.key]" name="check" filled />
          <span v-else class="empty-cell">&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CmsComparisonTableProperties } from '@/interfaces/components/cms/comparison-table.interface';

const properties = withDefaults(defineProps<CmsComparisonTableProperties>(), {
  features: undefined,
});

const plans: { name: string, key: 'basic' | 'pro' | 'business' }[] = [
  { name: 'Basic', key: 'basic' },
  { name: 'Pro', key: 'pro' },
  { name: 'Business', key: 'business' },
]
</script>

<style lang="scss" scoped>
.cms-comparison-table {
  padding-bottom: 60px;

  &__table {
    font-weight: $font-weight-bold;
    letter-spacing: 2px;
    text-transform: uppercase;

    &__col {
      padding: 0;

      &-label {
        opacity: .5;
        font-size: $font-size-smaller-mobile;
        letter-spacing: 1.67px;
      }

      p {
        margin-bottom: 0;
      }
    }

    &__row {
      &--header {
        height: 40px;
        border-bottom: 1px solid $color-body-dark;
      }

      &--content {
        border-bottom: 1px solid $color-gray-100;
        padding: 25px 0;

        .cms-comparison-table__table__col {
          &:first-of-type {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .cms-comparison-table {
    padding: 60px 0;

    &__headline-wrapper {
      margin-bottom: 60px;
    }

    &__table {
      max-width: 732px;
      margin: 0 auto;
      padding: 0 2%;

      &__col {
        text-align: center;

        &:first-of-type {
          text-align: left;
        }
      }

      &__row {
        &--content {
          .cms-comparison-table__table__col {
            &:first-of-type {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  .cms-comparison-table {
    padding: 100px 0 160px;

    &__table {
      padding: 0;
    }
  }
}
</style>
