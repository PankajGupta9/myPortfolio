import React from 'react'
import { FiCheckSquare } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { ImPower } from "react-icons/im";




const Service = () => {
  return (
    <div id='service' className='min-h-screen flex flex-col justify-center items-center bg-red-200'>
    
       <h1 className='text-slate-600 font-bold text-3xl text-left my-4'>Freelancing Services</h1>

       <div className='flex justify-center items-center gap-10'>
        <div className="flex-1 h-[450px] bg-white border-2 m-10 p-10 rounded-xl">
                 <CgWebsite className='text-orange-600 h-[70px] w-[70px]' />
                 <h2 className='text-orange-600 font-semibold text-2xl text-left my-4'>Full Stack Development</h2>
                  <p className='text-slate-500 text-lg'>
                  End-to-end web application development using
                  MERN stack with responsive design and optimal 
                  performance.
                  </p>
                  <div className='flex flex-col my-4'>
                  <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Custom Web Applications</p>
                   </div>
             
                   <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>RESTful API Development</p>
                   </div>
             
                   <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Database Architecture</p>
                   </div>
             
                  </div>
             
        </div>
        <div className="flex-1 h-[450px] bg-white border-2 m-10 p-10 rounded-xl">
                 <GrIntegration className='text-orange-600 h-[70px] w-[70px]' />
                 <h2 className='text-orange-600 font-semibold text-2xl text-left my-4'>API Integration</h2>
                  <p className='text-slate-500 text-lg'>
                  Seamless integration of third-party APIs and 
                  development of custom API solutions for your 
                  business needs.
                  </p>
                  <div className='flex flex-col my-4'>
                  <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Third-party Integration</p>
                   </div>
             
                   <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>API Documentation</p>
                   </div>
             
                   <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Custom API Development</p>
                   </div>
             
                  </div>
             
        </div>
        <div className="flex-1 h-[450px] bg-white border-2 m-10 p-10 rounded-xl">
                 <ImPower className='text-orange-600 h-[70px] w-[70px]' />
                 <h2 className='text-orange-600 font-semibold text-2xl text-left my-4'>Performance Optimization</h2>
                  <p className='text-slate-500 text-lg'>
                  Optimize your web applications for maximum speed, 
                  efficiency, and user experience.
                  </p>
                  <div className='flex flex-col my-4'>
                  <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Code Optimization</p>
                   </div>
             
                   <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Load Time Reduction</p>
                   </div>
             
                   <div className='flex  items-center gap-3'>
                   <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-sm'>Performance Monitoring</p>
                   </div>
             
                  </div>
             
        </div>
       </div>
    </div>
  )
}

export default Service
