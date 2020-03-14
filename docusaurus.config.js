module.exports = {
  title: '一口闰心',
  tagline: 'A scientific programmer who dreams of becoming a great product manager.', // one sentence description
  url: 'https://blog.aaron-xin.tech',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'airine', // Usually your GitHub org/user name.
  projectName: 'airine.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'SUSTech CANStudio Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg'
      },
      links: [
        {
          to: 'docs/project1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/manual', 
          label: 'Team Manual', 
          position: 'right',
        },
        {
          href: 'https://github.com/airine/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Team Manual',
              to: 'docs/manual',
            },
          ],
        },
        {
          title: 'Organizations',
          items: [
            {
              label: 'CAN Studio',
              href: 'https://SUSTech-CANStudio.github.io',
            },
            {
              label: 'SUSTech',
              href: 'https://www.sustech.edu.cn'
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/airine',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 一口闰心`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/airine/home-page/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
