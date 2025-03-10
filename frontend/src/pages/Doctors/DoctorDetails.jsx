import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img
                  src={doctorImg}
                  alt="Doctor Image"
                  className="w-full h-full"
                />
              </figure>
              <div>
                <span className="text-irisBlueColor bg-[#CCF0F3] px-6 py-1 lg:py-2 font-semibold leading-4 lg:leading-7 text-[12px] lg:text-[16px] rounded">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {" "}
                  Mohamed Khaled
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span>
                    <img src={starIcon} alt="stars" />
                  </span>
                  <span className="text-headingColor font-semibold text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-700">
                    4.8
                  </span>
                  <span className="text-textColor text-[14px] leading-5 lg:text-[15px] lg:leading-7 font-400">
                    (272)
                  </span>
                </div>
                <p className="text_para mt-2 md:mt-3 text-[14px] leading-5 lg:text-[16px] lg:leading-7 lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => {
                  setTab("about");
                }}
                className={`${
                  tab == "about"
                    ? " border-b-2 border-solid border-primaryColor"
                    : ""
                } py-2 px-5 mr-5 text-[16px] leadin-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => {
                  setTab("feedback");
                }}
                className={`${
                  tab == "feedback"
                    ? "border-b-2 border-solid border-primaryColor"
                    : ""
                } py-2 px-5 mr-5 text-[16px] leadin-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">{tab == "about" && <DoctorAbout />}</div>
            <div className="mt-[50px]">{tab == "feedback" && <Feedback />}</div>
          </div>

          <div className="col-span-3 md:col-span-1">
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
