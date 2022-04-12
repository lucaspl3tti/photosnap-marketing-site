<script>
import HeaderImage from '@/components/HeaderImage.vue';
import FeaturesList from '@/components/FeaturesList.vue';
import BetaSection from '@/components/BetaSection.vue';
import data from '@/stores/data.json';

export default {
    data(){
        return {
            featureHeader: data.featuresPage.header,
            featureCount:  Object.keys(data.featuresPage.features).length,
        };
    },
    components: {
        FeaturesList,
        HeaderImage,
        BetaSection,
    },
}
</script>

<template>
    <HeaderImage
        headerClass="header-container--features"
        :imageDesktopSrc="featureHeader.imageDesktop"
        :imageMobileSrc="featureHeader.imageMobile"
        :imageAltText="featureHeader.imageAltText"
        :headline="featureHeader.headline"
        :copy="featureHeader.copy"
    />

    <main class="features" id="featuresList">
        <FeaturesList :loopNumber="featureCount" :wrapperClass="'features--list'" />

        <BetaSection />
    </main>
</template>
