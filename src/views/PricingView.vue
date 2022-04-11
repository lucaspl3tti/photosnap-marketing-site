<script>
import HeaderImage from '@/components/HeaderImage.vue';
import BetaSection from '@/components/BetaSection.vue';
import data from '@/stores/data.json';

export default {
    data(){
        return {
            pricingData: data.pricingPage,
            pricingHeader: data.pricingPage.header,
        };
    },
    components: {
        HeaderImage,
        BetaSection,
    },
    methods: {},
}
</script>

<template>
    <HeaderImage
        headerClass="header-container--prcing"
        :imageDesktopSrc="pricingHeader.imageDesktop"
        :imageMobileSrc="pricingHeader.imageMobile"
        :imageAltText="pricingHeader.imageAltText"
        :headline="pricingHeader.headline"
        :copy="pricingHeader.copy"
    />

    <main class="pricing" id="pricing">
        <section class="pricing-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error iure saepe incidunt dolorum quisquam praesentium quod, quibusdam possimus harum qui quidem facere sint ea animi cupiditate quae inventore pariatur?
        </section>

        <BetaSection />
    </main>
</template>
