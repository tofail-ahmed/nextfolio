import Image from 'next/image';
import React,{useState} from 'react';
import ProjectModal from "./ProjectModal"
import SwiperSlider from "./SwiperSlider"

const ProjectSliderCard = ({img}) => {
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
            <SwiperSlider/>
            <div className="p-2">
              <h1 className="text-2xl text-center">Title</h1>
              <h1 className="text-center">Decription</h1>
              <div className="grid grid-cols-2 gap-4">
                <h1 className="mx-auto">Tech Stack</h1> 
                <h1 className="mx-auto">Tech Stack</h1> 
                <h1 className="mx-auto">Tech Stack</h1>
                <h1 className="mx-auto">Tech Stack</h1>
              </div>
              <div className="flex justify-around items-center">
              <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-2 rounded-lg">Code</button>
              <button className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-2 rounded-lg">Demo</button>
              </div>
            </div>
            </div>
          </div>
            // </button>
      );
};

export default ProjectSliderCard;