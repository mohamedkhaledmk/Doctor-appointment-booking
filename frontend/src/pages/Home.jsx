import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import featureImg from "./../assets/images/feature-img.png";
import videoIcon from "./../assets/images/video-icon.png";
import avatar from "./../assets/images/avatar-icon.png";
import faqImg from "./../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

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
            <div className="mx-auto xl:w-[470px]">
              <h2 className="heading text-center ">Our Medical Services</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care.
              </p>
            </div>
          </div>
        </section>
        <ServicesList />
        {/*  =============== Services Section End  =============== */}
        {/*  =============== Feature Section  =============== */}
        <section>
          <div className="container w-[70%]">
            <div className="flex items-center justify-between  flex-col lg:flex-row">
              <div className="xl:w-[670px] ">
                <h2 className="heading">
                  Get virtual treatment <br /> anytime
                </h2>
                <ul className="pl-4 py-4">
                  <li className="text_para my-2">
                    1. Shedule the appointment directly
                  </li>
                  <li className="text_para my-2">
                    2. Search for your physician here, and contact their office
                  </li>
                  <li className="text_para my-2">
                    3. View our physicians who are accepting new patients, use
                    the online scheduling tool to select an appoitment time
                  </li>
                </ul>
                <Link to={`/`}>
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              {/* image */}
              <div className="xl:w-[770px] relative z-10 flex justify-end mt-[50px] lg:mt[0]">
                <img src={featureImg} alt="featureImg" className="w-3/4" />
                <div className="w-[150]px lg:w-[250px] bg-white p-2 pb-3 z-20 absolute bottom-[50px] left-0 md:bottom-[100px] rounded-[10px]">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3 ">
                      <p className="font-[700] text-[10px] lg:text-[14px] text-headingColor">
                        Tue, 24
                      </p>
                      <p className="font-[400] text-[10px] lg:text-[14px] text-textColor">
                        10:00
                      </p>
                    </div>
                    <span className="w-5 h-5 bg-yellowColor flex items-center justify-center lg:w-[34px] lg:h-[34px] rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="video" />
                    </span>
                  </div>
                  <div
                    className="w-[75px] lg:w-[125px] lg:w- bg-[#CCF0F3] text-center text-irisBlueColor font-[500] rounded-full mt-2 py-1 px-2 
                  lg:px-[10px] lg:py-[6px] text-[10px] lg:text-[14px]
                  "
                  >
                    {" "}
                    Consultation{" "}
                  </div>
                  <div className="flex items-center mt-2 gap-[6px] lg:mt-[18px]">
                    <img src={avatar} alt="doctor-avatar" />
                    <h4 className="text-textColor leading-3 font-[700] text-[10px] lg:text-[14px]">
                      Wayne Collins
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </section>
        {/*  =============== Feature Section End  =============== */}
        {/*  =============== Our great doctors  =============== */}
        <section>
          <div className="container">
            <div className="mx-auto xl:w-[470px]">
              <h2 className="text-center heading"> Our great doctors </h2>
              <p className="text-center text-para">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </div>
            <DoctorList />
          </div>
        </section>
        {/*  =============== Our great doctors End  =============== */}
        {/* =============== FAQ Section  =============== */}
        <section className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faqImage" />
            </div>
            <div className="w-full md:w-1/2 ">
              {" "}
              <h2 className="heading mb-4 lg:mb-12">
                Most Frequently Asked Questions
              </h2>
              <FaqList />
            </div>
          </div>
        </section>
        {/* =============== FAQ Section End  =============== */}
        {/* =============== Testimonial Section  =============== */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="text-center heading"> What our patients say </h2>
              <p className="text-center text-para">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
            </div>
            <Testimonial />
          </div>
        </section>
        {/* =============== Testimonial Section End  =============== */}
      </>
    </>
  );
};

export default Home;
