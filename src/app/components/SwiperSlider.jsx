import Image from "next/image";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './SwiperSlide.css';

// import required modules
import { Navigation } from 'swiper/modules';


import athletic from "../../../public/images/projects/me/athletic_excel-home.jpg";
import campus from "../../../public/images/projects/me/campus_guru_home.jpg";
import event from "../../../public/images/projects/me/event360_home.jpg";
import fyto from "../../../public/images/projects/me/fyto_home.jpg";
import kiddo from "../../../public/images/projects/me/kiddo_valley_home.jpg";
import quisinne from "../../../public/images/projects/me/quisinne_home.jpg";
import relief from "../../../public/images/projects/me/relief_home.jpg";
const SwiperSlider = () => {
  // const [showModal,setShowModal]=useState(false)
  return (
    
      <div className="bg-red-300">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <Image src={relief} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={event} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={fyto} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={athletic} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={kiddo} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={campus} alt="img" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
