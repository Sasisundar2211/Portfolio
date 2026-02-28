import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { ArrowLeft } from 'lucide-react';

// Navigation links are defined outside the component to avoid recreation on every render.
const navLinks = [
  { name: 'Home', url: '#greeting' },
  { name: 'Skills', url: '#skills' },
  { name: 'Education', url: '#education' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Achievements', url: '#achievements' },
  { name: 'Contact', url: '#contact' },
];

// Renders the main header for the portfolio page.
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Adds a background to the header when the user scrolls down.
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Manages focus for the mobile menu for accessibility.
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (e) => {
        if (e.key === 'Tab') {
          // Trap focus within the menu
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      // Focus the first element when the menu opens
      firstElement?.focus();
      menuRef.current.addEventListener('keydown', handleTabKeyPress);

      return () => {
        menuRef.current?.removeEventListener('keydown', handleTabKeyPress);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left side of the header: Back button and name/logo. */}
            <div className="flex items-center gap-4">
              <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Back to Landing Page">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <a href="#greeting" className="text-2xl font-bold text-gradient">
                Sasi Sundar
              </a>
            </div>

            {/* Desktop navigation links. */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right side items: Theme toggle and mobile menu button. */}
            <div className="flex items-center">
              {/* Theme Toggle for desktop view. */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Hamburger menu button for mobile view. */}
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for the mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ease-in-out md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* The slide-down mobile menu, toggled by the hamburger button. */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 bg-background/90 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={menuRef}
        style={{ top: '5rem' }} // Ensure it's positioned below the header
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;