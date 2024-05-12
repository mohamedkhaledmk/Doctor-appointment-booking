import React from "react";
import ServicesCard from "../components/Services/ServicesCard";
import { services } from "../assets/data/services";

const Services = () => {
  return (
    <section>
      <div className="container">
        {" "}
        <div className="mx-auto w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[50px] mx-12">
          {services.map((item, index) => (
            <ServicesCard index={index} item={item} />
          ))}
          {console.log(services)}
        </div>
      </div>
    </section>
  );
};

export default Services;
