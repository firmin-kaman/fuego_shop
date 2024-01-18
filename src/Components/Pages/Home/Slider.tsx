// Import des composants
import React from 'react';
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
              <SwiperSlide>
                <img src={Img1} alt="Slide 1" className={`img`} />
                <div className="Text-container Text-animed-1">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img2} alt="Slide 2" className={`img`} />
                <div className="Text-container Text-animed-2">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img3} alt="Slide 3" className={`img`} />
                <div className="Text-container Text-animed-3">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img4} alt="Slide 4" className={`img`} />
                <div className="Text-container Text-animed-4">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img5} alt="Slide 5" className={`img`} />
                <div className="Text-container Text-animed-5">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img6} alt="Slide 6" className={`img`} />
                <div className="Text-container Text-animed-6">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img7} alt="Slide 7" className={`img`} />
                <div className="Text-container Text-animed-7">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img8} alt="Slide 8" className={`img`} />
                <div className="Text-container Text-animed-8">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img9} alt="Slide 9" className={`img`} />
                <div className="Text-container Text-animed-9">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img10} alt="Slide 10" className={`img`} />
                <div className="Text-container Text-animed-10">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img11} alt="Slide 11" className={`img`} />
                <div className="Text-container Text-animed-11">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img12} alt="Slide 12" className={`img`} />
                <div className="Text-container Text-animed-12">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img13} alt="Slide 13" className={`img`} />
                <div className="Text-container Text-animed-13">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img14} alt="Slide 14" className={`img`} />
                <div className="Text-container Text-animed-14">
                  <div className='Text-container-sub'>
                    <h2 className='shop-name-1'>Top Boy</h2>
                    <h1 className='shop-name-2'>TED BISHOP</h1>
                  </div>
                  <button className='shop-btn'>
                    <span onClick={() => handleButtonClick('/products')}>Shop Now</span>
                  </button>
                </div>
              </SwiperSlide>
              
            </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
