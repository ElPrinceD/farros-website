# Farros House - Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. Features a complete e-commerce experience with dual payment modes (Stripe and Mock) for authentic Mediterranean cuisine.

![Farros House](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue) ![Vite](https://img.shields.io/badge/Vite-4.4-purple)

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with beautiful UI inspired by modern restaurant apps
- **Complete Menu System**: Browse, filter, and search through authentic Mediterranean dishes
- **Shopping Cart**: Add items, modify quantities, and manage orders
- **Dual Payment Modes**: 
  - **Stripe Checkout**: Real payment processing with secure redirect
  - **Mock Payment**: Frontend-only demo mode for testing
- **Order Management**: Complete checkout flow with order confirmation
- **Location Finder**: Find nearby Farros House locations
- **About & Contact**: Learn about the restaurant and get in touch

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Context**: State management for cart functionality
- **React Router**: Client-side routing with lazy loading
- **Framer Motion**: Smooth animations and transitions
- **Heroicons**: Beautiful, consistent iconography
- **Tailwind CSS**: Utility-first styling with custom theme
- **Local Storage**: Cart persistence between sessions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Backend**: Node.js, Express, TypeScript (optional)
- **Payments**: Stripe (optional)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd farros-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Frontend Only (Mock Payment Mode)

The website works perfectly without any backend setup:

1. **Browse the menu** - Explore authentic Mediterranean dishes
2. **Add items to cart** - Click "Add to Cart" on any menu item
3. **Checkout** - Go to cart and proceed to checkout
4. **Mock Payment** - Use the demo payment form (no real charges)
5. **Order Confirmation** - Receive confirmation and download receipt

### With Stripe Integration (Real Payments)

For real payment processing:

1. **Set up Stripe account** at [stripe.com](https://stripe.com)
2. **Get test keys** from Stripe Dashboard
3. **Configure environment variables** (see below)
4. **Start the optional server** (see server README)
5. **Test with Stripe test cards**

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Frontend Environment Variables
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
VITE_API_URL=http://localhost:4242
VITE_PAYMENT_MODE=mock
```

### Payment Modes

**Mock Mode (Default)**
- No backend required
- Frontend-only payment simulation
- Perfect for demos and testing
- No real charges

**Stripe Mode**
- Requires backend server
- Real payment processing
- Secure checkout redirect
- Production-ready

## 🏗️ Project Structure

```
farros-house/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MenuCard.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CheckoutForm.tsx
│   │   └── ...
│   ├── pages/              # Route components
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── Checkout.tsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   │   └── useCart.tsx
│   ├── data/               # Static data
│   │   ├── menu.ts
│   │   ├── locations.ts
│   │   └── ...
│   ├── utils/              # Utility functions
│   │   ├── currency.ts
│   │   └── helpers.ts
│   ├── types.d.ts          # TypeScript type definitions
│   └── styles/             # Global styles
├── server/                 # Optional backend server
│   ├── server.ts
│   ├── package.json
│   └── README.md
├── public/                 # Static assets
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#B21F2D` (Farros House Red)
- **Accent Orange**: `#F08A3D` (Mediterranean Orange)
- **Charcoal**: `#222222` (Text and UI elements)
- **Cream**: `#FFF8F0` (Background accents)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive header with mobile menu

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Homepage loads correctly**
- [ ] **Menu browsing and filtering works**
- [ ] **Cart functionality (add, remove, update quantities)**
- [ ] **Checkout flow completes successfully**
- [ ] **Mock payment processes without errors**
- [ ] **Order confirmation displays correctly**
- [ ] **Responsive design on mobile/tablet/desktop**
- [ ] **Navigation between pages works**
- [ ] **Search functionality works**
- [ ] **Location finder displays information**

### Stripe Testing (if using backend)

- [ ] **Stripe checkout session creates successfully**
- [ ] **Test card payments process correctly**
- [ ] **Failed payments show appropriate errors**
- [ ] **Order confirmation after successful payment**

## 🚀 Deployment

### Frontend Deployment

**Vercel (Recommended)**
```bash
npm run build
# Deploy dist/ folder to Vercel
```

**Netlify**
```bash
npm run build
# Deploy dist/ folder to Netlify
```

**Custom Server**
```bash
npm run build
# Serve dist/ folder with any static file server
```

### Backend Deployment (Optional)

See `server/README.md` for detailed deployment instructions.

## 🔒 Security

### Important Security Notes

- **Never commit real API keys** to version control
- **Use environment variables** for all sensitive data
- **Stripe secret keys** should only be used on the server
- **Enable HTTPS** in production
- **Validate all user inputs** on both frontend and backend

### Environment Variables Security

```bash
# ✅ Good - Use .env files
STRIPE_SECRET_KEY=sk_live_...

# ❌ Bad - Never hardcode in source
const stripeKey = "sk_live_...";
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Common Issues

**"Module not found" errors**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (16+ required)

**"Stripe key not found"**
- Verify `.env` file exists and contains correct keys
- Check that keys start with `pk_test_` or `sk_test_`

**"Server connection failed"**
- Ensure optional server is running on port 4242
- Check `VITE_API_URL` in environment variables

**"Cart not persisting"**
- Check browser localStorage is enabled
- Clear browser cache and try again

### Getting Help

- Check the [Issues](https://github.com/your-repo/issues) page
- Review the server README for backend-specific issues
- Consult [Stripe Documentation](https://stripe.com/docs) for payment issues

## 🎉 Acknowledgments

- **Stripe** for payment processing
- **Tailwind CSS** for the utility-first CSS framework
- **Heroicons** for beautiful icons
- **Framer Motion** for smooth animations
- **Unsplash** for placeholder images

---

**Built with ❤️ for authentic Mediterranean cuisine lovers**



