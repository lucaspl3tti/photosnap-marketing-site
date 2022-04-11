<script>
import data from '@/stores/data.json';
import ArrowRight from '@/components/icons/IconArrowRight.vue';

export default {
    props: {
        loopNumber: Number,
        wrapperClass: String,
    },
    data(){
        return {
            stories: data.storiesPage.stories,
        };
    },
    components: {
        ArrowRight,
    },
}
</script>

<template>
    <div class="stories-container" :class="wrapperClass">
        <div
            v-for="number of loopNumber"
            :key="number"
            class="story-wrapper"
        >
            <a :href="stories[number].href">
                <div class="image-wrapper">
                    <div class="image__layer"></div>
                        <img :src="stories[number].image" alt="">
                    </div>
                <div class="text-wrapper">
                    <div class="story__info">
                        <div class="story__title">
                            <h3>{{ stories[number].headline }}</h3>
                        </div>
                        <div class="story__copyright">
                            <p>by {{ stories[number].publishedBy }}</p>
                        </div>
                    </div>

                    <div class="story__link">
                        <div class="link__wrapper">
                            <span class="link__text">Read the story</span>
                            <span class="link__icon">
                                <ArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
