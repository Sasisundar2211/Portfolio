import React from 'react';
import { useTheme } from '../context/ThemeContext.js';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="ghost" size="sm" onClick={toggleTheme} className="text-white">
            {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>
    );
};

export default ThemeToggle;