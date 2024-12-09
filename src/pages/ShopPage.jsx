import React from 'react';
import Header from '../components/Header';
import '../scss/shop.scss';
import Product from '../components/Product';
import Footer from '../components/Footer';

function ShopPage() {
  return (
    <div className="shop-page">
      <Header/>

      <section className="hat">
        <div className="hat__overlay"></div>
        <h1>Sport For Everybody</h1>
        <h3>Спортивний інвентар</h3>
        <h3>Доступний для кожного</h3>
      </section>

      <main className="products">
        <div className="products__filters">
          <h2>Фільтри</h2>

          <form action="">
            <h3>Ціна</h3>
            <input type="text" placeholder='Від'/>
            <input type="text" placeholder='До'/>
          </form>

          <form action="">
            <h3>Тип</h3>
            <label><input type="checkbox"/>Взуття</label>
            <label><input type="checkbox"/>Спорт.одяг</label>
            <label><input type="checkbox"/>Гантелі</label>
            <label><input type="checkbox"/>Штанги</label>
            <label><input type="checkbox"/>Лави для жиму</label>
            <label><input type="checkbox"/>Бігові доріжки</label>
            <label><input type="checkbox"/>Орбітреки</label>
            <label><input type="checkbox"/>Турніки</label>
            <label><input type="checkbox"/>Еспандери</label>
            <label><input type="checkbox"/>Килимки</label>
            <label><input type="checkbox"/>М'ячі для фітнесу</label>
          </form>
        </div>
        <div className="products__search">
          <div className="container">
            <div className="products__parameters">
              <h2>Знайдено товарів: 137</h2>
              <input type="text" placeholder='Введіть запит'/>
              <select name="" id="">
                <option value="" disabled selected>Сортування</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="products__list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default ShopPage;