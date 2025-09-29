---
sidebar_position: 3
title: Step by Step 
---

# Step-by-Step Deployment Guide

This guide walks you through deploying your Docusaurus site to Vercel, a cloud platform for static sites and serverless functions.

## Prerequisites

Before deploying, ensure you have:

- ✅ A Docusaurus site configured and tested locally (see [Setup Guide](./setup.md))
- ✅ Your site pushed to a **public GitHub repository**
- ✅ A [Vercel account](https://vercel.com/) (free tier available)

:::warning[Important]
Your GitHub repository must be public for Vercel to access it. Private repositories require additional configuration or a paid Vercel plan.
:::

## Step 1: Connect to Vercel

### Create a Vercel Account

1. Go to [vercel.com](https://vercel.com/)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

### Import Your Repository

1. From your Vercel dashboard, click **Add New** → **Project**
2. You'll see a list of your GitHub repositories
3. Find your documentation site repository
4. Click **Import** next to the repository name

## Step 2: Configure Deployment Settings

Vercel will attempt to auto-detect your framework and settings. Verify the following configuration:

### Framework Detection

| Setting | Value | Notes |
|---------|-------|-------|
| **Framework Preset** | Docusaurus 2+ | Should auto-detect |
| **Root Directory** | `.` (leave blank) | Only change if Docusaurus is in a subfolder like `website/` |

### Build Settings

| Setting | Value | Notes |
|---------|-------|-------|
| **Build Command** | `yarn build` | Or `npm run build` if using npm |
| **Output Directory** | `build` | Should auto-detect |
| **Install Command** | `yarn install` | Should auto-detect |

:::tip
If Vercel doesn't auto-detect correctly, you can manually override these settings in the configuration panel.
:::

### Environment Variables (Optional)

If your site requires environment variables:

1. Scroll to **Environment Variables** section
2. Add key-value pairs (e.g., `API_KEY=your-key`)
3. Choose which environments to apply them to (Production, Preview, Development)

## Step 4: Deploy

1. Review all settings one final time
2. Click the **Deploy** button
3. Vercel will begin building your site

### What Happens During Deployment

You'll see real-time build logs showing:

- Installing dependencies
- Building your Docusaurus site
- Optimizing assets
- Deploying to Vercel's CDN

The first deployment typically takes 2-5 minutes.

## Step 5: Verify Deployment

Once the build completes successfully:

### Access Your Live Site

1. Vercel provides an automatic domain: `your-project-name.vercel.app`
2. Click the **Visit** button or the generated URL
3. Your Docusaurus site should load in a new tab

### Check Build Logs

If something went wrong:

1. Click on the **Deployments** tab
2. Select your deployment
3. Click **View Build Logs** to see detailed error messages

:::tip[Success Indicators]

- Green checkmark next to your deployment
- Status shows "Ready"
- Site loads correctly at the provided URL

:::

## Step 6: Configure Automatic Deployments

Vercel automatically sets up continuous deployment:

- **Every push to your main branch** triggers a new production deployment
- **Pull requests** create preview deployments with unique URLs
- **Rollbacks** are instant if you need to revert changes

### Branch Configuration

By default, Vercel deploys from your `main` branch. To change this:

1. Go to **Project Settings** → **Git**
2. Update the **Production Branch** setting
3. Save changes

## Step 7: Set Up Custom Domain (Optional)

To use your own domain instead of `vercel.app`:

1. Go to **Project Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Follow Vercel's instructions to update your DNS records
5. Wait for DNS propagation (usually 10-60 minutes)

Vercel automatically provides SSL certificates for all domains.

## Deployment Checklist

Use this checklist to ensure a smooth deployment:

- [ ] All changes committed and pushed to GitHub
- [ ] Site builds successfully locally with `yarn build`
- [ ] Repository is public on GitHub
- [ ] Vercel account connected to GitHub
- [ ] Framework preset set to Docusaurus 2+
- [ ] Build command is correct (`yarn build`)
- [ ] Output directory is `build`
- [ ] Environment variables configured (if needed)
- [ ] Deployment completed successfully
- [ ] Site accessible at Vercel URL
- [ ] Navigation and links working correctly

## Next Steps

Now that your site is deployed:

- Monitor your deployments in the Vercel dashboard
- Set up [custom domains](https://vercel.com/docs/concepts/projects/domains) if desired
- Configure [environment variables](https://vercel.com/docs/concepts/projects/environment-variables) for different environments
- Review [analytics](https://vercel.com/docs/concepts/analytics) to track site performance
- Check the [Troubleshooting Guide](./troubleshooting.md) if you encounter any issues

:::info
Every commit to your repository triggers a new deployment automatically. You can view all deployment history in your Vercel dashboard.
:::
