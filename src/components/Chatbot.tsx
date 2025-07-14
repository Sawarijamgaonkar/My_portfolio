import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sawari's AI assistant. I can help you learn more about her skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! I am Sawari Jamgaonkar, a dedicated and passionate Computer Science professional. I am pleased to assist you with any inquiries about my background, skills, and experiences. How may I help you today?",
      "Greetings! This is Sawari's AI assistant. I am here to provide you with comprehensive and formal information about Sawari's professional journey and expertise."
    ],
    intro: [
      "Sawari Jamgaonkar is a motivated and detail-oriented Computer Science student with a strong foundation in artificial intelligence, machine learning, and data analytics. She is committed to leveraging technology to solve real-world problems and create impactful solutions.",
      "With a passion for continuous learning and innovation, Sawari has developed a diverse skill set that spans software development, data science, and AI research."
    ],
    skills: [
      "Sawari possesses a robust technical skill set including Power BI (90%), MS Excel (95%), Tableau (80%), Qlik (80%), RAG (60%), Machine Learning (95%), Natural Language Processing (90%), Computer Vision (95%), Java (95%), Python (80%), HTML (90%), MySQL (85%), Firebase (70%), CSS (90%), JavaScript (80%), REST APIs (90%), Git (90%), Docker (50%), AWS (55%), Figma (95%), Spline (75%), and Linux (70%). She is actively expanding her expertise in emerging technologies such as Kubernetes, GraphQL, and Rust.",
      "Her proficiency encompasses AI and ML engineering, data analytics, frontend development, and DevOps practices, supported by a continuous commitment to staying abreast of industry advancements."
    ],
    projects: [
      "Sawari has contributed to several impactful projects, including an E-Commerce Platform integrated with Google Reviews API, a collaborative task management platform named Sync_Space, an Accident Analytics Dashboard, a MERN stack combined with AI model benchmarking platform, an AI Chatbot platform utilizing Gemini API, and her personal Portfolio Website.",
      "These projects demonstrate her ability to design, develop, and deploy scalable and user-centric applications, showcasing both technical acumen and creative problem-solving skills."
    ],
    experience: [
      "Currently a 4th-year Computer Science student, Sawari has gained practical experience in AI and ML engineering, data science, and software development. She has a proven track record of building responsive web applications, designing machine learning algorithms, and architecting scalable data pipelines.",
      "Her professional journey is characterized by a dedication to continuous learning, collaboration, and contributing to open-source projects, reflecting a strong work ethic and passion for technology."
    ],
    education: [
      "Sawari is pursuing a Bachelor's degree in Computer Science, where she has excelled academically and actively participated in technology communities and projects.",
      "Her academic focus includes artificial intelligence, software development, and data analytics, preparing her for a successful career in the tech industry."
    ],
    contact: [
      "For professional inquiries, Sawari can be reached through her portfolio website or GitHub profile. She welcomes opportunities for internships, collaborations, and full-time positions.",
      "All relevant contact information and social media links are available on her portfolio website, ensuring easy and professional communication."
    ],
    personal: [
      "Sawari approaches tough times with resilience and a positive mindset, viewing challenges as opportunities for growth and learning.",
      "When faced with stress and heavy workloads, Sawari prioritizes effective time management, breaks tasks into manageable parts, and maintains clear communication with her team to ensure productivity and well-being.",
      "She believes in maintaining a healthy work-life balance by incorporating regular breaks, physical activity, and mindfulness practices to manage stress effectively.",
      "Sawari is adaptable and remains calm under pressure, using problem-solving skills and a proactive attitude to navigate complex situations successfully.",
      "Her commitment to continuous self-improvement and learning helps her stay motivated and overcome obstacles in both professional and personal contexts."
    ],
    default: [
      "Thank you for your question. While I strive to provide comprehensive information about Sawari's professional background, please feel free to reach out directly for more specific details.",
      "I am here to assist with any inquiries regarding Sawari's skills, projects, and experience. For detailed discussions, contacting Sawari directly is recommended.",
      "Sawari is responsive and approachable. You may send a message through the contact form on her portfolio website for prompt replies."
    ]
  };
 
  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    
    if (message.includes('experience') || message.includes('job') || message.includes('career')) {
      return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    }
    
    if (message.includes('education') || message.includes('school') || message.includes('university') || message.includes('study')) {
      return botResponses.education[Math.floor(Math.random() * botResponses.education.length)];
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    if (message.includes('stress') || message.includes('workload') || message.includes('pressure') || message.includes('tough times') || message.includes('handle') || message.includes('deal')) {
      return botResponses.personal[Math.floor(Math.random() * botResponses.personal.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-peach to-purple hover:from-purple hover:to-peach text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-14' : 'w-80 h-96'
    }`}>
            <div className="bg-lavender/95 backdrop-blur-sm rounded-xl border border-peach/50 shadow-2xl h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-peach/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-peach to-purple rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Sawari's Assistant</h3>
                    <p className="text-peach text-xs">Online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-pink hover:text-peach transition-colors duration-200"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-pink hover:text-peach transition-colors duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                    ? 'bg-peach' 
                    : 'bg-gradient-to-r from-peach to-purple'
                }`}>
                      {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div className={`px-3 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-peach text-white'
                        : 'bg-lavender/50 text-pink'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Bot size={12} />
                    </div>
                    <div className="bg-slate-700/50 px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Sawari..."
                  className="flex-1 bg-lavender/50 text-pink placeholder-peach px-3 py-2 rounded-lg border border-peach/50 focus:outline-none focus:border-peach text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-peach to-purple hover:from-purple hover:to-peach disabled:from-peach/50 disabled:to-purple/50 text-white p-2 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;