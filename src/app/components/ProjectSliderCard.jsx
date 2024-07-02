import Image from 'next/image';
import React,{useState} from 'react';

import TechStackCard from "./TechStackCard";
import SwiperSlider from "./SwiperSlider";
import { IoIosGlobe } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import Link from 'next/link';


const ProjectSliderCard = ({title,img1,img2,img3,img4,techs,codeLink,liveLink,overview}) => {
 
  
  return (
  

    <div className="    text-primary-600 p-2">
      <div className="border-2 border-primary-600 rounded-md ">
       
        <SwiperSlider img1={img1} img2={img2} img3={img3} img4={img4} />
       

        <div className="p-2 ">

          <h1 className="text-xl lg:text-3xl text-center font-bold">{title}</h1>
         
 <h1 className="text-center text-sx lg:block sm:hidden">{overview}</h1>
          <div className="flex flex-wrap gap-2 lg:gap-4 my-2">
            {
              techs&&techs.map((tech,index)=>(
                <TechStackCard key={index} tech={tech} className=" text-white" />
              ))
            }
            
         
          </div>
          
          <div className="flex flex-col gap-4">

            <Link href={codeLink} className="bg-primary-600 hover:bg-primary-800 w-full text-white lg:p-2 p-1 rounded-lg">
           <span className='flex items-center gap-1 justify-center'> <FaCode />Code</span>
            </Link>

            <Link href={liveLink} className="bg-primary-600 w-full hover:bg-primary-800 text-white p-1 lg:p-2 rounded-lg">
            <span className='flex items-center gap-1 justify-center'><IoIosGlobe /> Live</span>
            </Link>

          </div>
        </div>
      </div>
    </div>
 
  );
};

export default ProjectSliderCard;