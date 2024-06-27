import React from 'react';
import './index.css'; 
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="topnav">

      <a className="active" href="#home">SHOPIFY</a>
       <div className='search-container'>
        <form>
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">< FaSearch color='blue'  /></button>
        </form>
        </div>
      <div className='nav'>
      <a  href="#home">Shop</a>
      <a href="#about">Blog</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
      <a href="#page">Page</a>
      <a href="#about">About</a>
      </div>
      
     
      
    </div>
  );
};

export default Navbar;
