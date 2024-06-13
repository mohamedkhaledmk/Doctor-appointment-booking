import { useState } from "react";
import React from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-12">
        <h4 className="font-bold text-headingColor text-[18px] leading-5 lg:text-[20px] mb-[30px]">
          All reviews <span>(272)</span>
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="rounded-full w-10 h-10 ">
              <img className="w-full" src={avatar} alt="Doctor Image" />
            </figure>
            <div>
              <h5 className="text-primaryColor font-bold text-[16px] leading-6">
                Mohamed Khaled
              </h5>
              <p className="text-textColor text-[14px] leading-5">
                {formatDate("2024-5-10")}
              </p>
              <p className="text_para mt-3 font-medium">
                Good services, Highly recommended 👌
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((item, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button onClick={() => setShowFeedbackForm(true)} className="btn">
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
