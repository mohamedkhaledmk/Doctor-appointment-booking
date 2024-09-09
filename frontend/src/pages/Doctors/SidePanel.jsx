import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow rounded-md p-3 lg:p-5">
      <div className="flex justify-between ">
        <p className="text_para font-semibold">TicketPrice</p>
        <span className="text-headingColor my-auto font-bold">500 EGP</span>
      </div>
      <span className="h-[1px] inline-block bg-black w-full"></span>
      <div className="mt-4">
        <p className="text_para font-semibold text-headingColor ">
          Available Time Slots:
        </p>
        <div className="flex justify-between text-textColor pt-2 text-sm font-semibold">
          <p className="">Sunday</p>
          <p>4:00 PM - 9:00 PM</p>
        </div>
        <div className="flex justify-between text-textColor pt-2 text-sm font-semibold">
          <p className="">Monday</p>
          <p>5:00 PM - 8:00 PM</p>
        </div>
        <div className="flex justify-between text-textColor pt-2 text-sm font-semibold">
          <p className="">Tuesday</p>
          <p>4:00 PM - 9:30 PM</p>
        </div>

        <button className="btn w-full rounded-md hover:bg-blue-600 ">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
