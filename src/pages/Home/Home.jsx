import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import '../css/Home.css';
import { Listing, RecentPost, CashOffer } from "../../component/Export";
import { Link } from "react-router-dom";

import arrowImg from "../../assets/imgi_2_arrow_right_01.png";
import sellout from "../../assets/imgi_3_sell-your-house-fast.png";

const Home = () => {
  const recaptchaRef = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted with reCAPTCHA token:", recaptchaToken);
  };

  return (
    <>
    {/* HERO - mobile-first */}
<section className="hero min-h-[70vh] md:min-h-[75vh] w-full flex flex-col md:flex-row items-center font-primary">
  {/* Overlay/content column */}
  <div className="flex justify-center w-full p-4 mb-40 md:w-1/2 md:justify-end md:pr-6">
    <div className="overley min-w-[280px] sm:min-w-[400px] max-h-62 mb-8 sm:mb-16 md:mb-32 -mr-0 sm:-mr-5 md:-mr-10 w-full p-4 sm:p-6 md:p-8 bg-black/85 text-white rounded-none mt-8">
      <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-bold leading-tight md:leading-[38px] mb-4">
        Sell Your House Fast In Baton Rouge, LOUISIANA
      </h1>

      <p className="text-[14px] sm:text-[16px] md:text-[18px] py-2 leading-relaxed">
        <strong>No</strong> Fees. <strong>No</strong> Commissions. Put More Cash In
        Your Pocket.
      </p>

      <p className="text-[14px] sm:text-[16px] md:text-[18px] py-2 leading-relaxed">
        Flooded House? Need Repairs? Tired of tenants? Inherited house?
        <strong>
          {" "}
          <u>
            <b>SELL TO US!!</b>
          </u>
        </strong>
      </p>

      <strong className="text-[15px] sm:text-[17px] md:text-[20px] block pb-4 mt-3 leading-relaxed">
        You'll Get A Fair Offer – You Choose The Closing Date. We Pay All Costs!
      </strong>

      <div className="flex items-center gap-2 mt-4 sm:gap-4">
        <p className="text-[13px] sm:text-[15px] font-medium">Fill out the short form…</p>
        <img src={arrowImg} alt="arrow" className="object-contain w-12 h-12 ml-4 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:ml-10 md:ml-20" />
      </div>
    </div>
  </div>

  {/* ----------  CASH-OFFER FORM – pixel match  ---------- */}
  <div className="flex justify-center w-full p-4 mb-8 sm:mb-16 md:mb-26 md:w-1/2 md:justify-start md:pl-8">
    <div className="w-full max-w-xl">
      <div className="p-6 bg-white rounded-none shadow-lg sm:p-8 md:p-10">

        {/* 1.  Bold heading */}
        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-center text-gray-900 mb-2">
          What Do You Have To Lose? Get Started Now...
        </h3>

        {/* 2.  Sub-text */}
        <p className="text-[16px] sm:text-[17px] md:text-[18px] text-gray-700 text-center mb-5 leading-[1.45]">
          We buy houses in <strong>ANY CONDITION</strong> in LOUISIANA.
          There are no commissions or fees and no obligation whatsoever.
          Start below by giving us a bit of information about your property or call
          <strong> (225) 772-2747</strong>...
        </p>

        {/* 3.  Form */}
        <form onSubmit={handleFormSubmit} className="space-y-3">

          {/* Property Address (full-width first) */}
          <input
            type="text"
            placeholder="Property Address *"
            required
            className="w-full h-[44px] sm:h-[46px] md:h-[48px] px-3 sm:px-4 border border-gray-400 rounded-[4px] text-[14px] sm:text-[15px]
                       focus:outline-none focus:border-blue-500"
          />

          {/* 2 fields on one row - responsive grid */}
          <div className="grid grid-cols-1 gap-3 xs:grid-cols-2">
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full h-[44px] sm:h-[46px] md:h-[48px] px-3 sm:px-4 border border-gray-400 rounded-[4px] text-[14px] sm:text-[15px]
                         focus:outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone *"
              required
              className="w-full h-[44px] sm:h-[46px] md:h-[48px] px-3 sm:px-4 border border-gray-400 rounded-[4px] text-[14px] sm:text-[15px]
                         focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* reCAPTCHA - responsive sizing */}
          <div className="flex justify-center mt-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcRYcArAAAAAGDKZrl7FIl0mar5xzipjZTOM8Hi"
              onChange={handleRecaptchaChange}
              size="normal"
              className="origin-center transform scale-75 sm:scale-90 md:scale-100"
            />
          </div>

          {/* CTA button */}
          <button
            type="submit"
            className="w-full h-[48px] sm:h-[50px] md:h-[52px] bg-[#ec7b03] hover:bg-[#d46b02] text-white
                       font-black text-[15px] sm:text-[16px] md:text-[17px] rounded-[4px] transition-colors"
          >
            Get My Fair Cash Offer >>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* MAIN CONTENT */}
      <section className="px-4 md:px-[12%] py-12 font-primary bg-gray-50">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <main className="md:col-span-2">
            <h2 className="text-[26px] md:text-[40px] font-bold mb-6 md:mb-8 leading-tight text-[#212529] text-center md:text-left">
              “I Need To Sell My House Fast In Baton Rouge!”
            </h2>

            <h3 className="text-[20px] md:text-[30px] font-bold mb-6 text-[#212529] text-center md:text-left leading-tight">
              We Buy Houses Anywhere In Baton Rouge And Other Parts of LOUISIANA, And At Any Price.
              <Link to={"./works"} className="ml-2 text-blue-400 hover:text-blue-800">
                Check Out How Our Process Works
              </Link>
              <h1>We’re Ready To Give You A Fair Offer For Your House.</h1>
            </h3>

            <p className="text-[18px] md:text-[18px] mb-4 leading-relaxed text-gray-700">
              If you want to <b>sell your Baton Rouge house…</b>  we're ready to give you a fair all-cash offer.
            </p>
            
            <p className="text-[18px] md:text-[18px] mb-8 leading-relaxed text-gray-700">
              Stop the frustration of your unwanted property. Let us buy your LOUISIANA house now, regardless of condition.
            </p>
            
            <p className="text-[18px] md:text-[18px] mb-8 leading-relaxed text-gray-700">
             <span className="text-blue-400">Avoiding foreclosure?</span>  House in PROBATE? Facing divorce? Moving? Upside down in your mortgage? Liens? It doesn’t matter whether you live in it, you’re renting it out, it’s vacant, or not even habitable. We help owners who have inherited an unwanted property, own a vacant house, are behind on payments, owe liens, downsized and can’t sell… even if the house needs repairs that you can’t pay for… and yes, even if the house is fire damaged or has bad rental tenants.
            </p>
            
            <p className="text-[18px] md:text-[18px] mb-8 leading-relaxed text-gray-700">
              Basically, if you have a property and need to sell it… we’d like to make you a fair cash offer and close on it when you’re ready to sell.
            </p>
            

            <div className="mt-8">
              <h2 className="text-[28px] md:text-[40px] font-bold mb-6 text-[#212529]">
                Do You Need To Sell Your House in Baton Rouge, LOUISIANA?
              </h2>

              <div className="flex flex-col md:flex-row gap-8 text-[16px]">
                <div className="flex-1">
                  <p className="mb-4 leading-relaxed">
                    <strong className="font-bold text-[18px]">Even if an agent can't sell your house, we can help.</strong>
                    <br />
                    <span className="text-gray-600 text-[18px]">(Sometimes selling a house through a real estate agent is not for everyone.)</span>
                  </p>

                  <ul className="ml-6 space-y-3 leading-relaxed text-gray-700 list-disc">
                    <li className="text-[18px]">you don't need to clean up and repair the property</li>
                    <li className="text-[18px]">don't waste time finding an agent who you trust and who can deliver on their promise of selling your house quickly</li>
                  </ul>
                </div>

                <aside className="w-full md:w-2/5 image-card bg-white rounded-lg shadow-md p-4 text-[16px] h-fit">
                  <img src={sellout} alt="We buy houses" className="object-cover w-full h-auto mb-3 rounded-md" />
                  <p className="text-[14px] text-gray-600 text-center leading-relaxed">
                    We can buy your LOUISIANA house. <br />Contact us today!
                  </p>
                </aside>
              </div>

              <ul className="list-disc ml-6 mt-6 space-y-3 text-[18px] text-gray-700 leading-relaxed">
                <li>you won't need to sign a contract that binds you to an agent for a certain term</li>
                <li>or deal with the paperwork and the waiting and wondering (and hoping)</li>
              </ul>
            </div>

            <p className="text-[18px] mt-8 md:text-[18px] mb-8 leading-relaxed text-gray-700">
             <b>We’ll know very quickly if we can help you,</b>  and unlike selling through an agent, you don’t have to wait to see if the buyer can get financing… <b>we’re ready to buy right now!</b>
            </p>


            <p className="text-[18px] mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-700">
              All that hassle can add stress, months to the process, and in the end after paying the agent’s expensive fees, you may or may not be ahead of the game.
            </p>

            <p className="text-[18px] mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-700">
              We work differently at Red Stick Property Solutions LLC. When you contact us and submit the short property information form (below), <b>we’ll give you a fair all-cash offer on your house within 24 hours…</b>  and the best part is: we can close whenever YOU choose to close – it’s entirely up to you. It doesn’t matter what condition the house is in, or even if there are tenants in there that you can’t get rid of… don’t worry about it. <b>We’ll take care of it for you.</b> And if you need the cash quickly, we can close in as little as 7 days because we buy houses with cash and don’t have to rely on traditional bank financing. <span className="text-blue-400">(Go here to learn about our process →)</span>
            </p>

            <span className="text-[18px] mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-700" >In Short ...</span>
            

            <p className="text-[18px] mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-700">  <b>Our goal is to help make your life easier and get you out from under the property that’s</b>  stressing you out… while still paying a fast, fair, and honest price for your house.</p>

            <CashOffer />

          <p className="text-[18px] font-bold text-center mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-900">
            Or Give Us A Call Now At: (225) 772-2747
          </p>

          <p className="text-[18px] mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-700">
            We help property owners just like you, in all kinds of situations. From divorce, foreclosure, death of a family member, burdensome rental property, and all kinds of other situations. <span className="underline">We buy houses in LOUISIANA… including Baton Rouge and surrounding areas and pay a fair cash price, fast.</span>  Sometimes, those who own property simply have lives that are too busy to take the time to do all of things that typically need to be done to prepare a house to sell on the market… if that describes you, just let us know about the property you’d like to be rid of and <b>sell your house fast for cash.</b>
          </p>

          <p className="text-[18px] mt-2 md:text-[18px] mb-8 leading-relaxed text-gray-700">
           <span className="underline">If you simply don’t want to put up with the hassle of owning that house any longer, and if you don’t want to put up with the hassle and time-consuming expense of selling your property the traditional way, let us know about the property you’d like to be rid of and sell your house fast for cash.</span>  Talk to someone in our office before submitting your property information by <b>calling us today at (225) 772-2747</b> 
          </p>
          
          </main>

          {/* Right column: Listing + RecentPost */}
          <aside className="py-2">
            <div className="mb-8">
              <Listing />
            </div>

            <div>
              <RecentPost />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Home;