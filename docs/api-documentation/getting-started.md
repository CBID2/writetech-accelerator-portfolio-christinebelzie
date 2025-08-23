---
id: getting-started
title: Getting Started
---

 Welcome! 😄 This guide will teach you how to use Chimoney's API to authenticate your requests and make your own API call.

## API User Requirements

 Before you start, you need to have the following:

- **A Chimoney Developer Account:** This is where you get your API keys. Go to the [Chimoney Developer Portal](https://chimoney.io/) to get them
- **API Key:** This will give you access to the API. Remember to keep it a secret! 🤫

## API base URL

To start a request to the API, start with this base URL:

**Sandbox (for testing):**
`https://api-v2-sandbox.chimoney.io/v0.2`

**Production (for live transactions):**
`https://api-v2.chimoney.io/v0.2`

:::tip Reminder
It is best to test this request in sandbox before moving to production
:::

## Authentication

The Chimoney API can be called using your API Key. From there, implement with the following headers for an API request:

| Header Name    | Value               | Purpose                              |
|----------------|---------------------|--------------------------------------|
| `Content-Type` | `application/json`  | Specifies the format for the request |
| `X-API-KEY`    | `your_api_key_here` | Your unique API key                  |

## Your First API Call

Let's test your setup with a simple request:

```bash
curl -X GET \
  <https://api-v2-sandbox.chimoney.io/v0.2/info/ping> \
  -H 'Content-Type: application/json' \
  -H 'X-API-KEY: your_sandbox_api_key_here'
```

Here's the expected response if your request succeeds:

```json
{
  "status": "success",
  "message": "API is working correctly",
  "data": {
    "version": "v0.2.4"
  }
}
```

Congratulations! :partying_face:  This response confirms that your API key is valid and the API can be reached.

## What's Next?

Now you're ready to explore other endpoints! 😄 If you need some ideas on which ones to explore, consider starting with the following:

- **Info: List Supported Mobile Money Codes**
- **Payouts – Payout Mobile Money (Momo)**
- **MultiCurrency Wallets**
