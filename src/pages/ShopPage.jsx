import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import '../scss/shop.scss';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Filters from '../components/Filters';
import { GlobalContext } from '../App';
import axios from 'axios';

function ShopPage() {
  const [menuState, setMenuState] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const [search, setSearch] = useState("");
  const [prices, setPrices] = useState([]);
  const [types, setTypes] = useState([]);
  const { items, setItems } = useContext(GlobalContext);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/getProducts")
  //     .then(prod => {
  //       setItems(prod.data);
  //       setFilteredItems(prod.data);
  //     });
  // }, []);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    setFilteredItems(() => 
      items.filter(item => item.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
          .filter(item => item.price >= (prices[0] || 0) && item.price <= (prices[1] || Infinity))
          .filter(item => types.length > 0 ? types.includes(item.type) : true)
          .sort(sortProducts)
    );
  }, [search, prices, types, sortMethod]);

  function sortProducts(item1, item2) {
    switch (sortMethod) {
      case "lowest-price":
        return item1.price > item2.price ? 1 : -1;
      case "highest-price":
        return item1.price < item2.price ? 1 : -1;
      case "rating":
        return item1.rating < item2.rating ? 1 : -1;
      case "name":
        return item1.title.toLowerCase().trim() > item2.title.toLowerCase().trim() ? 1 : -1
      default: 
        return 1;
    }
  }

  return (
    <div className="shop-page">
      <Menu state={menuState} setState={setMenuState}/>
      <Header setMenuState={setMenuState}/>

      <section className="hat" id="start">
        <div className="hat__overlay"></div>
        <h1>Sport For Everybody</h1>
        <h3>Спортивний інвентар</h3>
        <h3>Доступний для кожного</h3>
      </section>

      <main className="products">
        <Filters prices={prices} setPrices={setPrices} types={types} setTypes={setTypes}/>
        <div className="products__search">
          <div className="container">
            <div className="products__parameters">
              <h2>Знайдено товарів: {filteredItems.length}</h2>
              <input 
                type="text" 
                placeholder='Введіть запит' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
              />
              <select name="" id="" onChange={(e) => setSortMethod(e.target.value)}>
                <option value="" disabled selected>Сортування</option>
                <option value="lowest-price">Від найдешевших до найдорожчих</option>
                <option value="highest-price">Від найдорожчих до найдешевших</option>
                <option value="rating">За рейтингом</option>
                <option value="name">За назвою</option>
              </select>
              <button>Фільтри</button>
            </div>
            <div className="products__list">
              {filteredItems.map(item => 
                <Product 
                  key={item._id} 
                  id={item._id}
                  url={item.url} 
                  title={item.title} 
                  rating={item.rating}
                  price={item.price}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default ShopPage;