import React from "react";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { FaLocationDot, FaSquarePhoneFlip } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-gray-950 flex flex-col justify-center items-center py-10 px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Section 1 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-white text-2xl font-bold">Pankaj</p>
            <span className="text-orange-500 text-2xl font-bold hover:text-blue-500">
              Portfolio
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6">
            Full Stack MERN Developer passionate about creating innovative web
            solutions and delivering exceptional user experiences.
          </p>
          <div className="flex gap-4">
            <BsLinkedin className="text-gray-600 h-8 w-8 hover:opacity-75" />
            <BsGithub className="text-gray-600 h-8 w-8 hover:opacity-75" />
            <BsTwitterX className="text-gray-600 h-8 w-8 hover:opacity-75" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-white font-bold text-lg md:text-xl mb-4">
            Quick Links
          </h1>
          <ul className="flex flex-col items-center md:items-start gap-3">
            <li className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
              Home
            </li>
            <li className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
              About
            </li>
            <li className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
              Services
            </li>
            <li className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
              Projects
            </li>
            <li className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
              Contact
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col items-start">
          <h1 className="text-white font-bold text-lg md:text-xl mb-4">
            Contact Info
          </h1>
          <div className="flex items-start gap-4 mb-4">
            <TiMessages className="text-blue-500 h-8 w-8 hover:opacity-75" />
            <div>
              <span className="text-white text-sm md:text-base">Email</span>
              <p className="text-gray-500 text-sm md:text-base font-bold">
                pg254289@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <FaSquarePhoneFlip className="text-blue-500 h-8 w-8 hover:opacity-75" />
            <div>
              <span className="text-white text-sm md:text-base">Phone</span>
              <p className="text-gray-500 text-sm md:text-base font-bold">
                +91-9205121468
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaLocationDot className="text-blue-500 h-8 w-8 hover:opacity-75" />
            <div>
              <span className="text-white text-sm md:text-base">Location</span>
              <p className="text-gray-500 text-sm md:text-base font-bold">
                121002-Faridabad, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 font-bold text-center text-sm md:text-base my-4 hover:text-white">
        © 2024 DevPortfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
