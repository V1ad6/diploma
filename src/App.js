import React, { useState, createContext, useEffect, use } from 'react';
import './index.css';
import './scss/header.scss'
import './scss/footer.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import Cart from './pages/Cart';
import Auth from './pages/Auth';

export const GlobalContext = createContext();

const router = createBrowserRouter([
  { path: '/', element: <HomePage/> }, 
  { path: '/contact', element: <ContactPage/> },
  { path: '/shop', element: <ShopPage/> },
  { path: '/cart', element: <Cart/> },
  { path: '/auth', element: <Auth/> }
]);

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getProducts")
      .then(prod => {
        setItems(prod.data);
      });
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (!savedCart) return;
    setCart(JSON.parse(savedCart));
  }, [items]);

  useEffect(() => {
    if (cart.length === 0) return
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <GlobalContext.Provider value={{
      items: items,
      setItems: setItems,
      cart: cart,
      setCart: setCart,
    }}>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
