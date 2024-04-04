import { useState, useEffect, useRef } from "react";
import logo from "./../../assets/images/logo.png";
import userImg from "./../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });
  return (
    <header
      ref={headerRef}
      className="header flex items-center bg-[url('./assets/images/mask.png')] leading-[100px] bg-center bg-no-repeat bg-cover w-full"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            {/* logo */}
            <img src={logo} alt="logo" />
          </div>
          {/* navigation menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-8 ">
            <div className="hidden">
              <Link to={"/"}>
                {" "}
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full h-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link to={"/login"}>
              <button className="btn font-[600] h-[44px] flex items-center justify-center">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu
                className="text-3xl text-textColor cursor-pointer"
                onClick={toggleMenu}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
