import React from 'react';
import { Button } from './ui/button';
import { bigProjects, openSource } from '../data/mockData';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Open Source Section */}
        {openSource.display && (
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">Open Source Projects</h2>
            <Button 
              asChild
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold"
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

        {/* Big Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">{bigProjects.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {bigProjects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bigProjects.projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden">
              {/* Project Image */}
              <div className="aspect-video bg-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{project.projectName}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">{project.projectDesc}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200 text-sm rounded-full border border-black/10 dark:border-white/20 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
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