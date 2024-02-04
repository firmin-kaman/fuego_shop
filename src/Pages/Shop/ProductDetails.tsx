import React from 'react'
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import ProductDetailsComponent from '../../Components/Pages/Products/ProductDetailsComponent';
import "../../Components/Css/Home.css";
import { Paper } from '@mui/material';

const ProductDetails: React.FC = () => {

  return (
    <div className='product_details'>
      <Header/>
      <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
        <h1 className="title">Product details</h1>
      </Paper>
      <ProductDetailsComponent/>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
