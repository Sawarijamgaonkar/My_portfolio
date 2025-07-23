import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper to render error message for a field
  const renderError = (field: string) => {
    if (formErrors[field]) {
      return <p className="text-red-500 text-sm mt-1">{formErrors[field]}</p>;
    }
    return null;
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // src/components/Contact.tsx

// Find your handleSubmit function (around line 60)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  setIsSubmitting(true);

  // --- THIS IS THE FIX ---
  // The API URL now comes from your environment variables
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    // The fetch URL now correctly points to your Render backend
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      console.error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sawari.jamgaonkar18@gmail.com',
      link: 'mailto:sawari.jamgaonkar18@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 8180846662',
      link: 'tel:+918180846662'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Mharashtra, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Sawarijamgaonkar',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sawari-jamgaonkar-293399250/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-lavender/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
              Get In Touch
            </h2>
            <p className="text-xl text-pink max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
            <div className="w-24 h-1 bg-peach mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-purple mb-6">
                  Let's Connect
                </h3>
                <p className="text-pink mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello,
                  I'd love to hear from you. I'm currently seeking internship opportunities and
                  always interested in working on exciting projects.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-lavender/50 backdrop-blur-sm rounded-xl border border-peach/50 hover:border-peach/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-peach/10"
                  >
                    <div className="text-peach mr-4">{info.icon}</div>
                    <div>
                      <h4 className="text-purple font-medium">{info.title}</h4>
                      <p className="text-pink">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-purple mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-lavender/50 rounded-lg text-pink transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:text-peach"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                 {/* Input fields remain the same... */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pink mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-lavender/50 border border-peach/50 rounded-lg text-purple placeholder-peach focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-all duration-300"
                      placeholder="Your name"
                    />
                    {renderError('name')}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pink mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-lavender/50 border border-peach/50 rounded-lg text-purple placeholder-peach focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    {renderError('email')}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-pink mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-lavender/50 border border-peach/50 rounded-lg text-purple placeholder-peach focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-all duration-300"
                    placeholder="What's this about?"
                  />
                  {renderError('subject')}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pink mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-lavender/50 border border-peach/50 rounded-lg text-purple placeholder-peach focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {renderError('message')}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-peach to-purple hover:from-purple hover:to-peach text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success Message Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-lavender/95 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <CheckCircle size={48} className="text-peach mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-purple mb-2">Message Sent!</h3>
                    <p className="text-pink">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
