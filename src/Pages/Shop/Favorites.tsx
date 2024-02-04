import React from 'react';
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import FavoriteComponent from '../../Components/Pages/Favorites/FavoritesComponent';
import { Paper } from '@mui/material';

const Favorites = () => {
  return (
    <div>
      <Header/>
      <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
        <h1 className="title">All Products ll</h1>
      </Paper>
      <FavoriteComponent favoriteProducts={[]} products={[]}/>
      <Footer/>
    </div>
  );
};

export default Favorites;
