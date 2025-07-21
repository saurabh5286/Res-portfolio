import React from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  const projects = [
    { id: 1, name: 'Portfolio Website', description: 'A personal portfolio to showcase my work.' },
    { id: 2, name: 'E-commerce App', description: 'An online shopping platform.' },
    { id: 3, name: 'Weather App', description: 'A weather forecasting application.' },
     { id: 4, name: 'Grocery-Store', description: 'A responsive e-commerece web site' },
      { id: 5, name: 'SnowCourse lading page', description: 'Single Page Application' },
       { id: 6, name: 'Greenkart', description: 'Fully responsive Grocery-store App' }
  ];

  return (
    <div className="projects-container">
       <h1 className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">Projects</h1>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;