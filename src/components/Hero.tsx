import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { personalInfo } from "../mock";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Junior Frontend Developer"; // Changed to match CV objective

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 md:basis-1/2 w-full text-center md:text-left order-2 md:order-1">
            {/* Main Title - Changed name to Youssef */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {personalInfo.firstName}
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="text-2xl md:text-3xl text-slate-600 mb-8 h-12">
              <span className="border-r-2 border-blue-500 animate-pulse">
                {displayedText}
              </span>
            </div>

            {/* Description - Updated to match CV objective */}
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl md:max-w-md leading-relaxed mx-auto md:mx-0">
              {personalInfo.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/drive/folders/1tiPNkJR5ufe29iL1Dy43sUsaS-UjsoQ2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText size={20} />
                My Resume
              </a>
            </div>

            {/* Contact Links - Updated to match CV */}
            <div className="flex justify-center md:justify-start space-x-6 mb-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Right: Profile Image (Square) */}
          <div className="flex-1 md:basis-1/2 w-full flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-white overflow-hidden shadow-2xl border-4 border-blue-100">
              <img
                src={personalInfo.profilePic}
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
