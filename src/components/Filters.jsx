import React from 'react';

function Filters({ prices, setPrices, types, setTypes }) {
  return (
    <div className="products__filters">
      <h2>Фільтри</h2>

      <form action="" className="product__price-range">
        <h3>Ціна</h3>
        <input 
          type="number" 
          placeholder='Від' 
          value={prices[0]} 
          onChange={(e) => setPrices([e.target.value, prices[1]])}
        />
        <input 
          type="number" 
          placeholder='До'
          value={prices[1]} 
          onChange={(e) => setPrices([prices[0], e.target.value])}
        />
      </form>
      
      <form 
        action="" 
        className="product__types" 
        onChange={(e) => {
          if (types.includes(e.target.value)) {
            setTypes(prev => prev.filter(type => type !== e.target.value));
          } else {
            setTypes(prev => [...prev, e.target.value]);
          }
        }}
      >
        <h3>Тип</h3>
        <label><input type="checkbox" value="Взуття"/>Взуття</label>
        <label><input type="checkbox" value="Спорт.одяг"/>Спорт.одяг</label>
        <label><input type="checkbox" value="Гантелі"/>Гантелі</label>
        <label><input type="checkbox" value="Штанги"/>Штанги</label>
        <label><input type="checkbox" value="Лави для жиму"/>Лави для жиму</label>
        <label><input type="checkbox" value="Бігові доріжки"/>Бігові доріжки</label>
        <label><input type="checkbox" value="Орбітреки"/>Орбітреки</label>
        <label><input type="checkbox" value="Турніки"/>Турніки</label>
        <label><input type="checkbox" value="Еспандери"/>Еспандери</label>
        <label><input type="checkbox" value="Килимки"/>Килимки</label>
        <label><input type="checkbox" value="М'ячі для фітнесу"/>М'ячі для фітнесу</label>
      </form>
    </div>
  );
}

export default Filters;