import React from 'react';
import { workExperiences } from '../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background text-foreground fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{workExperiences.title}</h2>
          <p className="text-xl text-muted-foreground">A timeline of my professional growth and contributions.</p>
        </div>

        <div className="space-y-12">
          {workExperiences.experience.map((exp, index) => (
            <div key={index} className="glass-card p-8 rounded-lg">
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
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                      <h4 className="text-lg text-primary font-semibold mb-2">{exp.role}</h4>
                    </div>
                    <div className="text-muted-foreground text-sm md:text-right">
                      {exp.date}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.desc}</p>

                  {exp.descBullets && exp.descBullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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