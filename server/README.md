# Farros House Server

Optional Node.js/Express server for handling Stripe payments in the Farros House restaurant website.

## Features

- **Stripe Checkout Integration**: Create secure payment sessions
- **Order Processing**: Handle restaurant orders with tax and delivery calculations
- **Webhook Support**: Process Stripe events (optional)
- **CORS Enabled**: Configured for frontend communication
- **TypeScript**: Full type safety and modern development experience

## Quick Start

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Setup

Copy the example environment file and add your Stripe keys:

```bash
cp env.example .env
```

Edit `.env` and add your Stripe test keys:

```env
STRIPE_SECRET_KEY=sk_test_your_actual_stripe_secret_key_here
FRONTEND_URL=http://localhost:3000
```

### 3. Get Stripe Test Keys

1. Sign up for a free Stripe account at [stripe.com](https://stripe.com)
2. Go to the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
3. Copy your **Publishable key** (starts with `pk_test_`) and **Secret key** (starts with `sk_test_`)
4. Add the secret key to your `.env` file
5. Add the publishable key to your frontend `.env` file

### 4. Run the Server

```bash
# Development mode with hot reload
npm run dev

# Or build and run production
npm run build
npm start
```

The server will start on `http://localhost:4242`

## API Endpoints

### POST `/api/create-checkout-session`

Creates a Stripe Checkout session for payment processing.

**Request Body:**
```json
{
  "items": [
    {
      "id": "1",
      "name": "Grilled Chicken",
      "description": "Tender chicken breast...",
      "price": 12.99,
      "quantity": 2,
      "image": "https://example.com/image.jpg"
    }
  ],
  "customerInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+44 7123 456789"
  },
  "orderType": "delivery",
  "specialInstructions": "Extra spicy please"
}
```

**Response:**
```json
{
  "success": true,
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

### GET `/api/checkout-session/:sessionId`

Retrieves a checkout session to verify payment status.

**Response:**
```json
{
  "success": true,
  "session": {
    "id": "cs_test_...",
    "payment_status": "paid",
    "customer_email": "john@example.com",
    "amount_total": 2500,
    "metadata": { ... }
  }
}
```

### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Farros House Server is running"
}
```

## Stripe Test Cards

Use these test card numbers to simulate payments:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Visa - Success |
| `4000 0000 0000 0002` | Visa - Declined |
| `4000 0000 0000 9995` | Visa - Insufficient funds |
| `5555 5555 5555 4444` | Mastercard - Success |
| `3782 822463 10005` | American Express - Success |

**Test Details:**
- Use any future expiry date (e.g., 12/25)
- Use any 3-digit CVV (e.g., 123)
- Use any billing address

## Frontend Integration

### 1. Update Frontend Environment

Add to your frontend `.env` file:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
VITE_API_URL=http://localhost:4242
VITE_PAYMENT_MODE=stripe
```

### 2. Install Stripe.js

The frontend already includes `@stripe/stripe-js` for handling Stripe Checkout.

### 3. Test the Integration

1. Start both frontend and server
2. Add items to cart
3. Go to checkout
4. Select "Stripe Checkout" payment method
5. Use test card numbers to complete payment

## Production Deployment

### Environment Variables

For production, update your environment variables:

```env
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
STRIPE_SECRET_KEY=sk_live_your_live_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret
```

### Security Notes

- **Never commit real API keys** to version control
- Use environment variables for all sensitive data
- Enable HTTPS in production
- Set up proper CORS origins
- Use Stripe webhooks for production payment verification

### Stripe Webhooks (Optional)

To handle Stripe events in production:

1. Set up a webhook endpoint in your Stripe Dashboard
2. Point it to `https://your-domain.com/api/webhook`
3. Add the webhook secret to your environment variables
4. Handle events like `checkout.session.completed`

## Troubleshooting

### Common Issues

**"Stripe key not found"**
- Check that `STRIPE_SECRET_KEY` is set in `.env`
- Ensure the key starts with `sk_test_` or `sk_live_`

**"CORS error"**
- Verify `FRONTEND_URL` matches your frontend URL
- Check that the frontend is making requests to the correct server URL

**"Checkout session creation failed"**
- Verify all required fields are provided
- Check Stripe dashboard for error logs
- Ensure test keys are valid

### Debug Mode

Set `NODE_ENV=development` to see detailed error messages in responses.

## Support

For issues related to:
- **Stripe**: Check [Stripe Documentation](https://stripe.com/docs)
- **Server**: Check server logs and error messages
- **Frontend Integration**: Verify environment variables and API calls

## License

MIT License - see main project README for details.



