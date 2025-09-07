import React from 'react';
import { useTheme } from '../ThemeContext.jsx';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button.jsx';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </Button>
  );
};

export default ThemeToggle;