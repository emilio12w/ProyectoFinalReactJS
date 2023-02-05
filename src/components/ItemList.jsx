import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getAllProductsFromDB } from '../helpers/getData.js';

import './styles/ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, []);

  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  name={product.name}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  stock={product.stock}
                  id={product.id}
                />
              </div>
            );
          })}
        </>
      ) : (
        <img className="load-beer" src={"https://media1.giphy.com/media/5wFRDVbSQalQ2Be8Zb/giphy.gif?cid=790b7611f78fbe35c16416c675d349b90210415f4fa70867&rid=giphy.gif&ct=s"} />
      )}
    </div>
  );
};

export default ItemList;
