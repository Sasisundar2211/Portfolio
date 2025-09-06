import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#greeting" className="text-2xl font-bold text-gradient">
              Sasi Sundar
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="nav-link font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button (optional, for future implementation) */}
          <div className="md:hidden">
            {/* You can add a hamburger menu icon here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;