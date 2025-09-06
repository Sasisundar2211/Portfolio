import React from 'react';
import { skillsSection } from '../data/mockData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background text-foreground fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{skillsSection.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {skillsSection.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Skills Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left text-foreground">
              PASSIONATE AI/ML DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </h3>
            <div className="space-y-4">
              {skillsSection.skills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-primary text-xl">⚡</span>
                  <p className="text-muted-foreground">{skill.replace('⚡ ', '')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Tech Stack Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {skillsSection.softwareSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-2 p-4 bg-muted/40 rounded-lg hover:bg-muted/80 transition-colors duration-300 hover:scale-105 transform"
              >
                <i className={`${skill.fontAwesomeClassname} text-4xl text-foreground`}></i>
                <span className="text-sm text-muted-foreground text-center">{skill.skillName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;