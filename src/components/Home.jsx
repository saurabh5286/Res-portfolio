import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
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

      {/* Projects Section */}
      <section className="mt-10 px-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-5 space-y-3">
          {[
            {
              id: 1,
              name: "Portfolio Website",
              description: "A personal portfolio to showcase my work.",
            },
            {
              id: 2,
              name: "E-commerce App",
              description: "An online shopping platform.",
            },
            {
              id: 3,
              name: "Weather App",
              description: "A weather forecasting application.",
            },
             { id: 4, name: 'Grocery-Store', description: 'Grocery store full stack web app' },

      { id: 5, name: 'SnowCourse lading page', description: 'It is a SPA (single page pplication)' },

       { id: 6, name: 'Figma - barber Shop', description: ' It is a fully responsive web app with functionality' }
          ].map((project) => (
            <li
              key={project.id}
              className="bg-gray-200 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Certificates Section */}
      <section className="mt-10 px-6">
        <h2 className="text-3xl font-bold mb-4">Certificates</h2>
        <ul className="list-disc pl-5 space-y-3">
          {[
            {
              id: 1,
              title: "Core Java (NPTEL)",
              description: "Successflly completed java course from #mindluster",
            },
            {
              id: 2,
              title: "Html CSS practical learning",
              description: "Successflly completed course from #mindluster",
            },
            {
              id: 3,
              title: "Web Development",
              description: "Successflly completed course from #mindluster",
            },
             {
              id: 4,
              title: "React",
              description: "Successflly completed course from #mindluster",
            },
            {
              id: 5,
              title: "Graphic Design with PhotoShop",
              description: "Successflly completed course from #mindluster",
            },
             {
              id: 6,
              title: "Inernship from #Unstop academy",
              description: "Successflly completed ",
            },
            
          ].map((certificate) => (
            <li
              key={certificate.id}
              className="bg-gray-200 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{certificate.title}</h3>
              <p className="text-gray-700">{certificate.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mt-10 px-6">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-4">
          Feel free to reach out to me via the following platforms:
        </p>
        <div className="flex space-x-4 bg-gray-200 p-4 rounded-lg shadow-md">
          <a href="https://www.linkedin.com/in/saurabh-hardel-3bb954351">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/saurabh5286">
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:saurabhhardel5286@gmail.com"
            className="text-blue-600"
          >
            <span>Email Me</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
