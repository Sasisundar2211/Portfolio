import React from 'react';
import { techStack } from '../data/mockData';

const Proficiency = () => {
  return (
    <section id="proficiency" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{techStack.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.experience.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.Stack}</h3>
                  <p className="text-3xl font-bold text-blue-400">{skill.progressPercentage}</p>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.progressPercentage }}
                  ></div>
                </div>
                
                {/* Visual representation */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-10 gap-1">
                    {Array.from({ length: 10 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${
                          i < parseInt(skill.progressPercentage) / 10 
                            ? 'bg-blue-400' 
                            : 'bg-gray-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proficiency;