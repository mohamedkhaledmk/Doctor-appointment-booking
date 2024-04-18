import React from "react";
import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";

const Home = () => {
  return (
    <>
      <>
        {/* =============== Hero Section =============== */}
        <section className="hero_section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
              {/* Hero content */}
              <div className="">
                <div className="lg:w-[570px] sm:text-center lg:text-left">
                  <h1 className="text-3xl leading-[46px]  font-[800] text-headingColor md:text-4xl md:leading-[70px]">
                    We are here to help patients live a healthy, longer life.
                  </h1>
                  <p className="text_para">
                    lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* Hero counter */}
                <div className="mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-headingColor text-3xl font-[700] leading-[56px] lg:leading-[54px] lg:text-4xl">
                      30+
                    </h2>
                    <span className="bg-yellowColor rounded-full mt-[-18px] h-2 block w-[100px]"></span>
                    <p className="text_para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-headingColor text-3xl font-[700] leading-[56px] lg:leading-[54px] lg:text-4xl">
                      15+
                    </h2>
                    <span className=" bg-purpleColor rounded-full mt-[-18px] h-2 block w-[100px]"></span>
                    <p className="text_para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-headingColor text-3xl font-[700] leading-[56px] lg:leading-[54px] lg:text-4xl">
                      100%
                    </h2>
                    <span className="bg-irisBlueColor rounded-full mt-[-18px] h-2 block w-[100px]"></span>
                    <p className="text_para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/* Hero Content */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  {" "}
                  <img src={heroImg01} alt="hero-img01" />
                </div>{" "}
                <div className="mt-[30px]">
                  <img
                    src={heroImg02}
                    alt="hero-img02"
                    className="w-full mb-[30px] rounded-full"
                  />
                  <img
                    src={heroImg03}
                    alt="hero-img03"
                    className="w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============== Hero Section End =============== */}
        {/* =============== How it Works Section =============== */}
        <section>
          <div className="container">
            <div className="mx-auto lg:w-[570px]">
              <h2 className="heading text-center ">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World=class care for everyone. Our health System offers
                unmatched, expert health care. From the lab to the clinic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[30px] lg:gap-[30px]">
              <div className="py-[30px] px-4">
                {" "}
                <div className="flex justify-center items-center">
                  <img src={icon01} alt="icon01" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-headingColor font-[700] text-[26px] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-textColor text-center font-[400] leading-7 text-[16px] mt-4">
                    {" "}
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care. From the lab to the clinic.{" "}
                  </p>
                  <Link
                    to={`/doctors`}
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center mx-auto group 
                 hover:bg-primaryColor hover:border-none "
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-4">
                {" "}
                <div className="flex justify-center items-center">
                  <img src={icon02} alt="icon02" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-headingColor font-[700] text-[26px] text-center">
                    Find a Location
                  </h2>
                  <p className="text-textColor text-center font-[400] leading-7 text-[16px] mt-4">
                    {" "}
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care. From the lab to the clinic.{" "}
                  </p>
                  <Link
                    to={`/doctors`}
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center mx-auto group 
                 hover:bg-primaryColor hover:border-none "
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-4">
                {" "}
                <div className="flex justify-center items-center">
                  <img src={icon03} alt="icon03" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-headingColor font-[700] text-[26px] text-center">
                    Book an Appointment
                  </h2>
                  <p className="text-textColor text-center font-[400] leading-7 text-[16px] mt-4">
                    {" "}
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care. From the lab to the clinic.{" "}
                  </p>
                  <Link
                    to={`/doctors`}
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center mx-auto group 
                 hover:bg-primaryColor hover:border-none "
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============== How it Works Section End =============== */}
        {/*  =============== About Section  =============== */}
        <About />
        {/*  =============== About Section End  =============== */}
        {/*  =============== Services Section  =============== */}
        <section>
          <div className="container">
            <div>
              <h2 className="heading">Our Medical Services</h2>
            </div>
          </div>
        </section>
        {/*  =============== Services Section End  =============== */}
      </>
    </>
  );
};

export default Home;
