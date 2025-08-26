# Check Wallet Balance

Get the current balance of a Chimoney wallet.

## Endpoint

```apidoc
GET /v0.2/wallets/lookup
```

## Description

This endpoint allows you to retrieve the current balance and details of a Chimoney wallet. You can lookup wallets by email, phone number, or Chimoney tag.

## Authentication

Requires API key authentication. Include your API key in the request headers:

```apidoc
X-API-KEY: your_api_key_here
```

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Optional* | Email address associated with the wallet |
| `phone` | string | Optional* | Phone number associated with the wallet |
| `tag` | string | Optional* | Chimoney tag for the wallet |

*At least one parameter is required

## Example Request

### cURL

```bash
curl -X GET "https://api.chimoney.io/v0.2/wallets/lookup?email=user@example.com" \
  -H "X-API-KEY: your_api_key_here" \
  -H "Content-Type: application/json"
```

### JavaScript

```javascript
const response = await fetch('https://api.chimoney.io/v0.2/wallets/lookup?email=user@example.com', {
  method: 'GET',
  headers: {
    'X-API-KEY': 'your_api_key_here',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
```

## Example Response

### Success Response (200)

```json
{
  "status": "success",
  "data": {
    "id": "wallet_123456789",
    "email": "user@example.com",
    "phone": "+1234567890",
    "tag": "user123",
    "balance": {
      "USD": 150.75,
      "NGN": 62500.00,
      "GHS": 850.25
    },
    "created_at": "2024-01-15T10:30:00Z",
    "verified": true,
    "status": "active"
  }
}
```

### Error Response (404)

```json
{
  "status": "error",
  "error": "Wallet not found",
  "message": "No wallet found with the provided credentials"
}
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Response status ("success" or "error") |
| `data.id` | string | Unique wallet identifier |
| `data.email` | string | Email associated with the wallet |
| `data.phone` | string | Phone number associated with the wallet |
| `data.tag` | string | Chimoney tag for the wallet |
| `data.balance` | object | Balance in different currencies |
| `data.created_at` | string | ISO 8601 timestamp of wallet creation |
| `data.verified` | boolean | Whether the wallet is verified |
| `data.status` | string | Wallet status (active, suspended, etc.) |

## Error Codes

| Status Code | Error | Description |
|-------------|-------|-------------|
| 400 | Bad Request | Missing required parameters or invalid format |
| 401 | Unauthorized | Invalid or missing API key |
| 404 | Not Found | Wallet not found with provided credentials |
| 429 | Rate Limited | Too many requests |
| 500 | Internal Server Error | Server error occurred |

## Notes

- The balance object contains amounts in various supported currencies
- Only verified wallets can perform certain operations
- Rate limiting applies: 100 requests per minute per API key
- This endpoint does not reveal sensitive information like transaction history
