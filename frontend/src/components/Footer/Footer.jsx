import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineProfile,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.facebook.com/profile.php?id=61550310450686",
    icon: <AiFillFacebook className="w-6 h-6 group-hover:text-white" />,
  },
  {
    path: "/",
    icon: <AiOutlineProfile className="w-6 h-6 group-hover:text-white" />,
  },
  {
    path: "https://github.com/mohamedkhaledmk",
    icon: <AiFillGithub className="w-6 h-6 group-hover:text-white" />,
  },
  {
    path: "https://www.linkedin.com/in/mohamed-khaled-0264571a3/",
    icon: <RiLinkedinFill className="w-6 h-6 group-hover:text-white" />,
  },
];
const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            {" "}
            <img src={logo} alt="logo-medicare" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} Developed by Mohamed Khaled all right reserved.{" "}
            </p>
            <div className="flex gap-3 items-center mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  target="_blank"
                  className="text-[16px] leading-7 font-[400] text-textColor mt-4 group border-[#181A1E] border rounded-full p-2 
                  group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>{" "}
          <div>
            {" "}
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:underline hover:text-primaryColor "
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {" "}
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:underline hover:text-primaryColor "
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {" "}
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:underline hover:text-primaryColor "
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
