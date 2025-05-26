import React, { useState } from 'react';
import '../scss/feedback.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import sendFeedback from '../utils/feedback';

function ContactPage() {
  const [menuState, setMenuState] = useState("");

  return (
    <div className="contact-page">
      <div class="send-alert">
        Повідомлення надіслано успішно!
      </div>

      <Menu state={menuState} setState={setMenuState}/>
      <Header setMenuState={setMenuState}/>

      <div class="wrapper">
        <form action="" class="feedback" onSubmit={sendFeedback}>
          <legend>Напишіть ваше повідомлення</legend>
          <input type="text" placeholder="Ваше ім'я" name="username"></input>
          <input type="text" placeholder="Ваш e-mail" name="mail"></input>
          <textarea cols="30" rows="10" name="text"></textarea>
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;