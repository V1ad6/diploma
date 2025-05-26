import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ setMenuState }) {
  const location = useLocation();

  return (
    <header>
      <div class="container">
        <img src={require("../assets/logo.png")} alt="logo" class="logo"></img>
        
        <nav>
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
            location.pathname === '/cart' && <>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/shop">Наш магазин</Link></li>
              <li><Link to="/contact">Пишіть нам</Link></li>
            </>
            }
          </ul>
        </nav>

        <div class="header__right">
          {
          location.pathname === '/shop' 
            && 
          <Link to='/cart'>
            <img className="cart-icon" src={require("../assets/cart.png")}></img>
          </Link>
          }

          <img src={require("../assets/user.png")} alt="user" class="user"></img>
          <button class="open-menu" onClick={() => setMenuState("opened")}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;