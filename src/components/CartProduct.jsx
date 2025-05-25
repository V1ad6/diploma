import React from 'react';

function CartProduct() {
  return (
    <div className='cart-product'>
      <div className="cart-product__info">
        <img src={require("../assets/test-product.jpeg")} alt="product-image" className='cart-product__image'/>
        <div>
          <h2 className='cart-product__name'>Розбірні гантелі</h2>
          <strong className='cart-product__price'>3499₴</strong>
        </div>
      </div>
      <div className="cart-product__amount">
        <button>+</button>
        <p>1</p>
        <button>-</button>
      </div>
      <div className="cart-product__group">
        <strong className='cart-product__total'>3499₴</strong>
        <button className='cart-product__remove'>
          <img src={require("../assets/remove.jpg")} alt="remove"/>
        </button>
      </div>
    </div>
  );
}

export default CartProduct;