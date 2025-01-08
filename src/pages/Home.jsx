import React from 'react';
import image from '../assets/image.png';
import banner from '../assets/banner.avif';

const Home = () => {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center bg-blue-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover rounded-b-3xl opacity-30 "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full px-6 md:px-20">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm{' '}
            <span className="text-4xl md:text-6xl font-bold text-orange-600 hover:opacity-75">
              Pankaj Gupta
            </span>
            <br />
            MERN Stack
            <br />
            Developer
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white">
            I craft robust and scalable web applications using
            <br />
            MongoDB, Express.js, React.js, and Node.js
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-4">
          <a href="#projects">
          <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-3xl hover:opacity-75 cursor-pointer">
              View Projects
            </button>
          </a>

            <a href="#contact">
            <button  className="text-white font-semibold py-2 px-4 border-2 border-slate-100 rounded-3xl hover:opacity-75 cursor-pointer">
            Contact Me
            </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[300px]">
            <img
              src={image}
              alt="profile"
              className="object-cover w-full h-full transition-shadow duration-500 shadow-[0_0_15px_5px_rgba(0,0,255,0.4)] hover:shadow-[0_0_25px_10px_rgba(0,0,255,0.7)]"
            />
            <div className="absolute inset-0 rounded-lg border-[1px] border-blue-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

