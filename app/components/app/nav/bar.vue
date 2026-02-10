<template>
  <nav class="navbar navbar-expand-md navbar-light nav-container">
    <div class="container">
      <nuxt-link class="navbar-brand mb-0 nav-logo" to="/">
        <nuxt-icon name="logo" filled />
      </nuxt-link>
      <button
        class="navbar-toggler"
        :class="[toggled ? classes.collapsed : '']"
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
        :class="[toggled ? '' : classes.active]"
        id="navbarNav"
      >
        <div class="nav-content-wrapper">
          <ul class="navbar-nav">
            <li
              v-for="(navItem, key) in navigationData.navItems"
              :key="key"
              class="nav-item"
              :class="[animateNavItem ? classes.animateItem : '']"
            >
              <nuxt-link
                :to="navItem.url"
                class="nav-link"
                :class="['nav-link--' + key]"
                @click="onClickNavLink"
              >
                {{ navItem.title }}
              </nuxt-link>
            </li>
          </ul>

          <div
            class="btn-wrapper btn-wrapper--invite"
            :class="[animateNavItem ? classes.animateItem : '']"
          >
            <psm-button
              href="javascript:void(0)"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ navigationData.inviteBtn }}
            </psm-button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { NavBarData } from '@/interfaces/components/app/nav.interface';
import NavigationData from '@/stores/navigation.json';

let navigationData: NavBarData = NavigationData;
const classes = {
  active: 'show',
  collapsed: 'collapsed',
  animateItem: 'animate-nav-item',
};

const toggled = ref(true);
const animateNavItem = ref(false);

function onClickNavLink() {
  toggled.value = true;
  animateNavItem.value = false;
}

function onClickNavToggler() {
  toggled.value = !toggled.value;

  if (!toggled.value) {
    setTimeout(() => (animateNavItem.value = true), 170);
  } else {
    animateNavItem.value = false;
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  position: fixed;
  top: 0;
  z-index: $z-model;
  width: 100vw;
  height: 72px;
  box-shadow: 0 0 8px rgba($color-black, $alpha: 40%);
  background-color: $color-body;

  .navbar-toggler {
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 5px;
    width: 20px;
    height: 12px;
    border: 0;
    background-color: transparent;
    padding: 0;

    .collapse-menu-icon {
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: $color-body-dark;
      transition: transform $animation-speed ease-out;

      &.start {
        transform: rotate(-45deg) translate(-1px, 1.5px);
      }

      &.end {
        transform: rotate(45deg) translate(-3px, -4px);
      }
    }

    &.collapsed {
      .collapse-menu-icon {
        &.start {
          transform: rotate(0) translate(0);
        }

        &.end {
          transform: rotate(0) translate(0);
        }
      }
    }

    &:active,
    &:focus,
    &:focus-visible {
      box-shadow: none;
      border: 0;
    }
  }

  .nav-content-wrapper {
    height: auto;
    background-color: $color-body;
    padding-bottom: 30px;
    padding-left: var(--bs-gutter-x, 0.75rem);
    padding-right: var(--bs-gutter-x, 0.75rem);
    transition: height $animation-speed;
  }

  .navbar-collapse {
    position: absolute;
    top: 72px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: rgba($color: $color-body-dark, $alpha: 40%);
    transition: height 0.15s;

    .navbar-nav {
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid $color-gray-400;
      padding-top: 30px;
      padding-bottom: 20px;

      .nav-link {
        padding: 0;
        color: $color-body-dark;
        font-size: 15px;
        font-weight: $font-weight-bold;
      }
    }

    .nav-item,
    .btn-wrapper {
      pointer-events: none;
      opacity: 0;
      transition: opacity 0;

      &.animate-nav-item {
        pointer-events: auto;
        opacity: 1;
        transition: opacity 0.3s;
      }
    }

    .btn-wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      width: 100%;
      height: 48px;
    }

    &:not(.show) {
      display: block;
      height: 0 !important;
      transition: height $animation-speed;

      .nav-content-wrapper {
        display: block;
        height: 0 !important;
        padding: 0;
      }

      .navbar-nav {
        height: 0;
        margin: 0;
        border-bottom: 0;
        padding: 0;
      }

      .btn-wrapper {
        height: 0;
        padding: 0;
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .nav-container {
    .navbar-toggler {
      display: none;
    }

    .navbar-collapse {
      position: relative;
      top: 0;
      background-color: transparent;

      .nav-content-wrapper {
        flex: 0 0 100%;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0;
      }

      .navbar-nav {
        flex: 1 1 auto;
        justify-content: center;
        gap: 35px;
        margin: 0;
        border: 0;
        padding: 0;

        .nav-link {
          &:hover {
            opacity: 0.4;
          }
        }
      }

      .nav-item,
      .btn-wrapper {
        pointer-events: auto;
        opacity: 1;
        padding: 0;
      }

      &:not(.show) {
        height: auto !important;

        .nav-content-wrapper {
          display: flex;
          height: auto !important;
          background-color: transparent;
        }

        .navbar-nav {
          height: auto;
        }

        .btn-wrapper {
          flex: 0 0 158px;
          max-width: 158px;
          height: 40px;

          .btn {
            font-size: $font-size-small-mobile;
          }
        }
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  .nav-container {
    .navbar-collapse {
      .navbar-nav {
        flex: 0 0 86%;
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  .nav-container {
    .navbar-collapse {
      .navbar-nav {
        flex: 0 0 88%;
      }
    }
  }
}
</style>
