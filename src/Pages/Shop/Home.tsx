import React from 'react'
import Header from '../../Components/Pages/Navigation/Header';
import Footer from '../../Components/Pages/Navigation/Footer';
import Slider from '../../Components/Pages/Home/Slider';
import ProductList from '../../Components/Pages/Products/ProductList';
import "../../Components/Css/Home.css";
import { Paper, Box } from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';



const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header/>
      <Slider/>
      <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center", display: "flex", flexDirection:"row", justifyContent: "center"}}>
        <Box sx={{marginTop: "22px"}}> <SellIcon/> </Box>
        <Box sx={{marginTop: "22px"}}> 😊 </Box>
        <Box> <h1 className="title">Bestsellers of the month</h1> </Box>
        <Box sx={{marginTop: "22px"}}> 😊 </Box>
        <Box sx={{marginTop: "22px"}}> <SellIcon/> </Box>
      </Paper>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Home;