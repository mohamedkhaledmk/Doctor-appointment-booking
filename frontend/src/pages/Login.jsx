import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  return (
    <section className="px-5  my-4">
      <div className="shadow-lg w-full sm:w-1/2 lg:w-1/3 mx-auto rounded-lg md:p-10">
        <h1 className="mb-5  font-bold">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h1>
        <form className="py-4">
          <div className="pb-5">
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="focus:outline-none border-b-2 border-solid w-full border-[#0066ff61] px-4 py-3 
              focus:border-b-primaryColor text-md placeholder:text-textColor rounded-md cursor-text "
              required
            />
          </div>
          <div className="pb-5">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="focus:outline-none border-b-2 border-solid w-full border-[#0066ff61] px-4 py-3 
              focus:border-b-primaryColor text-md placeholder:text-textColor rounded-md cursor-text "
              required
            />
          </div>

          <div>
            <button type="submit" className="w-full btn rounded-md ">
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don't Have an account?
            <Link to={"/signup"} className="text-primaryColor font-medium ">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
