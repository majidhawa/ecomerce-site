import React, { useState, useEffect } from 'react';
import { UseProducts } from './utils';
import './index.css'

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
    <div className="product-list">
      <h1>Today's Best Selling Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
           <div className='product-info'> 
            <h2 className='product.title'>{product.title}</h2>
            <p className='product-description'>{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;




