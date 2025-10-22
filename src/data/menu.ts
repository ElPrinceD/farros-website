export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Grilled Items
  {
    id: 1,
    name: "Grilled Ribeye Steak",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760",
    category: "grilled",
    popular: true
  },
  {
    id: 2,
    name: "Mediterranean Chicken",
    price: 18.99,
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    category: "grilled",
    popular: true
  },
  {
    id: 3,
    name: "Grilled Lamb Chops",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    category: "grilled"
  },
  {
    id: 4,
    name: "Seafood Platter",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    category: "grilled",
    popular: true
  },

  // Sides
  {
    id: 5,
    name: "Fresh Hummus",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    category: "sides",
    popular: true
  },
  {
    id: 6,
    name: "Mediterranean Salad",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760",
    category: "sides"
  },
  {
    id: 7,
    name: "Roasted Vegetables",
    price: 10.99,
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    category: "sides"
  },
  {
    id: 8,
    name: "Falafel Platter",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    category: "sides"
  },

  // Desserts
  {
    id: 9,
    name: "Baklava",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    category: "desserts"
  },
  {
    id: 10,
    name: "Turkish Delight",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    category: "desserts"
  },
  {
    id: 11,
    name: "Chocolate Mousse",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760",
    category: "desserts"
  },
  {
    id: 12,
    name: "Tiramisu",
    price: 8.99,
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    category: "desserts"
  }
];