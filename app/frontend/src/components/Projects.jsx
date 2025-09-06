import React from 'react';
import { Button } from './ui/button';
import { bigProjects, openSource } from '../data/mockData';
import { ExternalLink, Github } from 'lucide-react';

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
              className="glass-button glass-button-primary px-8 py-3 text-lg"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">{bigProjects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {bigProjects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bigProjects.projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden hover-glow">
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
                      className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full border border-border backdrop-blur-sm transition-transform duration-200 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links to the live demo or source code. */}
                <div className="flex flex-wrap gap-3">
                  {project.footerLink.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-button px-6 py-3 text-sm flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.name}
                    </a>
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

export default Projects;