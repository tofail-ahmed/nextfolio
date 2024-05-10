import React from "react";

const SkillCard = ({ icon: Icon, className, title, subtitle }) => {
  return (
    <div className="flex items-center gap-4 p-2 border-2 border-primary-500 rounded-md bg-transparent hover:bg-secondary-600/50 duration-1000">
      <span className={`${className} text-[40px]`}>
        <Icon />
      </span>
      <div>
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default SkillCard;
