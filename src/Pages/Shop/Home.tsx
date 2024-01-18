import React from 'react'
import Header from '../../Components/Pages/Navigation/Header';
import Slider from '../../Components/Pages/Home/Slider';
import "../../Components/Css/Home.css";



const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header/>
      <Slider/>
    </div>
  )
}

export default Home;