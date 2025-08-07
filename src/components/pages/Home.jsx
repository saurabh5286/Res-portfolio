import React from 'react'
import Projects from './Projects'
import Certificates from './Certificates'
import { ReactTyped } from 'react-typed'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Home = () => {
  return (
    <div>

      {/* ----------------------Body Section ----------------- */}
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 space-y-6 md:space-y-0 md:space-x-4">
        
        {/* Profile Image - Top on mobile, right on desktop */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] px-4">
            <img
              className="w-full aspect-square rounded-full object-cover shadow-[0_10px_30px_rgba(34,197,94,0.6)]"
              src="/user.jpg"
              alt="Profile"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-4">
          <h1 className="text-2xl font-semibold">Welcome In My Feed</h1>
          <h1 className="text-3xl flex flex-wrap">
            <span>Hello, I'm a</span>
            <span className="text-red-600 pl-2">
              <ReactTyped
                strings={[" Developer", " Coder", " Learner"]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </span>
          </h1>
          <p className="text-justify text-gray-700">
            Full Stack Developer proficient in Python, JavaScript, and modern
            frameworks like Django and React. Strong understanding of RESTful
            APIs, cloud services (Firebase), and database management (SQL).
            Experienced in AI-powered web applications, cybersecurity, and
            DevOps tools. Ranked top 5% in Core Java (NPTEL) and globally 2% on
            TryHackMe. Passionate about scalable, secure, and high performance
            solutions.
          </p>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Available At:</h2>
            <div className="text-orange-600">
              <ReactTyped
                strings={[" Linkedin", " Github", " Youtube"]}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/saurabh-hardel-3bb954351">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/saurabh5286">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Projects/>
      <Certificates/>

      
    </div>
  )
}

export default Home
