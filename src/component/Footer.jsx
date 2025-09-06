import React from "react";
import { NavLink } from "react-router-dom"; 
import fbIcon from "../assets/imgi_12_default.png"; 
import liIcon from "../assets/imgi_10_default.png"; 

const Footer = () => {
  return (
   <footer className="bg-gray-100 text-center md:text-left py-2 px-4 font-primary">
  <div className="max-w-6xl mx-auto flex flex-col items-center space-y-3">
    {/* Navigation Links */}
    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-4 py-2 text-sm md:text-base font-semibold">
      <NavLink to="/cash" className={({ isActive }) =>
        isActive ? "text-footertag" : "text-footertag hover:text-footertags"
      }>
        Get A Cash Offer Today
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) =>
        isActive ? "text-footertag" : "text-footertag hover:text-footertags"
      }>
        Contact Us
      </NavLink>
      <NavLink to="/work" className={({ isActive }) =>
        isActive ? "text-footertag" : "text-footertag hover:text-footertags"
      }>
        How It Works
      </NavLink>
      <NavLink to="/faq" className={({ isActive }) =>
        isActive ? "text-footertag" : "text-footertag hover:text-footertags"
      }>
        FAQ
      </NavLink>
      <NavLink to="/testimonails" className={({ isActive }) =>
        isActive ? "text-footertag" : "text-footertag hover:text-footertags"
      }>
        Our Company
      </NavLink>
      <NavLink to="/resources" className={({ isActive }) =>
        isActive ? "text-footertag " : "text-footertag hover:text-footertags"
      }>
        Resources
      </NavLink>
      <NavLink to="/privacy-policy" className={({ isActive }) =>
        isActive ? "text-footertag " : "text-footertag hover:text-footertags"
      }>
        Privacy Policy
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) =>
        isActive ? "text-footertag" : "text-footertag hover:text-footertags"
      }>
        Blog
      </NavLink>
    </nav>

    {/* Social Icons */}
    <div className="flex gap-3">
      <a href="#">
        <img src={fbIcon} alt="Facebook" className="w-7 h-7 border border-black rounded-full p-1 hover:opacity-80 transition" />
      </a>
      <a href="#">
        <img src={liIcon} alt="LinkedIn" className="w-7 h-7 border border-black rounded-full p-1 hover:opacity-80 transition" />
      </a>
    </div>

    {/* Description */}
    <p className="max-w-[76%] text-darkGray text-[13px] text-center leading-[20.5px] md:leading-[20.3px]">
      We are a real estate solutions and investment firm that specializes in
      helping homeowners get rid of burdensome houses fast. We are investors
      and problem solvers who can buy your house fast with a fair all cash
      offer.
    </p>

    {/* Copyright */}
    <p className="text-darkGray  text-[19px]  md:text-[15px] leading-[23px] md:leading-[23px]">
      © 2025 Red Stick Property Solutions LLC - Powered by{" "}
      <a href="#" className="text-black underline hover:text-darkGray">
        Carrot
      </a>
    </p>
  </div>
</footer>

  );
};

export default Footer;
