// import React from 'react';
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import FavoriteComponent from '../../Components/Pages/Favorites/FavoritesComponent';
import { Paper } from '@mui/material';
import "../../Components/Css/Favorites.css";

const Favorites = () => {
  return (
    <div>
      <Header/>
      <Paper elevation={0} className='Favorites'>
        <h1 className="title">💖 My Favorites 💖</h1>
      </Paper>
      <FavoriteComponent favoriteProducts={[]} products={[]}/>
      <Footer/>
    </div>
  );
};

export default Favorites;
