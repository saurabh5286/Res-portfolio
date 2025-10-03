import React from 'react';
import Projects from './Projects';
import Certificates from './Certificates';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-white text-gray-800 scroll-smooth">

      {/* ---------------- Hero Section ---------------- */}
     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gray-100 gap-y-12 md:gap-x-16">
  {/* -------- Profile Image -------- */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <div className="
      w-48 h-48 
      sm:w-56 sm:h-56 
      md:w-64 md:h-64 
      lg:w-80 lg:h-80 
      xl:w-96 xl:h-96 
      rounded-full overflow-hidden 
      shadow-[0_10px_30px_rgba(34,197,94,0.6)] 
      hover:shadow-green-400 
      transition-all duration-500
    ">
      <img
        src="/user.jpg"
        alt="Profile"
        className="w-full h-full object-cover 
          hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </div>
  </div>

  {/* -------- Text Content -------- */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
    <h1 className="text-4xl font-bold text-gray-900">
      Welcome to My Portfolio
    </h1>

    <h2 className="text-2xl text-gray-700 flex justify-center md:justify-start items-center">
      <span>Hello, I'm a</span>
      <span className="text-red-600 font-semibold pl-2">
        <ReactTyped
          strings={[' Developer', ' Coder', ' Learner']}
          typeSpeed={40}
          backSpeed={30}
          loop
        />
      </span>
    </h2>

    <p className="text-md text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
      I'm a Full Stack Developer skilled in Python, JavaScript, React, and the MERN Stack.
      I build secure, scalable, and high-performance web applications.
      Passionate about AI, DevOps, and cloud-based development.
    </p>

    {/* -------- Social Media Links -------- */}
    <div className="space-y-3">
      <h3 className="text-xl font-bold">Available At:</h3>

      <div className="text-orange-600 text-lg font-medium">
        <ReactTyped
          strings={['LinkedIn', 'GitHub', 'YouTube']}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      <div className="flex justify-center md:justify-start space-x-4 pt-2">
        <a
          href="https://www.linkedin.com/in/saurabh-hardel-3bb954351"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/saurabh5286"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition duration-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  </div>
</section>


      {/* ---------------- Projects Section ---------------- */}
      <Projects />

      {/* ---------------- Certificates Section ---------------- */}
      <Certificates />
    </div>
  );
};

export default Home;
