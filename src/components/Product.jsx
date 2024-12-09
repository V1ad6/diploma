import React from 'react';

function Product() {
  return (
    <div className="product">
      <div className="product__image">
        <img src={require("../assets/test-product.jpeg")} alt=""/>
      </div>
      <div className="product__info">
        <h2 className="product__name">Розбірні гантелі</h2>
        <h4 className="product__rating">4.8/5</h4>
      </div>
      <div className="product__purchase">
        <h2 className="product__price">3499₴</h2>
        <button className="product__add">
          <img src={require("../assets/cart2.jpeg")} alt=""/>
        </button>
      </div>
    </div>
  );
}

export default Product;