import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lavender border-t border-lavender/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-peach">
                Sawari Jamgaonkar
              </div>
              <p className="text-pink leading-relaxed">
                AI Engineer passionate about creating innovative solutions and exploring the intersection of technology and creativity. With a focus on machine learning and natural language processing, I strive to build intelligent systems that enhance productivity and deliver engaging
                and meaningful user experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-pink hover:text-peach transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple">Get In Touch</h3>
              <div className="space-y-2 text-pink">
                <p>sawari.jamgaonkar18@gmail.com</p>
                <p>+91-8180846662</p>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-lavender/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-pink">
                <span>Made with</span>
                <Heart size={16} className="text-peach" />
                <span>and</span>
                <Code size={16} className="text-purple" />
                <span>powered by</span>
                <Coffee size={16} className="text-peach" />
              </div>

              <div className="text-pink text-sm">
                © {currentYear} Sawari Jamgaonkar. All rights reserved.
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-pink text-sm">
                Built with smartwork not hardwork (React, TypeScript, and Tailwind CSS and AI)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;