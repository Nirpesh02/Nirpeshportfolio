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
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-yellow-100">
      <section id="projects" className="max-w-7xl mx-auto py-24 px-6">
        {/* Section Title */}
        <Motion.h3
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </Motion.h3>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="relative bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 p-6 rounded-3xl shadow-2xl cursor-pointer overflow-hidden hover:shadow-purple-400 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 opacity-20"></div>
              </div>

              <h4 className="font-bold text-2xl text-center text-purple-700 mb-3">
                {project.title}
              </h4>
              <p className="text-gray-700 text-center text-base md:text-lg mb-4">
                {project.desc}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="block mx-auto px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                View Details
              </button>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-start pt-20 z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full mx-4 p-8 relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-red-500"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              {/* Project Title */}
              <h4 className="text-3xl font-bold mb-4 text-purple-700">
                {selectedProject.title}
              </h4>

              {/* Large Main Image with Zoom */}
              <Motion.div className="w-full mb-6 rounded-xl overflow-hidden shadow-lg">
                <Motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120 }}
                />
              </Motion.div>

              {/* Project Details */}
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>

              {/* Technologies */}
              <div className="mb-4">
                <h5 className="font-semibold mb-2">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Project Button */}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Visit Project
                </a>
              )}
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
