import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CashOffer from "../../component/CashOffer";
import guideImg from "../../assets/imgi_1_5-ways-foreclosure.png";
import { Listing, RecentPost } from "../../component/Export";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white sm:px-4 md:px-6 lg:px-8 py-8 font-primary">
      {/* Main layout */}
      <div className="max-w-6xl mx-auto px-[6%] md:flex md:gap-12">
        {/* LEFT SIDE (Connect With Us) */}
        <div className="md:flex-1 md:mt-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Connect With Us!
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Have some questions you want to ask us?
          </p>

          <p className="text-gray-700 leading-relaxed">
            Excellent! We love talking with people to see how we can help you
            reach your goals.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you have questions about…
          </p>

          {/* Bullet list */}
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Our process for making you an{" "}
              <span className="font-bold">all cash offer for your house</span>
            </li>
            <li>
              Our process for helping homeowners{" "}
              <a
                href="#foreclosure"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                stop foreclosure in Baton Rouge
              </a>{" "}
              if your situation qualifies
            </li>
            <li>Our company and who we are</li>
            <li>
              … or anything else you want to ask us — even just to make sure
              we’re real people{" "}
              <span role="img" aria-label="smile">
                🙂
              </span>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Just give us a ring at the phone number below or shoot us an email
            through the form. We’ll get back to you within 48 hours. If you need
            us quicker, make sure to call as we’re able to answer phone calls
            more quickly than we’re able to return emails.
          </p>

          <p className="text-gray-700 leading-relaxed">Chat with you soon!</p>

          {/* Contact Info */}
          <div className="pt-6 space-y-2">
            <h3 className="text-xl font-bold text-gray-900">Contact Info:</h3>
            <p className="text-gray-700">Red Stick Property Solutions LLC</p>
            <p className="text-gray-700">17347 Cherry Creek Dr</p>
            <p className="text-gray-700">Prairieville, LA 70769</p>
            <p className="text-gray-700 font-medium">(225) 772-2747</p>
          </div>
          <CashOffer
            title="Contact Us"
            description="We would love to hear from you! Please fill out this form and we will get in touch with you shortly."
            containerClass="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg"
            buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          />

          <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              5 Ways To Stop or Avoid Foreclosure In Today’s Market – FREE
              Guide:
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={guideImg}
                  alt="Free Guide"
                  className="w-32 md:w-40 rounded-md shadow-md"
                />
              </div>

              {/* Text Content */}
              <div className="text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  Need more information on the foreclosure process and{" "}
                  <span className="font-bold">How To Stop Foreclosure?</span>{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Download our FREE Stop Foreclosure Guide here
                  </a>
                  . Or, you can always feel free to{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Contact us
                  </a>{" "}
                  anytime if you have questions, want a no hassle Situation
                  Evaluation, or want to just learn more about how we can help
                  homeowners avoid foreclosure or sell unwanted properties for
                  cash.
                </p>
              </div>
            </div>

            {/* Social buttons with react-icons */}
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
          </div>
        </div>

        {/* RIGHT SIDE (Cards + Cash Offer, keep as before) */}
        <div className="md:w-1/3 flex flex-col gap-6 mt-10 md:mt-0">
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
