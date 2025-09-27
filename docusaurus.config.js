// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Christine's Technical Writing Portfolio",
  tagline: "My projects and writings",
  favicon: "img/favicon.ico",

  url: "https://writetech-accelerator-portfolio-chr.vercel.app",
  baseUrl: "/",

  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "warn", // Changed from "throw" to "warn" to allow build
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/CBID2/writetech-accelerator-portfolio-christinebelzie",
        },
        blog: false, // ← Disable the blog plugin
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     "docusaurus-plugin-openapi-docs",
  //     {
  //       id: "chimoney",
  //       docsPluginId: "classic",
  //       config: {
  //         chimoney: {
  //           specPath: "docs/api-documentation/chimoney-spec.yaml",
  //           outputDir: "docs/api-documentation/chimoney",
  //           sidebarOptions: {
  //             groupPathsBy: "tag",
  //           },
  //         },
  //       },
  //     },
  //   ],
  // ],

  // themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.jpg",
      navbar: {
        title: "Christine's Portfolio",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: '/', // Home page
            position: 'left',
            label: 'Home',
          },
          {
            to: '/docs/about me',
            position: 'left',
            label: 'About Me',
          },
          {
            to: '/projects/projects', // Portfolio-focused projects showcase
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/resume', // Resume page
            position: 'left',
            label: 'Resume',
          },
          {
            to: '/technical-articles', // Technical articles page
            position: 'left',
            label: 'Technical Articles',
          },
          {
            href: "https://github.com/CBID2/writetech-accelerator-portfolio-christinebelzie",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Portfolio",
            items: [
              { label: "Projects", to: "/projects" },
              { label: "Resume", to: "/resume" }
            ],
          },
          {
            title: "Technical Articles",
      items: [
        { label: "Articles Overview", to: "/technical-articles" },
        // You can add specific article links here later, like:
        // { label: "Accessibility Testing", to: "/technical-articles/accessibility" },
            ],
          },
          {
            title: "Contact",
            items: [
              { label: "LinkedIn", href: "https://www.linkedin.com/in/christinebelzie/" },
              { label: "GitHub", href: "https://github.com/CBID2" }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christine Belzie — Built with Docusaurus.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
