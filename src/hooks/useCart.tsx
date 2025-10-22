import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Cart, CartItem, MenuItem } from '../types';

interface CartContextType {
  cart: Cart;
  addItem: (menuItem: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_ITEM'; payload: { menuItem: MenuItem; quantity: number; specialInstructions?: string } }
  | { type: 'REMOVE_ITEM'; payload: { itemId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: { cart: Cart } };

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { menuItem, quantity, specialInstructions } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === menuItem.id);
      
      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: menuItem.id,
          menuItem,
          quantity,
          specialInstructions
        };
        newItems = [...state.items, newItem];
      }
      
      return calculateCartTotals({ ...state, items: newItems });
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.itemId);
      return calculateCartTotals({ ...state, items: newItems });
    }
    
    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { itemId } });
      }
      
      const newItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return calculateCartTotals({ ...state, items: newItems });
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        subtotal: 0,
        tax: 0,
        deliveryFee: 0,
        total: 0
      };
    
    case 'LOAD_CART':
      return action.payload.cart;
    
    default:
      return state;
  }
};

const calculateCartTotals = (cart: Cart): Cart => {
  const subtotal = cart.items.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const deliveryFee = subtotal > 0 ? 2.50 : 0; // £2.50 delivery fee
  const total = subtotal + tax + deliveryFee;
  
  return {
    ...cart,
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    deliveryFee,
    total: Math.round(total * 100) / 100
  };
};

const initialCart: Cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  deliveryFee: 0,
  total: 0
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('farros-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: { cart: parsedCart } });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('farros-cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (menuItem: MenuItem, quantity: number = 1, specialInstructions?: string) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { menuItem, quantity, specialInstructions }
    });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemId } });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemCount = (): number => {
    return cart.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getTotalPrice = (): number => {
    return cart.total;
  };

  const value: CartContextType = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};



