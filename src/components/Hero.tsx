import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

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

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image - Changed initial to Y */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              Y
            </div>
          </div>

          {/* Main Title - Changed name to Youssef */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Youssef
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-3xl text-slate-600 mb-8 h-12">
            <span className="border-r-2 border-blue-500 animate-pulse">
              {displayedText}
            </span>
          </div>

          {/* Description - Updated to match CV objective */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A junior frontend developer eager to apply theoretical knowledge to
            real-world projects. Passionate about technology and aiming to
            contribute analytical skills and creativity to innovative solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Contact Links - Updated to match CV */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#" // Placeholder since CV only says "Github"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="#" // Placeholder since CV only says "Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:youssefossama210@gmail.com" // Updated email
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+2001061836090" // Updated phone number
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
