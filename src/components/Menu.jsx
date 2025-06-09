import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu({ state, setState }) {
  const location = useLocation();

  return (
    <menu className={state}>
      <h2>Навігація по сайту</h2>

      <ul>
        {
        location.pathname === '/' && <>
          <li><a href="#top-sales">Хіти продажу</a></li>
          <li><a href="#images">Зображення</a></li>
          <li><Link to="/shop">Наш магазин</Link></li>
          <li><Link to="/contact">Пишіть нам</Link></li>
        </>
        }
        
        {
        location.pathname === '/contact' && <>
          <li><Link to="/shop">Наш магазин</Link></li>
          <li><Link to="/">Головна</Link></li>
        </>
        }

        {
        location.pathname === '/shop' && <>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/contact">Пишіть нам</Link></li>
        </>
        }

        {
        (location.pathname === '/cart' || 
        location.pathname === '/auth') && <>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/shop">Наш магазин</Link></li>
          <li><Link to="/contact">Пишіть нам</Link></li>
        </>
        }
      </ul>

      <button className="close-btn" onClick={() => setState("")}>
        <span></span>
        <span></span>
      </button>
    </menu>
  );
}

export default Menu;