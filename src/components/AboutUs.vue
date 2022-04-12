<script>
import data from '@/stores/data.json';
import ArrowRight from '@/components/icons/IconArrowRight.vue';

export default {
    data(){
        return {
            about: data.homepage,
        };
    },
    components: {
        ArrowRight,
    },
}
</script>

<template>
    <section class="about" id="about-us">
        <div
            v-for="(information, key) in about"
            :key="key"
            class="information-wrapper"
            :class="information.wrapperClass"
        >
            <div class="text-wrapper">
                <div class="information__heading">
                    <h1 class="heading">{{ information.heading }}</h1>
                </div>
                <div class="information__copy">
                    <p>{{ information.copy }}</p>
                </div>
                <div class="information__link-wrapper">
                    <RouterLink :to="information.href" class="information__link">
                        <span class="link__text hover-underline">{{ information.link }}</span>
                        <span class="link__icon">
                            <ArrowRight />
                        </span>
                    </RouterLink>
                </div>
            </div>

            <div class="image-wrapper">
                <img :src="information.image" class="information__image" alt="">
            </div>
        </div>
        </section>
</template>
