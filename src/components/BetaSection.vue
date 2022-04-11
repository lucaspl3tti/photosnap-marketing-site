<script>
import data from '@/stores/data.json';
import ArrowRight from '@/components/icons/IconArrowRight.vue';

export default {
    data(){
        return {
            betaContent: data.beta,
        };
    },
    components: {
        ArrowRight,
    },
}
</script>

<template>
    <section class="beta-container" id="betaInformation">
        <div class="beta-content">
            <div class="image-wrapper">
                <picture>
                    <source media="(min-width: 768px)" :srcset="betaContent.imageDesktop">
                    <img class="beta__image" :src="betaContent.imageMobile" alt="Beta Background Image">
                </picture>
            </div>
            <div class="text-wrapper">
                <div class="beta__headline">
                    <h1>{{ betaContent.headline }}</h1>
                </div>

                <div class="beta__link-wrapper">
                    <a class="beta__link" :href="betaContent.href">
                        <span class="link__text">Get an Invite</span>
                        <span class="link__icon">
                            <ArrowRight />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
