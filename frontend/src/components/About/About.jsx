import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[100px] xl:gap-[150px] flex-col lg:flex-row ">
          <div className="relative w-3/4 lg:w-1/2 xl:w-1/3 z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="about" />
            <div className="absolute bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[-22%] z-20 ">
              <img src={aboutCardImg} alt="icon" />
            </div>
          </div>
          <div className="w-full w-1/2 lg:w-3/5 order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best public health organizations in the nation and
              #1 in Texas.
            </p>
            <p className="text_para mt-8">
              Our best is something we strive for each day, caring for our
              partners-not looking back at waht we accomplished buttowards what
              we can do tomorrow. Providing the best.
            </p>
            <Link to="#">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
