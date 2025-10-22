import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Desserts from './pages/Desserts';
import Takeaway from './pages/Takeaway';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import CartDrawer from './components/CartDrawer';
import FloatingCartButton from './components/FloatingCartButton';
import Notification from './components/Notification';
import { CartProvider } from './context/CartContext';
import { menuItems } from './data/menu';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [notification, setNotification] = useState<{ message: string; show: boolean }>({ message: '', show: false });

  const showNotification = (message: string) => {
    setNotification({ message, show: true });
    setTimeout(() => {
      setNotification({ message: '', show: false });
    }, 3000);
  };

  return (
    <CartProvider>
      <Router basename={import.meta.env.PROD ? "/farros-website" : "/"}>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/takeaway" element={<Takeaway />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <CartDrawer />
          <FloatingCartButton />
          <Notification message={notification.message} show={notification.show} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;