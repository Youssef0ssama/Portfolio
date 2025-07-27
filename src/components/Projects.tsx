import { Github, Globe } from "lucide-react";
import { projects } from "../mock";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work demonstrating frontend development
              skills, modern technologies, and creative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-white/20"
              >
                <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden h-full">
                  {/* Image at the top */}
                  <div className="w-full h-64 bg-white flex items-center justify-center rounded-t-2xl overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-t-2xl bg-blue-500/20 shadow-lg shadow-blue-500/30"></div>
                  </div>
                  {/* Card content below image */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-2 bg-blue-100 rounded-lg text-blue-700">
                        <project.icon size={24} />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3 mt-auto">
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/80 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-blue-600 flex items-center space-x-1 text-sm font-semibold"
                          aria-label="View Live"
                        >
                          <Globe size={18} />
                          <span>Live</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/80 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-slate-700 flex items-center space-x-1 text-sm font-semibold"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-8">
              Want to see more of my work or discuss a project?
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
