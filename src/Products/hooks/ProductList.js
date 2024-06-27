
import React, { useState, useEffect } from 'react';
import { UseProducts } from '../utils';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UseProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{width: '200px'}} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
