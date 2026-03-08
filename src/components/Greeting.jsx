import React from 'react';
import { Button } from './ui/button';
import { greeting, socialMediaLinks } from '../data/mockData';
import getSocialIcon from '../utils/getSocialIcon';

// Renders the main greeting section (the "Home" page of the portfolio).
const Greeting = () => {
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