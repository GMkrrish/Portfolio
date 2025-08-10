import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Dhruv Badgujar</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Aspiring AI/ML Engineer passionate about building innovative solutions 
              that make a difference in the world through technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center text-gray-400">
              <Code className="w-4 h-4 mr-2" />
              <span>Built with React & Tailwind CSS</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Coffee className="w-4 h-4 mr-2" />
              <span>Powered by passion & caffeine</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span>Made with love from India</span>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-500 text-sm mb-4 sm:mb-0">
                © 2025 Dhruv Badgujar. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <button className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </button>
                <button className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;