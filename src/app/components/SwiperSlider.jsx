import Image from "next/image";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './SwiperSlide.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperSlider = ({ img1, img2, img3, img4 }) => {
  // console.log(img1,img2,img3,img4)
  return (
    <div className="">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-t-md"
      >
        <SwiperSlide>
          <Image src={img1} alt="img" width={300} height={300} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={img2} alt="img" width={300} height={300} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={img3} alt="img" width={300} height={300} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={img4} alt="img" width={300} height={300} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
