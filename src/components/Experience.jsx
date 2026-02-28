import React from 'react';
import { workExperiences } from '../data/mockData';
import SectionHeader from './SectionHeader';
import DescriptionBullets from './DescriptionBullets';

// Renders the Work Experience section, mapping over data to create experience cards.
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background text-foreground fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={workExperiences.title}
          subtitle="A timeline of my professional growth and contributions."
        />

        <div className="space-y-16 md:space-y-20">
          {workExperiences.experience.map((exp, index) => (
            <div key={index} className="p-8 rounded-lg border border-border bg-card shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Container for the company logo. */}
                <div className="flex-shrink-0">
                  <img 
                    src={exp.companylogo} 
                    alt={exp.company}
                    className="w-20 h-20 object-contain bg-card rounded-lg p-2"
                  />
                </div>

                {/* Container for experience details like role, company, and description. */}
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
                  <DescriptionBullets bullets={exp.descBullets} />
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