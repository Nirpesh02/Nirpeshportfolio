import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/images/project1.jpg",
      desc: "A modern, responsive portfolio website showcasing skills, projects, and contact info with interactive UI elements.",
      details:
        "Detailed description about the Portfolio Website project, including challenges, approach, and features.",
      tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      image: "/images/project2.jpg",
      desc: "A full-featured online store with smooth navigation, product filtering, and secure payment integration.",
      details:
        "Detailed description about the E-Commerce Platform project, including payment integration and responsive design.",
      tech: ["React", "Redux", "TailwindCSS", "Stripe"],
      link: "#",
    },
    {
      title: "Blog Platform",
      image: "/images/project3.jpg",
      desc: "A stylish blogging website with dark mode, search functionality, and dynamic content display using React.",
      details:
        "Detailed description about the Blog Platform project, including dark mode, search, and CMS integration.",
      tech: ["React", "TailwindCSS", "React Router", "Contentful"],
      link: "#",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50"
    >
      {/* Title */}
      <Motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects
      </Motion.h3>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Motion.div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Image */}
            <div className="h-48 overflow-hidden relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-purple-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                {project.title}
              </h4>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-transform duration-300 hover:scale-110 hover:from-pink-500 hover:to-purple-600"
              >
                View Details
              </button>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-start pt-20 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-red-500"
              >
                &times;
              </button>

              <h4 className="text-3xl font-bold mb-4 text-gray-800">
                {selectedProject.title}
              </h4>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <p className="text-gray-700 mb-4">{selectedProject.details}</p>

              <div className="mb-6">
                <h5 className="font-semibold mb-2">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Visit Project
                </a>
              )}
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
