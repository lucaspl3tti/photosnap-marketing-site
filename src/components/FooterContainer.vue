<script>
import data from '@/stores/data.json';
import WebsiteLogo from './icons/IconLogo.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconPinterest from './icons/IconPinterest.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconYoutube from './icons/IconYoutube.vue';
import ArrowRight from '@/components/icons/IconArrowRight.vue';

export default {
    data(){
        return {
            footer: data.footer,
            navigation: data.navigation,
            socialIcons: data.footer.socialIcons
        };
    },
    components: {
        WebsiteLogo,
        IconFacebook,
        IconInstagram,
        IconPinterest,
        IconTwitter,
        IconYoutube,
        ArrowRight,
    },
}
</script>

<template>
    <footer class="footer" id="footer">
        <div class="container footer-container">
            <div class="footer-left">
                <div class="footer__logo">
                    <WebsiteLogo />
                </div>

                <div class="footer__social social-list">
                    <a :href="socialIcons.facebook.href" class="social-icon social-icon--facebook">
                        <IconFacebook />
                    </a>

                    <a :href="socialIcons.youtube.href" class="social-icon social-icon--youtube">
                        <IconYoutube />
                    </a>

                    <a :href="socialIcons.twitter.href" class="social-icon social-icon--twitter">
                        <IconTwitter />
                    </a>

                    <a :href="socialIcons.pinterest.href" class="social-icon social-icon--pinterest">
                        <IconPinterest />
                    </a>

                    <a :href="socialIcons.instagram.href" class="social-icon social-icon--instagram">
                        <IconInstagram />
                    </a>
                </div>

                <div class="footer__navigation">
                    <ul class="footer-nav__container">
                        <li class="footer-nav__item">
                            <RouterLink :to="navigation.root" class="footer-nav__link footer-nav__link--home">
                                {{ navigation.rootTitle }}
                            </RouterLink>
                        </li>
                        <li
                            v-for="(navItem, key) in navigation.navItems"
                            :key="key"
                            class="footer-nav__item"
                        >
                            <RouterLink
                                :to="navItem.href"
                                class="footer-nav__link"
                                :class="['footer-nav__link--' + key]"
                            >
                                {{ navItem.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-right">
                <div class="footer__invite">
                    <a :href="footer.inviteHref" class="invite-link">
                        <span class="link__text hover-underline--light">Get an invite</span>
                        <span class="link__icon">
                            <ArrowRight />
                        </span>
                    </a>
                </div>

                <div class="footer__copyright">
                    <p>{{ footer.copyright }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>
