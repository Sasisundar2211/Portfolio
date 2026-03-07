import React from 'react';
import { Button } from './ui/button';
import { greeting, socialMediaLinks } from '../data/mockData';
import { Github, Linkedin, Mail, Phone, Instagram, Twitter, ExternalLink, Gitlab, BrainCircuit, BookOpen, MessageSquare, User, Rss, Code, Star } from 'lucide-react';

// Renders the main greeting section (the "Home" page of the portfolio).
const Greeting = () => {
  const getSocialIcon = (platform) => {
    // Dynamically returns an icon component or an image based on the platform name.
    switch(platform) {
      case 'github': return <Github className="w-6 h-6" />;
      case 'linkedin': return <Linkedin className="w-6 h-6" />;
      case 'gmail': return <Mail className="w-6 h-6" />; // Corresponds to social-icon-hover-gmail
      case 'whatsapp': return <Phone className="w-6 h-6" />; // Corresponds to social-icon-hover-whatsapp
      case 'instagram': return <Instagram className="w-6 h-6" />;
      case 'twitter': return <Twitter className="w-6 h-6" />; // Corresponds to social-icon-hover-twitter
      case 'gitlab': return <Gitlab className="w-6 h-6" />;
      case 'kaggle': return <img src="/assets/images/kaggle.png" alt="Kaggle" className="w-6 h-6" />;
      case 'medium': return <BookOpen className="w-6 h-6" />;
      case 'stackoverflow': return <img src="/assets/images/stackoverflow.png" alt="Stack Overflow" className="w-6 h-6" />;
      case 'gravatar': return <img src="/assets/images/gravatar.svg" alt="Gravatar" className="w-6 h-6" />;
      default: return <ExternalLink className="w-6 h-6" />;
    }
  };


  return (
    <section id="greeting" className="min-h-screen flex items-center justify-center gradient-bg text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side content: Title, subtitle, social links, and action buttons. */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              {greeting.title}
              <span className="inline-block animate-bounce ml-4">👋</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founder @ GIANT. Building FirmRunner — AI that runs accounting firms.<br />
              I deploy AI systems that do operational work. 15+ systems shipped. Zero theoretical.
            </p>
          </div>

          {/* Renders social media links from mockData. */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(socialMediaLinks).map(([platform, url]) => {
              if (platform === 'display' || !url) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${platform} profile`}
                  className={`p-3 rounded-lg transition-colors duration-300 ease-in-out text-muted-foreground hover:text-foreground`}
                >
                  {getSocialIcon(platform)}
                </a>
              );
            })}
          </div>

          {/* Buttons for contacting and downloading the resume. */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={greeting.resumeLink} download>Download Resume</a>
            </Button>
          </div>
        </div>

        {/* Right side content: Animated profile picture illustration. */}
        <div className="flex justify-center lg:justify-end">
          <div className="profile-image-container">
            <div className="glowing-circle"></div>
            <div className="profile-image-wrapper">
              <img src="/assets/images/profile_image.jpg" alt="Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;