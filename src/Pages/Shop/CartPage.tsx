import React from 'react';
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import Cart from '../../Components/Pages/Cart/Cart';
import '../../Components/Css/Cart.css';
import { Paper } from '@mui/material';

const CartPage = () => {


  return (
    <div className="container">
      <Header/>
      <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
        <h1 className="title">Shopping Cart</h1>
      </Paper>
      <Cart/>
      <Footer/>
    </div>
  );
};

export default CartPage;
