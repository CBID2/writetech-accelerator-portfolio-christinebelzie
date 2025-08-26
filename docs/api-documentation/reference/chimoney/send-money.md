# Send Money

Send money to beneficiaries through various payout methods including bank transfers, mobile money, and gift cards.

## Endpoint

```apidoc
POST /v0.1/payouts/chimoney
```

## Description

This endpoint allows you to send money to one or multiple beneficiaries using different payout methods. Recipients can receive funds via bank transfer, mobile money, airtime, or gift cards depending on their location and preferences.

## Authentication

Requires API key authentication via the `X-API-KEY` header.

## Request Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `X-API-KEY` | string | Yes | Your Chimoney API key |
| `Content-Type` | string | Yes | `application/json` |

## Request Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chimoneys` | array | Yes | Array of payout objects |
| `turnOffNotification` | boolean | No | Disable email notifications (default: false) |

### Chimoney Object Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Recipient's email address |
| `phone` | string | No | Recipient's phone number (required for mobile money) |
| `valueInUSD` | number | Yes | Amount to send in USD |
| `redeemData` | object | No | Payout method configuration |

### Redeem Data Object (Optional)

| Field | Type | Description |
|-------|------|-------------|
| `walletID` | string | Recipient's Chimoney wallet ID |
| `countryToSend` | string | Country code (e.g., "NG", "GH", "US") |
| `productId` | string | Product/service ID for gift cards |

## Example Request

### cURL

```bash
curl -X POST "https://api.chimoney.io/v0.1/payouts/chimoney" \
  -H "X-API-KEY: your-api-key-here" \
  -H "Content-Type: application/json" \
  -d '{
    "chimoneys": [
      {
        "email": "recipient@example.com",
        "phone": "+2341234567890",
        "valueInUSD": 50,
        "redeemData": {
          "countryToSend": "NG"
        }
      }
    ],
    "turnOffNotification": false
  }'
```

### JavaScript (Axios)

```javascript
const axios = require('axios');

const payoutData = {
  chimoneys: [
    {
      email: "recipient@example.com",
      phone: "+2341234567890",
      valueInUSD: 50,
      redeemData: {
        countryToSend: "NG"
      }
    }
  ],
  turnOffNotification: false
};

const options = {
  method: 'POST',
  url: 'https://api.chimoney.io/v0.1/payouts/chimoney',
  headers: {
    'X-API-KEY': 'your-api-key-here',
    'Content-Type': 'application/json'
  },
  data: payoutData
};

axios(options)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

## Example Response

### Success (200 OK)

```json
{
  "status": "success",
  "data": {
    "paymentLink": "https://dash.chimoney.io/pay?issueID=12345",
    "chimoneys": [
      {
        "id": "payout_12345",
        "email": "recipient@example.com",
        "phone": "+2341234567890",
        "valueInUSD": 50,
        "status": "pending",
        "issueDate": "2024-08-26T10:30:00Z",
        "redeemData": {
          "countryToSend": "NG"
        }
      }
    ]
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Request status (`success` or `error`) |
| `data.paymentLink` | string | Link for recipient to claim payment |
| `data.chimoneys` | array | Array of processed payout objects |
| `data.chimoneys[].id` | string | Unique payout transaction ID |
| `data.chimoneys[].status` | string | Payout status (`pending`, `completed`, `failed`) |
| `data.chimoneys[].issueDate` | string | ISO timestamp when payout was created |

## Error Responses

### 400 Bad Request

```json
{
  "status": "error",
  "message": "Invalid request format or missing required fields",
  "code": "INVALID_REQUEST",
  "details": {
    "field": "email",
    "message": "Valid email address is required"
  }
}
```

### 401 Unauthorized

```json
{
  "status": "error",
  "message": "Invalid or missing API key",
  "code": "UNAUTHORIZED"
}
```

### 402 Payment Required

```json
{
  "status": "error",
  "message": "Insufficient wallet balance",
  "code": "INSUFFICIENT_FUNDS"
}
```

## Payout Methods

Chimoney supports multiple payout methods:

- **Bank Transfer**: Direct deposit to bank accounts (130+ countries)
- **Mobile Money**: Mobile wallet payments (10+ countries)
- **Airtime**: Mobile phone top-up (10+ countries)
- **Gift Cards**: Digital gift cards for popular retailers
- **Chimoney Wallet**: Direct wallet-to-wallet transfers

## Common Use Cases

- Bulk payouts for freelancers or contractors
- Reward distribution for promotions or contests
- Cross-border remittances
- Employee salary payments
- Marketplace vendor payments

## Notes

- Minimum payout amount is $1 USD
- Maximum single payout varies by country and method
- Recipients receive email notifications unless disabled
- Payouts are processed in real-time for most methods
- Currency conversion is handled automatically
- Transaction fees may apply based on payout method
