import React from 'react';
import { Button } from './ui/button';
import { achievementSection } from '../data/mockData';
import { ExternalLink } from 'lucide-react';

// Renders the achievements and certifications section.
const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background text-foreground fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{achievementSection.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognitions and milestones from my journey in technology and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementSection.achievementsCards.map((achievement, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden hover-glow">
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
                <div className="flex flex-wrap gap-2">
                  {achievement.footerLink.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-xs"
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;