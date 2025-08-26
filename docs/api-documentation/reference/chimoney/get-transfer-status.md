# Get Transfer Status

Retrieve the current status and details of a money transfer transaction.

## Endpoint

```apidoc
GET /v0.1/payouts/status/{transactionId}
```

## Description

This endpoint allows you to check the status of a previously initiated money transfer. Use this to track whether a payout has been completed, is still pending, or has encountered any issues.

## Authentication

Requires API key authentication via the `X-API-KEY` header.

## Request Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `X-API-KEY` | string | Yes | Your Chimoney API key |
| `Content-Type` | string | Yes | `application/json` |

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transactionId` | string | Yes | The unique transaction ID returned from the send money endpoint |

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `subAccount` | string | No | Sub-account identifier if using sub-accounts |

## Example Request

### cURL

```bash
curl -X GET "https://api.chimoney.io/v0.1/payouts/status/payout_12345" \
  -H "X-API-KEY: your-api-key-here" \
  -H "Content-Type: application/json"
```

### JavaScript (Axios)

```javascript
const axios = require('axios');

const transactionId = 'payout_12345';

const options = {
  method: 'GET',
  url: `https://api.chimoney.io/v0.1/payouts/status/${transactionId}`,
  headers: {
    'X-API-KEY': 'your-api-key-here',
    'Content-Type': 'application/json'
  }
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
    "id": "payout_12345",
    "status": "completed",
    "email": "recipient@example.com",
    "phone": "+2341234567890",
    "valueInUSD": 50,
    "valueInLocalCurrency": 41000,
    "localCurrency": "NGN",
    "payoutMethod": "bank_transfer",
    "recipientDetails": {
      "bankName": "Access Bank",
      "accountNumber": "0123456789",
      "accountName": "John Doe"
    },
    "timeline": {
      "created": "2024-08-26T10:30:00Z",
      "processing": "2024-08-26T10:31:00Z",
      "completed": "2024-08-26T10:35:00Z"
    },
    "transactionFee": 2.5,
    "exchangeRate": 820.0,
    "reference": "REF_ABC123XYZ",
    "issueDate": "2024-08-26T10:30:00Z"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Request status (`success` or `error`) |
| `data.id` | string | Unique transaction identifier |
| `data.status` | string | Transaction status (see Status Values below) |
| `data.email` | string | Recipient's email address |
| `data.phone` | string | Recipient's phone number |
| `data.valueInUSD` | number | Original amount in USD |
| `data.valueInLocalCurrency` | number | Amount in recipient's local currency |
| `data.localCurrency` | string | Recipient's local currency code |
| `data.payoutMethod` | string | Method used for payout |
| `data.recipientDetails` | object | Details about the recipient/payout method |
| `data.timeline` | object | Timestamps for transaction stages |
| `data.transactionFee` | number | Fee charged for the transaction |
| `data.exchangeRate` | number | Exchange rate used for conversion |
| `data.reference` | string | Transaction reference number |
| `data.issueDate` | string | ISO timestamp when transaction was created |

## Status Values

| Status | Description |
|--------|-------------|
| `pending` | Transaction created but not yet processed |
| `processing` | Transaction is being processed |
| `completed` | Transaction successfully completed |
| `failed` | Transaction failed to complete |
| `cancelled` | Transaction was cancelled |
| `refunded` | Transaction was refunded |

## Payout Methods

| Method | Description |
|--------|-------------|
| `bank_transfer` | Direct bank deposit |
| `mobile_money` | Mobile wallet payment |
| `airtime` | Mobile phone top-up |
| `gift_card` | Digital gift card |
| `chimoney_wallet` | Chimoney wallet transfer |

## Error Responses

### 404 Not Found

```json
{
  "status": "error",
  "message": "Transaction not found",
  "code": "TRANSACTION_NOT_FOUND"
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

### 403 Forbidden

```json
{
  "status": "error",
  "message": "You don't have permission to view this transaction",
  "code": "FORBIDDEN"
}
```

## Webhook Alternative

For real-time updates, consider using webhooks instead of polling this endpoint. Chimoney can send status updates to your configured webhook URL automatically.

## Common Use Cases

- Track payout completion for user dashboards
- Generate transaction reports
- Troubleshoot failed payments
- Reconcile accounting records
- Monitor transaction processing times

## Notes

- Transaction IDs are unique and never reused
- Status updates may take a few minutes to reflect
- Some payout methods process faster than others
- Failed transactions include error details in the response
- Historical data is available for up to 12 months
