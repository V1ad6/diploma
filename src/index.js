import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './scss/header.scss'
import './scss/footer.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage/> }, 
  { path: '/contact', element: <ContactPage/> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
