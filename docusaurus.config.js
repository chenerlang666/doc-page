module.exports = {
  title: 'CAN Studio',
  tagline: 'We can code a can like a can canner can a can.', // one sentence description
  url: 'https://SUSTech-CANStudio.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'SUSTech-CANStudio', // Usually your GitHub org/user name.
  projectName: 'SUSTech-CANStudio.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CAN Studio',
      logo: {
        alt: 'SUSTech CANStudio Logo',
        src: 'img/logo.svg',
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
          href: 'https://github.com/SUSTech-CANStudio/',
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
          title: 'Community',
          items: [
            {
              label: 'Slack channel',
              href: 'https://canstudio-r.slack.com',
            },
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
              href: 'https://github.com/SUSTech-CANStudio',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CAN Studio @SUSTech`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/SUSTech-CANStudio/home-page/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
