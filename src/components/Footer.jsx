import React from "react";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhoneFlip } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-gray-950 h-[450px] flex flex-col justify-center items-center"
    >
      <div className="flex">
        <div className="flex-1 h-[300px] ">
          <div className="flex mb-7">
            <p className="text-white text-2xl font-bold ">Pankaj</p>
            <span className="text-orange-500 text-2xl font-bold hover:text-blue-500">
              Portfolio
            </span>
          </div>

          <p className="text-slate-200">
            Full Stack MERN Developer passionate about creating innovative web
            solutions and delivering exceptional user experiences.
          </p>
          <div className="flex gap-10  mt-10">
            <BsLinkedin className="text-gray-600 h-[40px] w-[40px] hover:opacity-75" />
            <BsGithub className="text-gray-600 h-[40px] w-[40px] hover:opacity-75" />
            <BsTwitterX className="text-gray-600 h-[40px] w-[40px] hover:opacity-75" />
          </div>
        </div>
        <div className="flex-1 h-[300px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white font-bold">Quick Links</h1>
            <ul className="flex flex-col items-start gap-5 mt-5">
              <li className="text-gray-500 hover:text-white cursor-pointer">
                Home
              </li>
              <li className="text-gray-500 hover:text-white cursor-pointer">
                About
              </li>
              <li className="text-gray-500 hover:text-white cursor-pointer">
                Services
              </li>
              <li className="text-gray-500 hover:text-white cursor-pointer">
                Projects
              </li>
              <li className="text-gray-500 hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 h-[300px] ">
          <h1 className="text-white text-center text-2xl font-bold mb-5 ">
            Contact Info
          </h1>

          <div className="flex  items-center pl-[55px] mb-7 gap-4">
            <TiMessages className="text-blue-500 h-[50px] w-[50px] hover:opacity-75" />
            <div className="flex flex-col">
              <span className="text-white">Email</span>
              <p className="text-gray-500 font-bold">pg254289@gmail.com</p>
            </div>
          </div>
          <div className="flex  items-center pl-[55px] mb-7 gap-4">
            <FaSquarePhoneFlip className="text-blue-500 h-[50px] w-[50px] hover:opacity-75" />
            <div className="flex flex-col">
              <span className="text-white">Phone</span>
              <p className="text-gray-500 font-bold">+91-9205121468</p>
            </div>
          </div>
          <div className="flex  items-center pl-[55px] mt-7 gap-4">
            <FaLocationDot className="text-blue-500 h-[50px] w-[50px] hover:opacity-75" />
            <div className="flex flex-col">
              <span className="text-white">Location</span>
              <p className="text-gray-500 font-bold">
                121002-Faridabad,Haryana
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 font-bold text-center my-3 hover:text-white">© 2024 DevPortfolio. All rights reserved.</p>
    </div>
  );
};

export default Footer;
