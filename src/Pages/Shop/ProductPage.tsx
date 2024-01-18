import React from 'react'
import Header from '../../Components/Pages/Navigation/Header';
import ProductList from '../../Components/Pages/Products/ProductList';
import "../../Components/Css/Home.css";



const ProductPage: React.FC = () => {
  return (
    <div>
    <Header/>
    <ProductList/>
    </div>
  )
}

export default ProductPage;