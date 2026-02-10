<template>
  <main class="psm-features">
    <section class="features-header">
      <cms-text-image-combination
        :headline="pricingData.header.headline"
        :copy="pricingData.header.copy"
        :image="pricingData.header.image"
        image-position="right"
        size="smaller"
        has-vertical-gradient-line
        theme="dark"
      />
    </section>

    <section class="pricing" id="pricing">
      <psm-container>
        <cms-plan-picker :memberships="pricingData.memberships" />

        <cms-comparison-table :features="pricingData.comparison.features" />
      </psm-container>
    </section>

    <section class="beta-notice">
      <cms-head-image
        :headline="betaData.beta.headline"
        :link="betaData.beta.link"
        :image="betaData.beta.image"
        layout="simple"
        has-vertical-gradient-line
      />
    </section>
  </main>
</template>

<script lang="ts" setup>
import type { ContentBetaNotice, ContentPricingData } from '@/interfaces/content/content.interface';
import type { CmsFeatureCardProperties } from '@/interfaces/components/cms/feature-card.interface';
import PricingData from '@/stores/pricing.json';
import BetaData from '@/stores/beta.json';

const pricingData: ContentPricingData = PricingData as unknown as ContentPricingData;
const betaData: ContentBetaNotice = BetaData as unknown as ContentBetaNotice;
</script>

<!-- <style>

</style> -->
