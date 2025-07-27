import { highlights, aboutStats, aboutTechStack } from "../mock";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                Passionate Frontend Developer
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a junior frontend developer currently pursuing my Computer
                Science degree at Alexandria University. Eager to apply
                theoretical knowledge from coursework to real-world projects, I
                aim to contribute analytical skills, creativity, and passion for
                technology to innovative solutions.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                My focus is on creating immersive user experiences with modern
                frontend technologies while continuously expanding my skills.
                I'm passionate about UI/UX design principles and building
                responsive web applications.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {/* Updated to match CV skills */}
                {aboutTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section - Updated to match CV */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
