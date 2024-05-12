import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          {" "}
          <h2 className="heading">Find a doctor</h2>
          <div className="max-w-[570px] mx-auto bg-[#0066ff2c] flex justify-between items-center rounded-md mt-[30px]">
            <input
              type="search"
              placeholder="Search Doctor"
              className=" px-4 py-4 w-full bg-transparent focus:outline-none placeholder:text-textColor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md py-4">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
