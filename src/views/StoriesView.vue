<script>
import StoriesList from '@/components/StoriesList.vue';
import data from '@/stores/data.json';
import ArrowRight from '@/components/icons/IconArrowRight.vue';

export default {
    data(){
        return {
            storyData: data.storiesPage,
            storyCount:  Object.keys(data.storiesPage.stories).length,
        };
    },
    components: {
        StoriesList,
        ArrowRight,
    },
}
</script>

<template>
    <header class="stories-header">
        <div class="image-wrapper">
            <picture>
                <source media="(min-width: 992px)" :srcset="storyData.header.imageDesktop">
                <img class="header__image" :src="storyData.header.imageMobile" :alt="storyData.header.imageAlt">
            </picture>
        </div>

        <div class="text-wrapper">
            <div class="header__subline">
                <h4>{{ storyData.header.subline }}</h4>
            </div>

            <div class="header__headline">
                <h1>{{ storyData.header.headline }}</h1>
            </div>

            <div class="header__publishing-info">
                <p>
                    <span class="publishing__date">{{ storyData.header.date }}</span>
                    <span class="publishing__author">&nbsp;&ndash; by {{ storyData.header.publishedBy }}</span>
                </p>
            </div>

            <div class="header__description">
                <p>{{ storyData.header.description }}</p>
            </div>

            <div class="header__link-wrapper">
                <a class="header__link" :href="storyData.header.href" rel="noopener noreferrer">
                    <span class="link__text hover-underline--light">Read the story</span>
                    <span class="link__icon">
                        <ArrowRight />
                    </span>
                </a>
            </div>
        </div>
    </header>

    <main class="stories" id="storiesList">
        <StoriesList :loopNumber="storyCount" :wrapperClass="'stories--list'" />
    </main>
</template>
