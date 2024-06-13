import { useState } from "react";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?
        </h3>
        <div className="flex gap-1 ">
          {[...Array(5).keys()].map((item, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(hover);
                  setRating(index);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        {" "}
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggesstions{" "}
        </h3>
        <textarea
          placeholder="Write your feedback"
          rows={5}
          className="border border-solid border-[#0066ff34] px-4 py-3 rounded-md focus:outline outline-primaryColor w-full"
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
      </div>
      <button type="button" className="btn" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
