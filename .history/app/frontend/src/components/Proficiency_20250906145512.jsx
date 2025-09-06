import React from 'react';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/mockData';
import './Proficiency.css';

const Proficiency = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.5,    // Trigger when 50% of the component is visible
    });

    if (!techStack.viewSkillBars) {
        return null;
    }

    return (
        <section id="proficiency" ref={ref} className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
                    {techStack.title}
                </h2>
                <div className="space-y-8">
                    {techStack.experience.map((skill, index) => (
                        <div key={index} className="skill-bar-container">
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-muted-foreground">{skill.Stack}</span>
                                <span className="text-sm font-medium text-muted-foreground">{skill.progressPercentage}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-4">
                                <div 
                                    className="skill-bar-progress"
                                    style={{ width: inView ? skill.progressPercentage : '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proficiency;