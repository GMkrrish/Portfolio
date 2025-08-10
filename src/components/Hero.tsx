import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+Cjwvdz4KPC9nPgo8L3N2Zz4=')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
            DB
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dhruv Badgujar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aspiring LLM & Machine Learning Engineer | Prompt Engineering | Generative AI | 
              Data Analyst | Full-Stack Developer | SSRN Published Author
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Versatile developer specializing in Machine Learning, Prompt Engineering, and Generative AI 
              with hands-on experience in full-stack application development. Certified by OpenAI, Google Cloud, 
              and Deloitte, with proven skills in building secure, scalable, and AI-integrated platforms.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            
            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              
              Download CV
            </button>
          </div>
          
          <div className="text-center text-gray-400">
            📍 Shirpur, Maharashtra, India
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;