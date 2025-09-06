import React from 'react';
import { Button } from './ui/button';
import { greeting, socialMediaLinks } from '../data/mockData';
import { Github, Linkedin, Mail, Phone, Instagram, Twitter, ExternalLink, Gitlab, Award, Book, MessageSquare, User } from 'lucide-react';

const Greeting = () => {
  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'github': return <Github className="w-6 h-6" />;
      case 'linkedin': return <Linkedin className="w-6 h-6" />;
      case 'gmail': return <Mail className="w-6 h-6" />;
      case 'whatsapp': return <Phone className="w-6 h-6" />;
      case 'instagram': return <Instagram className="w-6 h-6" />;
      case 'twitter': return <Twitter className="w-6 h-6" />;
      case 'gitlab': return <Gitlab className="w-6 h-6" />;
      case 'kaggle': return <Award className="w-6 h-6" />;
      case 'medium': return <Book className="w-6 h-6" />;
      case 'stackoverflow': return <MessageSquare className="w-6 h-6" />;
      case 'gravatar': return <User className="w-6 h-6" />;
      default: return <ExternalLink className="w-6 h-6" />;
    }
  };

  const handleResumeDownload = () => {
    // Mock resume download functionality
    const link = document.createElement('a');
    link.href = greeting.resumeLink;
    link.download = 'BSV_Sasi_Sundar_AIML_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="greeting" className="min-h-screen flex items-center justify-center gradient-bg text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              {greeting.title}
              <span className="inline-block animate-bounce ml-4">👋</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {greeting.subTitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(socialMediaLinks).map(([platform, url]) => {
              if (platform === 'display' || !url) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg transition-all duration-300 hover:scale-110 transform"
                >
                  {getSocialIcon(platform)}
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="glass-button glass-button-primary px-8 py-4 text-lg font-semibold"
            >
              Contact Me
            </button>
            <button 
              onClick={handleResumeDownload}
              className="glass-button px-8 py-4 text-lg font-semibold"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Content - Animated Illustration */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-96 h-96 glass-card flex items-center justify-center p-2 google-border-glow">
              <img src="assets/images/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-lg" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce delay-100">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-bounce delay-300">
              <span className="text-xl">🎯</span>
            </div>
            <div className="absolute top-1/2 -left-12 w-8 h-8 glass-card rounded-full flex items-center justify-center animate-bounce delay-500">
              <span className="text-sm">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;