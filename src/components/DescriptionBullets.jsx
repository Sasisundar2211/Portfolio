import React from 'react';

// Renders a bulleted list of description items, reused in Education and Experience cards.
const DescriptionBullets = ({ bullets }) => {
  if (!bullets || bullets.length === 0) return null;
  return (
    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
      {bullets.map((bullet, index) => (
        <li key={index} className="text-sm">{bullet}</li>
      ))}
    </ul>
  );
};

export default DescriptionBullets;
