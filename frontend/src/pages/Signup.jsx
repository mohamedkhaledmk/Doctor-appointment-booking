import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="px-10">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <figure className="hidden lg:block">
              <img src={signupImg} className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="lg:pl-16 py-7">
            <h3 className="font-bold mb-7 text-lg">
              Create an <span className="text-primaryColor ">account</span>
            </h3>
            <form className="ml-4" onSubmit={submitHandler}>
              <div className="mb-5">
                {" "}
                <input
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border-b border-solid border-[#0066ff61] focus:outline-none w-full
              px-4 py-3 focus:border-b-primaryColor text-md placeholder:text-textColor rounded-md cursor-text"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-solid border-[#0066ff61] focus:outline-none w-full
              px-4 py-3 focus:border-b-primaryColor text-md placeholder:text-textColor rounded-md cursor-text"
                />
              </div>
              <div className="mb-5">
                {" "}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-b border-solid border-[#0066ff61] focus:outline-none w-full
              px-4 py-3 focus:border-b-primaryColor text-md placeholder:text-textColor rounded-md cursor-text"
                />
              </div>
              <div className="mb-5 flex justify-between items-center">
                <label htmlFor="role" className="font-bold">
                  Are you a:
                  <select
                    name="role"
                    id="role"
                    className="py-3 px-4 focus:outline-none "
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option className="" value="patient">
                      Patient
                    </option>
                    <option className="" value="doctor">
                      Doctor
                    </option>
                  </select>
                </label>
                <label htmlFor="gender" className="font-bold">
                  Are you a:
                  <select
                    name="gender"
                    id="gender"
                    className="py-3 px-4 focus:outline-none "
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] rounded-full border-primaryColor border-solid border-2">
                  <img src={avatar} className="rounded-full" />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept="/jpg, .png"
                    onChange={handleFile}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="flex items-center justify-center absolute top-0 left-0 w-full h-full
                    bg-[#0066ff46] rounded-lg truncate text-headingColor font-semibold cursor-pointer "
                  >
                    Upload Photo
                  </label>
                </div>
              </div>{" "}
              <div>
                <button type="submit" className="w-full btn rounded-md ">
                  Sign Up
                </button>
              </div>
              <p className="mt-3 text-textColor text-center">
                Already Have an account?
                <Link to={"/login"} className="text-primaryColor font-medium ">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
