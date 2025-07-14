import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI-ML & Data Analytics specific skills: ",
      skills: [
        { name: "Power Bi", level: 90 },
        { name: "MS Excel", level: 95 },
        { name: "Tableau", level: 80 },
        { name: "Qlik", level: 80 },
        { name: "RAG", level: 60 },
        { name: "Machine Learning", level: 95 },
        { name: "NLP", level: 90 },
        { name: "Computer Vision", level: 95 }
      ]
    },
    {
      title: "Frontend and DeveOps skills: ", 
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 80 },
        { name: "HTML", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "FireBase", level: 70 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 50 },
        { name: "AWS", level: 55 },
        { name: "Figma", level: 95 },
        { name: "Spline", level: 75 },
        { name: "Linux", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-lavender">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
              Skills & Technologies
            </h2>
            <p className="text-xl text-pink max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
            <div className="w-24 h-1 bg-peach mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-lavender/50 rounded-xl p-6 border border-peach/50 hover:border-peach/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-pink font-medium">{skill.name}</span>
                        <span className="text-peach text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-lavender rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-peach to-purple h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-lavender/50 rounded-xl p-8 border border-peach/50">
              <h3 className="text-2xl font-semibold text-purple mb-4">
                Always Learning
              </h3>
              <p className="text-pink mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
                RAG, cloud architecture, and advanced data anlytics. In future I will be studying:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-peach/20 border border-peach/50 text-peach rounded-full text-sm">
                  More about Machine Learning
                </span>
                <span className="px-4 py-2 bg-peach/20 border border-peach/50 text-peach rounded-full text-sm">
                  Kubernetes
                </span>
                <span className="px-4 py-2 bg-peach/20 border border-peach/50 text-peach rounded-full text-sm">
                  GraphQL
                </span>
                <span className="px-4 py-2 bg-peach/20 border border-peach/50 text-peach rounded-full text-sm">
                  Rust
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;