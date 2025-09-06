import React from 'react';
import { educationInfo } from '../data/mockData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Education</h2>
        </div>

        <div className="space-y-12">
          {educationInfo.schools.map((school, index) => (
            <div key={index} className="bg-black p-8 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* School Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src={school.logo} 
                    alt={school.schoolName}
                    className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                  />
                </div>

                {/* School Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{school.schoolName}</h3>
                      <h4 className="text-lg text-blue-400 font-semibold mb-2">{school.subHeader}</h4>
                    </div>
                    <div className="text-gray-400 text-sm md:text-right">
                      {school.duration}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{school.desc}</p>

                  {school.descBullets && school.descBullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {school.descBullets.map((bullet, bulletIndex) => (
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

export default Education;