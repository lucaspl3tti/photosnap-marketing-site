<template>
  <main class="psm-home">
    <section class="about" id="about-us">
      <cms-text-image-combination
        v-for="(block, index) in homepageData.blocks"
        :key="index"
        :headline="block.headline"
        :copy="block.copy"
        :image="block.image"
        :link="block.link"
        :image-position="Utilities.numberIsOdd(index + 1) ? 'right' : 'left'"
        :size="(index + 1) === 1 ? 'bigger' : 'normal'"
        :has-vertical-gradient-line="(index + 1) === 1"
        :theme="(index + 1) === 1 ? 'dark' : 'light'"
      />
    </section>

    <section class="stories" id="storiesHome">
      <cms-teaser-list :teasers="storyTeasers" />
    </section>

    <section class="features" id="featuresHome">
      <psm-container>
        <cms-feature-card-list :features="featureCards" />
      </psm-container>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { CmsTeaserProperties } from '@/interfaces/components/cms/teaser.interface';
import type { CmsFeatureCardProperties } from '@/interfaces/components/cms/feature-card.interface';
import type {
  ContentHomepageData,
  ContentStoriesData,
  ContentFeaturesData,
} from '@/interfaces/content/content.interface';
import HomepageData from '@/stores/homepage.json';
import StoriesData from '@/stores/stories.json';
import FeaturesData from '@/stores/features.json';
import { ArrayAccess, Utilities } from '@lucaspl3tti/ts-helpers';

const homepageData: ContentHomepageData = HomepageData;
const storiesData: ContentStoriesData = StoriesData as unknown as ContentStoriesData;
const featuresData: ContentFeaturesData = FeaturesData as unknown as ContentFeaturesData;

const storyTeasers = computed(() => {
  const teasers = storiesData.stories.map((story) => {
    return {
      headline: story.headline,
      copy: `by ${story.publishedBy}`,
      headlineType: 'h3',
      image: {
        url: story.image.url,
        alt: story.image.alt
      },
      link: {
        url: story.link.url,
        text: story.link.text
      }
    };
  });

  return ArrayAccess.first(teasers, 4) as CmsTeaserProperties[];
});

const featureCards = computed(() => {
  const features = featuresData.features.map((feature) => {
    return {
      headline: feature.headline,
      copy: feature.copy,
      headlineType: 'h3',
      icon: feature.icon,
    };
  });

  return ArrayAccess.first(features, 3) as CmsFeatureCardProperties[];
});
</script>
