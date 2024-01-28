import React from 'react'
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import ProductList from '../../Components/Pages/Products/ProductList';
import "../../Components/Css/Home.css";
import { Paper } from '@mui/material';



const ProductPage: React.FC = () => {
  return (
    <div>
    <Header/>
    <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
      <h1 className="title">All Products</h1>
    </Paper>
    <ProductList/>
    <Footer/>
    </div>
  )
}

export default ProductPage;