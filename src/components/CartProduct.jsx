import React, { useContext } from 'react';
import { GlobalContext } from '../App';

function CartProduct({ id, url, title, price, amount }) {
  const { cart, setCart } = useContext(GlobalContext);
  const current = cart.filter(cartProduct => cartProduct[0] === id)[0];

  const increaseAmount = () => 
    setCart(prev => prev.map(
      item => (item[0] === id) ? [item[0], item[1] + 1] : item
    ));

  const reduceAmount = () => {
    if (current[1] > 1) {
      setCart(prev => prev.map(
        item => (item[0] === id) ? [item[0], item[1] - 1] : item
      ));
    }
  }

  function removeProduct() {
    setCart(prev => prev.filter(item => item[0] !== id));
  }

  return (
    <div className='cart-product'>
      <div className="cart-product__info">
        <img src={url} alt="product-image" className='cart-product__image'/>
        <div>
          <h2 className='cart-product__name'>{title}</h2>
          <strong className='cart-product__price'>{price}₴</strong>
        </div>
      </div>
      <div className="cart-product__amount">
        <button onClick={increaseAmount}>+</button>
        <p>{amount}</p>
        <button onClick={reduceAmount}>-</button>
      </div>
      <div className="cart-product__group">
        <strong className='cart-product__total'>{price * amount}₴</strong>
        <button className='cart-product__remove' onClick={removeProduct}>
          <img src={require("../assets/remove.jpg")} alt="remove"/>
        </button>
      </div>
    </div>
  );
}

export default CartProduct;