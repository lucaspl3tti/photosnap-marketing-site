<script>
export default {
    props: {
        headerClass: String,
        imageDesktopSrc: String,
        imageMobileSrc: String,
        imageAltText: String,
        headline: String,
        copy: String,
    },
}
</script>

<template>
    <header class="header-container" :class="headerClass">
        <div class="image-wrapper">
            <picture>
                <source media="(min-width: 992px)" :srcset="imageDesktopSrc">
                <img class="header__image" :src="imageMobileSrc" :alt="imageAltText">
            </picture>
        </div>

        <div class="text-wrapper">
            <div class="header__headline">
                <h1>{{ headline }}</h1>
            </div>
            <div class="header__copy">
                <p>{{ copy }}</p>
            </div>
        </div>
    </header>
</template>
