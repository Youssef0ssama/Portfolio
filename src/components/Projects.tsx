import { Github, ShoppingBag, Home, Tv, Figma } from "lucide-react";
import adidasImage from "../assets/images/adidas.jpg"; // Adjust the path as needed
import airbnbImage from "../assets/images/airbnb.png"; // Adjust the path as needed
import netflixImage from "../assets/images/icon.png"; // Adjust the path as needed

const Projects = () => {
  const projects = [
    {
      title: "Addidas E-Commerce Website",
      description:
        "Web project serves as a homage and innovative reinterpretation, offering an immersive experience similar to Adidas website.",
      icon: ShoppingBag,
      image: adidasImage, // Use the imported image
      technologies: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
      github: "https://github.com/Youssef0ssama/Addidas-clone",

      features: [
        "Immersive Experience",
        "Product Showcase",
        "Responsive Design",
        "E-Commerce Functionality",
      ],
    },
    {
      title: "Airbnb Mobile App Design",
      description:
        "Designed and developed a responsive Airbnb UI project on Figma with a user-centric approach.",
      icon: Home,
      image: airbnbImage, // Use the imported image
      technologies: ["Figma", "UI/UX Design"],
      external:
        "https://www.figma.com/community/file/1346919958313795499/airbnb",
      features: [
        "Mobile App Design",
        "Responsive UI",
        "User-Centric Approach",
        "Prototyping",
      ],
    },
    {
      title: "Netflix Website",
      description:
        "Created a Netflix clone website replicating the interface for sign in, login & subscription. Included ERD, Use case, Data Flow, Test case.",
      icon: Tv,
      image: netflixImage, // Use the imported image
      technologies: ["HTML", "CSS", "Figma", "UI Design"],
      github: "https://github.com/Youssef0ssama/Netflix-clone",
      external:
        "https://www.figma.com/community/file/1346917923422643114/netflix",
      features: [
        "Sign In Interface",
        "Subscription Flow",
        "ERD Diagrams",
        "Use Case Diagrams",
      ],
    },
  ];

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
                {/* Project Header */}
                {/* <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <project.icon size={24} />
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Figma size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div> */}
                <div
                  className="relative h-48 text-white overflow-hidden"
                  style={{
                    backgroundImage: `url('${project.image}`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50"></div>

                  {/* Content on top */}
                  <div className="relative p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <project.icon size={24} />
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                        >
                          <Figma size={18} />
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-blue-100">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
