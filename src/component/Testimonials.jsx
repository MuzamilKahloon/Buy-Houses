import React from "react";
import forbesLogo from "../assets/imgi_4_Forbes-Logo.jpg";

const TestimonialCard = () => {
  return (
    <div className="max-w-xs bg-[#F8F8F8] rounded-lg shadow-sm border border-gray-200 p-6 mx-auto font-primary">
      {/* Title */}
      <h2 className="text-lg font-extrabold text-darkGray mb-3 border-b border-gray-300 pb-2">
        Testimonials
      </h2>

      {/* Quote */}
      <p className="text-darkGray ml-14 text-base leading-relaxed">
        "Quite often{" "}
        <span className="font-bold">
          investors are willing to pay cash for a home
        </span>{" "}
        and with the recent tightening of financial restrictions, coupled with
        the growing number of complaints about low appraisals, having a cash
        buyer has become even more appealing.”
      </p>

     {/* Logo */}
<div className="mt-2 mr-9 flex justify-end">
  <img
    src={forbesLogo}
    alt="Forbes"
    className="h-10 w-auto" 
  />
</div>

    </div>
  );
};

export default TestimonialCard;
