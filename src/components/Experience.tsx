import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      title: 'R.C.PATEL JR.COLLEGE',
      role: 'Student',
      period: 'Jul 2023 - May 2025',
      description: 'Focused on foundational studies while building expertise in technology and research.',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      title: 'SSRN Published Author',
      description: 'Published research papers contributing to academic knowledge in paleontology.',
      date: '2024'
    },
    {
      title: 'Multiple AI Certifications',
      description: 'Achieved certifications from Columbia+, DeepLearning.AI, Google Cloud, and Deloitte.',
      date: '2025'
    },
    {
      title: 'Full-Stack Portfolio',
      description: 'Developed multiple projects showcasing expertise in modern web technologies.',
      date: '2024-2025'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building expertise through continuous learning and practical application
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.period}
                        </div>
                      </div>
                      <p className="text-blue-400 font-medium mb-2">{item.role}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-purple-400" />
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Looking Forward</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Ready to bring my passion for AI, machine learning, and full-stack development 
              to innovative projects and collaborative teams. Let's build the future together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;