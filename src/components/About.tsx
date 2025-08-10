import React from 'react';
import { Brain, Shield, Database, Code, Palette, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Brain, title: 'AI & ML Expert', desc: 'Specialized in LLMs and Prompt Engineering' },
    { icon: Shield, title: 'Cybersecurity', desc: 'Certified by Deloitte with cloud expertise' },
    { icon: Database, title: 'Data Analysis', desc: 'Python, SQL, and visualization tools' },
    { icon: Code, title: 'Full-Stack Dev', desc: 'React, Node.js, Python, and more' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Modern, responsive web applications' },
    { icon: BookOpen, title: 'Published Author', desc: 'SSRN research publications' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Versatile developer specializing in Machine Learning, Prompt Engineering, and Generative AI 
            with hands-on experience in full-stack application development. Certified by OpenAI, Google Cloud, 
            and Deloitte, with proven skills in building secure, scalable, and AI-integrated platforms. 
            SSRN-published author with a passion for solving real-world problems using cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Current Status</h3>
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              🟢 Open to Work
            </div>
            <p className="text-gray-300 mt-4 text-lg">
              Seeking opportunities as Machine Learning Engineer, AI Engineer, Prompt Engineer, 
              Cyber Security Engineer, and Full-stack Developer
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Beyond Tech</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Chess enthusiast | Guitar & Piano player — building creativity, focus, and strategic thinking 
            through music and games. Part-Time Paleontology Researcher contributing to academic knowledge 
            and scientific understanding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;