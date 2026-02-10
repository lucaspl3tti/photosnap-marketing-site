<template>
  <main class="psm-features">
    <section class="features-header">
      <cms-text-image-combination
        :headline="featuresData.header.headline"
        :copy="featuresData.header.copy"
        :image="featuresData.header.image"
        image-position="right"
        size="smaller"
        has-vertical-gradient-line
        theme="dark"
      />
    </section>

    <section class="features" id="featuresList">
      <psm-container>
        <cms-feature-card-list :features="featureCards" />
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
import type { ContentBetaNotice, ContentFeaturesData } from '@/interfaces/content/content.interface';
import type { CmsFeatureCardProperties } from '@/interfaces/components/cms/feature-card.interface';
import FeaturesData from '@/stores/features.json';
import BetaData from '@/stores/beta.json';

const featuresData: ContentFeaturesData = FeaturesData as unknown as ContentFeaturesData;
const betaData: ContentBetaNotice = BetaData as unknown as ContentBetaNotice;

const featureCards = computed(() => {
  return featuresData.features.map((feature) => {
    return {
      headline: feature.headline,
      copy: feature.copy,
      headlineType: 'h3',
      icon: feature.icon,
    };
  }) as CmsFeatureCardProperties[];
});
</script>

<!-- <style>

</style> -->
