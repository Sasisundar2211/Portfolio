import React from 'react';
import { contactInfo, socialMediaLinks } from '../data/mockData';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          {contactInfo.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {contactInfo.subtitle}
        </p>
        
        <div className="mb-8">
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-2xl font-semibold text-primary hover:underline"
          >
            {contactInfo.email}
          </a>
        </div>

        <Button asChild size="lg" className="glass-button glass-button-primary mb-12">
          <a href={`mailto:${contactInfo.email}`}>Say Hello</a>
        </Button>

        <div className="flex justify-center space-x-6">
          {socialMediaLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`text-muted-foreground hover:text-foreground transition-colors duration-300 social-icon-hover-${social.name.toLowerCase()}`}
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;