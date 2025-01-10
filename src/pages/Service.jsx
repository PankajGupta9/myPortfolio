import React from 'react';
import { FiCheckSquare } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { ImPower } from "react-icons/im";

const Service = () => {
  return (
    <div id="service" className="min-h-screen flex flex-col justify-center items-center bg-blue-950 px-4 md:px-10 ">
      <h1 className="text-slate-200 font-bold text-3xl md:text-4xl text-center my-6">Freelancing Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Full Stack Development Card */}
        <div className="h-auto bg-white border-2 p-6 rounded-xl shadow-md hover:bg-blue-950 group transition-all duration-300 ">
          <CgWebsite className="text-orange-600 h-[50px] w-[50px] md:h-[70px] md:w-[70px]" />
          <h2 className="text-orange-600 font-semibold text-xl md:text-2xl my-4">Full Stack Development</h2>
          <p className="text-slate-500 text-base md:text-lg group-hover:text-white">
            End-to-end web application development using the MERN stack with responsive design and optimal performance.
          </p>
          <div className="flex flex-col my-4 space-y-2">
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Custom Web Applications</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">RESTful API Development</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Database Architecture</p>
            </div>
          </div>
        </div>

        {/* API Integration Card */}
        <div className="h-auto bg-white border-2 p-6 rounded-xl shadow-md hover:bg-blue-950 group transition-all duration-300">
          <GrIntegration className="text-orange-600 h-[50px] w-[50px] md:h-[70px] md:w-[70px]" />
          <h2 className="text-orange-600 font-semibold text-xl md:text-2xl my-4">API Integration</h2>
          <p className="text-slate-500 text-base md:text-lg group-hover:text-white">
            Seamless integration of third-party APIs and development of custom API solutions for your business needs.
          </p>
          <div className="flex flex-col my-4 space-y-2">
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Third-party Integration</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">API Documentation</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Custom API Development</p>
            </div>
          </div>
        </div>

        {/* Performance Optimization Card */}
        <div className="h-auto bg-white border-2 p-6 rounded-xl shadow-md hover:bg-blue-950 group transition-all duration-300">
          <ImPower className="text-orange-600 h-[50px] w-[50px] md:h-[70px] md:w-[70px]" />
          <h2 className="text-orange-600 font-semibold text-xl md:text-2xl my-4">Performance Optimization</h2>
          <p className="text-slate-500 text-base md:text-lg  group-hover:text-white">
            Optimize your web applications for maximum speed, efficiency, and user experience.
          </p>
          <div className="flex flex-col my-4 space-y-2">
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Code Optimization</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Load Time Reduction</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckSquare className="text-orange-600" />
              <p className="text-slate-700 text-sm group-hover:text-white">Performance Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
