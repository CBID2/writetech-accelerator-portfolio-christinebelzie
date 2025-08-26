// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Christine’s Technical Writing Portfolio",
  tagline: "My projects and writings",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://writetech-accelerator-portfolio-chr.vercel.app",
  baseUrl: "/",

  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
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
          // Disable server-side generation to fix build issues
          ssg: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/CBID2/writetech-accelerator-portfolio-christinebelzie",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "chimoney",
        docsPluginId: "classic",
        config: {
          chimoney: {
            specPath: "docs/api-documentation/chimoney-spec.yaml",
            outputDir: "docs/api-documentation/chimoney",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Christine’s Portfolio",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "profileSidebar",
            position: "left",
            label: "About Me",
          },
          {
            type: "docSidebar",
            sidebarId: "toolingSidebar",
            position: "left",
            label: "Docs Tooling",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            position: "left",
            label: "API Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
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
            title: "Docs",
            items: [
              {
                label: "About Me",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/christinebelzie/",
              },
              {
                label: "X(Twitter)",
                href: "https://x.com/CodesChrissy",
              },
            ],
          },
          {
            title: "More",
            items: [
              { label: "Blog", to: "/blog" },
              { label: "GitHub", href: "https://github.com/CBID2" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built by Christine Belzie– WriteTech Accelerator Programme 2025.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
