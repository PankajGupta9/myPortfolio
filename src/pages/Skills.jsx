import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-blue-950 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-8">Skills</h2>

        {/* Horizontal Scroll Container for Small and Medium Screens */}
        <div className="overflow-x-auto sm:overflow-x-auto lg:overflow-x-hidden m-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* Frontend Skills */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300 h-82">
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
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300 h-82">
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
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300 h-82">
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
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-950 group transition-all duration-300 h-82">
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
    </div>
  );
};

export default Skills;
