import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Zap, Users } from 'lucide-react';
import projImg1 from "/sync_space_login.png";
import projImg2 from "/portfolio.png";
import projImg3 from "/chatbot.png";
import projImg4 from "/mern.jpg";
import projImg5 from "/frontend_web.png";
import projImg6 from "/sheet2.png";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform  / One web page',
      category: 'frontend',
      description: 'A one page e-commerce platform built with HTML, CSS, JS, it is connected with google reviews API to view and write the platfrm reviews of the actual platform of Jamgaonkar Silk and sarees .',
      image: projImg5,
      technologies: ['HTML', 'CSS', 'JS', 'Git'],
      features: ['Home', 'About Us', 'Product', 'Reviews', 'Contact Us'],
      liveUrl: 'https://sawarijamgaonkar.github.io/Shop-Website/SHOP.html',
      githubUrl: 'https://github.com/Sawarijamgaonkar/Shop-Website',
      status: 'completed'
    },
    {
      title: 'Sync_Space: Collabrative work and time management platform',
      category: 'fullstack',
      description: 'A modern task management application with all types of compilers, real-time updates, and collaborative features. Built with html, css, js, and integrated with Firebase.',
      image: projImg1,
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      features: ['Make notes', 'Real-time Updates', 'Team Collaboration', 'Progress Tracking'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Sawarijamgaonkar/sync_space',
      status: 'in-progress'
    },
    {
      title: 'Accident Analytics Dashboard',
      category: 'data-analytics',
      description: 'An extensive insight generated analytics dashboard that visualizes road patterns and causes like weather, and type of vehicles, drink drive,etc. Interlinked data from multiple sources to provide a comprehensive view of accident trends.',
      image: projImg6,
      technologies: ['Qlik', 'Python', 'Excel'],
      features: ['Interactive Charts', 'High Accident zone predictions', 'Data Export', 'Responsive Design'],
      liveUrl: 'https://workdrive.zohoexternal.com/writer/open/00k0lca3bd303f7744c439a68d9940828288e?authId=%7B%22linkId%22%3A%225k2wApawdsO-LYmlU%22%7D',
      githubUrl: 'https://github.com/Sawarijamgaonkar/Qlik_Project',
      status: 'completed'
    },
    {
      title: 'MERN X AI: Model Benchmarking Platform',
      category: 'fullstack',
      description: 'Fast API built using pyhton and basics like confusion matrix, accuracy, etc where in the platform takes input model files like pikle files, tensor files, etc and tell how good your model\'s performance is.',
      image: projImg4,
      technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      features: ['RESTful Architecture', 'Real-time Notifications', 'Authentication', 'Rate Limiting'],
      liveUrl: 'https://ml-analyzer.vercel.app/',
      githubUrl: 'https://github.com/Mehulsingh1010/DeepMetricss',
      status: 'completed'
    },
    {
      title: 'Nexus AI Chatbot',
      category: 'fullstack',
      description: 'An intelligent chatbot platform that uses large language model to provide customer support. Built with Python, streamlit, and integrated with Gemini API.',
      image: projImg3,
      technologies: ['Python', 'Streamlit', 'Gemini API',],
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Analytics Dashboard'],
      liveUrl: 'https://genaichatbot-5t4u8kepdk7abgmsvfbww3.streamlit.app/',
      githubUrl: 'https://github.com/Sawarijamgaonkar/gen_ai_chatbot',
      status: 'completed'
    },
    {
      title: 'Portfolio Website',
      category: 'fullstack',
      description: 'My own portfolio platform that allows users to check my resume and portfolio, view all my skills, projects and profiles.',
      image: projImg2,
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      features: ['Home', 'About', 'Experience and Education', 'Projects', 'Contact'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'in-progress'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Code size={16} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Zap size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Eye size={16} /> },
    { id: 'data-analytics', label: 'Data-Analytics', icon: <Users size={16} /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-lavender">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
              Featured Projects
            </h2>
            <p className="text-xl text-pink max-w-2xl mx-auto">
              A showcase of my recent work and technical capabilities
            </p>
            <div className="w-24 h-1 bg-peach mx-auto rounded-full mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-peach to-purple text-white shadow-lg'
                    : 'bg-lavender/50 text-pink hover:text-purple hover:bg-lavender/70 border border-peach/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-lavender/50 rounded-xl overflow-hidden border border-peach/50 hover:border-peach/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-peach/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-pink mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-peach mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-lavender/50 text-pink rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-peach mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-pink text-xs flex items-start">
                          <span className="text-peach mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-peach to-purple hover:from-purple hover:to-peach text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 border border-peach text-pink hover:text-purple hover:border-purple px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-pink mb-6">
              Want to see more of my work?
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-3 bg-lavender/50 border border-peach/50 text-pink hover:text-purple hover:border-purple rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
