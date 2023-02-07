// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'e-Lite Research Group',
  tagline: 'e-Lite: Intelligent and Interactive Systems',

  url: 'https://elite-polito.github.io/',

  // GitHub
  projectName: 'elite-polito.github.io',
  organizationName: 'elite-polito',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          path: 'news',
          routeBasePath: 'news',
          blogTitle: 'News',
          blogDescription: 'Latest News from the e-Lite research group',
          blogSidebarTitle: 'Latest News',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Politecnico di Torino`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent news posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        }
      },
      navbar: {
        title: 'e-Lite',
        logo: {
          alt: 'e-Lite Logo',
          src: 'img/logo_elite.png',
        },
        items: [
          {to: '/news', label: 'News', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'teaching',
          //   position: 'left',
          //   label: 'Teaching',
          // },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'teachingSidebar',
            label: 'Teaching',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'researchSidebar',
            label: 'Research',
          },
          {to: '/people', label: 'People', position: 'left'},
          {
            type: 'dropdown',
            label: 'Thesis',
            activeClassName: "navbar__link--active",
            activeBasePath: '/thesis-',
            to:'/thesis-offers',
            items: [
              {to:'/thesis-offers', label: 'Offers'},
              // {to:'/thesis-ongoing', label: 'Ongoing'},
              {to:'/thesis-completed', label: 'Completed'},
            ],
            position: 'left',
          },
          {to: '/jobs', label: 'Jobs', position: 'left'},



          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        // style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'News',
        //         to: '/news',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Politecnico di Torino &mdash; Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
