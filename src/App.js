import React, { useState, createContext } from 'react';
import './index.css';
import './scss/header.scss'
import './scss/footer.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import Cart from './pages/Cart';

export const GlobalContext = createContext();

const router = createBrowserRouter([
  { path: '/', element: <HomePage/> }, 
  { path: '/contact', element: <ContactPage/> },
  { path: '/shop', element: <ShopPage/> },
  { path: '/cart', element: <Cart/> },
]);

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

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
