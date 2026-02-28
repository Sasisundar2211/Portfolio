import React from 'react';
import { Button } from './ui/button';
import { bigProjects, openSource } from '../data/mockData';
import { Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FooterLinks from './FooterLinks';

// Renders the projects section, including open source contributions and major projects.
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* A link to the GitHub profile for more open source projects. */}
        {openSource.display && (
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Open Source Projects</h2>
            <Button 
              asChild
              size="lg"
            >
              <a 
                href="https://github.com/Sasisundar2211" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                More Projects
              </a>
            </Button>
          </div>
        )}

        {/* The main section showcasing featured projects. */}
        <SectionHeader title={bigProjects.title} subtitle={bigProjects.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bigProjects.projects.map((project, index) => (
            <div key={index} className="border border-border bg-card shadow-sm rounded-lg overflow-hidden">
              {/* Project preview image. */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project details, including description and tech stack. */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.projectName}</h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">{project.projectDesc}</p>
                
                {/* Tech stack tags for the project. */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links to the live demo or source code. */}
                <FooterLinks links={project.footerLink} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;