import React from 'react';

// Renders a section title and optional subtitle, used consistently across multiple sections.
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
    {subtitle && (
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
