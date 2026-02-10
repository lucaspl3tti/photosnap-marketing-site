<template>
  <footer class="footer" id="footer">
    <div class="container footer-container">
      <div class="footer-left">
        <div class="footer__logo">
          <nuxt-icon name="logo" filled />
        </div>

        <div class="footer__social social-list">
          <a
            v-for="socialIcon in socialIcons"
            :href="socialIcon.url"
            :class="['social-icon', `social-icon--${socialIcon.name}`]"
          >
             <nuxt-icon :name="socialIcon.name" filled />
          </a>
        </div>

        <div class="footer__navigation">
          <ul class="footer-nav__container">
            <li class="footer-nav__item">
              <nuxt-link
                :to="navigationData.root"
                class="footer-nav__link footer-nav__link--home"
              >
                {{ navigationData.rootTitle }}
              </nuxt-link>
            </li>
            <li
              v-for="(navItem, key) in navigationData.navItems"
              :key="key"
              class="footer-nav__item"
            >
              <nuxt-link
                :to="navItem.url"
                class="footer-nav__link"
                :class="['footer-nav__link--' + key]"
              >
                {{ navItem.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer__invite">
          <psm-link
            class="invite-link"
            url="javascript:void(0)"
            text="Get an invite"
            icon="arrow-right"
            is-external
            has-hover-underline
            is-uppercase
          />
        </div>

        <div class="footer__copyright">
          <p>{{ footerData.copyright }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type { FooterData, FooterSocialItem } from '@/interfaces/components/app/footer.interface';
import type { NavBarData } from '@/interfaces/components/app/nav.interface';

import FooterJson from '@/stores/footer.json';
import NavigationData from '@/stores/navigation.json';

const footerData: FooterData = FooterJson;
const navigationData: NavBarData = NavigationData;
const socialIcons: FooterSocialItem[] = footerData.socialItems;
</script>

<style lang="scss" scoped>
.footer {
  height: auto;
  background-color: $color-body-dark;
  padding: 50px 0;
  color: $color-text-light;

  &-left,
  &-right {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  &-left {
    margin-bottom: 80px;
  }

  &__logo {
    margin-bottom: 30px;

    svg {
      .website-logo-font {
        fill: $color-text-light;
      }
    }
  }

  &__social {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 45px;

    .social-icon {
      :deep(svg) {
        & > path {
          transition: fill $animation-speed ease-out;
          fill: $color-text-light;
        }
      }

      &--facebook {
        &:hover {
          :deep(svg) {
            & > path {
              fill: url('#gradient-facebook');
            }
          }
        }
      }

      &--youtube {
        &:hover {
          :deep(svg) {
            & > path {
              fill: url('#gradient-youtube');
            }
          }
        }
      }

      &--twitter {
        &:hover {
          :deep(svg) {
            & > path {
              fill: url('#gradient-twitter');
            }
          }
        }
      }

      &--pinterest {
        &:hover {
          :deep(svg) {
            & > path {
              fill: url('#gradient-pinterest');
            }
          }
        }
      }

      &--instagram {
        &:hover {
          :deep(svg) {
            & > path {
              fill: url('#gradient-instagram');
            }
          }
        }
      }
    }
  }

  &-nav {
    &__container {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 18px;
      padding: 0;
    }

    &__link {
      color: $color-text-light;
      text-decoration: none;

      &:hover {
        opacity: .4;
        color: $color-text-light;
      }
    }
  }

  &__invite {
    margin-bottom: 30px;

    .invite-link {
      color: $color-white;
      font-weight: $font-weight-bold;
    }
  }

  &__copyright {
    opacity: .6;
  }
}

@include media-breakpoint-up(md) {
  .footer {
    padding: 65px 0;

    &-container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    &-left {
      align-items: flex-start;
      margin: 0;
    }

    &-right {
      align-items: flex-end;
      justify-content: space-between;
    }

    &__logo {
      order: 0;
    }

    &__social {
      order: 2;
      margin-top: 45px;
      margin-bottom: 0;
    }

    &__navigation {
      order: 1;
    }

    &-nav {
      &__container {
        flex-flow: row nowrap;
        align-items: center;
        gap: 18px;
        padding: 0;
      }
    }

    &__copyright {
      p {
        margin-bottom: 0;
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  .footer {
    padding: 90px 0;

    &-left {
      justify-content: space-between;
      height: 144px;
    }

    &__navigation {
      position: absolute;
      left: 250px;
    }

    &-nav {
      &__container {
        flex-flow: column;
        align-items: flex-start;
        margin: 0;
      }
    }
  }
}
</style>
