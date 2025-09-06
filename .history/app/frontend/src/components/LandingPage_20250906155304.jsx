import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Github, Star, Users, GitFork, ExternalLink, Download, Zap, Smartphone, Palette, Settings, Code, Mail, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const stats = [
    { icon: <Star className="w-6 h-6" />, count: "500+", label: "GitHub Stars" },
    { icon: <GitFork className="w-6 h-6" />, count: "200+", label: "Forks" },
    { icon: <Users className="w-6 h-6" />, count: "1000+", label: "Users" },
    { icon: <Github className="w-6 h-6" />, count: "50+", label: "Contributors" }
  ];

  const features = [
    { 
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "⚡ Fast Performance",
      description: "Optimized React components with modern build tools"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "📱 Responsive Design", 
      description: "Looks great on desktop, tablet, and mobile devices"
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "🎨 Modern UI/UX",
      description: "Clean, professional design with smooth animations"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "🔧 Easy Customization",
      description: "Simple configuration file to personalize your portfolio"
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "📊 GitHub Integration",
      description: "Automatically showcase your repositories and contributions"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "📧 Contact Form",
      description: "Built-in contact form with email integration"
    }
  ];

  const handleGetStarted = () => {
    // Navigate to main portfolio
    window.location.href = '/portfolio';
  };

  const handleViewDemo = () => {
    // Navigate to main portfolio
    window.location.href = '/portfolio';
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <div className="text-2xl font-bold">
              Sasi<span className="text-primary">Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              <a href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
              <a href="https://github.com/Sasisundar2211" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <Button 
                onClick={handleGetStarted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started!
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-accent focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95">
              <a href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">Portfolio</a>
              <a href="https://github.com/Sasisundar2211" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent">GitHub</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-6xl lg:text-8xl font-extrabold mb-6 hero-title-gradient leading-tight">
              Portfolio of Sasi Sundar
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A modern, responsive portfolio template for AI/ML developers and full-stack engineers. 
              Built with React, featuring clean design and professional showcase capabilities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="/portfolio"
              className="glass-button glass-button-primary px-8 py-3 text-base flex items-center justify-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Portfolio
            </a>
            <a
              href="https://github.com/Sasisundar2211"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-8 py-3 text-base flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          </div>

          {/* Metrics Section */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center items-center mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.count}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose SasiPortfolio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create a professional developer portfolio that stands out from the crowd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/30 border-border/10 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clean, modern interface designed specifically for AI/ML developers and software engineers.
            </p>
          </div>

          {/* Screenshot placeholder */}
          <div className="bg-card/30 rounded-lg p-4 sm:p-8 max-w-4xl mx-auto border border-border/10">
            <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-muted-foreground">Portfolio Screenshot Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Launch your professional developer portfolio in minutes. No complex setup required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="glass-button glass-button-primary px-8 py-3 text-base"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="glass-button px-8 py-3 text-base"
            >
              <a href="https://github.com/Sasisundar2211" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2025 BSV Sasi Sundar. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Sasisundar2211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Profile">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bsv-sasi-sundar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;