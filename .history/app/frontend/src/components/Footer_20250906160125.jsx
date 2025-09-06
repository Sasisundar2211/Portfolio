import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/10 text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by BSV Sasi Sundar
          </p>
          <p className="text-muted-foreground/70 text-sm mt-2">
            © 2025 BSV Sasi Sundar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;