/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };
  return (
    <div
      className="p-3 lg:p-5 border border-solid my-4 rounded-[12px] cursor-pointer border-[#D9DCE2]"
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between gap-5 ">
        <h4 className="text-[16px] lg:text-[22px] lg:leading-7 text-headingColor ">
          {faq.question}
        </h4>
        <div
          className={`${
            open ? "bg-primaryColor text-white border-none" : ""
          } w-7 h-7 lg:h-8 lg:w-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {/* {Open ? <AiOutlinePlus /> : <AiOutlineMinus />} */}
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {open && (
        <div className="mt-4">
          <p className="text-textColor text-[14px] lg:text-[16px] mt-4 font-[400] ">
            {faq.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
