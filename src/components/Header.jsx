// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <header className='flex justify-between items-center bg-slate-700 h-[80px] top-0 z-20 sticky'>
//     <div className=' items-center m-3 text-red-500'>
//         logo
//       </div>
//       <div className='flex justify-center items-center pr-[15px] '>
//         <ul className='flex gap-3 '>
//             <Link to='/'>
//                 <li className='text-white font-bold uppercase hover:opacity-75 cursor-pointer'>Home</li>
//             </Link>
//             <Link to='/skills'>
//                 <li className='text-white font-bold uppercase hover:opacity-75 cursor-pointer'>Skills</li>
//             </Link>
//             <Link to='/project'>
//                 <li className='text-white font-bold uppercase hover:opacity-75 cursor-pointer'>Projects</li>
//             </Link>
//             <Link to='/about'>
//                 <li className='text-white font-bold uppercase hover:opacity-75 cursor-pointer'>About</li>
//             </Link>
//             <Link to='/contact'>
//                 <li className='text-white font-bold uppercase hover:opacity-75 cursor-pointer'>Contact</li>
//             </Link>
//         </ul>
//       </div>

//     </header>
//   )
// }

// export default Header



import React from 'react';

const Header = () => {
  return (
    <header className=" flex items-center justify-between px-[105px] fixed top-0 w-full bg-white shadow-md z-20">
      <div className="flex ">
            <p className="text-gray-400 text-2xl font-bold ">Pankaj</p>
            <span className="text-orange-500 text-2xl font-bold hover:text-blue-500">
              Portfolio
            </span>
          </div>

      <nav className="flex justify-center space-x-8 py-4">

        <a href="#profile" className="hover:underline">Profile</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#service" className="hover:underline">Services</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

