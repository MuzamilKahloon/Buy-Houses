import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import CashOffer from "../../component/CashOffer";
import forbesLogo from "../../assets/imgi_4_Forbes-Logo.jpg";
import { Listing, RecentPost } from "../../component/Export";
export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white sm:px-4 md:px-6 lg:px-12 py-4 font-primary">
      {/* Main layout */}
      <div className="max-w-full mx-auto px-[6%] md:flex md:gap-12">
        {/* LEFT SIDE */}
        <div className="md:flex-1 md:mt-12 space-y-6">
          <h2 className="text-[35px] md:text-[39px] leading-[42.2px] md:leading-[47.5px] text-darkGray font-bold">
            What Others Say…
          </h2>
          <p className=" text-darkGray text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] ">
            It’s important to us that the homeowners we work with have a great
            experience with us. In the end, we’re not happy if we’re not able to
            provide you with the solution you want. So, check out what others
            have said about us. Here’s just a few snippets of what other people
            we’ve worked with have said.
          </p>
          <p className="text-darkGray text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] mb-16">
            Want to share your own experience with us?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Send us a note
            </a>{" "}
            to let us know what working with Red Stick Property Solutions LLC
            has been like for you.
          </p>

          {/* Social buttons */}
          <div className=" flex items-center gap-2 pt-12">
            {/* Facebook button */}
            <button className="flex items-center gap-2 bg-[#3b5998] text-white px-1 py-[1px] rounded-md hover:bg-[#2d4373] transition">
              {/* Icon always visible */}
              <FaFacebookF size={14} />
              {/* Text hidden on mobile, visible on md+ */}
              <span className="hidden md:inline  md:text-[14px]  md:leading-[22px]">
                Share
              </span>
            </button>

            {/* Cross button */}
            <button className="flex items-center gap-2 bg-black text-white px-1 py-[1px] rounded-md hover:bg-darkGray transition">
              <FaXTwitter size={14} />
              <span className="hidden md:inline text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">
                Share
              </span>
            </button>
          </div>
          {/* Quoted text */}
          <blockquote className="pl-10 text-darkGray text-[14px] md:text-[18px] leading-[24px] md:leading-[27px]">
            “Quite often{" "}
            <span className="font-extrabold text-darkGray">
              investors are willing to pay cash for a home
            </span>{" "}
            and with the recent tightening of financial restrictions, coupled
            with the growing number of complaints about low appraisals, having a
            cash buyer has become even more appealing.”
          </blockquote>

          {/* Forbes logo */}
          <div className=" mr-9 flex justify-end">
            <img
              src={forbesLogo}
              alt="Forbes"
              className="h-12 w-auto -mt-[52px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE (cards + cash offer) */}
        <div className="md:w-[31.6%] flex flex-col gap-4 mt-10 md:mt-0">
          <Listing />

          <CashOffer
            title="Get Your Fair Cash Offer Today!"
            description="We buy houses in ANY CONDITION in LOUISIANA. No commissions, fees, or obligation. Start below by giving us a bit of information about your property or call (225) 772-2747."
            containerClass="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg"
            buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          />
          <RecentPost />
        </div>
      </div>
    </div>
  );
}
