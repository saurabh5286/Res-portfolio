import React, { useState } from 'react';

function Certificates() {
  const certificates = [
    { title: "Programming in JAVA", description: "Mindluster", imgSrc: "/Java.jpg", imgAlt: "Java Certificate", id: "java-cert" },
    { title: "JavaScript Fundamentals", description: "GreatStack", imgSrc: "/JS.jpg", imgAlt: "JavaScript Certificate", id: "javascript-cert" },
    { title: "HTML & CSS Practical Learning", description: "Mindluster", imgSrc: "/Html.jpg", imgAlt: "HTML CSS Certificate", id: "html-css-cert" },
    { title: "MERN Stack Development", description: "Mindluster", imgSrc: "/mern.jpg", imgAlt: "MERN Stack Certificate", id: "mern-stack-cert" },
    { title: "Web Development", description: "Web Dev Training", imgSrc: "/Web.jpg", imgAlt: "Web Development Certificate", id: "web-dev-cert" },
    { title: "React", description: "GreatStack", imgSrc: "/React.jpg", imgAlt: "React Certificate", id: "react-cert" },
    { title: "AI for Beginners", description: "HP Life", imgSrc: "/HP.jpg", imgAlt: "AI Certificate", id: "hp-cert" },
    { title: "Graphic Design with Photoshop", description: "Mindluster", imgSrc: "/graphic.jpeg", imgAlt: "Graphic Design Certificate", id: "graphic-cert" },
    { title: "Vocational Training from ZAGER", description: "ZAGER", imgSrc: "/vt.jpg", imgAlt: "VT Certificate", id: "vt-cert" },
    { title: "Internship from Unstop Academy", description: "Unstop", imgSrc: "/Unstop.jpg", imgAlt: "Internship Certificate", id: "unstop-cert" },
    { title: "Effective Resume and Cover Letter", description: "TCS", imgSrc: "/tcs.png", imgAlt: "TCS Certificate", id: "tcs-cert" },
    { title: "DevOps", description: "Simplilearn", imgSrc: "/DevOps.png", imgAlt: "DevOps Certificate", id: "devops-cert" },
    { title: "Azure Fundamentals", description: "Simplilearn", imgSrc: "/Azur.png", imgAlt: "Azure Certificate", id: "azur-cert" },
  ];

  const [activeImage, setActiveImage] = useState(null);

  const openImage = (imgSrc, imgAlt) => setActiveImage({ src: imgSrc, alt: imgAlt });
  const closeImage = () => setActiveImage(null);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-12">
          Certifications
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>

              <button
                onClick={() => openImage(cert.imgSrc, cert.imgAlt)}
                className="mt-6 inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-5 rounded-full font-medium text-sm hover:from-green-600 hover:to-teal-700 transition-all duration-300"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={closeImage}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 md:mx-8 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImage}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-md transition-opacity duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
