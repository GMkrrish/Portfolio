import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
   
  {
    title: (
      <a
        href="https://badges.plus.columbia.edu/ade08447-9897-4705-b0ba-525fd43ae818"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prompt Engineering & Programming with OpenAI
      </a>
    ),
    issuer: 'Columbia+',
    date: 'Aug 2025',
    credentialId: 'Verified',
     description: 'Completed Prompt Engineering & Programming with OpenAI, mastering API integration and LLM application development'
  },


    {
      title:( 
        
        <a href="https://learn.deeplearning.ai/accomplishments/91815c5a-69ba-4b68-92da-bf0916650ca5?usp=sharing"
        target='_blank'
        rel="noopener noreferrer"
        >
           'Prompt Engineering For Developers'
        </a>
        
        ),
      issuer: 'DeepLearning.AI',
      date: 'Aug 2025',
      credentialId: 'Verified',
      description: 'Practical prompt engineering for real-world applications',
       credentialurl:'https://learn.deeplearning.ai/accomplishments/91815c5a-69ba-4b68-92da-bf0916650ca5?usp=sharing'
    },
    {
      title:( 
        <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_WkPFRuybw67YnCiMj_1754564218196_completion_certificate.pdf"
        target='_blank'
        rel="noopener noreferrer"
        >
        
        
        'Tata - Cybersecurity Analyst '</a>),
      issuer: 'Tata Consultancy Services',
      date: 'Aug 2025',
      credentialId: 'Ckdq4HKJqqcDPSk39',
      description: 'Foundational understanding of Cybersecurity concepts and applications',
       credentialurl:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_WkPFRuybw67YnCiMj_1754564218196_completion_certificate.pdf'
    },
    {
      title:( 
        <a href='https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MzM4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODU4NTM5NV84OTA5ODAyMTc1MTg3OTM4MjA0My5wbmciLCJ1c2VybmFtZSI6IkRocnV2IEJhZGd1amFyICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8585395_89098021751879382043.png&_branch_match_id=1482967448088189282&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1jepSi8vTSyI9AtNsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwDqE8FzPwAAAA%3D%3D'
         target='_blank'
        rel="noopener noreferrer"
        >
        'ChatGPT Advanced Course'</a>),

      issuer: 'Simplilearn',
      date: 'July 2025',
      credentialId: 'Verified',
      description: 'Advanced ChatGPT usage, automation, and real-world implementation',
      credentialurl:'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MzM4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODU4NTM5NV84OTA5ODAyMTc1MTg3OTM4MjA0My5wbmciLCJ1c2VybmFtZSI6IkRocnV2IEJhZGd1amFyICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8585395_89098021751879382043.png&_branch_match_id=1482967448088189282&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1jepSi8vTSyI9AtNsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwDqE8FzPwAAAA%3D%3D'
    },
    {
      title: ( 
        <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_WkPFRuybw67YnCiMj_1751816805143_completion_certificate.pdf"
        target='_blank'
        rel="noopener noreferrer"
        >'Data Analyst Certification'</a>),
      issuer: 'Deloitte',
      date: '2024',
      credentialId: 'Verified',
      description: 'Comprehensive data analysis skills and business intelligence',
       credentialurl:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_WkPFRuybw67YnCiMj_1751816805143_completion_certificate.pdf'
    },
    {
      title: (<a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_WkPFRuybw67YnCiMj_1751346003759_completion_certificate.pdf"
        target='_blank'
        rel="noopener noreferrer"
        >'Cybersecurity Certification'</a>),
      issuer: 'Deloitte',
      date: '2024',
      credentialId: 'Verified',
      description: 'Security fundamentals and best practices',
       credentialurl:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_WkPFRuybw67YnCiMj_1751346003759_completion_certificate.pdf'
    },
    {
      title: (<a href="https://ai-for-all.in/#/badge?id=U2FsdGVkX187RPSdUO1S7FNTJwoT0RIpEDPIp1L2u3SzQgZ4p1L2u3SpvXvzCEeQjTr82E55g4V1"
        target='_blank'
        rel="noopener noreferrer"
        >'AI Aware Badge - AI For All'</a>),
      issuer: 'Intel Corporation',
      date: 'Aug 2025',
      credentialId: 'U2FsdGVkX187RPSdUO1S...',
      description: 'Foundational understanding of AI concepts and applications',
       credentialurl:'https://ai-for-all.in/#/badge?id=U2FsdGVkX187RPSdUO1S7FNTJwoT0RIpEDPIp1L2u3SzQgZ4p1L2u3SpvXvzCEeQjTr82E55g4V1'
    },
    {
      title: (<a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODUzODg1M184OTA5ODAyMTc1MTE3MzQzMDg0My5wbmciLCJ1c2VybmFtZSI6IkJhZGd1amFyIERocnV2IEtpcmFuICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8538853_89098021751173430843.png&_branch_match_id=1482967448088189282&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1q%2Bs8nUsKTPJdwxNsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwCDMK7WPwAAAA%3D%3D"
        target='_blank'
        rel="noopener noreferrer"
        >'Introduction to Generative AI'</a>),
      issuer: 'Google Cloud',
      date: '2024',
      credentialId: 'Verified',
      description: 'Generative AI concepts and Google Cloud AI services',

    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Licenses & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Validated expertise from leading technology companies and educational institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                cert.featured 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {cert.featured && (
                <div className="flex items-center justify-center mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Latest Achievement
                  </span>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  cert.featured ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Verified
                </div>
                
                {/* {cert.credentialId && (
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm flex items-center">
                    View Credential
                    <ExternalLink className="w-3 h-3 ml-1" />
                    
                  </button>
                )} */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Committed to staying at the forefront of technology through continuous education 
            and professional development from industry leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">7+ Certifications</span>
            <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm">Multiple Platforms</span>
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">Industry Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;