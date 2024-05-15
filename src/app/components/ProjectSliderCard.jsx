import Image from 'next/image';
import React,{useState} from 'react';
import ProjectModal from "./ProjectModal"
import TechStackCard from "./TechStackCard";
import SwiperSlider from "./SwiperSlider";
import { IoIosGlobe } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import athletic from "../../../public/images/projects/me/athletic_excel-home.jpg";
import campus from "../../../public/images/projects/me/campus_guru_home.jpg";
import event from "../../../public/images/projects/me/event360_home.jpg";
import fyto from "../../../public/images/projects/me/fyto_home.jpg";
import kiddo from "../../../public/images/projects/me/kiddo_valley_home.jpg";
import quisinne from "../../../public/images/projects/me/quisinne_home.jpg";
import relief from "../../../public/images/projects/me/relief_home.jpg";

const ProjectSliderCard = ({title,img1,img2,img3,img4}) => {
  
  return (
  

    <div className="    text-primary-400 p-2">
      <div className="border-2 border-secondary-400 rounded-md ">
       
        <SwiperSlider img1={img1} img2={img2} img3={img3} img4={img4} />
       

        <div className="p-2">

          <h1 className="text-2xl text-center">{title}</h1>
          <h1 className="text-center">Description</h1>

          <div className="flex flex-wrap gap-4 my-4">
            <TechStackCard tech={"React"} className="border-2 border-primary-500" />
            <TechStackCard tech={"NodeJs"} className="border-2 border-primary-500" />
            <TechStackCard tech={"Redux"} className="border-2 border-primary-500" />
            <TechStackCard tech={"Javascript"} className="border-2 border-primary-500" />
            <TechStackCard tech={"Tailwindcss"} className="border-2 border-primary-500" />
            <TechStackCard tech={"daisyUI"} className="border-2 border-primary-500" />
          </div>
          
          <div className="flex justify-around items-center">

            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-2 rounded-lg">
           <span className='flex items-center gap-1'> <FaCode />Code</span>
            </button>

            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-2 rounded-lg">
            <span className='flex items-center gap-1'><IoIosGlobe /> Demo</span>
            </button>

          </div>
        </div>
      </div>
    </div>
 
  );
};

export default ProjectSliderCard;