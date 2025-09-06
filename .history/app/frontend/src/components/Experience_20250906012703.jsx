import React from 'react';
import { workExperiences } from '../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{workExperiences.title}</h2>
          <p className="text-xl text-gray-300">{workExperiences.subtitle}</p>
        </div>

        <div className="space-y-12">
          {workExperiences.experience.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src={exp.companylogo} 
                    alt={exp.company}
                    className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                  />
                </div>

                {/* Experience Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                      <h4 className="text-lg text-blue-400 font-semibold mb-2">{exp.role}</h4>
                    </div>
                    <div className="text-gray-400 text-sm md:text-right">
                      {exp.date}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.desc}</p>

                  {exp.descBullets && exp.descBullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.descBullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;