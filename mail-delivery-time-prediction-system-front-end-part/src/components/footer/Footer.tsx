import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      {/* Footer Container */}
      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div
          className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10"
          style={{ transform: "scale(1.1)" }}
        >
          {/* CS G-26 */}
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">
                CS G-<span className="text-blue-600">26</span>
              </p>
              {/* Social Media Links */}
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-black text-4xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-black text-4xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-black text-4xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-black text-4xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>
          {/* Product Section */}
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Stocks
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Futures & Options
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Mutual Funds
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Fixed deposits
              </li>
            </ul>
          </div>
          {/* Company Section */}
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                About
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Products
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Pricing
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Press & Media
              </li>
            </ul>
          </div>
          {/* Support Section */}
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              <li className={`${styles.footerLink} text-gray-500 text-lg pb-2 font-semibold cursor-pointer hover:text-blue-600`}>
  <a href="/Contact">Contact</a>
</li>

              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Support Portals
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                List Of Charges
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Downloads & Resources
              </li>
              <li className="text-gray-500 text-lg pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Text */}

        <div className={styles.footerText + " mt-4 mb-4"}>
          <div
            className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10"
            style={{ transform: "scale(1.1)" }}
          >
            {/* Copyright and Attribution */}
            <h1 className="text-gray-800 font-semibold">
              ©2024 All rights reserved | Build by{" "}
              <span className="text-blue-600">Sachin </span>
              <span className="hover:text-blue-600 font-semibold cursor-pointer">
                for Team- CS G-26{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// This is a React functional component representing a footer section of a web page. It contains various sections such as social media links, product information, company details, and support options. Let's break down the code:

// - The `Footer` component contains multiple `div` elements styled using Tailwind CSS classes to structure and style the footer section.
// - Each section (`Product`, `Company`, `Support`) contains a list of items related to that category, such as product types, company information, and support options.
// - Social media icons (`FaInstagram`, `FaTwitter`, `FaLinkedin`, `FaYoutube`) are imported from the `react-icons/fa` package and displayed in the footer.
// - The footer text includes copyright information and attribution to the creator and team.
// - Tailwind CSS utility classes are used throughout the component to apply styling such as colors, padding, and spacing.

// Overall, this component serves as a structured and styled footer section for a web page, providing important links and information for users.
