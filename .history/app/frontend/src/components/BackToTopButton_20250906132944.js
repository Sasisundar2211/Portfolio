import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button onClick={scrollToTop} className={`back-to-top-button ${isVisible ? 'show' : ''}`}>
            <ArrowUpCircle size={32} />
        </button>
    );
};

export default BackToTopButton;