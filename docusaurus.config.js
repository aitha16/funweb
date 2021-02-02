module.exports = {
  title: 'Zomato',
  tagline: 'Food',
  url: 'https://myzomato.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zLogo.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },
  themeConfig: {
    announcementBar: {
          id: 'gettheapp',
          content: '<a target="_blank" href="https://www.zomato.com/mobile">Get tapp</a>',
          backgroundColor: '#d61e1e',
          textColor: 'white',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      style: 'primary',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/zLogo.svg',
      },
      
      items: [
        {
          
          type: 'localeDropdown',
          position: 'right',
        },
        {
          id: 'ttt',
          label: 'Get the App',
          href: 'https://www.zomato.com/mobile',
          position: 'right',
        },
        {
          id: 'ttt',
          href: 'https://zomato.com',
          label: 'Order Now!',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Zomato',
          items: [
            {
              label: 'About Us',
              href: 'https://www.zomato.com/about',
            },
            {
              label: 'Culture',
              href: 'https://culture.zomato.com/',
            },
          ],
        },
        {
          title: 'For Foodies',
          items: [
            {
              label: 'Code of Conduct',
              href: 'https://www.zomato.com/policies',
            },
            {
              label: 'Community',
              href: 'http://community.zomato.com/',
            },
            {
              label: 'Developers',
              href: 'https://developers.zomato.com/',
            },
          ],
        },
      ],
      logo: {
        alt: 'zomato',
        src: 'img/zLogo.svg'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Zomato Private Limited`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
    
          editUrl:
            'https://github.com/aitha16/funweb/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/aitha16/funweb/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
