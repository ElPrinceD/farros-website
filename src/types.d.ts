export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spiceLevel?: 1 | 2 | 3 | 4 | 5;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  allergens?: string[];
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  deliveryFee: number;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  customerInfo: CustomerInfo;
  orderType: 'delivery' | 'pickup';
  estimatedTime: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: number;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: Date;
  location?: string;
  verified: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'stripe' | 'mock';
  name: string;
  description: string;
  icon: string;
}

export interface CheckoutFormData {
  customerInfo: CustomerInfo;
  orderType: 'delivery' | 'pickup';
  paymentMethod: string;
  specialInstructions?: string;
}

export interface StripeCheckoutSession {
  id: string;
  url?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}



