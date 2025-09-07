import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CashOffer from "../../component/CashOffer";
import guideImg from "../../assets/imgi_1_5-ways-foreclosure.png";
import { Listing, RecentPost } from "../../component/Export";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-8 bg-white sm:px-4 md:px-6 lg:px-8 font-primary">
      {/* Main layout */}
      <div className="max-w-6xl mx-auto px-[6%] md:flex md:gap-12">
        {/* LEFT SIDE (Connect With Us) */}
        <div className="space-y-6 md:flex-1 md:mt-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Connect With Us!
          </h2>

          <p className="text-lg leading-relaxed text-gray-900 sm:text-lg md:text-lg">
            Have some questions you want to ask us?
          </p>

          <p className="text-lg leading-relaxed text-gray-900 sm:text-lg md:text-lg">
            Excellent! We love talking with people to see how we can help you
            reach your goals.
          </p>

          <p className="text-lg leading-relaxed text-gray-900 sm:text-lg md:text-lg">
            If you have questions about…
          </p>

          {/* Bullet list */}
          <ul className="space-y-2 text-lg text-gray-900 list-disc list-inside sm:text-lg md:text-lg">
            <li>
              Our process for making you an{" "}
              <span className="font-bold">all cash offer for your house</span>
            </li>
            <li>
              Our process for helping homeowners{" "}
              <a
                href="#foreclosure"
                className="text-blue-600 underline hover:text-blue-800"
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

          <p className="text-lg leading-relaxed text-gray-900 sm:text-lg md:text-lg">
            Just give us a ring at the phone number below or shoot us an email
            through the form. We’ll get back to you within 48 hours. If you need
            us quicker, make sure to call as we’re able to answer phone calls
            more quickly than we’re able to return emails.
          </p>

          <p className="text-lg leading-relaxed text-gray-900 sm:text-lg md:text-lg">Chat with you soon!</p>

          {/* Contact Info */}
          <div className="pt-6 space-y-2">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-lg">Contact Info:</h3>
            <p className="text-lg text-gray-900 sm:text-lg md:text-lg">Red Stick Property Solutions LLC</p>
            <p className="text-lg text-gray-900 sm:text-lg md:text-lg">17347 Cherry Creek Dr</p>
            <p className="text-lg text-gray-900 sm:text-lg md:text-lg">Prairieville, LA 70769</p>
            <p className="text-lg font-medium text-gray-900 sm:text-lg md:text-lg">(225) 772-2747</p>
          </div>

          <CashOffer
            title="Contact Us"
            description="We would love to hear from you! Please fill out this form and we will get in touch with you shortly."
            containerClass="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg"
            buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          />

          <div className="max-w-3xl px-4 py-8 mx-auto">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-2xl">
              5 Ways To Stop or Avoid Foreclosure In Today’s Market – FREE Guide:
            </h2>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-shrink-0">
                <img
                  src={guideImg}
                  alt="Free Guide"
                  className="w-32 rounded-md shadow-md sm:w-32 md:w-40"
                />
              </div>

              <div className="text-lg leading-relaxed text-gray-700 sm:text-lg md:text-base">
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

            {/* Social buttons */}
            <div className="flex items-center gap-2 pt-12">
              <button className="flex items-center gap-2 bg-[#3b5998] text-white px-3 py-2 rounded-md hover:bg-[#2d4373] transition">
                <FaFacebookF size={16} />
                <span className="hidden text-lg sm:inline md:text-sm">Share</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-white transition bg-black rounded-md hover:bg-darkGray">
                <FaXTwitter size={16} />
                <span className="hidden text-lg sm:inline md:text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 mt-10 md:w-1/3 md:mt-0">
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
