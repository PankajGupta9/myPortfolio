import React from 'react';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <ToastContainer />
      <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Service/>
            <Contact/>
            <Footer/>
    </div>
  )
}