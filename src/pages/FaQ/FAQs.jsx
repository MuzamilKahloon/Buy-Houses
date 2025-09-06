import React from "react";
import TestimonialCard from "../../component/Testimonials";
import book from "../../assets/imgi_1_selling-to-a-professional-188x300.png";
import CashOffer from "../../component/CashOffer";
import { Listing, RecentPost } from "../../component/Export";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function FAQ() {
  const faqData = [
    {
      question: (
        <span className=" text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]  font-primary font-bold text-darkGray">
          Q: Will you be listing my house on the MLS or actually buying it?
        </span>
      ),
      answer: (
        <p className="text-darkGray text-[14px] lg:text-[18px] leading-[24px] lg:leading-[27px]  ">
          A: Great question.We’re not agents, and we don’t list houses.We are
          professional home buyers:{" "}
          <span className="font-bold text-[#33669F] hover:text-[#0c3b9fec]  cursor-pointer ">
            We buy houses Baton Rouge
          </span>
          that meet our purchasing criteria. From there we may repair the house
          and resell it to another home owner or keep it as a rental ourselves.
        </p>
      ),
    },
    {
      question: (
        <span className="block text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] font-bold text-darkGray">
          Q: Do you pay fair prices for properties?
        </span>
      ),
      answer: (
        <p className="text-darkGray text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] ">
          A: Many of the houses we purchase are below market value (we do this
          so we can resell it at a profit to another home owner). We are looking
          to get a fair discount on a property. However, in our experience, many
          sellers aren’t necessarily expecting a large “windfall” on the
          property but rather appreciate that we can offer cash, we close very
          quickly (no waiting for financing), and no time or effort or expense
          is required on your part of fix up the property or pay agent fees. If
          that’s what you’re looking for and you see the value in getting your
          house sold fast… let’s see if we can come to a fair win-win price.
          (Besides, our no-obligation pricing commitment means that you do not
          have to move forward with the offer we give… but it’s good to know
          what we’re offering!) <br />
          <br />
          <span className=" text-[#33669F] italic font-bold">
            [DOWNLOAD our free guide that walks you through the Pros and Cons
          </span>
          .
          <span className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]  text-darkGray">
            (plus the cost and timeline) of selling your house to a real estate
            investor… plus learn the pros, cons, and costs of the other two
            alternatives… listing with an agent or selling it yourself.
          </span>
          <span className=" text-[#334c9f] italic font-medium">
            Head on over here download your free guide →]
          </span>
        </p>
      ),
    },
    {
      question: (
        <span className="block  text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]  font-bold text-darkGray">
          Q: What do you determine the price to offer on my house?
        </span>
      ),
      answer: (
        <p className="text-darkGray  text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]  ">
          Great question, and we’re an open book: Our process is very
          straightforward. We look at the{" "}
          <span className=" text-darkGray italic font-bold">location </span>of
          the property, what{" "}
          <span className=" text-darkGray italic font-bold">repairs </span>are
          needed, the current{" "}
          <span className=" text-darkGray italic font-bold"> condition</span> of
          the property, and values of comparable houses sold in the area
          recently. As you know, house values have taken a huge hit in the last
          5 years and most areas still haven’t seen prices come back up. We take
          many pieces of information into consideration… and come up with a fair
          price that works for us and works for you too.{" "}
        </p>
      ),
    },
    {
      question: (
        <span className="block text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]  font-bold text-darkGray">
          Q: Are there any fees or commissions to work with you?
        </span>
      ),
      answer: (
        <p className="text-darkGray text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]  ">
          A: This is what makes us stand out from the traditional method of
          selling your house: There are{" "}
          <span className=" text-darkGray underline font-samibold">
            {" "}
            NO fees{" "}
          </span>{" "}
          or commissions when you sell your house us. We’ll make you an offer,
          and if it’s a fit then we’ll buy your house (and{" "}
          <span className=" text-darkGray underline font-samibold">
            {" "}
            we’ll often pay for the closing costs too!)
          </span>{" "}
          No hassle. No fees. We make our money after we pay for repairs on the
          house (if any) and sell it for a profit (we’re taking all of the risk
          here on whether we can sell it for a profit or not, once we buy the
          house from you… the responsibility is ours and you walk away without
          the burden of the property and it’s payments… and often with cash in
          your hand).{" "}
        </p>
      ),
    },
    {
      question: (
        <span className="block text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]   font-bold text-darkGray">
          Q: How are you different from a real estate agent?
        </span>
      ),
      answer: (
        <p className="text-darkGray text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] ">
          A: Real estate agents list properties and hope that someone will buy
          them. The agent shows the properties to prospective buyers if there
          are any (the average time to sell a property in many markets right now
          is 6-12 months) and then take a percentage of the sale price if they
          find a buyer. Oftentimes, the agent’s commission is 3-6% of the sale
          price of your house (so if it’s a $100,000 house, you’ll pay between
          $3,000 – $6,000 in commissions to an agent). Agents provide a great
          service for those that can wait 6-12 months to sell and who don’t mind
          giving up some of that sale price to pay for the commissions. But
          that’s where we’re different: We’re not agents, we’re home buyers. Our
          company actually buys houses. We don’t list houses. Since we’re
          actually the one buying the house from you, and we pay with all cash…
          we can make a decision to buy your house within a couple days
          (sometimes the same day). Again, we make our living by taking the risk
          to buy the house with our own cash, repair the house, and market it
          ourselves to find a buyer (which is the hard part in this market).{" "}
        </p>
      ),
    },
    {
      question: (
        <span className="block text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]  font-bold text-darkGray">
          Q: Is there any obligation when I submit my info?
        </span>
      ),
      answer: (
        <p>
          A: There is absolutely zero obligation for you. Once you tell us a bit
          about your property, we’ll take a look at things, maybe set up a call
          with you to find out a bit more, and make you an all-cash offer that’s
          fair for you and fair for us. From there, it’s 100% your decision on
          whether or not you’d like to sell your house to us… and we won’t
          hassle you, won’t harass you… it’s 100% your decision and we’ll let
          you decide what’s right for you.{" "}
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white sm:px-4 md:px-2 lg:px-6 py-4 font-primary">
      <div className="max-w-6xl mx-auto px-[4.8%] md:flex md:gap-8">
        {/* Left side - FAQ */}
        <div className="md:flex-1 md:mt-12 ">
          <div className="mb-8">
            <h1 className="text-[35px] md:text-[39px] leading-[42.2px] md:leading-[47.5px] text-darkGray font-bold mb-2">
              Frequently Asked Questions
            </h1>
            <h2 className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]  w-full text-darkGray ">
              <span className="font-bold underline ">
                {" "}
                Maybe you have a few questions.
              </span>{" "}
              That’s okay; most people do. So here’s a quick collection of some
              of the questions people ask us… along with our answers. If you
              still have a question, don’t hesitate to{" "}
              <Link to={"/contact"}>
                <span className=" cursor-pointer text-[#33AFEA] ">
                  {" "}
                  contact us{" "}
                </span>{" "}
              </Link>{" "}
              (or give us a call) and we’ll be happy to answer it for you.
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqData.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold  text-darkGray  tracking-normal ">
                  {item.question}
                </h3>
                {item.answer && (
                  <p className=" text-darkGray mb-4  font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] tracking-normal ">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Cash Offer Section */}
          <div className="mt-10">
            <CashOffer
              title="Want To See What We Can Buy Your House For?"
              description="Fill Out The Quick Form Below To Get A No-Hassle
                                      No-Obligation All-Cash Offer"
              titleClass=" font-bold text-[16px] lg:text-[56px] leading-[24px] lg:leading-[67px] tracking-normal "
              descriptionClass="text-gray-800 mb-4 max-w-[80%]"
              containerClass="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg"
              buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
            />
          </div>

          {/* Image text section */}
          <div className="flex flex-col sm:flex-row gap-4 m-16">
            {/* Book Image */}
            <div className="flex-shrink-0">
              <img
                src={book}
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

        {/* Right side */}
        <div className="md:w-[32.5%] flex flex-col gap-6">
          <Listing />
          <TestimonialCard
            title="Our Happy Clients"
            quote="Quite often investors are willing to pay cash for a home, and having a cash buyer has become even more appealing."
          />
          <CashOffer
            title="Get Your Fair Cash Offer Today!"
            description="We buy houses in ANY CONDITION in LOUISIANA. No commissions, fees, or obligation. Start below by giving us a bit of information about your property or call (225) 772-2747."
            containerClass="bg-gray-50 p-6 md:p-8 rounded-xl bg-[#E9ECEF]"
            buttonClass="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors duration-300"
          />
          <RecentPost />
        </div>
      </div>
    </div>
  );
}
