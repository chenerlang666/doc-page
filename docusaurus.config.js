module.exports = {
  title: '一口闰心',
  tagline: 'A scientific programmer who dreams of becoming a great product manager.', // one sentence description
  url: 'https://Airine.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Airine', // Usually your GitHub org/user name.
  projectName: 'Airine.github.io', // Usually your repo name.
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
          href: 'https://www.notion.so/Notion-notes-41a54e26bd18461e87b6fabdfa26d43b',
          label: 'Notion',
          position: 'left',
        },
        {
          to: 'docs/about', 
          label: 'About', 
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
              label: 'About',
              to: 'docs/about',
            },
            {
              label: 'Notion',
              href: 'https://www.notion.so/Notion-notes-41a54e26bd18461e87b6fabdfa26d43b',
            }
          ],
        },
        {
          title: 'Organizations',
          items: [
            {
              label: 'SUSTech',
              href: 'https://www.sustech.edu.cn'
            },
            {
              label: 'CAN Studio',
              href: 'https://SUSTech-CANStudio.github.io',
            },
            {
              label: 'Citric Acid Network Technology Co.,Ltd.',
              href: 'https://SUSTech-CANStudio.github.io',
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
