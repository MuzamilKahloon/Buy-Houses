import React, { useEffect } from "react";
import CashOffer from "../../component/CashOffer";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Compare() {
  /* ---------- helper: inject the real reCAPTCHA ---------- */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      /* optional clean-up if you ever un-mount this page */
      const scripts = document.querySelectorAll(
        'script[src*="google.com/recaptcha"]'
      );
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-primary text-darkGray px-4 py-8 sm:px-6 md:px-8 lg:px-[100px]">
      {/* Centered container that mimics the reference width/centered look */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Title (centered like the reference) */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Selling To Red Stick Property Solutions LLC vs. Listing With A Local{" "}
            <span className="uppercase">LOUISIANA</span> Agent
          </h1>
          <p className="max-w-4xl mx-auto mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            Even in a sellers market like L.A., it's smart to look at your
            options and see what will actually help you best reach your goals
            with the sale of your house. While you may be able to get a higher
            "top line" sales price listing with a local Baton Rouge agent, that
            doesn't always boil down to more money in your pocket or less
            headache. <span className="font-bold">Dive into the details below to compare your options.</span>
          </p>
        </header>

        {/* Comparison Card (table centered and responsive) */}
        <section className="mb-10 overflow-hidden bg-white border-2 border-gray-300 rounded-none shadow-none">
          <div className="p-0">
            <div className="overflow-x-auto">
              {/* The table itself is constrained and centered */}
              <div className="mx-auto min-w-[280px] md:min-w-full">
                <table className="w-full border-collapse table-auto">
                  <thead className="bg-gray-100">
                    <tr className="text-left border-b-2 border-gray-300">
                      <th className="w-1/3 px-6 py-4 font-semibold text-gray-900"></th>
                      <th className="px-6 py-4 font-semibold text-center text-gray-900">Selling w/ An Agent</th>
                      <th className="px-6 py-4 font-bold text-center text-gray-900">
                        SOLD To Red Stick Property Solutions LLC
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-300">
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Commissions / Fees:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        <span className="underline">6%</span> on average is paid by you, the seller
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        NONE
                      </td>
                    </tr>
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Who Pays Closing Costs?:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        <span className="underline">2%</span> on average is paid by you, the seller
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        NONE — We pay all costs
                      </td>
                    </tr>
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Inspection & Financing Contingency*:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        <span className="italic underline">Yes</span>, up to 15% of sales <span className="text-blue-600 underline">fall through</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        NONE
                      </td>
                    </tr>
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Appraisal Needed:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        <span className="italic underline">Yes</span>, sale is often subject to appraisal
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        NONE — We make <span className="italic">cash offers</span>
                      </td>
                    </tr>
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Average Days Until Sold:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        +/- 91 Days
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        IMMEDIATE CASH OFFER
                      </td>
                    </tr>
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Number of Showings:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        It Depends
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        1 (Just Us)
                      </td>
                    </tr>
                    <tr className="align-top border-b border-gray-300">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Closing Date:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        30-60 +/- days after accepting buyers offer
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        The Date Of YOUR CHOICE
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="px-6 py-4 text-sm font-bold text-gray-900 sm:text-base bg-gray-50">
                        Who Pays For Repairs?:
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 sm:text-base">
                        Negotiated During Inspection Period
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 sm:text-base">
                        NONE — We pay for all repairs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Body copy (centered width, matches reference spacing) */}
        <section className="mx-auto mb-10 space-y-6 text-left max-w-none">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl">
            Work The Numbers And See Which Way Helps You Get There…
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-sm leading-relaxed sm:text-base">
              When you really work the numbers you start to see the real benefits
              that each way of selling your LOUISIANA house offers.
            </p>
            <p className="text-sm leading-relaxed sm:text-base">
              Yes, here at Red Stick Property Solutions LLC we won't be able to offer you full
              retail value for your house... but we also offer other benefits that
              going the traditional house sale route can't offer.
            </p>
            <p className="text-sm font-bold leading-relaxed sm:text-base">
              Like…
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <article className="text-left">
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                From offer to close and cash in your hand in as little as 7 days
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                You can get rid of the headache of that property fast and <span className="font-bold underline">avoid paying any more utility payments</span>, tax
                payments, <span className="font-bold">insurance</span> payments, <span className="font-bold">mortgage</span> payments, you get the drill. If you list your house and wait 90+ days to close... you have to figure in all of the costs of holding
                that property during the time you have that property listed and are waiting for the property to close.
              </p>
            </article>

            <article className="text-left">
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Don't worry about fixing anything up or cleaning your house again and
                again for buyer after buyer
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                We don't care how dirty your house is (<span className="italic">we've seen worse!</span>) or how many repairs are needed (<span className="italic">a complete fixer? great! we love projects</span>)...
                <span className="text-blue-600 underline">we'd like to make an offer on your house</span>. This saves you time and money that you can keep in your pocket.
              </p>
            </article>

            <article className="text-left">
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Don't worry about paying those pesky closing fees (we've got you
                covered)
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                Because we are a <span className="font-bold">full-service professional home buyer here in LOUISIANA</span>, we make it easy for you. We pay for all of the closing costs.
                What we offer you is what you get (of course minus any mortgage payoff or other encumbrances on the property). Pretty refreshing eh?
              </p>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                So when you add up the time you could save by working with Red Stick Property Solutions LLC, the no-hassle experience, and the
                money you'll save on commissions, fees, and holding costs while you wait to sell the traditional route... for many area home owners
                selling to a professional house buyer is the best viable option.
              </p>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-10 text-center">
          <p className="mb-6 text-lg font-bold text-gray-900">
            Is it for you?
          </p>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            See for yourself and get a fair all-cash offer on your house <span className="underline">today</span>.
          </h2>
          <p className="max-w-4xl mx-auto mb-8 text-sm leading-relaxed text-gray-700 sm:text-base">
            Just fill out the short form below or give us a call at (225) 772-2747 and let's chat! <span className="text-blue-600 underline">Our process</span> is <span className="font-bold">simple</span> and you can <span className="font-bold underline">close on the
            date of your choice</span>. You have nothing to lose by getting an offer (no obligations – no pressure). But you could potentially lose
            thousands of dollars or months of your time by not testing us out and <span className="font-bold underline">requesting your FREE house offer below.</span>
          </p>
          
          <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            What Do You Have To Lose? Get Started Now…
          </h3>
          
          <CashOffer
            title=""
            description="We buy houses in ANY CONDITION in LOUISIANA. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of information about your property or call (225) 772-2747…"
            containerClass="bg-gray-200 p-8 rounded-none max-w-2xl mx-auto"
            buttonClass="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 w-full"
            showCaptcha={true}
          />
        </section>
      </div>

      {/* Footer text with social buttons */}
      <div className="font-primary text-darkGray leading-[1.9] text-left max-w-5xl mx-auto">
        <p className="text-base leading-relaxed sm:text-lg">
          <span className="font-bold">*An inspection contingency</span> lets
          the buyer have time to do an inspection and back out of the sale or
          negotiate a new price if there are repairs that need to be done. If
          you can't come to an agreement with the buyer, the buyer has the right
          to back out of the sale. Similar, a{" "}
          <span className="font-bold">financing contingency</span> gives the
          buyer the wiggle room to back out of the purchase if they can't obtain
          a loan or if the home doesn't appraise for the value that the bank
          needs to close the loan.
        </p>

        <p className="mt-6 text-base leading-relaxed sm:text-lg">
          Here at Red Stick Property Solutions LLC we don't use bank financing
          so you don't have to worry about our ability to close on a deal.
        </p>

        {/* Social buttons */}
        <div className="flex items-center gap-2 pt-12">
          {/* Facebook button */}
          <button className="flex items-center gap-2 bg-[#3b5998] text-white px-2 py-1 rounded-md hover:bg-[#2d4373] transition">
            <FaFacebookF size={14} />
            <span className="hidden text-sm md:inline">
              Share
            </span>
          </button>

          {/* Twitter button */}
          <button className="flex items-center gap-2 px-2 py-1 text-white transition bg-black rounded-md hover:bg-gray-800">
            <FaXTwitter size={14} />
            <span className="hidden text-sm md:inline">
              Share
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}