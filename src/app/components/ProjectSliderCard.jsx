import Image from 'next/image';
import React,{useState} from 'react';

import TechStackCard from "./TechStackCard";
import SwiperSlider from "./SwiperSlider";
import { IoIosGlobe } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import Link from 'next/link';


const ProjectSliderCard = ({title,img1,img2,img3,img4,techs,codeLink,liveLink}) => {
  
  return (
  

    <div className="    text-primary-400 p-2">
      <div className="border-2 border-secondary-400 rounded-md ">
       
        <SwiperSlider img1={img1} img2={img2} img3={img3} img4={img4} />
       

        <div className="p-2 ">

          <h1 className="text-xl lg:text-3xl text-center font-bold">{title}</h1>
          {/* <h1 className="text-center">Description</h1> */}

          <div className="flex flex-wrap gap-4 my-2">
            {
              techs&&techs.map((tech,index)=>(
                <TechStackCard key={index} tech={tech} className="border-2 border-primary-500" />
              ))
            }
            
           
          </div>
          
          <div className="flex justify-around items-center">

            <Link href={codeLink} className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white lg:p-2 p-1 rounded-lg">
           <span className='flex items-center gap-1'> <FaCode />Code</span>
            </Link>

            <Link href={liveLink} className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white p-1 lg:p-2 rounded-lg">
            <span className='flex items-center gap-1'><IoIosGlobe /> Live</span>
            </Link>

          </div>
        </div>
      </div>
    </div>
 
  );
};

export default ProjectSliderCard;