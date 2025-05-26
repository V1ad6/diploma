import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={require("../assets/logo.png")} alt="logo" className="logo"></img>

        <nav>
          <div>
            <h4>Навігація</h4>
            <ul>
              <li><a href="#start">Початок</a></li>
              <li><a href="/#top-sales">Хіти продажу</a></li>
              <li><a href="/#images">Зображення</a></li>
            </ul>
          </div>

          <div>
            <h4>Посилання</h4>
            <ul>
              <li><Link to="/shop">Наш магазин</Link></li>
              <li><Link to="/contact">Пишіть нам</Link></li>
              <li><Link to="/cart">Корзина</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;