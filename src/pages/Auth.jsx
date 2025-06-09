import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../scss/auth.scss';
import { register } from '../utils/auth';

function Auth() {
  const [menuState, setMenuState] = useState("");

  return (
    <div className='auth-wrapper'>
      <Menu state={menuState} setState={setMenuState}></Menu>
      <Header setMenuState={setMenuState}/>

      <main className="auth">
        <div className="container">
          <form action="" className="auth__form">
            <legend>Авторизація</legend>

            <input type="text" placeholder="Ім'я"/>
            <input type="email" placeholder="Ел. пошта"/>
            <input type="password" placeholder="Пароль"/>
            
            <div className="auth__options">
              <button onClick={register}>Зареєструватись</button>
              <button>Увійти</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Auth;