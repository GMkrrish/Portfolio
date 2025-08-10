import React, { useState } from 'react';
import { Menu, X, FileText, Mail, Linkedin, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-white">
            Dhruv Badgujar
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'skills', 'experience', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/dhruv-badgujar-a6b617372"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:badgujardhruv3@gmail.com"
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {['about', 'skills', 'experience', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 capitalize text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://linkedin.com/in/dhruv-badgujar-a6b617372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:badgujardhruv3@gmail.com"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;