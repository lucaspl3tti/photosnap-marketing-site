<script>
import HeaderImage from '@/components/HeaderImage.vue';
import BetaSection from '@/components/BetaSection.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import data from '@/stores/data.json';

export default {
    data(){
        return {
            pricingData: data.pricingPage,
            pricingHeader: data.pricingPage.header,
            memberships: data.pricingPage.memberships,
            planComparison: data.pricingPage.comparison.features,
            membershipPriceLabel: 'per Month',
            membershipBasicPrice: data.pricingPage.memberships.basic.priceMonthly,
            membershipProPrice: data.pricingPage.memberships.pro.priceMonthly,
            membershipBusinessPrice: data.pricingPage.memberships.business.priceMonthly,
        };
    },
    components: {
        HeaderImage,
        BetaSection,
        IconCheck,
    },
    methods: {
        onClickPricingSwitch(event) {
            const pricingSwitch = event.target;

            if (pricingSwitch.checked) {
                this.getYearlyPricingValues();
                return
            }

            this.getMonthlyPricingValues();
        },
        getMonthlyPricingValues() {
            this.membershipPriceLabel = 'per Month';
            this.membershipBasicPrice = this.memberships.basic.priceMonthly;
            this.membershipProPrice = this.memberships.pro.priceMonthly;
            this.membershipBusinessPrice = this.memberships.business.priceMonthly;
        },
        getYearlyPricingValues() {
            this.membershipPriceLabel = 'per Year';
            this.membershipBasicPrice = this.memberships.basic.priceYearly;
            this.membershipProPrice = this.memberships.pro.priceYearly;
            this.membershipBusinessPrice = this.memberships.business.priceYearly;
        }
    },
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

    <main class="container pricing" id="pricing">
        <section class="pricing-list" id="pricingList">
            <div class="pricing-switch-container">
                <div class="pricing-switch__label--monthly">
                    <p>Monthly</p>
                </div>

                <div class="pricing-switch">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="pricingSwitch" @click="onClickPricingSwitch">
                        <label class="form-check-label d-none" for="pricingSwitch">
                            Switch plans between monthly and yearly pricing
                        </label>
                    </div>
                </div>

                <div class="pricing-switch__label--yearly">
                    <p>Yearly</p>
                </div>
            </div>

            <div class="memberships-container" id="memberships">
                <div class="membership-wrapper membership-wrapper--secondary" id="membershipBasic">
                    <div class="membership__title">
                        <h2>
                            {{ memberships.basic.title }}
                        </h2>
                    </div>

                    <div class="membership__copy">
                        <p>
                            {{ memberships.basic.copy }}
                        </p>
                    </div>

                    <div class="membership__price-wrapper">
                        <p class="h1 membership__price">
                            {{ membershipBasicPrice }}
                        </p>

                        <p class="membership__price-label">
                            {{ membershipPriceLabel }}
                        </p>
                    </div>

                    <div class="membership__btn">
                        <a href="" class="btn btn-primary">Pick Plan</a>
                    </div>
                </div>

                <div class="membership-wrapper membership-wrapper--primary" id="membershipPro">
                    <div class="membership__title">
                        <h2>
                            {{ memberships.pro.title }}
                        </h2>
                    </div>

                    <div class="membership__copy">
                        <p>
                            {{ memberships.pro.copy }}
                        </p>
                    </div>

                    <div class="membership__price-wrapper">
                        <p class="h1 membership__price">
                            {{ membershipProPrice }}
                        </p>

                        <p class="membership__price-label">
                            {{ membershipPriceLabel }}
                        </p>
                    </div>

                    <div class="membership__btn">
                        <a href="" class="btn btn-secondary">Pick Plan</a>
                    </div>
                </div>

                <div class="membership-wrapper membership-wrapper--secondary" id="membershipBusiness">
                    <div class="membership__title">
                        <h2>
                            {{ memberships.business.title }}
                        </h2>
                    </div>

                    <div class="membership__copy">
                        <p>
                            {{ memberships.business.copy }}
                        </p>
                    </div>

                    <div class="membership__price-wrapper">
                        <p class="h1 membership__price">
                            {{ membershipBusinessPrice }}
                        </p>

                        <p class="membership__price-label">
                            {{ membershipPriceLabel }}
                        </p>
                    </div>

                    <div class="membership__btn">
                        <a href="" class="btn btn-primary">Pick Plan</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="pricing-comparison" id="pricingComparison">
            <p class="h1 d-none d-md-block text-center comparison-heading">Comparison</p>
            <div class="container comparison-container table-container">
                <div class="row header-row">
                    <div class="col col-6 col--headline">The Features</div>
                    <div class="col d-none d-md-block">Basic</div>
                    <div class="col d-none d-md-block">Pro</div>
                    <div class="col d-none d-md-block">Business</div>
                </div>

                <div v-for="(planFeature, key) in planComparison" :key="key" class="row content-row">
                    <div class="col col-12 col-md-6 col--title">
                        <p>{{ planFeature.title }}</p>
                    </div>

                    <div class="col">
                        <p class="col__label d-md-none">Basic</p>
                        <span v-if="planFeature.basic" class="icon icon-check">
                            <IconCheck />
                        </span>
                        <span v-else class="empty-cell">&nbsp;</span>
                    </div>

                    <div class="col">
                        <p class="col__label d-md-none">Pro</p>
                        <span v-if="planFeature.pro" class="icon icon-check">
                            <IconCheck />
                        </span>
                        <span v-else class="empty-cell">&nbsp;</span>
                    </div>

                    <div class="col">
                        <p class="col__label d-md-none">Business</p>
                        <span v-if="planFeature.business" class="icon icon-check">
                            <IconCheck />
                        </span>
                        <span v-else class="empty-cell">&nbsp;</span>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <BetaSection />
</template>
