<script>
import data from '@/stores/data.json';
import NavLogo from './icons/IconLogo.vue';

export default {
    data(){
        return {
            navigation: data.navigation,
            toggled: true,
            activeClass: 'show',
            collapsedClass: 'collapsed',
            animateNavItem: false,
            animateItemClass: 'animate-nav-item',
        };
    },
    components: {
        NavLogo,
    },
    methods: {
        onClickNavLink() {
            this.toggled = true;
            this.animateNavItem = false;
        },
        onClickNavToggler() {
            if (this.toggled) {
                this.toggled = false;
                setTimeout(() => this.animateNavItem = true, 170);
                return
            }

            this.toggled = true;
            this.animateNavItem = false;
        },
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light nav-container">
        <div class="container">
            <a class="navbar-brand mb-0 nav-logo" :href="navigation.root">
                <NavLogo />
            </a>
            <button
                class="navbar-toggler"
                :class="[this.toggled ? this.collapsedClass : '']"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="onClickNavToggler"
            >
                <div class="collapse-menu-icon start"></div>
                <div class="collapse-menu-icon end"></div>
            </button>
            <div
                class="collapse navbar-collapse justify-content-end"
                :class="[this.toggled ? '' : this.activeClass]"
                id="navbarNav"
            >
                <div class="nav-content-wrapper">
                    <ul
                        class="navbar-nav"
                    >
                        <li
                            v-for="(navItem, key) in navigation.navItems"
                            :key="key"
                            class="nav-item"
                            :class="[this.animateNavItem ? this.animateItemClass : '']"
                        >
                            <RouterLink
                                :to="navItem.href"
                                class="nav-link"
                                :class="['nav-link--' + key]"
                                @click="onClickNavLink"
                            >
                                {{ navItem.title }}
                            </RouterLink>
                        </li>
                    </ul>

                    <div
                        class="btn-wrapper btn-wrapper--invite"
                        :class="[this.animateNavItem ? this.animateItemClass : '']"
                    >
                        <a
                            href="javascript:void(0)"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary"
                        >
                            {{ navigation.inviteBtn }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
