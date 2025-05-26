import { useContext } from 'react';
import { GlobalContext } from '../App';

function Product({ id, url, title, rating, price }) {
  const { cart, setCart } = useContext(GlobalContext);

  function addToCart(id) {
    setCart(prev => [...prev, [id, 1]]);
  }

  return (
    <div className="product">
      <div className="product__image">
        <img src={url} alt="product_image"/>
      </div>
      <div className="product__info">
        <h2 className="product__name">{title}</h2>
        <h4 className="product__rating">{rating}/5</h4>
      </div>
      <div className="product__purchase">
        <h2 className="product__price">{price}₴</h2>
        <button className="product__add" onClick={() => addToCart(id)} disabled={cart.some(item => item[0] === id)}>
          <img src={require("../assets/cart2.jpeg")} alt=""/>
        </button>
      </div>
    </div>
  );
}

export default Product;