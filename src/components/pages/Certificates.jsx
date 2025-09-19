import React, { useState } from 'react';

function Certificates() {
  const certificates = [
    {
      title: "Programming in JAVA",
      description: "mindluster",
      imgSrc: "/Java.jpg",
      imgAlt: "Java Certificate",
      id: "java-cert",
    },
    {
      title: "JavaScript Fundamentals",
      description: "GreatStack",
      imgSrc: "/JS.jpg",
      imgAlt: "JavaScript Certificate",
      id: "javascript-cert",
    },
    {
      title: "HTML & CSS Practical Learning",
      description: "mindluster",
      imgSrc: "/Html.jpg",
      imgAlt: "HTML CSS Certificate",
      id: "html-css-cert",
    },
    {
      title: "Web Development",
      description: "Web Development Training",
      imgSrc: "/Web.jpg",
      imgAlt: "Web Development Certificate",
      id: "web-dev-cert",
    },
    {
      title: "React",
      description: "GreatStack",
      imgSrc: "/React.jpg",
      imgAlt: "React Certificate",
      id: "react-cert",
    },
    
    {
      title: "AI For Beginners",
      description: "HP Life",
      imgSrc: "/HP.jpg",
      imgAlt: "HP Certificate",
      id: "hp-cert",
    },
    {
      title: "Graphic Design with Photoshop",
      description: "Mindluster",
      imgSrc: "/graphic.jpeg",
      imgAlt: "Graphic Design Certificate",
      id: "graphic-cert",
    },
    {
      title: "Vocational Training from ZAGER",
      description: "ZAGER",
      imgSrc: "/vt.jpg",
      imgAlt: "VT Certificate",
      id: "vt-cert",
    },
    
    {
      title: "Internship from Unstop Academy",
      description: "Unstop",
      imgSrc: "/Unstop.jpg",
      imgAlt: "Internship Certificate",
      id: "unstop-cert",
    },
  ];

  const [activeImage, setActiveImage] = useState(null);

  const openImage = (imgSrc, imgAlt) => {
    setActiveImage({ src: imgSrc, alt: imgAlt });
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  return (
    <div name="Certifications" className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">
        Certifications
      </h1>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white p-6 rounded-3xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{cert.title}</h2>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
            <button
              onClick={() => openImage(cert.imgSrc, cert.imgAlt)}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
          onClick={closeImage}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
