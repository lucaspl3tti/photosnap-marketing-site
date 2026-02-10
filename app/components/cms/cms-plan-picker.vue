<template>
  <div class="cms-plan-picker">
    <div class="cms-plan-picker__head">
      <div class="cms-plan-picker__billing-period">
        <div class="cms-plan-picker__billing-period__monthly">
          <p>Monthly</p>
        </div>

        <div class="cms-plan-picker__billing-period__switch">
          <psm-switch
            id="billingPeriod"
            input-aria-label="Switch plans between monthly and yearly pricing"
            @click="onChangeBillingPeriod"
          />
        </div>

        <div class="cms-plan-picker__billing-period__yearly">
          <p>Yearly</p>
        </div>
      </div>
    </div>

    <div class="cms-plan-picker__plan-list">
      <cms-membership-card
        v-for="(plan, index) in memberships"
        :key="index"
        :type="plan.type === 'pro' ? 'primary' : 'secondary'"
        :title="plan.title"
        :copy="plan.copy"
        :price-monthly="plan.priceMonthly"
        :price-yearly="plan.priceYearly"
        :billing-period="billingPeriod"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CmsPlanPickerProperties } from '@/interfaces/components/cms/plan-picker.interface';

const properties = withDefaults(defineProps<CmsPlanPickerProperties>(), {
  memberships: undefined,
});

const billingPeriod = ref<'monthly' | 'yearly'>('monthly');

function onChangeBillingPeriod(switchIsChecked: boolean) {
  billingPeriod.value = switchIsChecked ? 'yearly' : 'monthly';
}
</script>

<style lang="scss" scoped>
.cms-plan-picker {
  padding: 60px 0;

  &__billing-period {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;

    p {
      margin-bottom: 0;
    }
  }

  &__plan-list {
    display: grid;
    gap: 20px;
  }
}

@include media-breakpoint-up(xl) {
  .cms-plan-picker {
    &__plan-list {
      grid-template-rows: 470px;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      gap: 30px;
    }
  }
}
</style>
