import { MenuItem } from '../types';

export const menuCategories = [
  'All',
  'Grilled Chicken',
  'Burgers',
  'Sides',
  'Drinks',
  'Desserts',
  'Salads',
  'Wraps'
];

export const menuItems: MenuItem[] = [
  // Grilled Chicken
  {
    id: '1',
    name: 'Classic Grilled Chicken',
    description: 'Tender chicken breast marinated in our signature spices and grilled to perfection',
    price: 12.99,
    image: 'https://source.unsplash.com/800x600/?grilled-chicken,peri-peri',
    category: 'Grilled Chicken',
    spiceLevel: 2,
    isPopular: true,
    nutritionInfo: {
      calories: 320,
      protein: 35,
      carbs: 2,
      fat: 18
    }
  },
  {
    id: '2',
    name: 'Spicy Peri-Peri Chicken',
    description: 'Our famous peri-peri chicken with a fiery kick that will leave you wanting more',
    price: 13.99,
    image: 'https://source.unsplash.com/800x600/?spicy-chicken,peri-peri',
    category: 'Grilled Chicken',
    spiceLevel: 4,
    isPopular: true,
    nutritionInfo: {
      calories: 340,
      protein: 36,
      carbs: 3,
      fat: 20
    }
  },
  {
    id: '3',
    name: 'Lemon & Herb Chicken',
    description: 'Light and refreshing chicken with zesty lemon and aromatic herbs',
    price: 12.99,
    image: 'https://source.unsplash.com/800x600/?lemon-chicken,herbs',
    category: 'Grilled Chicken',
    spiceLevel: 1,
    isVegetarian: false,
    nutritionInfo: {
      calories: 310,
      protein: 34,
      carbs: 2,
      fat: 17
    }
  },

  // Burgers
  {
    id: '4',
    name: 'Farros Signature Burger',
    description: 'Juicy beef patty with our special sauce, lettuce, tomato, and crispy onions',
    price: 15.99,
    image: 'https://source.unsplash.com/800x600/?beef-burger,restaurant',
    category: 'Burgers',
    spiceLevel: 2,
    isPopular: true,
    nutritionInfo: {
      calories: 680,
      protein: 28,
      carbs: 45,
      fat: 42
    }
  },
  {
    id: '5',
    name: 'Chicken Burger Deluxe',
    description: 'Grilled chicken breast with avocado, bacon, and our signature mayo',
    price: 14.99,
    image: 'https://source.unsplash.com/800x600/?chicken-burger,avocado',
    category: 'Burgers',
    spiceLevel: 1,
    nutritionInfo: {
      calories: 620,
      protein: 32,
      carbs: 38,
      fat: 38
    }
  },
  {
    id: '6',
    name: 'Veggie Supreme Burger',
    description: 'Plant-based patty with fresh vegetables and our house-made vegan sauce',
    price: 13.99,
    image: 'https://source.unsplash.com/800x600/?veggie-burger,vegetarian',
    category: 'Burgers',
    spiceLevel: 1,
    isVegetarian: true,
    nutritionInfo: {
      calories: 480,
      protein: 18,
      carbs: 52,
      fat: 24
    }
  },

  // Sides
  {
    id: '7',
    name: 'Crispy Peri-Peri Fries',
    description: 'Golden fries tossed in our signature peri-peri seasoning',
    price: 4.99,
    image: 'https://source.unsplash.com/800x600/?fries,peri-peri',
    category: 'Sides',
    spiceLevel: 3,
    isPopular: true,
    nutritionInfo: {
      calories: 420,
      protein: 6,
      carbs: 58,
      fat: 18
    }
  },
  {
    id: '8',
    name: 'Mediterranean Rice',
    description: 'Fragrant basmati rice with herbs, spices, and dried fruits',
    price: 3.99,
    image: 'https://source.unsplash.com/800x600/?rice,mediterranean',
    category: 'Sides',
    spiceLevel: 1,
    isVegetarian: true,
    nutritionInfo: {
      calories: 280,
      protein: 5,
      carbs: 58,
      fat: 4
    }
  },
  {
    id: '9',
    name: 'Grilled Vegetables',
    description: 'Seasonal vegetables grilled to perfection with olive oil and herbs',
    price: 5.99,
    image: 'https://source.unsplash.com/800x600/?grilled-vegetables,mediterranean',
    category: 'Sides',
    spiceLevel: 1,
    isVegetarian: true,
    isGlutenFree: true,
    nutritionInfo: {
      calories: 120,
      protein: 4,
      carbs: 18,
      fat: 4
    }
  },

  // Drinks
  {
    id: '10',
    name: 'Fresh Lemonade',
    description: 'House-made lemonade with fresh lemons and a hint of mint',
    price: 3.99,
    image: 'https://source.unsplash.com/800x600/?lemonade,fresh',
    category: 'Drinks',
    isVegetarian: true,
    nutritionInfo: {
      calories: 120,
      protein: 0,
      carbs: 32,
      fat: 0
    }
  },
  {
    id: '11',
    name: 'Iced Tea',
    description: 'Refreshing iced tea with your choice of peach or raspberry',
    price: 2.99,
    image: 'https://source.unsplash.com/800x600/?iced-tea,refreshing',
    category: 'Drinks',
    isVegetarian: true,
    nutritionInfo: {
      calories: 80,
      protein: 0,
      carbs: 20,
      fat: 0
    }
  },
  {
    id: '12',
    name: 'Mediterranean Smoothie',
    description: 'Blend of fresh fruits, yogurt, and honey - a taste of the Mediterranean',
    price: 5.99,
    image: 'https://source.unsplash.com/800x600/?smoothie,fruits',
    category: 'Drinks',
    isVegetarian: true,
    nutritionInfo: {
      calories: 180,
      protein: 8,
      carbs: 35,
      fat: 2
    }
  },

  // Desserts
  {
    id: '13',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 6.99,
    image: 'https://source.unsplash.com/800x600/?chocolate-cake,dessert',
    category: 'Desserts',
    isVegetarian: true,
    nutritionInfo: {
      calories: 480,
      protein: 8,
      carbs: 65,
      fat: 22
    }
  },
  {
    id: '14',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 5.99,
    image: 'https://source.unsplash.com/800x600/?tiramisu,italian-dessert',
    category: 'Desserts',
    isVegetarian: true,
    nutritionInfo: {
      calories: 320,
      protein: 6,
      carbs: 35,
      fat: 18
    }
  },

  // Salads
  {
    id: '15',
    name: 'Mediterranean Salad',
    description: 'Fresh mixed greens with tomatoes, olives, feta cheese, and olive oil dressing',
    price: 8.99,
    image: 'https://source.unsplash.com/800x600/?mediterranean-salad,feta',
    category: 'Salads',
    isVegetarian: true,
    isGlutenFree: true,
    nutritionInfo: {
      calories: 220,
      protein: 8,
      carbs: 12,
      fat: 16
    }
  },
  {
    id: '16',
    name: 'Grilled Chicken Caesar',
    description: 'Crisp romaine lettuce with grilled chicken, parmesan, and caesar dressing',
    price: 11.99,
    image: 'https://source.unsplash.com/800x600/?caesar-salad,chicken',
    category: 'Salads',
    spiceLevel: 1,
    nutritionInfo: {
      calories: 380,
      protein: 28,
      carbs: 8,
      fat: 26
    }
  },

  // Wraps
  {
    id: '17',
    name: 'Chicken Wrap',
    description: 'Grilled chicken with fresh vegetables and our signature sauce in a soft tortilla',
    price: 9.99,
    image: 'https://source.unsplash.com/800x600/?chicken-wrap,tortilla',
    category: 'Wraps',
    spiceLevel: 2,
    nutritionInfo: {
      calories: 420,
      protein: 24,
      carbs: 35,
      fat: 20
    }
  },
  {
    id: '18',
    name: 'Falafel Wrap',
    description: 'Crispy falafel with hummus, fresh vegetables, and tahini sauce',
    price: 8.99,
    image: 'https://source.unsplash.com/800x600/?falafel-wrap,vegetarian',
    category: 'Wraps',
    isVegetarian: true,
    nutritionInfo: {
      calories: 380,
      protein: 12,
      carbs: 45,
      fat: 16
    }
  }
];



