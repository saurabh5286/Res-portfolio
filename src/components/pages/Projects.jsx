import React from 'react'

const Projects = () => {
  return (
    <div>
      <section className="mt-10 px-6">
  <h2 className="text-3xl font-bold mb-4">Projects</h2>
  <ul className="list-disc pl-5 space-y-3">
    {[
      {
        id: 1,
        name: "Study Materials App",
        description: "A personal portfolio to showcase my work.",
        url: "https://b-tech-yaar.vercel.app/",
      },
      {
        id: 2,
        name: "E-commerce App",
        description: "An online shopping platform.",
        url: "https://forever-by-saurabh5286.vercel.app",
      },
      {
        id: 3,
        name: "Weather App",
        description: "A weather forecasting application.",
        url: "https://weather-app-seven-kappa-36.vercel.app",
      },
      {
        id: 4,
        name: "Grocery-Store",
        description: "Grocery store full stack web app",
        url: "https://green-cart-by-saurabh5286.vercel.app/",
      },
      {
        id: 5,
        name: "Smriddhi",
        description: "Study Materials provider",
        url: "https://smriddhi2-0.vercel.app/",
      },
      {
        id: 6,
        name: "Figma - Barber Shop",
        description: "It is a fully responsive web app with functionality",
        url: "https://github.com/saurabh5286",
      },
    ].map((project) => (
      <li key={project.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-700">{project.description}</p>

        {/* Preview Link Button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Preview
        </a>
      </li>
    ))}
  </ul>
</section>

      
    </div>
  )
}

export default Projects
