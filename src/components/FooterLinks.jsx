import React from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

// Renders a list of external link buttons (e.g., certificate or project links).
const FooterLinks = ({ links }) => (
  <div className="flex flex-wrap gap-3">
    {links.map((link, index) => (
      <Button key={index} asChild variant="outline" size="sm">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          {link.name}
        </a>
      </Button>
    ))}
  </div>
);

export default FooterLinks;
