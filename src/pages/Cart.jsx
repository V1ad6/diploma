import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../scss/cart.scss';
import CartProduct from '../components/CartProduct';

function Cart() {
  const [menuState, setMenuState] = useState("");

  return (
    <div className='cart-page'>
      <Menu state={menuState} setState={setMenuState}/>
      <Header setMenuState={setMenuState}/>

      <main className="cart">
        <div className="container">
          <strong>Сума 6767грн</strong>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
          <button className='cart__pay-btn'>Сплатити товари</button>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Cart;