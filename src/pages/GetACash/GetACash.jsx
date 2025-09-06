import React from "react";

import CashOffer from "../../component/CashOffer";
import arrowright from "../../assets/imgi_1_down-arrow.png";
import privacy from "../../assets/imgi_2_privacy-2.png";
import { Listing, RecentPost } from "../../component/Export";

export default function GetaCash() {
  return (
    <div className="min-h-screen bg-white sm:px-4 md:px-6 lg:px-12 py-8 font-primary">
      {/* Main layout */}
      <div className="max-w-full mx-auto px-[6%] md:flex md:gap-12">
        {/* LEFT SIDE */}
        <div className="md:w-[68.4%] w-full font-primary text-darkGray relative">
          {/* Headings */}
          <h1 className="text-[22px] md:text-[28px] font-bold leading-snug">
            Sell Your House{" "}
            <span className="text-blue-600 underline">This Week</span>
          </h1>
          <h2 className="text-[20px] md:text-[24px] font-bold mt-2">
            We Buy Baton Rouge Houses{" "}
            <span className="italic font-extrabold">Fast!</span>
          </h2>
          <h2 className="text-[20px] md:text-[24px] font-bold ">
            … And Give You A Fair Cash Offer
          </h2>

          {/* Paragraph 1 */}
          <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed md:w-[70%]">
            Selling a house can be stressful, time-consuming, and expensive. We
            can eliminate that stress and give you the peace of mind that comes
            with knowing your house hassles are completely done – without having
            to fix it up, show it, wait for buyer financing, or evict the
            tenants. And, it all happens SO FAST.
          </p>

          {/* Highlighted red text */}
          <p className="mt-4 font-semibold text-red-600">
            We work with people every week who need to sell their house fast.
          </p>
          
          {/* Red Arrow - positioned exactly as in your image */}
          <img
            src={arrowright}
            alt="Arrow Right"
            className="hidden md:block absolute top-20  left-[75%] w-32 h-auto"
          />

          {/* Paragraph 2 */}
          <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed">
            From people in <span className="font-bold">foreclosure</span>, going
            through a <span className="font-bold">divorce</span>, relocating and
            can't sell their house, those who own a vacant house they don't want
            to deal with anymore… to landlords tired of dealing with tenants,
            people who inherited a house they don't want, good folks who lost
            their job and just can't afford the payment any more and can't
            afford to pay a real estate agent their fees to sell it, to people
            who owe more on their house than it's worth and listing with an
            agent just isn't an option.
          </p>

          {/* Subheading */}
          <h3 className="mt-6 font-bold text-[17px] md:text-[19px]">
            What all of these people we help have in common is…
          </h3>

          {/* Bullet list */}
          <ul className="list-disc list-inside mt-2 space-y-1 text-[15px] md:text-[17px]">
            <li>They deserve to receive fair treatment</li>
            <li>
              They need a quick solution that puts cash in their pocket right
              away
            </li>
            <li>
              They shouldn't have to pay all of the extra cash for real estate
              agent fees, closing costs, etc.
            </li>
            <li>
              They just want to end the headache this house is giving them
            </li>
          </ul>

          {/* Paragraph 3 */}
          <p className="mt-4 text-[15px] md:text-[17px]">
            …and we can help them achieve all of these.
          </p>

          {/* Final line with bold number */}
          <p className="mt-6 text-[15px] md:text-[17px]">
            If you want to sell your house, just fill out the quick form below.
            Or give us a{" "}
            <span className="font-bold">call right now at (225) 772-2747</span>.
          </p>

          <CashOffer
            title="Get Your Fair Cash Offer Today!"
            description="We buy houses in ANY CONDITION in LOUISIANA. No commissions, fees, or obligation. Start below by giving us a bit of information about your property or call (225) 772-2747."
            containerClass="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg"
            buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          />

          {/* Privacy image */}
          <img
            src={privacy}
            alt="privacy"
            className="hidden md:block absolute justify-center items-center p-[10px] w-full max-h-max"
          />

          <div className="w-full font-primary text-darkGray bg-white px-[6%] py-8">
            {/* Heading */}
            <h2 className="text-[20px] md:text-[24px] font-bold mb-4">
              So Who Are We?
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[15px] md:text-[17px] leading-relaxed mb-4">
              <span className="font-bold text-black">
                Red Stick Property Solutions LLC is the Baton Rouge area's most
                respected house buying service.
              </span>{" "}
              We are a highly experienced{" "}
              <span className="text-blue-600 underline">home buying team</span>{" "}
              that is focused on helping homeowners like you to sell your house
              fast, without any hassle, games, or fees, and we're committed to
              delivering this service with transparency and integrity throughout
              the entire experience.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[15px] md:text-[17px] leading-relaxed mb-4">
              <span className="font-bold">We buy houses</span> all over the
              country, including Baton Rouge and surrounding areas. We know the
              area, which means our home buying team can help you sell your
              house fast no matter where it is or what condition it's in (and
              even if there are tenants).
            </p>

            {/* Paragraph 3 */}
            <p className="text-[15px] md:text-[17px] leading-relaxed mb-4">
              Again, we're not agents who are trying to sell your house to
              others. We are professional house buyers, which means we have our
              own cash and are ready to buy. We can even make you an offer on
              the spot. Once you choose an offer you want to accept, we can
              close at a local title company in as little as 7 days. You can
              sell your house fast, without listing it, showings, or waiting for
              buyers. We have a strict no-pressure policy, and our many previous
              clients love it and are proof that it works.
            </p>

            {/* Subheading */}
            <h3 className="text-[16px] md:text-[18px] font-bold mb-2">
              Can I stop or avoid foreclosure by selling my house?
            </h3>

            {/* Paragraph 4 */}
            <p className="text-[15px] md:text-[17px] leading-relaxed mb-4">
              Yes, in many cases. When you sell your house it stops foreclosure
              and may help save your credit. Download our{" "}
              <span className="text-blue-600 underline">
                "How To Stop Foreclosure"
              </span>{" "}
              free report for more information.
            </p>

            {/* Final line */}
            <p className="text-[15px] md:text-[17px] leading-relaxed font-semibold">
              Call Us Now at <span className="font-bold">(225) 772-2747</span>{" "}
              or fill out the quick form below to get started.
            </p>
          </div>

          <CashOffer
            title="Get Your Fair Cash Offer Today!"
            description="We buy houses in ANY CONDITION in LOUISIANA. No commissions, fees, or obligation. Start below by giving us a bit of information about your property or call (225) 772-2747."
            containerClass="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg"
            buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          />
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