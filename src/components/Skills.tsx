import React from 'react';
import { Brain, Shield, Database, Monitor, Code, Search } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & Data Analysis',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Generative AI & Large Language Models (LLMs)',
        'Prompt Engineering (Columbia+ Certified)',
        'Agentic AI | LangChain | Hugging Face Transformers',
        'Data Analysis with Python & SQL',
        'Jupyter Notebook for Exploratory Analysis',
        'ChatGPT Advanced Course (Simplilearn, 2025)',
        'Data Analyst (Certified by Deloitte)'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Cloud',
      color: 'from-red-500 to-orange-500',
      skills: [
        'Cybersecurity (Certified by Deloitte)',
        'Google Cloud Platform',
        'Google Cloud - Introduction to Generative AI (Certified)',
        'Security Best Practices',
        'Cloud Infrastructure'
      ]
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'SQL & MySQL',
        'SQL, MySQL, phpMyAdmin',
        'Git & GitHub',
        'VS Code & Development Tools',
        'Power BI & Tableau',
        'Google Colab',
        'Jupyter Notebook'
      ]
    },
    {
      icon: Monitor,
      title: 'Back-End Development',
      color: 'from-green-500 to-teal-500',
      skills: [
        'Python (Advanced)',
        'PHP, Node.js',
        'Node.js',
        'Rust (Beginner)',
        'C Programming',
        'RESTful APIs',
        'Server Architecture'
      ]
    },
    {
      icon: Code,
      title: 'Front-End Development',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        'HTML5 & CSS3',
        'HTML, CSS3, JavaScript',
        'React JS',
        'Tailwind CSS',
        'Responsive Design',
        'UI/UX Implementation'
      ]
    },
    {
      icon: Search,
      title: 'Research & Publications',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        'Part-Time Paleontology Researcher',
        'SSRN Published Author',
        'Technical Writing',
        'Research Methodology',
        'Academic Publications'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML, full-stack development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI architectures, 
              quantum computing applications, and next-generation web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;