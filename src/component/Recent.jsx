//RecentPost 
import React from "react";

const RecentPost = () => {
  return (
    <>
      <div className="bg-gray-100 p-4">
        <h3 className="text-[21px] font-bold  mb-2">Recent Posts</h3>
        <hr className="text-gray-300"/>
        <ul className="space-y-2 mt-4 text-blue-600">
          <li>
            <a href="https://www.webuyhouses225.com/blog/how-to-sell-your-house-quickly-at-a-good-price/" className="hover:text-blue-700 text-[18px]">
              How To Sell Your House Quickly At A Good Price
            </a>
          </li>
          <li>
            <a href="https://www.webuyhouses225.com/blog/want-to-sell-your-house-quick-in-banton-rouge-read-this-first/" className="hover:text-blue-700 text-[18px]">
              Want To Sell Your House Quick in Banton Rouge? Read This First
            </a>
          </li>
          <li>
            <a href="https://www.webuyhouses225.com/blog/why-should-people-buy-a-house-in-baton-rouge/" className="hover:text-blue-700 text-[18px]">
              Why Should People Buy a House in Baton Rouge
            </a>
          </li>
          <li>
            <a href="https://www.webuyhouses225.com/blog/easy-way-to-sell-property-walk-away-no-cleanup-no-repairs-needed/" className="hover:text-blue-700 text-[18px]">
              Easy Way to Sell Property-Walk Away-No cleanup-No repairs needed
            </a>
          </li>
          <li>
            <a href="https://www.webuyhouses225.com/blog/selling-a-house-in-probate/" className="hover:text-blue-700 text-[18px]">
              Selling a House in Probate
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RecentPost;