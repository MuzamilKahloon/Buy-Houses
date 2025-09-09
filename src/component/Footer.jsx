import React from "react";
import { NavLink } from "react-router-dom"; 
import fbIcon from "../assets/imgi_12_default.png"; 
import liIcon from "../assets/imgi_10_default.png"; 

const Footer = () => {
  return (
    <footer className="px-4 py-2 text-center bg-gray-100 md:text-left font-primary">
      <div className="flex flex-col items-center max-w-6xl mx-auto space-y-3">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center py-2 text-sm font-semibold gap-x-4 gap-y-4 md:text-base">
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
          <NavLink to="/ourcompany" className={({ isActive }) =>   // ✅ Fixed
            isActive ? "text-footertag" : "text-footertag hover:text-footertags"
          }>
            Our Company
          </NavLink>
          <NavLink to="/privacy" className={({ isActive }) =>      // ✅ Fixed
            isActive ? "text-footertag " : "text-footertag hover:text-footertags"
          }>
            Privacy Policy
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) =>         // ✅ Fixed
            isActive ? "text-footertag" : "text-footertag hover:text-footertags"
          }>
            Blog
          </NavLink>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="#">
            <img src={fbIcon} alt="Facebook" className="p-1 transition border border-black rounded-full w-7 h-7 hover:opacity-80" />
          </a>
          <a href="#">
            <img src={liIcon} alt="LinkedIn" className="p-1 transition border border-black rounded-full w-7 h-7 hover:opacity-80" />
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
        <p className="text-darkGray text-[19px] md:text-[15px] leading-[23px] md:leading-[23px]">
          © 2025 Red Stick Property Solutions LLC 
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
