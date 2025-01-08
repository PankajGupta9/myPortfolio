import React from 'react'
import { TiMessages } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { BsLinkedin,BsTwitterX,BsGithub } from "react-icons/bs";
import {  toast } from 'react-toastify';

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const sendEmail = async (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_k8tpavf', 'template_8pdqua7', form.current, {
          publicKey: 'tzYwqiF3GHJfRdnZD',
        })
        .then(
          () => {
            form.current.reset(); // Clear the form fields
            toast.success('Email sent Successfully !.');
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error('Something went wrong!');
            console.log('FAILED...', error.text);
          },
        );
    };
    
  return (
    <div id="contact" className="min-h-screen bg-slate-100">
      <h2 className="text-slate-600 text-3xl font-bold text-center p-5">
        Get in Touch
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex-1 h-[500px] bg-white border-2 m-20 rounded-xl">
          <h1 className="text-slate-800 text-center text-2xl font-bold p-10">Let's Connect</h1>

          <div className="flex  items-center pl-[55px] mb-7 gap-4">
            <TiMessages className="text-blue-500 h-[50px] w-[50px] hover:opacity-75" />
            <div className="flex flex-col">
              <span>Email</span>
              <p className="text-slate-800 font-bold">pg254289@gmail.com</p>
            </div>
          </div>
          <div className="flex  items-center pl-[55px] mb-7 gap-4">
            <FaSquarePhoneFlip className="text-blue-500 h-[50px] w-[50px] hover:opacity-75" />
            <div className="flex flex-col">
              <span>Phone</span>
              <p className="text-slate-800 font-bold">+91-9205121468</p>
            </div>
          </div>
          <div className="flex  items-center pl-[55px] mt-7 gap-4">
            <FaLocationDot className="text-blue-500 h-[50px] w-[50px] hover:opacity-75" />
            <div className="flex flex-col">
              <span>Location</span>
              <p className="text-slate-800 font-bold">121002-Faridabad,Haryana</p>
            </div>
          </div>

          <div className="flex gap-10 pl-[65px] mt-10">
            <BsLinkedin className="text-blue-500 h-[40px] w-[40px] hover:opacity-75" />
            <BsGithub className="text-black h-[40px] w-[40px] hover:opacity-75" />
            <BsTwitterX className="text-black h-[40px] w-[40px] hover:opacity-75" />
          </div>
        </div>
        <div className="flex-1 h-[500px] bg-white border-2 m-20 rounded-xl">
          <h1 className="text-slate-800 text-center text-2xl font-bold p-10">Contact</h1>

          <div >


          <form ref={form} onSubmit={sendEmail} 
          className="flex flex-col w-[500px] mx-auto">
            {/* <label>Full Name</label> */}
            <input
              type="text"
              placeholder='Enter your full name'
              name='name'
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            {/* <label>Email</label> */}
            <input
              type="email"
              placeholder='Enter Your Email'
              name='email'
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            {/* <label>Subject</label> */}
            <input
              type="text"
              placeholder='Subject'
              name='subject'
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <textarea
              type="text"
              placeholder="Type your message..."
              name='message'
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
                <button type='submit'
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send message
    </button>
    </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
300