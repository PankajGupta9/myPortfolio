import React from 'react';
import { FiCheckSquare } from "react-icons/fi";

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center min-h-screen bg-blue-950 py-10'>
      <div className='flex flex-col items-start  max-w-full sm:w-[800px] md:w-[1000px] lg:w-[1200px] p-6 rounded-xl gap-10'>
        <h2 className='text-center text-4xl text-slate-300 font-bold mb-6 sm:text-3xl'>
        The Person Behind the Code
        </h2>

        {/* <h2 className='text-orange-500 text-3xl sm:text-2xl'>
          Full Stack MERN Developer
        </h2> */}

        <p className='text-slate-400 text-xl sm:text-lg'>
          I am a passionate MERN stack developer with a strong foundation in 
          creating dynamic web applications. I specialize in developing full-stack
          solutions using MongoDB, Express.js, React.js, and Node.js, with a focus on
          delivering seamless user experiences and efficient backend systems. Continuously 
          learning and growing in the field, I am dedicated to building high-quality, scalable
          applications that meet both user and business needs.
        </p>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <FiCheckSquare className='text-orange-600' />
            <p className='text-slate-400 text-xl sm:text-lg'>Frontend Development with React.js</p>
          </div>

          <div className='flex items-center gap-3'>
            <FiCheckSquare className='text-orange-600' />
            <p className='text-slate-400 text-xl sm:text-lg'>Backend Development with Node.js & Express</p>
          </div>

          <div className='flex items-center gap-3'>
            <FiCheckSquare className='text-orange-600' />
            <p className='text-slate-400 text-xl sm:text-lg'>Database Management with MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
