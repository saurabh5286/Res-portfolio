import React from 'react';

const projects = [
  {
    id: 1,
    name: "Study Materials App",
    description: "A platform to share and access B.Tech study materials.",
    url: "https://b-tech-yaar.vercel.app/",
  },
  {
    id: 2,
    name: "E-commerce App",
    description: "A sleek, responsive shopping platform.",
    url: "https://forever-by-saurabh5286.vercel.app",
  },
  {
    id: 3,
    name: "Weather App",
    description: "A real-time weather forecast application with location search.",
    url: "https://weather-app-seven-kappa-36.vercel.app",
  },
  {
    id: 4,
    name: "Grocery Store",
    description: "Full stack grocery store web app with cart and orders.",
    url: "https://green-cart-by-saurabh5286.vercel.app/",
  },
  {
    id: 5,
    name: "Smriddhi",
    description: "Study materials provider for competitive exams.",
    url: "https://smriddhi2-0.vercel.app/",
  },
  {
    id: 6,
    name: "Blog App",
    description: "A minimal blog platform with post creation.",
    url: "https://vt-project-pi.vercel.app",
  },
  {
    id: 7,
    name: "Instagram Clone",
    description: "Fully responsive clone with post and profile features.",
    url: "https://clone-zeta-ten.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 transform hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-5 rounded-full text-sm shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Live Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
