<script>
import FeaturesList from '@/components/FeaturesList.vue';
import data from '@/stores/data.json';

export default {
    data(){
        return {
            featureCount:  Object.keys(data.featuresPage.features).length,
        };
    },
    components: {
        FeaturesList,
    },
    methods: {},
}
</script>

<template>
    <header class="head-intro">
        <h1>This is a test</h1>
    </header>

    <main class="features" id="featuresList">
        <FeaturesList :loopNumber="featureCount" :wrapperClass="'features--list'" />
    </main>
</template>
