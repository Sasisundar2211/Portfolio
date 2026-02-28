import React from 'react';
import { achievementSection } from '../data/mockData';
import SectionHeader from './SectionHeader';
import FooterLinks from './FooterLinks';

// Renders the achievements and certifications section.
const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background text-foreground fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title={achievementSection.title}
          subtitle="Recognitions and milestones from my journey in technology and problem-solving."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementSection.achievementsCards.map((achievement, index) => (
            <div key={index} className="border border-border bg-card shadow-sm rounded-lg overflow-hidden">
              {/* Container for the achievement/certificate image. */}
              <div className="aspect-square bg-card flex items-center justify-center p-4">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content section for the achievement card. */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                  {achievement.title}
                </h3>
                
                {/* Links to view the certificate or paper. */}
                <FooterLinks links={achievement.footerLink} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;