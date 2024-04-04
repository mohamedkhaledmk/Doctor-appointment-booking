import React from "react";
import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
const Home = () => {
  return (
    <>
      <>
        {/* Hero Section */}
        <section className="hero_section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
              {/* Hero content */}
              <div className="">
                <div className="lg:w-[570px]">
                  <h1 className="text-3xl leading-[46px] font-[800] text-headingColor md:text-4xl md:leading-[70px]">
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
      </>
    </>
  );
};

export default Home;
