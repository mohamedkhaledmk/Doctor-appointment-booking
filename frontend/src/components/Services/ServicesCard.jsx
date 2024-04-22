import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = ({ index, item }) => {
  return (
    <div key={index} className={`card ${item.bgColor} py-[30px] px-3 lg:px-5 `}>
      <h1 className="text-headingColor font-[700] text-[26px] leading-9">
        {item.name}{" "}
      </h1>
      <p className="tex_para text-textColor font-[400] text-[16px] mt-4 leading-7">
        {item.desc}
      </p>
      <div className="flex justify-between items-center mt-[30px]">
        <Link
          to="/doctors"
          className={`rounded-full w-[44px] h-[44px] flex items-center border  border-[#181A1E] justify-center mx-auto group hover:bg-primaryColor hover:border-none`}
        >
          <BsArrowRight className="w-6 h-5 group-hover:text-white" />
        </Link>{" "}
        <span
          className={`bg-[${item.bgColor}] w-[44px] h-[44px] flex items-center justify-center border  `}
          style={{
            background: item.bgColor,
            borderRadius: `6px 0 0 6px`,
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
