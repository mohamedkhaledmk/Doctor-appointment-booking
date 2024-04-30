/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import starIcon from "./../../assets/images/Star.png";
import { Link } from "react-router-dom";
const DoctorCard = ({ doctor }) => {
  const {
    name,
    photo,
    specialty,
    avgRating,
    totalRating,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5 ">
      <div>
        {" "}
        <img className="w-full" src={photo} alt="doctor" />
      </div>{" "}
      <h2 className="text-headingColor font-[700] text-[18px] lg:text-[26px] leading-9 my-2">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between w-full">
        <span
          className="text-irisBlueColor bg-[#CCF0F3] px-2 py-1 font-[700] lg:px-6 lg:py-2 rounded leading-4 lg:leading-7
        text-[12px] lg:text-[14px]"
        >
          {specialty}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            {" "}
            <img src={starIcon} alt="star" />
            {avgRating}
          </span>
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-headingColor font-[700] text-[16px] lg:text-[18px] leading-7 ">
            +{totalPatients} Patients
          </h3>
          <p className="text-textColor text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400]">
            At {hospital}
          </p>
        </div>
        <Link
          to={`/doctors`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:border-none hover:bg-primaryColor "
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
