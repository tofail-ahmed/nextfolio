import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        <span className="text-primary-400">&lt;</span> {title}{" "}
        <span className="text-primary-600">/&gt;</span>
      </h2>
    </div>
  );
};

export default Header;
