module.exports = {
  title: '一口闰心',
  tagline: 'A scientific programmer who dreams of becoming a great product manager.', // one sentence description
  url: 'https://Airine.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Airine', // Usually your GitHub org/user name.
  projectName: 'Airine.github.io', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-162317692-1',
      anonymizeIP: true,
    },
    algolia: {
      appId: 'GIOOKJ2CWG',
      apiKey: 'a496900f7b7a6c841215541927378da2',
      indexName: 'aaron-xin',
      algoliaOptions: {},
    },
    navbar: {
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg'
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/project1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://www.notion.so/Notion-notes-41a54e26bd18461e87b6fabdfa26d43b',
          label: 'Notion',
          position: 'left',
        },
        {
          href: 'https://blog.aaron-xin.tech/about/',
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
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              href: 'https://blog.aaron-xin.tech/about/',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Notion',
              href: 'https://www.notion.so/Notion-notes-41a54e26bd18461e87b6fabdfa26d43b',
            },
            {
              label: 'Tags',
              to:'blog/tags'
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
              label: 'CAN Tech Co.,Ltd.',
              href: 'https://SUSTech-CANStudio.github.io',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/airine0119/'
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/runxin.tian'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/airine',
            }
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Samuel',
              href: 'https://hustergs.github.io'
            },
            {
              label: 'Imgchr',
              href: 'https://imgchr.com/album/tnSvn'
            }
          ]
        }
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
          admonitions: {},
        },
        blog: {
          postsPerPage: 4,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 一口闰心`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
