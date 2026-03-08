import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTopButton.css';

const SCROLL_THRESHOLD = 300;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
