import React, { useRef } from 'react';
import { TiMessages } from "react-icons/ti";
import { FaLocationDot, FaSquarePhoneFlip } from "react-icons/fa6";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import { toast } from 'react-toastify';
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
          form.current.reset();
          toast.success('Email sent Successfully!');
        },
        (error) => {
          toast.error('Something went wrong!');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact" className="min-h-screen bg-blue-950 px-4 py-8">
      <h2 className="text-slate-200 text-3xl font-bold text-center mb-6">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Right Section */}
              <div className="bg-white border-2 rounded-xl p-6">
          <h1 className="text-slate-600 text-center text-2xl font-bold mb-6">
            Contact
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Type your message..."
              name="message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Left Section */}
        <div className="bg-white border-2 rounded-xl p-6">
          <h1 className="text-slate-600 text-center text-2xl font-bold mb-6">
            Let's Connect
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <TiMessages className="text-blue-500 h-10 w-10" />
            <div>
              <span>Email</span>
              <p className="text-slate-600 font-bold">pg254289@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <FaSquarePhoneFlip className="text-blue-500 h-10 w-10" />
            <div>
              <span>Phone</span>
              <p className="text-slate-600 font-bold">+91-9205121468</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <FaLocationDot className="text-blue-500 h-10 w-10" />
            <div>
              <span>Location</span>
              <p className="text-slate-600 font-bold">121002-Faridabad, Haryana</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <BsLinkedin className="text-blue-500 h-8 w-8 cursor-pointer" />
            <BsGithub className="text-slate-700 h-8 w-8 cursor-pointer" />
            <BsTwitterX className="text-slate-700 h-8 w-8 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
