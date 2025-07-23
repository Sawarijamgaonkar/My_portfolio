

import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Path to your PDF file in the public folder
    link.download = 'Sawari_Jamgaonkar_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink/20 via-lavender to-mint/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pink animate-fade-in">
            Sawari Jamgaonkar
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-pink mb-8 animate-fade-in-delay-1">
            AI ML Engineer and Data Analyst
          </h2>
          
          <p className="text-lg md:text-xl text-pink mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Passionate 4th year student passionate about learning new technologies. 
            I love building innovative solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-3">
            <button 
              onClick={scrollToProjects}
              className="border-2 border-pink text-pink hover:bg-pink hover:text-lavender px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="border-2 border-pink text-pink hover:bg-pink hover:text-lavender px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-delay-4">
            <a 
              href="https://github.com/Sawarijamgaonkar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-peach transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/sawarijamgaonkar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:text-peach transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sawarijamgaonkar@example.com" 
              className="text-purple hover:text-peach transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple hover:text-peach transition-colors duration-300 animate-bounce"
          >
            
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
