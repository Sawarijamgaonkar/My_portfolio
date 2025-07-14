import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Computer Science with specialization in Artificial Intelligence and Machine Learning ',
      organization: 'Vellore Institute of Technolody, Bhopal Campus',
      location: 'Bhopal, Madhya Pradesh, India',
      period: '2022 - 2026',
      description: 'Major in Computer Science with focus on Software Engineering and AI. Relevant coursework includes Data Structures, Algorithms, Database Systems, and Machine Learning.',
      achievements: [
        'Patent holder for STEREO VISION-BASED FRUIT COUNTING DEVICE, 2025',
        'GPA: 8.9/10.0',
        'President of FeedBox College Club',
        'Joint secretary of Igniters Club'
      ],
      icon: <GraduationCap size={20} />
    },
    {
      type: 'work',
      title: 'Qlik sense Data Analytics Intern',
      organization: 'Qlik Sense Solutions',
      location: 'Remote',
      period: '17.04.2024-24.06.2024',
      description: 'Worked on data visualization projects using Qlik Sense. Developed interactive dashboards and reports to help clients make data-driven decisions.',
      achievements: [
        'Created 5+ interactive dashboards',
        'Improved data processing speed by 30%',
        'Received positive feedback from mentors)'
      ],
      icon: <Briefcase size={20} />
    },
    {
      type: 'work',
      title: 'VodaPhone India Power Bi Traniee Internship',
      organization: 'AICTE',
      location: 'Remote',
      period: '25.06.2024-18.07.2024',
      description: 'Participated in a Power BI training program organized by AICTE. Gained hands-on experience in data visualization and business intelligence using Power BI.',
      achievements: [
        'Completed 3 projects using Power BI',
        'Developed skills in data modeling and DAX',
        'Built interactive reports for real world datasets'
      ],
      icon: <Briefcase size={20} />
    },
    {
      type: 'education',
      title: 'High School(XII)',
      organization: 'Takshila School (CBSE)',
      location: 'Ahmednagar, Maharashtra, India', 
      period: '2021 - 2022',
      description: 'Completed Higher Secondary Education with a focus on Science and Mathematics. Achieved high marks in Information Practices, and a total score of 83% in CBSE board exams.',
      achievements: [
        'Scored 90% in Information Practices(IP)',
        'The covid batch of students who took online classes and offline exams'
      ],
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-lavender/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
              Experience & Education
            </h2>
            <p className="text-xl text-pink max-w-2xl mx-auto">
              My academic journey and professional experience in technology
            </p>
            <div className="w-24 h-1 bg-peach mx-auto rounded-full mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-peach to-purple"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-lavender border-4 border-peach rounded-full flex items-center justify-center z-10">
                  <div className="text-peach">
                    {exp.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-lavender/50 backdrop-blur-sm rounded-xl p-6 border border-peach/50 hover:border-peach/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-peach/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-purple mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-peach font-medium mb-2">
                          {exp.organization}
                        </h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'education' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {exp.type === 'education' ? 'Education' : 'Work'}
                      </span>
                    </div>

                    <div className="flex items-center text-pink text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-pink mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-peach mb-2">
                        <Award size={16} className="mr-2" />
                        <span className="font-medium text-sm">Key Achievements</span>
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-pink text-sm flex items-start">
                            <span className="text-peach mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;