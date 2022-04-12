<script>
import AboutUs from '@/components/AboutUs.vue';
import StoriesList from '@/components/StoriesList.vue';
import FeaturesList from '@/components/FeaturesList.vue';

export default {
    components: {
        AboutUs,
        StoriesList,
        FeaturesList,
    },
}
</script>

<template>
    <main class="home">
        <AboutUs />

        <section class="stories" id="storiesHome">
            <StoriesList :loopNumber="4" :wrapperClass="'stories--home'" />
        </section>

        <section class="features" id="featuresHome">
            <FeaturesList :loopNumber="3" :wrapperClass="'features--home'" />
        </section>
    </main>
</template>
