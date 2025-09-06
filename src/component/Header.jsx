import React, { useState } from "react";

import logo from "../assets/imgi_8_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md font-primary">
      {/* Top header */}
      <div className="md:mx-[6%] px-4 md:px-16 py-[22px] ">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-2 md:hidden">
          {/* Top links */}
          <div className="flex gap-4 text-xl font-medium text-blue-600">
            <Link to="/getcash">Get A Cash Offer Today</Link>
            <Link to="/ourcompany">Our Company</Link>
          </div>

          {/* Logo */}
          <img src={logo} alt="logo" className="w-12 h-12" />

          {/* Title */}
          <h1 className="text-xl font-bold">WeBuyHouses225.com</h1>

          {/* Subtitle */}
          <p className="text-xl text-center text-gray-700">
            Need To Sell Your House Fast? We Buy Houses!
          </p>

          {/* Call + Menu */}
          <div className="flex items-center justify-between w-full mt-2">
            <p className="text-2xl font-semibold text-gray-800">
              Call Us! <span className="font-bold">(225) 772-2747</span>
            </p>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-3 py-1 text-xl font-medium border rounded"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="items-center justify-between hidden md:flex font-primary">
          {/* Logo + Title */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <div>
              <h1 className="font-bold text-[38px] leading-[27px] pb-4">
                WeBuyHouses225.com
              </h1>
              <p className="text-sm text-gray-700 text-[22px] leading-[21px]">
                Need To Sell Your House Fast? We Buy Houses!
              </p>
            </div>
          </div>

          {/* Links + Contact */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-6">
              <Link to="/getcash" className="text-lg blue-600 text-">
                Get A Cash Offer Today
              </Link>
              <Link to="/ourcompany" className="text-lg text-blue-600 ">
                Our Company
              </Link>
            </div>
            <p className="text-3xl font-bold text-gray-800">
              Call Us! (225) 772-2747
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block bg-black text-white   text-[19px] lg:text-[18.4px] leading-[27.4px] lg:leading-[32.4px] font-primary">
        <ul className="flex gap-10 mx-[8%] px-12 py-3 ">
          <Link to={"/sellhome"}>
            <li className="text-lg font-bold cursor-pointer">
              Sell Your Home ›
            </li>
          </Link>
          <Link to={"/work"}>
            <li className="text-xl cursor-pointer">How It Works</li>
          </Link>
          <Link to={"/compare"}>
            <li className="text-xl cursor-pointer">Compare</li>
          </Link>
          <Link to={"/testimonails"}>
            <li className="text-xl cursor-pointer">Testimonials</li>
          </Link>
          <Link to={"/faq"}>
            <li className="text-xl cursor-pointer">FAQs</li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-xl cursor-pointer">Contact</li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Nav - Smooth Slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black text-white  font-primary   text-[19px] lg:text-[18.4px] leading-[27.4px] lg:leading-[32.4px] ">
          <ul className="flex flex-col gap-6 px-6 py-6 text-lg">
            <Link to={"/sellhome"}>
              <li className="font-bold text-lg cursor-pointer text-[21px]">
                Sell Your Home ›
              </li>
            </Link>
            <Link to={"/work"}>
              <li onClick={() => setMenuOpen(false)}>How It Works</li>
            </Link>
            <Link to={"/compare"}>
              <li onClick={() => setMenuOpen(false)}>Compare</li>
            </Link>
            <Link to={"/testimonails"}>
              <li onClick={() => setMenuOpen(false)}>Testimonials</li>
            </Link>
            <Link to={"/faq"}>
              <li onClick={() => setMenuOpen(false)}>FAQs</li>
            </Link>
            <Link to={"/contact"}>
              <li onClick={() => setMenuOpen(false)}>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
