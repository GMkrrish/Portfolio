import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'badgujardhruv3@gmail.com',
      link: 'mailto:badgujardhruv3@gmail.com',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'dhruv-badgujar-a6b617372',
      link: 'https://linkedin.com/in/dhruv-badgujar-a6b617372',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Shirpur, Maharashtra, India',
      link: null,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3 text-blue-400" />
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center group">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-gray-300">{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Open to Opportunities</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Machine Learning Engineer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">AI Engineer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Prompt Engineer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Cyber Security Engineer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Full-stack Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="w-8 h-8 mr-3 text-purple-400" />
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Let's discuss a project..."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Looking Forward to Hearing from You!</h3>
            <p className="text-gray-300 text-lg">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'm always excited to meet new people and explore innovative ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;