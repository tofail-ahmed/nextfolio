"use client";
import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import Header from "./Header";
import ProjectSliderCard from "./ProjectSliderCard";
import { TbPlayerTrackNextFilled } from "react-icons/tb";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider";
import "./Project.css";

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

import port1 from "../../../public/projects/portfolio/port-1.jpg" 
import port2 from "../../../public/projects/portfolio/port-2.jpg" 
import port3 from "../../../public/projects/portfolio/port-3.jpg" 
import { useAllProjectQuery } from "@/redux/projects/projectApi";


const ProjectsSection = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        
      </div>
    );
  }

  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
        
      />
    );
  }
 var settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 1,
   initialSlide: 0,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow  />,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
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
         initialSlide: 1,
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
const fytoTechs= ["NextJs", "Javscript", "Redux", "TailwindCSS", "DaisyUI", "ParticleJs", ] ;
const eventTechs=['ReactJs','Typescript','TailwindCSS','Framer Motion',"SwiperJs",'Tanstack Query'];
const reliefTechs=['ReactJs','Typescript','TailwindCSS','Framer Motion','AOS',"Slicker",'Redux']
const quisinneTechs=['ReactJs','Javascript','TailwindCSS','DaisyUI','React-dom','AOS'];
const campusTechs=['ReactJs','TailwindCSS','Javascript','DaisyUI','Firebase',"Paralax"];
const kiddoTechs=['ReactJs','TailwindCSS','Javascript','DaisyUI','AOS','Firebase','Toastify'];
const athTechs=['ReactJs','TailwindCSS','Javascript','DaisyUI','React Hook Form','Firebase',]
const portfolio=['NextJs','TailwindCSS','Javascript','Framer Motion','EmailJs','Swiper','AOS']
 
 const {data,isLoading}=useAllProjectQuery("")
// console.log("isLoading",isLoading)
console.log("data",data?.data)
if(isLoading){
  return <div className="text-4xl font-bold text-center text-orange-500">Loading...</div>
}
 return (
   <div  id="projects">
     <Header title={"My Projects"} />
     <div className="slider-container  px-8 ">
       <Slider {...settings}>
       {
        data?.data.map((project)=>
          <ProjectSliderCard key={project._id}
        title={project.name}
        img1={project.img1}
        img2={project.img2}
        img3={project.img3}
        img4={project.img4}
        techs={project.techs}
        liveLink={project.live}
        codeLink={project.github}
        overview={project.overview}
      />
        )
       }


         {/* <ProjectSliderCard
           title={"Event360"}
           img1={event1}
           img2={event2}
           img3={event3}
           img4={event4}
           techs={eventTechs}
           liveLink={"https://event360-client-iota.vercel.app/"}
           codeLink={"https://github.com/tofail-ahmed/event-360-client"}
         />
         <ProjectSliderCard
           title={"Campus Guru"}
           img1={campus1}
           img2={campus2}
           img3={campus3}
           img4={campus4}
           techs={campusTechs}
           liveLink={"https://college-client-adeee.web.app/"}
           codeLink={"https://github.com/tofail-ahmed/college-client"}
         />
         <ProjectSliderCard
           title={"Relief Aid"}
           img1={relief1}
           img2={relief2}
           img3={relief3}
           img4={relief4}
           techs={reliefTechs}
           liveLink={"https://relief-aid-client.vercel.app/"}
           codeLink={"https://github.com/tofail-ahmed/relief-aid-client"}
         />
         <ProjectSliderCard
           title={"Portfolio"}
           img1={port1}
           img2={port2}
           img3={port3}
           img4={port1}
          
           techs={portfolio}
           liveLink={"https://relief-aid-client.vercel.app/"}
           codeLink={"https://relief-aid-client.vercel.app/"}
         />
         <ProjectSliderCard
           title={"Athletic Excel"}
           img1={ath1}
           img2={ath2}
           img3={ath3}
           img4={ath4}
           techs={athTechs}
           liveLink={"https://athletic-excel.web.app/"}
           codeLink={"https://github.com/tofail-ahmed/athletic-excel-client"}
         />
         <ProjectSliderCard
           title={"Fytobyte"}
           img1={fyto1}
           img2={fyto2}
           img3={fyto3}
           img4={fyto4}
          techs={fytoTechs}
          liveLink={"https://fyto-client.vercel.app/"}
           codeLink={"https://github.com/tofail-ahmed/next-practice"}
         />
         <ProjectSliderCard
           title={"Kiddo Valley"}
           img1={kiddo1}
           img2={kiddo2}
           img3={kiddo3}
           img4={kiddo4}
           techs={kiddoTechs}
           liveLink={"https://kiddo-valley.web.app/"}
           codeLink={"https://github.com/tofail-ahmed/kiddo-valley-client"}
           
         />
         <ProjectSliderCard
           title={"Quisinne de French"}
           img1={q1}
           img2={q2}
           img3={q3}
           img4={q4}
           techs={quisinneTechs}
           liveLink={"https://quisinne-de-french.web.app/"}
           codeLink={"https://github.com/tofail-ahmed/quisinne-client"}
         /> */}
       </Slider>
     </div>
   </div>
 );
};

export default ProjectsSection;
// const projects = [
 //   { title: "Event360", img1: event1, img2: event2, img3: event3, img4: event4 },
 //   { title: "Campus Guru", img1: campus1, img2: campus2, img3: campus3, img4: campus4 },
 //   { title: "Relief Aid", img1: relief1, img2: relief2, img3: relief3, img4: relief4 },
 //   { title: "Athletic Excel", img1: ath1, img2: ath2, img3: ath3, img4: ath4 },
 //   { title: "Fytobyte", img1: fyto1, img2: fyto2, img3: fyto3, img4: fyto4, techs: ["NextJs", "Javscript", "Redux", "TailwindCSS", "DaisyUI", "ParticleJs", "AOS"] },
 //   { title: "Kiddo Valley", img1: kiddo1, img2: kiddo2, img3: kiddo3, img4: kiddo4 },
 //   { title: "Quisinne de French", img1: q1, img2: q2, img3: q3, img4: q4 },
 // ];
