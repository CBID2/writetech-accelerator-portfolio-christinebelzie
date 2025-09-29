---
sidebar_position: 2
title: Setup 
---

# Setup

This guide covers how to install and configure Docusaurus, a static site generator designed for creating documentation websites.

## Prerequisites

Before installing Docusaurus, ensure you have the following installed on your machine:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/en/download/)
- **Yarn** (recommended package manager) - [Download here](https://yarnpkg.com/)

To verify your installations, run:

```bash
node --version
yarn --version
```

## Installing Docusaurus

### 1. Clone the Classic Template

Navigate to your project directory and run:

```bash
npx degit facebook/docusaurus/examples/classic . --force
```

This command clones the [classic template](https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/classic) directly into your current directory. The `--force` flag ensures files are copied even if the directory isn't empty.

### 2. Install Dependencies

Install all required packages:

```bash
yarn install
```

This creates a `node_modules` folder with all the dependencies Docusaurus needs to run.

## Project Structure

After installation, your project will have this structure:

```arduino
my-website/
├── blog/
│   └── (blog posts)
├── docs/
│   └── intro.md
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
│   └── (static assets)
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

**Key files and directories:**

- **`docs/`** - Contains all your documentation markdown/MDX files
- **`blog/`** - Contains blog posts (optional)
- **`src/pages/`** - Custom standalone pages (like landing pages)
- **`static/`** - Static assets (images, files) that are copied to the build output
- **`docusaurus.config.js`** - Main configuration file for your site
- **`sidebars.js`** - Defines the sidebar navigation structure

## Configuring Docusaurus

### Basic Configuration

Open `docusaurus.config.js` and update the basic settings:

```javascript
module.exports = {
  title: 'My Documentation Site',
  tagline: 'Documentation made easy',
  url: 'https://your-site.vercel.app',
  baseUrl: '/',
  organizationName: 'your-github-username',
  projectName: 'your-repo-name',
  // ... other settings
};
```

**Important fields:**

- `title` - Your site's name (appears in browser tab)
- `tagline` - Brief description of your site
- `url` - Your production URL (will be your Vercel domain)
- `baseUrl` - Base URL path (usually `/` for root deployment)

### Configuring the Sidebar

The `sidebars.js` file controls your documentation's navigation structure. Here's a basic example:

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['setup', 'configuration'],
    },
  ],
};
```

:::warning[Important]
Document IDs in `sidebars.js` must match your actual file paths. For example, if your file is at `docs/devops-cloud/setup.md`, reference it as `devops-cloud/setup`.
:::

### Adding Documentation Content

Create new documentation by adding markdown files to the `docs/` folder:

1. Create a new file (e.g., `docs/my-doc.md`)
2. Add front matter at the top:

```markdown
---
id: my-doc
title: My Document
sidebar_label: My Doc
---

Your content here...
```

3. Reference the document in `sidebars.js` using its `id`

## Testing Locally

Before deploying, always test your site locally:

```bash
yarn start
```

This command:

- Starts a local development server
- Opens your site at [http://localhost:3000](http://localhost:3000)
- Enables hot reloading (changes appear automatically)

### Building for Production

To test the production build locally:

```bash
yarn build
yarn serve
```

The `build` command creates an optimized production build in the `build/` directory. The `serve` command lets you preview it locally.

:::tip
Always run `yarn build` locally before deploying to catch any build errors early.
:::

## Committing Your Changes

Once your site is configured, commit your changes to Git:

```bash
git add .
git commit -m "Configure Docusaurus site"
git push origin main
```

## Next Steps

With Docusaurus installed and configured, you're ready to deploy! Continue to the [Step-by-Step Deployment Guide](./step_by_step.md) to learn how to publish your site on Vercel.
