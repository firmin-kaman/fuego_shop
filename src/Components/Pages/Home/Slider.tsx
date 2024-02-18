// Import des composants
import React, { useState, CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Css/Slider.css';

// Import des images sous forme de modules
import Img1 from "../../Images/apparel-1920.jpg";
import Img2 from "../../Images/business-1920.jpg";
import Img3 from "../../Images/people-1920.jpg";
import Img4 from "../../Images/shopping-mall-1920.jpg";
import Img5 from "../../Images/girl-1920.jpg";
import Img6 from "../../Images/beautiful-people-1920.jpg";
import Img7 from "../../Images/store-window-1920.jpg";
import Img8 from "../../Images/woman-1920.jpg";
import Img9 from "../../Images/escalator-1920.jpg";
import Img10 from "../../Images/footwear-1920.jpg";
import Img11 from "../../Images/dress-1-1920.jpg";
import Img12 from "../../Images/shirts-1920.jpg";
import Img13 from "../../Images/fruit-1920.jpg";
import Img14 from "../../Images/architecture-1920.jpg";

import { useNavigate } from 'react-router-dom';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const Slider: React.FC = () => {

  //--- Navigation Button Start ---//
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  
  const handleButtonClick = (path: string) => {
    handleNavigation(path);
  };
  //--- Navigation Button End ---//

  const [isHovered, setIsHovered] = useState(false);

  // Css du bouton au survol
  const buttonStyle: CSSProperties = {
    transition: 'transform 0.3s ease', // Ajout de transition pour l'effet de survol
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Appliquer l'effet de survol si isHovered est vrai
  };

   return (
    <>
      <div className='Slider'>
          <div className="animation">
            <Swiper
              effect={'fade'}
              fadeEffect={{ crossFade: true }}
              pagination={{ dynamicBullets: true }}
              navigation={true}
              autoplay={{ 
                delay: 5000,
                disableOnInteraction: false 
              }}
              speed={600}
              className="mySwiper"
            >
              {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14].map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} className={`img`} />
                  <div className={`Text-container Text-animed-${index + 1}`}>
                    <div className='Text-container-sub'>
                      <h2 className='shop-name-1'>Top Boy</h2>
                      <h1 className='shop-name-2'>TED BISHOP</h1>
                    </div>
                    <button 
                      className='shop-btn-new'
                      style={buttonStyle}
                      onMouseEnter={() => setIsHovered(true)} // Définir isHovered sur true au survol
                      onMouseLeave={() => setIsHovered(false)} // Définir isHovered sur false lorsque le curseur quitte le bouton
                      onClick={() => handleButtonClick('/products')}
                    >
                      <span>Shop Now</span>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
