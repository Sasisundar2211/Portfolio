import React from 'react';
import { contactInfo, socialMediaLinks } from '../data/mockData';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Phone, Instagram, Twitter, ExternalLink, Gitlab, BrainCircuit, BookOpen, MessageSquare, User } from 'lucide-react';

const Contact = () => {
  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'github': return <Github className="w-8 h-8" />;
      case 'linkedin': return <Linkedin className="w-8 h-8" />;
      case 'gmail': return <Mail className="w-8 h-8" />;
      case 'whatsapp': return <Phone className="w-8 h-8" />;
      case 'instagram': return <Instagram className="w-8 h-8" />;
      case 'twitter': return <Twitter className="w-8 h-8" />;
      case 'gitlab': return <Gitlab className="w-8 h-8" />;
      case 'kaggle': return <img src="/assets/images/kaggle_icon.png" alt="Kaggle" className="w-8 h-8" />;
      case 'medium': return <BookOpen className="w-8 h-8" />;
      case 'stackoverflow': return <img src="/assets/images/stackoverflow.png" alt="Stack Overflow" className="w-8 h-8" />;
      case 'gravatar': return <img src="/assets/images/gravatar.png" alt="Gravatar" className="w-8 h-8" />;
      default: return <ExternalLink className="w-8 h-8" />;
    }
  };

  return (
    <section id="contact" className="py-20 bg-background text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          {contactInfo.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Let's connect.
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
          {Object.entries(socialMediaLinks).map(([platform, url]) => {
            if (platform === 'display' || !url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className={`text-muted-foreground hover:text-foreground transition-colors duration-300 social-icon-hover-${platform}`}
              >{getSocialIcon(platform)}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;