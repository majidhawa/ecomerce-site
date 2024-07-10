
import React, { useState, useEffect } from 'react';
import { UseCategories } from './utils';
import './index.css';


import electronicsImg from '../categories/images/electronics.jpg';
import jewelryImg from '../categories/images/jewelry.jpg';
import mensClothingImg from '../categories/images/mens_clothing.jpg';
import womensClothingImg from '../categories/images/womens_clothing.jpg';



const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UseCategories(); // This should now return an array of category names
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  const categoryImages = [
    { name: "electronics", src: electronicsImg },
    { name: "jewelery", src: jewelryImg },
    { name: "men's clothing", src: mensClothingImg },
    { name: "women's clothing", src: womensClothingImg },
  ];

  return (
    <div>
      <h2>Categories</h2>
      <div className="category-container">
        {categories.map((category, index) => {
          const imageItem = categoryImages.find(item => item.name === category);
          return (
            <figure key={index} className="image-card">
              <img src={imageItem.src} alt={category} />
              <figcaption>{category}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
