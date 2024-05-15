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
import SwiperSlider from "./SwiperSlider";
import event1 from "../../../public/projects/event/event_home.jpg"
import event2 from "../../../public/projects/event/event_gallery.jpg"
import event3 from "../../../public/projects/event/event_recentEvent.jpg"
import event4 from "../../../public/projects/event/event_dash.jpg"

import campus1 from "../../../public/projects/campus/campus_home.jpg"
import campus2 from "../../../public/projects/campus/campus_admission.jpg"
import campus3 from "../../../public/projects/campus/campus_search.jpg"
import campus4 from "../../../public/projects/campus/campus_tab.jpg"

import relief1 from "../../../public/projects/relief/client_deliver.jpg"
import relief2 from "../../../public/projects/relief/relief_campaign.jpg"
import relief3 from "../../../public/projects/relief/relief_dash.jpg"
import relief4 from "../../../public/projects/relief/relief_supplies.jpg"

import ath1 from "../../../public/projects/athletic/athletic_home.jpg"
import ath2 from "../../../public/projects/athletic/athletic_classes.jpg"
import ath3 from "../../../public/projects/athletic/athletic_manageClass.jpg"
import ath4 from "../../../public/projects/athletic/athletic_user.jpg"

import fyto1 from "../../../public/projects/fyto/fyto_home.jpg"
import fyto2 from "../../../public/projects/fyto/fyto_news.jpg"
import fyto3 from "../../../public/projects/fyto/fyto_knowledge.jpg"
import fyto4 from "../../../public/projects/fyto/fyto_foot.jpg"

import kiddo1 from "../../../public/projects/kiddo/kiddo_home.jpg"
import kiddo2 from "../../../public/projects/kiddo/kiddo_category.jpg"
import kiddo3 from "../../../public/projects/kiddo/kiddo_toys.jpg"
import kiddo4 from "../../../public/projects/kiddo/kiddo_addToy.jpg"

import q1 from "../../../public/projects/quisinne/quisinne_home.jpg"
import q2 from "../../../public/projects/quisinne/quisinne_chefs.jpg"
import q3 from "../../../public/projects/quisinne/quisinne_login.jpg"
import q4 from "../../../public/projects/quisinne/quisinne_recipe.jpg"



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
      
         <ProjectSliderCard title={"Event360"} img1={event1} img2={event2} img3={event3} img4={event4}  />
         <ProjectSliderCard title={"Campus Guru"} img1={campus1} img2={campus2} img3={campus3} img4={campus4}  />
         <ProjectSliderCard title={"Relief Aid"} img1={relief1} img2={relief2} img3={relief3} img4={relief4}  />
         <ProjectSliderCard title={"Athletic Excel"} img1={ath1} img2={ath2} img3={ath3} img4={ath4}  />
         <ProjectSliderCard title={"Fytobyte"} img1={fyto1} img2={fyto2} img3={fyto3} img4={fyto4}  />
         <ProjectSliderCard title={"Kiddo Valley"} img1={kiddo1} img2={kiddo2} img3={kiddo3} img4={kiddo4}  />
         <ProjectSliderCard title={"Quisinne de French"} img1={q1} img2={q2} img3={q3} img4={q4}  />


        

        </Slider>
      </div>
      
    </div>
  );
};

export default ProjectsSection;
