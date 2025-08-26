// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes, themes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Christine’s Technical Writing Portfolio",
	tagline: "My projects and writings",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://writetech-accelerator-portfolio-chr.vercel.app",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
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
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/CBID2/writetech-accelerator-portfolio-christinebelzie",
					// This tells docs pages to render API items correctly
					docItemComponent: "@theme/ApiItem",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/CBID2/writetech-accelerator-portfolio-christinebelzie",
					// Useful options to enforce blogging best practices
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
	// Plugins
	plugins: [
		[
			"docusaurus-plugin-openapi-docs",
			{
				docsPluginId: "chimoney",
				config: {},
			},
		],
	],
	themes: [`docusaurus-theme-openapi-docs`], // Configuration for OpenAPI plugin
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
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
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/CBID2",
							},
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
