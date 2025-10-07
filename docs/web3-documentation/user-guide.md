---
sidebar_position: 2
title: User Guide

---


# Lens Protocol User Guide

This is on getting started with Lens Protocol

## Table of Contents
- [Introduction](#introduction)
- [What You'll Need](#what-youll-need)
- [Getting Started](#getting-started)
- [Core Features](#core-features)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [FAQs](#faqs)
- [Additional Resources](#additional-resources)

---

## Introduction

### What is Lens?

Lens Protocol is a decentralized social network that puts you in complete control of your online presence. Unlike traditional platforms like X(Twitter) or Instagram where the company owns your profile and followers, Lens lets you own your social identity as a digital asset. Your profile, content, and connections belong to you and can be used across any application built on Lens.

Think of it like this: if Twitter shuts down tomorrow, you lose everything. With Lens, your profile and social connections are stored on the blockchain as NFTs, meaning they're truly yours. You can take them to any Lens-powered app without starting over.

### Key Benefits

By using Lens, you get the following: 

- **True Ownership:** Your profile is an NFT you actually own. No platform can take it away or ban you arbitrarily.
- **Portable Social Graph:** Use the same profile and followers across multiple apps without creating new accounts.
- **Creator Monetization:** Built-in features let you earn directly from your audience without middlemen taking large cuts.
- **Privacy Control:** You decide what data to share and with whom, with no hidden algorithms or data mining.
- **Censorship Resistance:** Your content lives on decentralized storage, making it nearly impossible to delete or censor.

---

## What You'll Need

Before you begin, make sure you have:

- [ ] **Internet connection:** A stable connection to access Lens apps
- [ ] **Compatible wallet:** MetaMask, Rainbow, Coinbase Wallet, or any WalletConnect-compatible wallet
- [ ] **Cryptocurrency:** 2-5 USD worth of MATIC (Polygon's native token) for gas fees
- [ ] **Web browser/Device:** Chrome, Firefox, Brave, or Safari. Mobile apps also available for iOS and Android

### Understanding Key Terms

Before we dive in, here are some Lens-specific terms you'll encounter:

| Term | Definition |
|------|------------|
| **Profile NFT** | Your Lens profile represented as a unique NFT. This is your portable identity across all Lens apps. |
| **Handle** | Your username on Lens (e.g., @alice.lens). Every handle ends with .lens |
| **Gas Fee** | A small transaction fee paid in MATIC to process blockchain operations. Usually $0.01-$0.50 per action. |
| **Wallet Address** | Your unique blockchain identifier (e.g., 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb). This is like your account number. |
| **Publication** | Any content you post—includes posts, comments, mirrors, and quotes. |
| **Mirror** | Lens's version of a retweet or share. Amplifies someone else's content to your followers. |
| **Collect** | Saving someone's post as an NFT. Can be free or paid, depending on the creator's settings. |
| **Follow NFT** | When someone follows you, they receive an NFT proving the connection on-chain. |
| **Social Graph** | The network of your followers and people you follow, stored permanently on the blockchain. |

---

## Getting Started

### Step 1: Set Up Your Wallet

Lens requires a Web3 wallet to store your profile NFT and sign transactions. We'll use MetaMask in this guide, but other wallets work similarly.

#### Installing MetaMask

1. **Download MetaMask**
   - Visit [metamask.io](https://metamask.io) (always verify the URL for security)
   - Click "Download" and select your browser (Chrome, Firefox, Brave, Edge)
   - Click "Add to Browser" and confirm the installation

2. **Create your wallet**
   - Open the MetaMask extension (click the fox icon in your browser toolbar)
   - Click "Create a New Wallet"
   - Set a strong password (you'll use this every time you unlock MetaMask)
   - **CRITICAL STEP:** Write down your 12-word Secret Recovery Phrase
     - Write it on paper—never store it digitally
     - Keep it somewhere safe like a safe or safety deposit box
     - This phrase is the ONLY way to recover your wallet if you lose access
     - Never share it with anyone—not even Lens or MetaMask support

3. **Add the Polygon Network**
   - Lens operates on Polygon (a Layer 2 blockchain that's faster and cheaper than Ethereum)
   - In MetaMask, click the network dropdown at the top (probably says "Ethereum Mainnet")
   - Click "Add Network" → "Add a network manually"
   - Enter these exact details:
     - **Network Name:** Polygon Mainnet
     - **New RPC URL:** `https://polygon-rpc.com`
     - **Chain ID:** `137`
     - **Currency Symbol:** MATIC
     - **Block Explorer URL:** `https://polygonscan.com`
   - Click "Save" and switch to the Polygon network

4. **Fund your wallet with MATIC**
   - You need MATIC to pay transaction fees on Polygon
   - **How much?** Start with $5-10 USD worth of MATIC (claiming a profile costs $0.50-$2)
   - **Where to get it:**
     - **Option 1:** Buy directly in MetaMask: Click "Buy" → Select a provider → Purchase MATIC on Polygon
     - **Option 2:** Buy on an exchange (Coinbase, Binance, Kraken) → Withdraw to your MetaMask address on Polygon network
     - **Option 3:** Use the [Polygon Bridge](https://wallet.polygon.technology/bridge) if you have ETH on Ethereum mainnet
   
   :::note[Important]
   Make sure you're getting MATIC on Polygon, not Ethereum mainnet. Ethereum fees are 50-100x higher.
   :::

### Step 2: Connect to a Lens App

Lens Protocol is the underlying infrastructure, but you interact with it through apps. Let's use Hey (formerly Lenster), the most popular Lens app.

1. **Visit Hey.xyz**
   - Go to [hey.xyz](https://hey.xyz) in your web browser
   - This is like opening Twitter, but it's decentralized

2. **Connect your wallet**
   - Click "Login" in the top-right corner
   - Click "Connect Wallet"
   - Select "MetaMask" from the wallet options
   - A MetaMask popup will appear—click "Connect"
   - Approve the connection request

3. **Sign up for Lens**
   - After connecting, click "Sign Up"
   - You'll be prompted to claim your Lens handle

4. **Choose your handle**
   - Enter your desired username (5-26 characters)
   - Can only contain letters, numbers, and underscores
   - All handles end with `.lens` (e.g., if you type "alice", your handle becomes @alice.lens)
   - Check if it's available—popular names are already taken
   - Try variations if your first choice is unavailable

5. **Claim your profile**
   - Click "Claim Profile" or "Sign Up"
   - MetaMask will open showing the transaction details
   - You'll see the gas fee (usually $0.50-$2 in MATIC)
   - Review the amount and click "Confirm"
   - Wait 10-30 seconds for the transaction to complete
   - Success! You now own a Lens Profile NFT! This NFT is now in your MetaMask wallet under the "NFTs" tab. You own it, and no one can take it away! 

### Step 3: Complete Your Profile

Make your profile discoverable and professional by doing the following:

1. **Add a profile picture**
   - Click your profile icon or avatar
   - Select "Settings" → "Profile"
   - Click "Upload" under profile picture
   - Choose an image (square format works best, max 5MB)
   - Click "Save" and approve the transaction in MetaMask
   - Wait for confirmation

2. **Add a cover photo**
   - In the same settings area, upload a cover image
   - Recommended size: 1500x500 pixels
   - Click "Save" and approve the transaction

3. **Write your bio**
   - Click "Edit Profile"
   - Add a description (up to 260 characters)
   - Share what you're interested in, what you create, or why you joined Lens
   - Click "Save" and approve the transaction

4. **Add optional metadata**
   - Website URL
   - Twitter handle (helps others find you)
   - Location
   - Interests or attributes

:::note 
Each profile update requires a small gas fee since the data is stored on-chain. Budget around $0.05-$0.20 per update.
:::

---

## Core Features

### Feature 1: Creating and Publishing Posts

**What it does:** Posts are Lens's version of tweets or status updates. They can include text, images, videos, polls, and links. Unlike traditional social media, your posts are stored on decentralized infrastructure (Arweave), making them permanent and tamper-proof.

**How to use it:**

1. Navigate to the home feed on Hey.xyz
2. Click the compose box that says "What's happening?"
3. Write your post (up to 3000 characters—much more than Twitter's limit)
4. Optional: Click the image icon to add photos or videos
5. Optional: Click the settings icon to configure who can see your post or collect it
6. Click "Post"
7. Approve the transaction in MetaMask
8. Wait for confirmation (10-30 seconds)

:::tip[Tips]
- Your first post is often free (sponsored by Hey) but subsequent posts cost $0.01-$0.10 in gas
- Posts are permanent—think before you post
- Use hashtags to increase discoverability
- Tag other users with @username.lens
:::

**Example:** "Just claimed my Lens profile! Excited to own my social graph for the first time. Who else is here from Twitter? #LensProtocol"

### Feature 2: Following and Building Your Network

**What it does:** Following someone on Lens creates an on-chain relationship. When you follow someone, you receive a Follow NFT proving the connection. This means you can prove you were an early follower or supporter of someone.

**How to use it:**

1. Search for profiles using the search bar (try @stani.lens or @lens.lens)
2. Click on a profile you want to follow
3. Click the "Follow" button
4. Approve the transaction (usually free due to gas sponsorship)
5. You'll receive a Follow NFT in your wallet

**Things to know:**
- Following is typically free on most Lens apps (apps sponsor the gas fees)
- Some profiles have "follow modules" that require conditions (e.g., owning a specific NFT)
- You can unfollow at any time
- Your follow NFT stays in your wallet even if you unfollow

### Feature 3: Collecting Posts

**What it does:** Collecting is like bookmarking, but with ownership. When you collect a post, you receive an NFT of that content. Creators can set posts as free or paid collects, creating a direct monetization path.

**How to use it:**

1. Find a post you want to collect
2. Click the collect icon (usually a hexagon or bookmark)
3. If there's a fee, it will be displayed (e.g., "Collect for 5 MATIC")
4. Review the collect settings:
   - Price (if any)
   - Number of collects allowed
   - Time limit (if any)
5. Click "Collect"
6. Approve the transaction (you'll pay the collect fee plus gas)
7. The post NFT appears in your wallet's NFT collection

**Things to know:**
- Collecting supports creators directly—they receive the payment
- Some posts unlock exclusive content or perks when collected
- Collected posts can potentially appreciate in value
- You can resell collected posts on NFT marketplaces

### Feature 4: Mirroring (Sharing)

**What it does:** Mirroring is Lens's version of retweeting or sharing. It amplifies content to your followers and shows your support for the creator.

**How to use it:**

1. Find a post you want to share
2. Click the mirror icon (usually circular arrows)
3. Choose:
   - **Mirror:** Share without commentary
   - **Quote:** Add your own thoughts before sharing
4. If quoting, type your commentary
5. Click "Mirror" or "Quote"
6. Approve the transaction

:::tip[Tips]
- Mirroring is usually free (gas-sponsored)
- Mirrors help content reach wider audiences
- The original creator can see who mirrored their content
:::

---

## Common Tasks

### Task 1: Making Your First Post

**What you'll need:**
- A claimed Lens profile
- Small amount of MATIC for gas (around $0.05-$0.10)

**Instructions:**

1. **Navigate to the compose area**
   - Open Hey.xyz and ensure you're logged in
   - You'll see a compose box at the top of your feed
   
2. **Write your content**
   - Click in the box and start typing
   - Keep it engaging—introduce yourself to the Lens community
   - Mention your interests or what brings you to Web3
   
3. **Add media (optional)**
   - Click the image icon to upload photos
   - Supports JPG, PNG, GIF (max 50MB)
   - Videos are also supported (max 500MB)

4. **Configure visibility**
   - Click the gear icon for advanced settings
   - Choose who can see your post:
     - **Public:** Everyone
     - **Followers:** Only people who follow you
   - Set collect options if you want to monetize

5. **Review and publish**
   - Double-check your text for typos
   - Ensure any links work correctly
   - Click "Post"

6. **Approve the transaction**
   - MetaMask will open
   - Review the gas fee (usually $0.01-$0.10)
   - Click "Confirm"

7. **Wait for confirmation**
   - Transaction typically completes in 10-30 seconds
   - You'll see a success message
   - Your post now appears on your profile and in followers' feeds

**What happens next:**
Your post is now permanently stored on Arweave (decentralized storage) and referenced on the Polygon blockchain. It will appear in any Lens app, not just Hey.

### Task 2: Finding and Following Interesting Profiles

**Instructions:**

1. **Use the search function**
   - Click the search bar at the top of Hey
   - Type keywords, names, or handles
   - Try searching for: @stani.lens (Lens founder), @lens.lens (official account)

2. **Browse suggestions**
   - Hey shows recommended profiles based on activity
   - Check the "Suggested" or "Who to Follow" section

3. **Explore trending posts**
   - Look at trending content to discover active users
   - Click on profiles of people whose content you like

4. **Follow your Twitter contacts**
   - Some tools can help you find Twitter friends on Lens
   - Search for familiar names or ask in Discord

5. **Join communities**
   - Search for hashtags related to your interests (#DeFi, #NFTs, #Web3)
   - Follow active participants in those conversations

### Task 3: Setting Up Collect Modules (Monetizing Your Content)

**Instructions:**

1. **Start creating a post**
   - Write your content as normal
   
2. **Click the collect settings icon**
   - Look for a gear or settings icon in the composer

3. **Choose collect type:**
   - **Free Collect:** Anyone can collect for free
   - **Fee Collect:** Set a price (e.g., 5 MATIC per collect)
   - **Limited Edition:** Cap the number of collects (e.g., only 100 people can collect)
   - **Time Limited:** Set an expiration date
   - **Follower Only:** Only your followers can collect

4. **Configure the collect module:**
   - If charging a fee, select the token (MATIC, WETH, USDC, etc.)
   - Enter the price per collect
   - Set collection limit if desired
   - Add referral rewards if you want others to promote your post

5. **Add recipient splits (optional):**
   - Split collect fees with collaborators
   - Enter wallet addresses and percentages

6. **Publish the post**
   - Review all settings
   - Click "Post" and approve the transaction

**Example use case:** You create a detailed guide on using a DeFi protocol. You set it as a paid collect for 10 MATIC with a limit of 50 collects. If all 50 people collect it, you earn 500 MATIC (minus gas fees).

---

## Troubleshooting

### Issue: Transaction Failed or Stuck

**Possible causes:**
- Insufficient MATIC balance for gas fees
- Network congestion on Polygon
- Gas price estimate is too low
- Nonce error (transaction order issue)

**Solutions:**
1. **Check your MATIC balance:**
   - Open MetaMask → Ensure you're on Polygon network
   - Verify you have at least $1-2 worth of MATIC available
   - If low, purchase more or bridge from another chain

2. **Increase gas fee:**
   - When approving a transaction, click "Edit" or "Advanced"
   - Increase the gas price by 10-20%
   - Click "Save" and retry

3. **Wait and retry:**
   - If the network is congested, wait 5-10 minutes
   - Cancel the stuck transaction: MetaMask → Activity → Select transaction → "Cancel"
   - Try your action again

4. **Clear pending transactions:**
   - Sometimes transactions get stuck due to nonce issues
   - MetaMask → Settings → Advanced → "Clear activity tab data"
   - Refresh the page and try again

### Issue: Can't Connect Wallet to Lens App

**Possible causes:**
- MetaMask is locked
- Wrong network selected (not Polygon)
- Browser extension conflicts
- Outdated wallet version

**Solutions:**
1. **Unlock MetaMask:**
   - Click the MetaMask icon
   - Enter your password
   - Ensure it's unlocked before connecting

2. **Switch to Polygon network:**
   - Open MetaMask
   - Click the network dropdown
   - Select "Polygon Mainnet"
   - If not listed, add it following Step 1 instructions

3. **Clear browser cache:**
   - Go to browser Settings → Privacy → Clear browsing data
   - Select "Cached images and files"
   - Do NOT select "Cookies" or you'll need to reconnect everything

4. **Try incognito/private mode:**
   - Open an incognito window
   - This tests if other extensions are interfering
   - If it works, disable other extensions one by one to find the culprit

5. **Update MetaMask:**
   - MetaMask → Settings → About
   - Check if an update is available
   - Update and restart your browser

### Issue: Profile Not Loading in Different Apps

**Possible causes:**
- Indexer delay (apps need time to sync with blockchain)
- Cache problems in the app
- Network connectivity issues

**How to fix:**
1. **Wait for indexing:**
   - After claiming your profile, wait 1-2 minutes
   - Blockchain data needs to sync with app servers

2. **Hard refresh the page:**
   - Windows/Linux: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
   - This clears cached data

3. **Try a different Lens app:**
   - If Hey isn't showing your profile, try Orb.ac or Phaver
   - This confirms your profile exists on-chain

4. **Verify on blockchain:**
   - Go to [Polygonscan.com](https://polygonscan.com)
   - Paste your wallet address in the search
   - Check that your profile claim transaction succeeded
   - Look for "NFT Transfer" in your transaction history

### Issue: Content Not Appearing After Posting

**Possible causes:**
- Transaction didn't confirm
- Indexer delay
- Content moderation filter (rare)

**Solutions:**
1. **Check transaction status:**
   - Open MetaMask → Activity
   - Find your post transaction
   - Ensure it shows "Confirmed" status

2. **Wait for indexing:**
   - Content can take 30-60 seconds to appear
   - Refresh your profile page

3. **Verify in different app:**
   - Open Orb.ac or another Lens app
   - Check if the post appears there
   - This confirms it's an indexing issue, not a failed transaction

4. **Check on-chain:**
   - Visit [Polygonscan.com](https://polygonscan.com)
   - Search your wallet address
   - Verify the "Create Publication" transaction succeeded

---

## FAQs

**Q: How much does it cost to use Lens Protocol?**

A: Initial setup costs $0.50-$2 to claim your profile (paid once). After that, most actions are free or very cheap:
- Following: Free (gas-sponsored by apps)
- Posting: $0.01-$0.10 per post
- Commenting: $0.01-$0.05 per comment
- Mirroring: Free (gas-sponsored)
- Collecting free posts: Free
- Collecting paid posts: Set price + ~$0.05 gas

**Q: Can I change my Lens handle?**

A: No, handles are permanent and cannot be changed. Choose carefully! However, you can:
- Create a new profile with a different handle (costs another claim fee)
- Transfer your profile NFT to a different wallet
- Display a different name in your profile metadata (separate from handle)

**Q: Is my data really permanent and uncensorable?**

A: Mostly yes, with some nuances:
- Your profile and publication metadata are on Polygon blockchain (permanent)
- Content itself is stored on Arweave or IPFS (decentralized, extremely durable)
- Individual apps can choose not to display your content in their interface
- However, your data exists on-chain and can be accessed through other apps or directly

**Q: What happens if Lens Protocol shuts down?**

A: Your data remains safe because it's decentralized:
- Your profile NFT stays in your wallet
- All publications remain on Arweave/IPFS
- Social graph data is on Polygon blockchain
- Other developers can build new apps to access the same data
- You'd still own your profile and could use it elsewhere

**Q: Can I use the same profile across different Lens apps?**

A: Absolutely! That's the core benefit of Lens. One profile works everywhere:
- Log into Hey, Orb, Phaver, Lenstube with the same wallet
- Your followers, posts, and identity appear in all apps
- No need to rebuild your audience for each platform

**Q: How do I delete a post?**

A: You can "hide" posts from app interfaces, but blockchain data is permanent:
- In Hey, click the three dots on your post → "Delete"
- This removes it from most apps' displays
- However, the data remains on-chain and can be accessed via blockchain explorers
- Think carefully before posting—treat it like a permanent record

**Q: What should I do if I sent funds to the wrong address?**

A: Unfortunately, blockchain transactions are irreversible:
- Double-check addresses before confirming transactions
- If you sent to the wrong address, the funds are gone unless that person returns them
- Some explorers let you leave comments asking for returns, but don't count on it
- Prevention is key: always verify addresses character by character

**Q: Can I make money on Lens?**

A: Yes! Multiple monetization options:
- Paid collects: Charge for people to collect your posts
- Tips: Receive direct payments from supporters
- NFT sales: Sell collected posts on secondary markets
- Token-gated content: Charge for access to exclusive posts
- Sponsorships: Brands pay creators to promote products

**Q: Is Lens on mobile?**

A: Yes! Options include:
- Hey.xyz works in mobile browsers
- Phaver has dedicated iOS and Android apps
- Buttrfly is mobile-optimized
- Use MetaMask mobile app for wallet functions
- Mobile experience is improving rapidly

---


### Community & Support

Need even more support or want to contribute? Check out our socials! 
- **Discord:** [lens.xyz/discord](https://discord.com/invite/lensprotocol)

- **Twitter:** [@LC](https://x.com/LC)


- **GitHub:** [Lens protocol](https://github.com/lens-protocol)



---


