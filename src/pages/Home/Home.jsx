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
        <div className="flex justify-center w-full p-4 md:w-1/2 md:justify-end md:pr-8">
          <div className="overley max-w-[520px] w-full p-6 md:p-8 bg-black/85 text-white rounded-md">
            <h1 className="text-[24px] md:text-[32px] font-bold leading-tight md:leading-[38px] mb-4">
              Sell Your House Fast In Baton Rouge, LOUISIANA
            </h1>

            <p className="text-[16px] md:text-[18px] py-2 leading-relaxed">
              <strong>No</strong> Fees. <strong>No</strong> Commissions. Put More Cash In
              Your Pocket.
            </p>

            <p className="text-[16px] md:text-[18px] py-2 leading-relaxed">
              Flooded House? Need Repairs? Tired of tenants? Inherited house?
              <strong>
                {" "}
                <u>
                  <b>SELL TO US!!</b>
                </u>
              </strong>
            </p>

            <strong className="text-[17px] md:text-[20px] block pb-4 mt-3 leading-relaxed">
              You'll Get A Fair Offer – You Choose The Closing Date. We Pay All Costs!
            </strong>

            <div className="flex items-center gap-4 mt-4">
              <p className="text-[15px] font-medium">Fill out the short form…</p>
              <img src={arrowImg} alt="arrow" className="object-contain w-5 h-5" />
            </div>
          </div>
        </div>

        {/* CashOffer column with reCAPTCHA */}
        <div className="flex justify-center w-full p-4 md:w-1/2 md:justify-start md:pl-8">
          <div className="w-full max-w-xl">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-[20px] md:text-[22px] font-bold text-center mb-4 text-gray-800">
                What Do You Have To Lose? Get Started Now...
              </h3>
              
              <p className="text-[14px] md:text-[15px] text-gray-600 text-center mb-6 leading-relaxed">
                We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747...
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Property Address"
                    className="w-full p-3 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex justify-center mt-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LcRYcArAAAAAGDKZrl7FIl0mar5xzipjZTOM8Hi" // Replace with your actual reCAPTCHA site key
                    onChange={handleRecaptchaChange}
                    size="normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ec7b03] text-white font-bold py-3 px-6 rounded-md text-[16px] transition-colors duration-200"
                >
                  GET MY CASH OFFER
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
              "I Need To Sell My House Fast In Baton Rouge!"
            </h2>

            <h3 className="text-[18px] md:text-[28px] font-bold mb-6 text-[#212529] text-center md:text-left leading-tight">
              We Buy Houses Anywhere In Baton Rouge And Other Parts of LOUISIANA, And At Any Price.
              <Link to={"./works"} className="ml-2 text-blue-600 underline hover:text-blue-800">
                Check Out How Our Process Works
              </Link>
            </h3>

            <p className="text-[16px] md:text-[17px] mb-4 leading-relaxed text-gray-700">
              If you want to sell your Baton Rouge house… we're ready to give you a fair all-cash offer.
            </p>
            
            <p className="text-[16px] md:text-[17px] mb-8 leading-relaxed text-gray-700">
              Stop the frustration of your unwanted property. Let us buy your LOUISIANA house now, regardless of condition.
            </p>

            <div className="mt-8">
              <h2 className="text-[24px] md:text-[36px] font-bold mb-6 text-[#212529]">
                Do You Need To Sell Your House in Baton Rouge, LOUISIANA?
              </h2>

              <div className="flex flex-col md:flex-row gap-8 text-[16px]">
                <div className="flex-1">
                  <p className="mb-4 leading-relaxed">
                    <strong className="font-bold text-[17px]">Even if an agent can't sell your house, we can help.</strong>
                    <br />
                    <span className="text-gray-600">(Sometimes selling a house through a real estate agent is not for everyone.)</span>
                  </p>

                  <ul className="ml-6 space-y-3 leading-relaxed text-gray-700 list-disc">
                    <li className="text-[16px]">you don't need to clean up and repair the property</li>
                    <li className="text-[16px]">don't waste time finding an agent who you trust and who can deliver on their promise of selling your house quickly</li>
                  </ul>
                </div>

                <aside className="w-full md:w-2/5 image-card bg-white rounded-lg shadow-md p-4 text-[16px] h-fit">
                  <img src={sellout} alt="We buy houses" className="object-cover w-full h-auto mb-3 rounded-md" />
                  <p className="text-[14px] text-gray-600 text-center leading-relaxed">
                    We can buy your LOUISIANA house. <br />Contact us today!
                  </p>
                </aside>
              </div>

              <ul className="list-disc ml-6 mt-6 space-y-3 text-[16px] text-gray-700 leading-relaxed">
                <li>you won't need to sign a contract that binds you to an agent for a certain term</li>
                <li>or deal with the paperwork and the waiting and wondering (and hoping)</li>
              </ul>
            </div>

            {/* Additional Content */}
            <div className="mt-12">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#212529]">
                We Buy Houses In These Cities
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-4">
                Baton Rouge, New Orleans, Lafayette, Shreveport, Lake Charles, Monroe, and other parts of Louisiana.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#212529]">
                Why Choose Us?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>No Fees or Commissions:</strong> Unlike selling with an agent, you won't pay any fees or commissions. What we offer is what you get.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>Fast Cash Offers:</strong> Get a fair cash offer within 24 hours. No waiting months for the right buyer.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>Any Condition:</strong> We buy houses as-is. No repairs needed, no cleaning required.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>Choose Your Timeline:</strong> Close in as little as 7 days, or choose a timeline that works for you.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#212529]">
                Our Simple 3-Step Process
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>1. Tell Us About Your House:</strong> Fill out our simple form or give us a call. We'll ask a few questions about your property.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>2. Get Your Cash Offer:</strong> We'll schedule a quick visit and present you with a fair, no-obligation cash offer.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                <strong>3. Close & Get Paid:</strong> Choose your closing date and get paid. It's that simple!
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#212529]">
                What Our Customers Say
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                "They made selling my inherited house so easy. No stress, no hassle, just a fair offer and quick closing." - Sarah M., Baton Rouge
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                "After struggling to sell with an agent for 6 months, these guys bought my house in 2 weeks!" - Mike R., New Orleans
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#212529]">
                Ready to Sell Your House Fast?
              </h2>
              
              <p className="text-[16px] text-gray-700 leading-relaxed mb-3">
                Get your fair cash offer today. No obligation, no pressure.
              </p>
              <p className="text-[16px] text-gray-700 leading-relaxed">
                <strong>Call (225) 772-2747</strong> or fill out the form above to get started.
              </p>
            </div>
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