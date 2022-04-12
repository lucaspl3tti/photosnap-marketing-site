<script>
import data from '@/stores/data.json';

export default {
    props: {
        loopNumber: Number,
        wrapperClass: String,
    },
    data(){
        return {
            features: data.featuresPage.features,
        };
    },
}
</script>

<template>
    <div class="container" :class="wrapperClass">
        <div class="features-container">
            <div
                v-for="number of loopNumber"
                :key="number"
                class="feature-wrapper"
            >
                <div class="feature__icon">
                    <span class="icon" :class="features[number].iconClass" v-html="features[number].icon"></span>
                </div>

                <div class="text-wrapper">
                    <div class="feature__heading">
                        <h3>{{ features[number].heading }}</h3>
                    </div>

                    <div class="feature__copy">
                        <p>{{ features[number].copy }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
