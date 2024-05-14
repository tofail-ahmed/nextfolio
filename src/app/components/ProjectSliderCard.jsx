import Image from 'next/image';
import React from 'react';

const ProjectSliderCard = ({img,}) => {
      return (
            <div>
                <Image className='w-[200px] h-[200px]' src={img} alt="img"/>  
            </div>
      );
};

export default ProjectSliderCard;