import React from "react";
import CashOffer from "../component/CashOffer.jsx";
import { Listing, RecentPost } from "../component/Export";
import pic1 from '../../public/pic1.jpg'
import pic2 from '../../public/pic2.jpg'
export default function OurCompany() {
  return (
    <div className="min-h-screen py-8 bg-white sm:px-4 md:px-6 lg:px-12 font-primary">
      {/* Main Layout */}
      <div className="max-w-full mx-auto px-[6%] md:flex md:gap-12">
        
        {/* LEFT SIDE (Flyer Content) */}
        <div className="md:w-[68.4%] text-darkGray leading-relaxed">
          {/* About Section */}
          <h2 className="mb-6 text-4xl font-bold">
            Blog
          </h2>
          <section className="flex mt-10">
            <img src={pic1} alt="nothing" />
            <div className="flex-col">
              <p className="mb-2 ml-5 text-4xl font-bold text-black">How To Sell Your House Quickly At A Good Price</p>
          <p className="mb-1 ml-5 text-lg">
           September 14, 2022
          </p>
          <p className="ml-5 text-lg">
            By <span className="text-blue-600">pardeep</span>
          </p>
            </div>
          </section>
          
          <p className="mt-8 mb-6 text-lg">
          When you need some cash urgently or have to shift to a different town or a city on short notice, you would want to sell your house quickly. Selling your house is not a very convenient process. While the documentation process takes a lot of time, finding the right buyer is not easy either. There … <span className="text-blue-600">Continued</span>
        </p>


         <section className="flex mt-10">
            <img src={pic1} alt="nothing" />
            <div className="flex-col">
              <p className="mb-2 ml-5 text-4xl font-bold text-black">
            Want To Sell Your House Quick in Banton Rouge? Read This First</p>
          <p className="mb-1 ml-5 text-lg">
           June 23, 2022
          </p>
          <p className="ml-5 text-lg">
            By <span className="text-blue-600">pardeep</span>
          </p>
            </div>
          </section>







           <section className="flex mt-16">
            <img src={pic2} alt="nothing" />
            <div className="flex-col">
              <p className="mb-2 ml-5 text-4xl font-bold text-black">
           Why Should People Buy a House in Baton Rouge</p>
          <p className="mb-1 ml-5 text-lg">
          December 14, 2021
          </p>
          <p className="ml-5 text-lg">
            By <span className="text-blue-600">pardeep</span>
          </p>
            </div>
          </section>



          


          <h2 className="mt-10 mb-3 text-4xl font-bold">
            Easy Way to Sell Property-Walk Away-No cleanup-No repairs needed
          </h2>
          <p className="mb-1 text-lg">
          November 7, 2021
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>


          
          <h2 className="mt-10 mb-3 text-4xl font-bold">
            Selling a House in Probate
          </h2>
          <p className="mb-1 text-lg">
          February 20, 2021
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

           <p className="mt-8 mb-6 text-lg">
          We buy “probate houses” as is. This means that you don’t have to hire a contractor and spend thousands of dollars getting the items removed from the house. This also means that you don’t have to spend thousands or tens of thousands of dollars in repairs so that you can actually sell the house. We <span className="text-blue-600">Continued</span>
        </p>


        <h2 className="mt-10 mb-3 text-4xl font-bold">
            I need to sell a house that is still in the name of a deceased relative. What do I do?
          </h2>
          <p className="mb-1 text-lg">
          October 22, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
         When a relative dies, his or her property must go through a succession. Basically, a succession is the formal process of placing the decedent’s assets into the hands of his/her legal heirs.  Often, this is also referred to as a “probate” process.  There are many legal technicalities when is comes to this process.  Does this <span className="text-blue-600">Continued</span>
        </p>



        <h2 className="mt-10 mb-3 text-4xl font-bold">
           How Much Will Listing Your House Really Cost in Baton Rouge?
          </h2>
          <p className="mb-1 text-lg">
          May 6, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
       If you plan on listing a Baton Rouge house, there are costs to contend with before you list, during the listing process, once an offer has been made and when you find yourself at the closing table. In our latest post, we will take a look at some of these listing costs so you can  <span className="text-blue-600">...Continued</span>
        </p>


         <h2 className="mt-10 mb-3 text-4xl font-bold">
          How to Sell a Fix and Flip House Fast in Baton Rouge
          </h2>
          <p className="mb-1 text-lg">
      May 2, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
      When you begin your journey flipping homes, there are some things you need to know, and other things you will want to avoid. We’ve put together some tips on how to sell a fix and flip house fast in Baton Rouge.  Flipping a home in Baton Rouge can be a great way to turn a  <span className="text-blue-600">...Continued</span>
        </p>



         <h2 className="mt-10 mb-3 text-4xl font-bold">
        6 Lawn Care Mistakes That Can Ruin Your Yard in Baton Rouge
          </h2>
          <p className="mb-1 text-lg">
      May 1, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
    We all want a beautiful, thick, uniform lawn – you know, one that looks like a putting green at one of those televised PGA venues. The problem, though, is that the very things we do to get the lawn we want often wind up doing more damage than good. Here are 6 lawn care mistakes  <span className="text-blue-600">...Continued</span>
        </p>


        <h2 className="mt-10 mb-3 text-4xl font-bold">
       Why Isn’t My House Selling in Baton Rouge
          </h2>
          <p className="mb-1 text-lg">
   April 30, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
    Why do some homes sell right away? Why do some sit on the market for months at a time? And why isn’t your house selling? In our latest post, we will help you to consider some reasons why your house isn’t selling, and what you can do about it! Selling a home takes work. It <span className="text-blue-600">...Continued</span>
        </p>


         <h2 className="mt-10 mb-3 text-4xl font-bold">
      Is Hiring An Agent in Baton Rouge REALLY Worth It?
          </h2>
          <p className="mb-1 text-lg">
   April 29, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
    For many people, when they think about selling their houses, the first thing they will do is look around for a local agent. Agents can be a wonderful asset when selling your house, however, it is not the only strategy you should consider. By doing a little homework, you can successfully sell your house on <span className="text-blue-600">...Continued</span>
        </p>



        <h2 className="mt-10 mb-3 text-4xl font-bold">
      4 Reasons Why Summer House Selling Isn’t Ideal in LOUISIANA
          </h2>
          <p className="mb-1 text-lg">
   April 25, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
   Are you thinking about selling your house this summer? If so, make sure you read this blog post right away because you may want to reconsider! Here are 4 reasons why summer house selling isn’t ideal in LOUISIANA… If you’re thinking about selling your house, you might be wondering if summer is the best time <span className="text-blue-600">...Continued</span>
        </p>



        <h2 className="mt-10 mb-3 text-4xl font-bold">
      How to Improve Tenant Retention in Baton Rouge
          </h2>
          <p className="mb-1 text-lg">
  April 25, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
   Anyone can become a landlord. But not everyone knows how to find and keep quality tenants. To help increase your overall ROI, we have put together some ideas to help improve tenant retention! In the simplest terms, the more turnovers you have, the more days your property will be vacant. The more days your property sits <span className="text-blue-600">...Continued</span>
        </p>


          <h2 className="mt-10 mb-3 text-4xl font-bold">
      4 Tips to Help You Turn a Profit Flipping Property in LOUISIANA
          </h2>
          <p className="mb-1 text-lg">
  April 25, 2019
          </p>
          <p className="mb-4 text-lg ">
            By <span className="text-blue-600">David</span>
          </p>

          <p className="mt-8 mb-6 text-lg">
   Do you love real estate? Have you always wanted to learn about how to turn a profit flipping property in LOUISIANA? We’ve put together some great tips to help get you on your way to making excellent profits by buying and selling properties in LOUISIANA.  The idea of flipping houses has grown over the past  <span className="text-blue-600">...Continued</span>
        </p>



     <p className="text-lg text-blue-600"> ⬅️ Older Posts</p>
























          

         
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
