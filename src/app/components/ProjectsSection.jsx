"use client";
import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Header from "./Header";
import ProjectSliderCard from "./ProjectSliderCard";
import athletic from "../../../public/images/projects/me/athletic_excel-home.jpg";
import campus from "../../../public/images/projects/me/campus_guru_home.jpg";
import event from "../../../public/images/projects/me/event360_home.jpg";
import fyto from "../../../public/images/projects/me/fyto_home.jpg";
import kiddo from "../../../public/images/projects/me/kiddo_valley_home.jpg";
import quisinne from "../../../public/images/projects/me/quisinne_home.jpg";
import relief from "../../../public/images/projects/me/relief_home.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider"

const ProjectsSection = () => {
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
       
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  };

  return (
    
    <div className="">
    <Header title={"My Projects"}/>
      <div className="slider-container  p-8 ">
        <Slider {...settings}>
      
         <ProjectSliderCard img={event}/>
         <ProjectSliderCard img={fyto}/>
         <ProjectSliderCard img={relief}/>
         <ProjectSliderCard img={campus}/>
         <ProjectSliderCard img={quisinne}/>
         <ProjectSliderCard img={kiddo}/>
         <ProjectSliderCard img={athletic}/>
        </Slider>
      </div>
      
    </div>
  );
};

export default ProjectsSection;
