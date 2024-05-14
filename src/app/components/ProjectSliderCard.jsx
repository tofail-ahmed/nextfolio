import Image from 'next/image';
import React,{useState} from 'react';
import ProjectModal from "./ProjectModal"
import TechStackCard from "./TechStackCard";
import SwiperSlider from "./SwiperSlider";
import { IoIosGlobe } from "react-icons/io";
import { FaCode } from "react-icons/fa";


const ProjectSliderCard = ({ img }) => {
  // const [showModal,setShowModal]=useState(false);
  // console.log(showModal)
  return (
    // <button onClick={()=>setShowModal(true)}>

    <div className="    text-primary-400 p-2">
      <div className="border-2 border-secondary-400 rounded-md ">
        {/* <Image
              className="w-full h-[300px] mx-auto rounded-t-md"
              src={img}
              alt="fyto"
            /> */}
        <SwiperSlider />
        <div className="p-2">
          <h1 className="text-2xl text-center">Title</h1>
          <h1 className="text-center">Decription</h1>
          <div className="flex flex-wrap gap-4">
            <TechStackCard tech={"React"} className="border-2 border-primary-500" />
            <TechStackCard tech={"NodeJs"} className="border-2 border-primary-500" />
            <TechStackCard tech={"Redux"} className="border-2 border-primary-500" />
            <TechStackCard tech={"Javascript"} className="border-2 border-primary-500" />
            <TechStackCard tech={"Tailwindcss"} className="border-2 border-primary-500" />
            <TechStackCard tech={"daisyUI"} className="border-2 border-primary-500" />
          </div>
          <div className="flex justify-around items-center">
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-2 rounded-lg">
            <FaCode />Code
            </button>
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-2 rounded-lg">
            <IoIosGlobe /> Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    // </button>
  );
};

export default ProjectSliderCard;