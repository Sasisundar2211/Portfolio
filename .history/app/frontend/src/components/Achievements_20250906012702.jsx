import React from 'react';
import { Button } from './ui/button';
import { achievementSection } from '../data/mockData';
import { ExternalLink } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{achievementSection.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {achievementSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementSection.achievementsCards.map((achievement, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300 hover:transform hover:scale-105">
              {/* Achievement Image */}
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Achievement Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 leading-tight">
                  {achievement.title}
                </h3>
                
                {/* Achievement Links */}
                <div className="flex flex-wrap gap-2">
                  {achievement.footerLink.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-black text-xs"
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