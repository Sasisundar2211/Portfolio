import React from 'react';
import { educationInfo } from '../data/mockData';

// Renders the Education section, mapping over data to create individual school cards.
const Education = () => {
  return (
    <section id="education" className="py-20 bg-background text-foreground fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Education</h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {educationInfo.schools.map((school, index) => (
            <div key={index} className="glass-card p-8 rounded-lg hover-border-gradient">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Container for the school's logo. */}
                <div className="flex-shrink-0">
                  <img 
                    src={school.logo} 
                    alt={school.schoolName}
                    className="w-24 h-24 object-contain bg-card rounded-lg p-2"
                  />
                </div>

                {/* Container for the school's details, including name, degree, and description. */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{school.schoolName}</h3>
                      <h4 className="text-lg text-primary font-semibold mb-2">{school.subHeader}</h4>
                    </div>
                    <div className="text-muted-foreground text-sm md:text-right">
                      {school.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{school.desc}</p>

                  {school.descBullets && school.descBullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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