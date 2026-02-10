<template>
  <main class="psm-stories">
    <section v-if="!Utilities.isEmpty(storiesData.header)" class="stories-header">
      <cms-head-image
        :overline="storiesData.header.overline"
        :headline="storiesData.header.headline"
        :subline="storiesData.header.date"
        :copy="storiesData.header.copy"
        :image="storiesData.header.image"
        :link="storiesData.header.link"
      >
        <template #subline>
          <span class="publishing-date">{{ storiesData.header.date }}</span>
          <span class="publishing-author">&nbsp;&ndash; by {{ storiesData.header.date }}</span>
        </template>
      </cms-head-image>
    </section>

    <section class="stories" id="storiesList">
      <cms-teaser-list :teasers="storyTeasers" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import type { CmsTeaserProperties } from '@/interfaces/components/cms/teaser.interface';
import type { ContentStoriesData } from '@/interfaces/content/content.interface';
import StoriesData from '@/stores/stories.json';
import { Utilities } from '@lucaspl3tti/ts-helpers';

const storiesData: ContentStoriesData = StoriesData as unknown as ContentStoriesData;

const storyTeasers = computed(() => {
  return storiesData.stories.map((story) => {
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
  }) as CmsTeaserProperties[];
});
</script>

<style lang="scss" scoped>
.stories-header {
  :deep(.cms-head-image) {
    .publishing-date {
      opacity: .6;
    }

    .publishing-author {
      opacity: 1;
    }
  }
}
</style>
