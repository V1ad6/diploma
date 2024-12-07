import React from 'react';
import '../scss/feedback.scss';

function ContactPage() {
  return (
    <div className="contact-page">
      <div class="send-alert">
        Повідомлення надіслано успішно!
      </div>

      <menu>
        <h2>Навігація по сайту</h2>

        <ul>
          <li><a href="https://gymbeam.ua/" target="_blank">Наш магазин</a></li>
          <li><a href="./index.html">Головна</a></li>
        </ul>

        <button class="close-btn">
          <span></span>
          <span></span>
        </button>
      </menu>

      <header>
        <div class="container">
          <img src={require("../assets/logo.png")} alt="logo" class="logo"></img>
          
          <nav>
            <ul>
              <li><a href="https://gymbeam.ua/" target="_blank">Наш магазин</a></li>
              <li><a href="./index.html">Головна</a></li>
            </ul>
          </nav>

          <div class="header__right">
            <img src={require("../assets/user.png")} alt="user" class="user"></img>
            <button class="open-menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div class="wrapper">
        <form action="../src/php/report.php" method="post" class="feedback">
          <legend>Напишіть ваше повідомлення</legend>
          <input type="text" placeholder="Ваше ім'я" name="username"></input>
          <input type="text" placeholder="Ваш e-mail" name="mail"></input>
          <textarea cols="30" rows="10" name="text"></textarea>
          <button type="submit">Надіслати</button>
        </form>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js" integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="../src/script/menu.js"></script>
      <script src="../src/script/feedback.js"></script>
    </div>
  );
}

export default ContactPage;