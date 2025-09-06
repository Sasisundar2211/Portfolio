import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A wrapper component that applies a fade-in animation to its children
 * when they scroll into the viewport.
 */
const AnimatedSection = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2,    // Triggers when 20% of the element is visible for a smoother feel
    rootMargin: '0px 0px -10% 0px', // Start animation a bit earlier
  });

  return (
    <div ref={ref} className={`${className} transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;