import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const githubIcon =
  '<svg class="navbar-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.69-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A10.95 10.95 0 0 1 12 6.16c.98 0 1.95.13 2.87.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.78 1.07.78 2.16v3.01c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"></path></svg>';

const instagramIcon =
  '<svg class="navbar-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8a5.6 5.6 0 0 1-5.6 5.6H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2m0 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>';

const facebookIcon =
  '<svg class="navbar-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"></path></svg>';

const tiktokIcon =
  '<svg class="navbar-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M15.5 3c.4 2.4 1.8 4 4.5 4.2v3.3c-1.6.1-3.1-.4-4.5-1.3v6.1c0 3.5-2.8 6.3-6.3 6.3S3 18.8 3 15.3 5.8 9 9.3 9c.4 0 .8 0 1.2.1v3.5c-.4-.1-.8-.2-1.2-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V3h3.3z"></path></svg>';

const config: Config = {
  title: 'Marketing Guidelines',
  tagline: 'Guidelines for branding and marketing content at CU.',
  favicon: 'img/seal.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://marketing1.carolinau.edu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ecastroerazo', // Usually your GitHub org/user name.
  projectName: 'ecastroerazo.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ecastroerazo/ecastroerazo.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    image: 'img/seal.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Carolina University Marketing Guidelines',
      logo: {
        alt: 'Carolina University Marketing Guidelines Logo',
        src: 'img/seal.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guidelines',
        },
        {
          href: 'https://github.com/ecastroerazo/ecastroerazo.github.io',
          html: githubIcon,
          className: 'navbar-icon-link',
          'aria-label': 'GitHub repository',
          title: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.instagram.com/carolinauniversity/',
          html: instagramIcon,
          className: 'navbar-icon-link',
          'aria-label': 'Instagram profile',
          title: 'Instagram',
          position: 'right',
        },
        {
          href: 'https://www.facebook.com/carolinauniv',
          html: facebookIcon,
          className: 'navbar-icon-link',
          'aria-label': 'Facebook page',
          title: 'Facebook',
          position: 'right',
        },
        {
          href: 'https://www.tiktok.com/@carolina_university',
          html: tiktokIcon,
          className: 'navbar-icon-link',
          'aria-label': 'TikTok profile',
          title: 'TikTok',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Carolina University. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
