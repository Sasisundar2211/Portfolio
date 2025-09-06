import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Sasi Sundar
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('greeting')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 dark:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('greeting')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-800 mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('greeting')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;