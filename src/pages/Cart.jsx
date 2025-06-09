import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../scss/cart.scss';
import CartProduct from '../components/CartProduct';
import { GlobalContext } from '../App';
import axios from 'axios';


function Cart() {
  const [menuState, setMenuState] = useState("");
  const [sum, setSum] = useState(0);
  const { items, cart, setCart } = useContext(GlobalContext);

  useEffect(() => {
    if (cart.length === 0) {
      setSum(0);
      return;
    }

    if (items.length === 0) return;

    setSum(cart.reduce((acc, curr) => {
      const currItemPrice = items.find(item => item._id === curr[0]).price;
      return acc + currItemPrice * curr[1];
    }, 0));
  }, [cart]);

  function makeOrder() {
    axios.post("http://localhost:3001/order", {
      username: null,
      products: cart.map(product => `${items.find(item => item._id === product[0]).title}: ${product[1]}`),
      totalPrice: sum
    })
    
    localStorage.setItem('cart', '[]');
    setCart([]);
  }

  return (
    <div className='cart-page'>
      <Menu state={menuState} setState={setMenuState}/>
      <Header setMenuState={setMenuState}/>

      <main className="cart">
        {
        cart.length === 0 || items.length === 0
          ?
        <h1 className="empty-cat-title">Жодного товару не було додано до корзини!</h1>
          :
        <div className="container">
          <strong>Сума {sum}грн</strong>
          {cart.map(cartItem => {
            const product = items.find(item => item._id === cartItem[0]);
            
            return (
              <CartProduct 
                key={product._id} 
                id={product._id}
                url={product.url} 
                title={product.title} 
                amount={cart.filter(cartProduct => cartProduct[0] === product._id)[0][1]}
                price={product.price}
              />
            )
          })}
          <button className='cart__pay-btn' onClick={makeOrder}>Сплатити товари</button>
        </div>
        }
      </main>

      <Footer/>
    </div>
  );
}

export default Cart;