import React from 'react';
import { FiCheckSquare } from "react-icons/fi";


const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-left min-h-screen bg-blue-950'>
    <div className='flex flex-col justify-center items-left items-left pl-[100px]   bg-white w-[1200px] h-[600px] rounded-r-full gap-10'>
    <h2 className='text-center text-4xl text-slate-600 font-bold mb-10'>About Me</h2>

    <h2 className='text-orange-500 text-3xl '>Full Stack MERN Developer</h2>
     <p className='text-slate-600 text-xl'>
     With 5 years of experience in web development, I specialize in building 
     <br />
     scalable and efficient web applications using the MERN stack. My passion 
     <br />
     lies in creating seamless user experiences while maintaining robust backend 
     <br />
     architectures.
     </p>
     <div className='flex flex-col gap-4'>
     <div className='flex  items-center gap-3'>
      <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-xl'>Frontend Development with React.js</p>
      </div>

      <div className='flex  items-center gap-3'>
      <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-xl'>Backend Development with Node.js & Express</p>
      </div>

      <div className='flex  items-center gap-3'>
      <FiCheckSquare  className='text-orange-600'/><p className='text-slate-700 text-xl'>Database Management with MongoDB</p>
      </div>

     </div>
    </div>
    </div>
  )
}

export default About
