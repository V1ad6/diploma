import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Filters({ prices, setPrices, types, setTypes }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getCategories")
        .then(categories => setCategories(categories.data));
  }, []);

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

        {categories.map(category => 
          <label><input type="checkbox" value={category.name}/>{category.name}</label>
        )}
      </form>
    </div>
  );
}

export default Filters;