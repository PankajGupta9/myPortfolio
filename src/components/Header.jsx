// import React from 'react';

// const Header = () => {
//   return (
//     <header className=" flex items-center justify-between px-[105px] fixed top-0 w-full bg-white shadow-md z-20">
//       <div className="flex ">
//             <p className="text-gray-400 text-2xl font-bold ">Pankaj</p>
//             <span className="text-orange-500 text-2xl font-bold hover:text-blue-500">
//               Portfolio
//             </span>
//           </div>

//       <nav className="flex justify-center space-x-8 py-4">

//         <a href="#profile" className="hover:underline">Profile</a>
//         <a href="#skills" className="hover:underline">Skills</a>
//         <a href="#projects" className="hover:underline">Projects</a>
//         <a href="#service" className="hover:underline">Services</a>
//         <a href="#about" className="hover:underline">About</a>
//         <a href="#contact" className="hover:underline">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;






import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 md:px-[105px] fixed top-0 w-full bg-white shadow-md z-20">
      {/* Logo */}
      <div className="flex items-center">
        <p className="text-gray-400 text-2xl font-bold">Pankaj</p>
        <span className="text-orange-500 text-2xl font-bold hover:text-blue-500">
          Portfolio
        </span>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="text-gray-500 text-3xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-[60px] left-0 w-full bg-white shadow-md md:static md:flex md:justify-center md:space-x-8 md:py-4`}
      >
        <a
          href="#profile"
          className="block py-2 px-4 md:py-0 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Profile
        </a>
        <a
          href="#skills"
          className="block py-2 px-4 md:py-0 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block py-2 px-4 md:py-0 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#service"
          className="block py-2 px-4 md:py-0 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="#about"
          className="block py-2 px-4 md:py-0 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 md:py-0 hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;


