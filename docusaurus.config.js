// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'e-Lite Research Group',
  tagline: 'e-Lite: Intelligent and Interactive Systems',

  url: 'https://elite.polito.it/',

  // GitHub
  projectName: 'elite-polito.github.io',
  organizationName: 'elite-polito',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
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

          {to: '/people', label: 'People', position: 'left'},

          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'researchSidebar',
            label: 'Research',
          },

          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'teachingSidebar',
            label: 'Teaching',
          },

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

          // {to: '/jobs', label: 'Jobs', position: 'left'},

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
    plugins: [
      [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { // http://bit.ly/polito-benessere-digitale
            to: '/teaching/',
            from: '/teaching/current-courses/559-01del-digital-wellbeing'
          },
          { // https://bit.ly/polito-iaw
            to: '/teaching/01dxu-iaw',
            from: '/teaching/current-courses/564-01dxu-iaw'
          },
          { // http://bit.ly/polito-design4dwb
            to: '/teaching/',
            from: '/teaching/current-courses/565-01gofiu-strategies-for-dwb'
          },
          { // http://bit.ly/polito-wa1
            to: '/teaching/01txy-wa1',
            from: '/teaching/current-courses/521-wa1'
          },
          { // https://bit.ly/polito-wa1-ah
            to: '/teaching/01txy-wa1',
            from: '/teaching/01txy-wa1-ah'
          },
          { // https://bit.ly/polito-wa1-ii
            to: '/teaching/',
            from: '/teaching/current-courses/556-01txyov-wa1'
          },
          { // http://bit.ly/polito-hcai
            to: '/teaching/',
            from: '/teaching/current-courses/516-01ujuiu-human-ai-interaction'
          },
          { // http://bit.ly/polito-hci
            to: '/teaching/02jsk-hci',
            from: '/teaching/current-courses/513-02jskov-hci'
          },
          { // bit.ly/tecn-progr
            to: '/teaching/past-courses/2024-03fyz-tdp',
            from: '/teaching-mainmenu-69/laurea-i-livello-mainmenu-82/164-03fyz-tecn-progr'
          },
          { // TdP removed from current courses
            to: '/teaching/past-courses/2024-03fyz-tdp',
            from: '/teaching/03fyz-tdp'
          },
          { // http://bit.ly/polito-informatica
            to: '/teaching/14bhd-informatica',
            from: '/teaching/current-courses/527-14bhd-info'
          },
          { // http://bit.ly/informatica-corno
            to: '/teaching/past-courses/12bhd-informatica-C',
            from: '/teaching-mainmenu-69/laurea-i-livello-mainmenu-82/94-12bhd'
          },
          { // Basi Dati (Laura)
            to: '/teaching/04afqpc-bdcin',
            from: '/teaching/current-courses/526-04afqpc'
          },
          { // http://bit.ly/polito-aw1
            to: '/teaching/01udf-aw1',
            from: '/teaching/current-courses/532-01udfov-aw1'
          },
          { // Python Dottorato Palermo
            to: '/teaching/past-courses/acsrs-Palermo',
            from: ['/teaching/python-dottorato', '/teaching/python-dottorato/intro']
          },
        ]
      }
      ],
      [
        "./plugins/extended-blog-plugin",
        {
          id: "news",
          showReadingTime: true,
          path: 'news',
          routeBasePath: 'news',
          blogTitle: 'News',
          blogDescription: 'Latest News from the e-Lite research group',
          blogSidebarTitle: 'Latest News',
          // blogSidebarCount: 20,
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
        },
      ],
    ],
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    stylesheets: ['https://use.fontawesome.com/releases/v6.4.0/css/svg-with-js.css'],

    // enable docusaurus faster
    future: {
      experimental_faster: true,
      v4: true,
    },
};

module.exports = config;
