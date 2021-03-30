/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dozer Tech Blog',
  tagline: 'Dozer Tech Blog',
  url: 'https://dozer-jang.github.io',
  baseUrl: '/git-blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dozer-jang', // Usually your GitHub org/user name.
  projectName: 'git-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dozer',
      logo: {
        alt: 'Dozer Blog',
        src: 'img/logo.png',
      },
      items: [
        { 
          to: '/', 
          label: 'Blog', 
          position: 'left',
        },
        {
          href: 'https://github.com/dozer-jang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dotat-jang',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: false,
          path: 'blog',
          routeBasePath: '/',
          blogTitle: 'Dozer blog!',
          blogDescription: 'Dozer blog!',
          blogListComponent: '@theme/BlogListPage',
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
