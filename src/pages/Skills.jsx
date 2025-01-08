// import html from '../assets/skillsImg/html.png'
// import css from '../assets/skillsImg/css.png'
// import sass from '../assets/skillsImg/sass.png'
// import reactjs from '../assets/skillsImg/reactjs.png'
// import redux  from '../assets/skillsImg/redux.png'
// import express from '../assets/skillsImg/express.png'
// import mongodb from '../assets/skillsImg/mongodb.png'

// const Skills = () => {
//     return (
//       <section id="skills" className="flex flex-col items-center justify-center min-h-screen  bg-gray-200">
//         <h2 className="text-slate-600 text-3xl  text-center font-bold mb-[40px]">Technichal Skills</h2>
//         <div className='flex items-center justify-center gap-10 '>
//           <div className='gap-8'>
//             <img src={html} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//           <div>
//             <img src={css} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//           <div>
//             <img src={sass} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//           <div>
//             <img src={reactjs} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//           <div>
//             <img src={redux} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//           <div>
//             <img src={express} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//           <div>
//             <img src={mongodb} alt="html"
//                 className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
//             />
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default Skills;

import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-blue-950 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300">
            <h3 className="text-xl text-orange-500 font-semibold mb-4">
              Frontend Development
            </h3>
            <ul className="text-slate-600 text-lg group-hover:text-white">
              <li className="mb-2">React.js</li>
              <li className="mb-2">HTML5 & CSS3</li>
              <li className="mb-2">Tailwind CSS</li>
              <li className="mb-2">JavaScript (ES6+)</li>
              <li className="mb-2">Redux (State Management)</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300">
            <h3 className="text-xl text-orange-500 font-semibold mb-4">
              Backend Development
            </h3>
            <ul className="text-slate-600 text-lg group-hover:text-white">
              <li className="mb-2">Node.js</li>
              <li className="mb-2">Express.js</li>
              <li className="mb-2">REST APIs</li>
              <li className="mb-2">JWT Authentication</li>
              <li className="mb-2">WebSockets</li>
            </ul>
          </div>

          {/* Database Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300">
            <h3 className="text-xl text-orange-500 font-semibold mb-4">
              Database Management
            </h3>
            <ul className="text-slate-600 text-lg group-hover:text-white">
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">Mongoose</li>
              <li className="mb-2">Database Optimization</li>
              <li className="mb-2">NoSQL Databases</li>
            </ul>
          </div>

          {/* Other Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 focus-within:bg-blue-950 group transition-all duration-300">
          <h3 className="text-xl text-orange-500 font-semibold mb-4 ">
              Other Skills
            </h3>
            <ul className="text-slate-600 text-lg group-hover:text-white">
              <li className="mb-2">Git & GitHub</li>
              <li className="mb-2">Agile Development</li>
              <li className="mb-2">Test-Driven Development (TDD)</li>
              <li className="mb-2">CI/CD</li>
              <li className="mb-2">Cloud Deployment (Heroku, AWS)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
