import React from "react";
import CashOffer from "../../component/CashOffer";
import { Listing, RecentPost } from "../../component/Export";
import bookimage from "../../assets/imgi_1_selling-to-a-professional-188x300.png";

export default function OurCompany() {
  return (
    <div className="min-h-screen bg-white sm:px-4 md:px-6 lg:px-12 py-8 font-primary">
      {/* Main Layout */}
      <div className="max-w-full mx-auto px-[6%] md:flex md:gap-12">
        
        {/* LEFT SIDE (Flyer Content) */}
        <div className="md:w-[68.4%] text-darkGray leading-relaxed">
          {/* About Section */}
          <h2 className="text-xl font-bold mb-3">
            About Red Stick Property Solutions LLC
          </h2>
          <p className="mb-4">
            We provide win win solutions to help homeowners get out of their
            sticky situations… like Foreclosure, owning a burdensome property,
            probate, or anything else. At Red Stick Property Solutions LLC, we
            focus on providing you with a solution to your situation so you can
            continue to do the things you love.
          </p>
          <p className="mb-6">
            Red Stick Property Solutions LLC is a real estate solutions company
            based out of Prairieville. We’re a family owned business and focus
            on helping homeowners like you find solutions for your problem
            whether you’re going through a foreclosure, can’t sell your
            property, or just need to sell their house for all kinds of reasons.
          </p>

          {/* How We Work Section */}
          <h2 className="text-lg font-bold mb-3">
            How We Work With Homeowners
          </h2>
          <p className="mb-6">
            If you have any questions about how we work, what the process of
            selling a house or having us help you avoid foreclosure, or just
            want to learn more about us… don’t hesitate to contact us anytime!
          </p>

          {/* Call Section */}
          <p className="font-bold text-base mb-8">
            Call Red Stick Property Solutions LLC Today!{" "}
            <span className="font-bold underline">(225) 772-2747</span>
          </p>

          {/* Divider */}
          <hr className="my-6 border-gray-300" />

          {/* Pros & Cons Section */}
          <h2 className="text-lg font-bold mb-3">
            The Pros & Cons Of Selling Your House To A Local Professional Home
            Buyer– <span className="underline">FREE Guide:</span>
          </h2>

          {/* Image + Text Layout */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Book Image */}
            <div className="flex-shrink-0">
              <img
                src={bookimage}
                alt="Free Guide - Selling to a Professional Home Buyer"
                className="w-[120px] sm:w-[140px] md:w-[188px] h-auto"
              />
            </div>

            {/* Text beside the image */}
            <div>
              <p className="mb-4">
                <span className="underline text-blue-600 cursor-pointer">
                  Download our FREE Guide here
                </span>
                , Or you can always feel free to Contact us anytime if you have
                questions, want a no hassle Situation Evaluation, or want to
                just learn more about how we can help homeowners sell unwanted
                properties for cash.
              </p>
              <p>
                Get the <span className="underline font-bold">FREE Guide</span>{" "}
                and then give us a call at{" "}
                <span className="font-bold">(225) 772-2747</span> and we’ll
                discuss what your home is worth and what we can offer to buy it
                for with our{" "}
                <span className="font-bold underline">Cash Offer Program.</span>
              </p>
            </div>
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
