---
id: getting-started
title: Getting Started
---

Welcome! This guide will teach you how to use Chimoney's API to authenticate your requests and make your first API call.

## API User Requirements

Before you start, you need to have the following:

- **A Chimoney Developer Account:** This is where you get your API keys. Go to the [Chimoney Developer Portal](https://chimoney.io/) to get them
- **API Key:** This will give you access to the API. Keep it secure and never share it publicly

## API Base URL

To start a request to the API, use this base URL:

**Production:**

```apidoc
https://api.chimoney.io
```

All endpoints are relative to this base URL. For example, to check your wallet balance, you would make a request to:

```apidoc
https://api.chimoney.io/v0.1/accounts/wallet-balance
```

## Authentication

The Chimoney API uses API Key authentication. Include these headers with every API request:

| Header Name    | Value               | Purpose                              |
|----------------|---------------------|--------------------------------------|
| `Content-Type` | `application/json`  | Specifies the format for the request |
| `X-API-KEY`    | `your_api_key_here` | Your unique API key                  |

## Your First API Call

Let's test your setup by checking your wallet balance:

### Using cURL

```bash
curl -X GET "https://api.chimoney.io/v0.1/accounts/wallet-balance" \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json"
```

### Using JavaScript

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.chimoney.io/v0.1/accounts/wallet-balance',
  headers: {
    'X-API-KEY': 'your_api_key_here',
    'Content-Type': 'application/json'
  }
};

axios(options)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Expected Response

If your request succeeds, you'll receive a response like this:

```json
{
  "status": "success",
  "data": {
    "walletBalance": {
      "USD": 150.75,
      "NGN": 62000.00,
      "GHS": 850.50
    },
    "totalBalanceUSD": 150.75,
    "lastUpdated": "2024-08-26T10:30:00Z"
  }
}
```

This response confirms that your API key is valid and you can successfully access the API.

## Common Headers

All API requests should include these headers:

```apidoc
Content-Type: application/json
X-API-KEY: your_api_key_here
```

## Error Handling

If something goes wrong, you'll receive an error response:

```json
{
  "status": "error",
  "message": "Invalid or missing API key",
  "code": "UNAUTHORIZED"
}
```

Common error codes:

- `UNAUTHORIZED` - Invalid or missing API key
- `INVALID_REQUEST` - Malformed request or missing required fields
- `INSUFFICIENT_FUNDS` - Not enough balance for the operation

## What's Next?

Congratulations, you just made your first API call! 🥳 Now you're ready to explore the main endpoints:

- **[Check Wallet Balance](./reference/chimoney/check-wallet-balance)** - View your account balance
- **[Send Money](./reference/chimoney/send-money)** - Send payments to recipients
- **[Get Transfer Status](./reference/chimoney/get-transfer-status)** - Track your transactions
