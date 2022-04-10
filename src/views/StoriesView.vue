<script>
import StoriesList from '@/components/StoriesList.vue';
import data from '@/stores/data.json';

export default {
    data(){
        return {
            storyCount:  Object.keys(data.storiesPage.stories).length,
        };
    },
    components: {
        StoriesList,
    },
    methods: {},
}
</script>

<template>
    <header class="head-story">
        <h1>This is a test</h1>
    </header>

    <main class="stories" id="storiesList">
        <StoriesList :loopNumber="storyCount" :wrapperClass="'stories--list'" />
    </main>
</template>
