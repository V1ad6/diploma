import React from 'react';

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
              <li><a href="#top-sales">Хіти продажу</a></li>
              <li><a href="#images">Зображення</a></li>
            </ul>
          </div>

          <div>
            <h4>Посилання</h4>
            <ul>
              <li><a href="https://gymbeam.ua/">Наш магазин</a></li>
              <li><a href="./feedback.html">Пишіть нам</a></li>
              <li><a href="https://gymbeam.ua/ua/checkout/cart/">Корзина</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;