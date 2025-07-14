import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "AI- ML Engineering",
      description: "Proficient in modern web technologies and models"
    },
    {
      icon: <Palette size={24} />,
      title: "Software Development", 
      description: "Creating smaller, efficient, and scalable applications"
    },
    {
      icon: <Zap size={24} />,
      title: "Problem Solving",
      description: "Analytical thinking and innovative solution development"
    },
    {
      icon: <Heart size={24} />,
      title: "Passion for Learning",
      description: "Constantly exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-lavender/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
              About Me
            </h2>
            <div className="w-24 h-1 bg-peach mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-pink">
                <p className="text-xl leading-relaxed mb-6">
                  Hello! I'm <span className="text-peach font-semibold">Sawari Jamgaonkar</span>, a 4th-year Computer Science student 
                  with a love for creating tools which help the people around. My journey in technology began with curiosity 
                  and has evolved into a deep passion for building innovative solutions in AI.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  I specialize in AI and ML Engineering, data science and data analytics, combining technical expertise with creative 
                  problem-solving. Whether it's building responsive web applications, designing algorithms for machine learning, 
                  or architecting scalable data preprocessing and relevant data science, I approach each project with dedication 
                  and attention to detail with an aim to learn something new everyday.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or mentoring juniors. I believe in the power of technology to create positive change and 
                  I'm excited to bring that vision to life through meaningful work.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-peach/20 text-peach rounded-full text-sm">Available for Internships</span>
                <span className="px-4 py-2 bg-peach/20 text-peach rounded-full text-sm">Open Source Contributor</span>
                <span className="px-4 py-2 bg-peach/20 text-peach rounded-full text-sm">Team Player</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-lavender/50 p-6 rounded-xl border border-peach/50 hover:border-peach/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-peach/10"
                >
                  <div className="text-peach mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-purple mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-pink text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;