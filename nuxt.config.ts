import { resolve } from 'path';

/**
 * .env data
 */
const { env } = process;
const environment = env.APP_ENV;
const enableDebug = env.ENABLE_DEBUG;
const devServerPort = env.APP_DEV_SERVER_PORT;

/**
 * Config data
 */
const isDev = environment === 'dev';
const isDebugEnabled = enableDebug === '1';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: isDev },
  debug: isDebugEnabled,

  devServer: {
    port: Number(devServerPort) || 3000,
  },

  alias: {
    '~': resolve(__dirname, './'),
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:map";
            @use "sass:color";
            @use "sass:meta";
            @use "sass:list";
            @use "sass:math";
            @import "@/assets/scss/abstracts/abstracts.scss";
            @import "@/assets/scss/vendor/bootstrap/custom";
            @import "@/assets/scss/vendor/bootstrap/functions";
          `,
          quietDeps: true,
          silenceDeprecations: [
            'color-functions',
            'global-builtin',
            'import',
            // 'mixed-decls',
            'legacy-js-api',
          ],
        },
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Photosnap Marketing Website',
      meta: [],
    },

    rootId: 'psm-root',
  },

  css: ['@/assets/scss/main.scss'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
    'nuxt-icons',
    'nuxt-typed-router',
  ],
});
