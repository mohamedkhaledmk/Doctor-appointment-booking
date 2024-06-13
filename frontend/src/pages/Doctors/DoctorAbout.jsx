import React from "react";
import { formatDate } from "../../utils/formatDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="my-4 text-headingColor font-semibold flex items-center gap-2 text-[20px] leading-9">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Mohamed Khaled
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          voluptas quibusdam, corporis natus placeat velit vero iure
          reprehenderit qui ea ut incidunt ipsa provident fugit eveniet tempore
          maxime accusamus dolorum!
        </p>
      </div>
      <div className="mt-12 ">
        <h3 className="text-headingColor font-semibold text-[20px] leading-9">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[14px] font-semibold leading-6">
                {formatDate("2014-10-09")}-{formatDate("2020-01-01")}
              </span>
              <p className="text-[16px] leading-7 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-7 font-medium text-textColor">
              {" "}
              Dar El-Fouad Hospital, October{" "}
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[14px] font-semibold leading-6">
                {formatDate("2020-01-01")}-{formatDate(new Date())}
              </span>
              <p className="text-[16px] leading-7 font-medium text-textColor">
                Professor at AUC University
              </p>
            </div>
            <p className="text-[16px] leading-7 font-medium text-textColor">
              {" "}
              Dar El-Fouad Hospital, October{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
