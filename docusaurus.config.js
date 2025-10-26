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
  favicon: "img/logo.png",

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

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XXXXXXXXXX', // Replace with your actual Google Analytics 4 Measurement ID
        anonymizeIP: true,
      },
    ],
    // [
    //   "docusaurus-plugin-openapi-docs",
    //   {
    //     id: "chimoney",
    //     docsPluginId: "classic",
    //     config: {
    //       chimoney: {
    //         specPath: "docs/api-documentation/chimoney-spec.yaml",
    //         outputDir: "docs/api-documentation/chimoney",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //         },
    //       },
    //     },
    //   },
    // ],
  ],

  // themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Google Analytics configuration
      analytics: {
        trackingID: 'G-MYPFH9VS7P',
        anonymizeIP: true, // Enable IP anonymization
      },
      image: "img/social-card.jpg",
      navbar: {
        title: "Christine Belzie's Portfolio",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
            className: 'navbar__item--home',
          },
          {
            to: '/docs/about me',
            position: 'left',
            label: 'About Me',
            className: 'navbar__item--about',
          },
          {
            to: '/projects/projects',
            position: 'left',
            label: 'Projects',
            className: 'navbar__item--projects',
          },
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'documentation-tooling/intro',
                label: 'Documentation Tooling',
              },
              {
                type: 'doc',
                docId: 'api-documentation/intro',
                label: 'API Documentation',
              },
            ],
          },
          {
            to: '/technical-articles',
            position: 'left',
            label: 'Technical Articles',
          },
          {
            to: '/resume',
            position: 'right',
            label: 'Resume',
            className: 'navbar__item--resume',
          },
          {
            type: 'search',
            position: 'right',
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
              { label: "Projects", to: "/projects/projects" },
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
