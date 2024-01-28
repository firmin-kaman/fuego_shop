import React from 'react'
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import { Paper } from '@mui/material'

const Favorites: React.FC = () => {

  return (
    <div className="container">
        <Header/>
        <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
            <h1 className="title"> 💖 My Favorites 💖</h1>
        </Paper>
        <div>Favorites</div>
        <Footer/>
    </div>
  )
}

export default Favorites