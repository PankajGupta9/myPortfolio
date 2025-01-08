import html from '../assets/skillsImg/html.png'
import css from '../assets/skillsImg/css.png'
import sass from '../assets/skillsImg/sass.png'
import reactjs from '../assets/skillsImg/reactjs.png'
import redux  from '../assets/skillsImg/redux.png'
import express from '../assets/skillsImg/express.png'
import mongodb from '../assets/skillsImg/mongodb.png'

const Skills = () => {
    return (
      <section id="skills" className="flex flex-col items-center justify-center min-h-screen  bg-gray-200">
        <h2 className="text-slate-600 text-3xl  text-center font-bold mb-[40px]">Technichal Skills</h2>
        <div className='flex items-center justify-center gap-10 '>
          <div className='gap-8'>
            <img src={html} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
          <div>
            <img src={css} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
          <div>
            <img src={sass} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
          <div>
            <img src={reactjs} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
          <div>
            <img src={redux} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
          <div>
            <img src={express} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
          <div>
            <img src={mongodb} alt="html" 
                className='object-cover  rounded-xl shadow-xl w-[160px] h-[160px]'
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  