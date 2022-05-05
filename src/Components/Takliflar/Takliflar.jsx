import React from 'react'
import './takliflar.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";
import Card from '../Card/Card';
import Dat from "../../Assets/Data/Dat.json"

function Takliflar({lang, Data}) {

  
  return (
    <div className='cards'>
    <Swiper
        slidesPerView={1}
        // spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          620: {
            slidesPerView: 2,
            // spaceBetween: 40,
          },
          868: {
            slidesPerView: 3,
            // spaceBetween: 50,
          },
        }}
        freeMode={true}
        navigation={true}
        autoplay={
            {
                delay: 2000
            }
        }
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {Dat.map(data => (
          <SwiperSlide key={data.id}>
            <Card data={data} lang={lang} />
          </SwiperSlide>
        ))}
    </Swiper>

    </div>
  )
}

export default Takliflar