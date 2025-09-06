import React from 'react';

// Renders the footer section for the portfolio.
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/10 text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">Made by Sasi Sundar</p>
          <p className="text-muted-foreground/70 text-sm mt-2">
            © 2025 BSV Sasi Sundar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);