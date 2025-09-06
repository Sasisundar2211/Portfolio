import React from 'react';
import { useTheme } from '../ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="ghost" size="sm" onClick={toggleTheme} className="text-gray-800 dark:text-white relative w-9 h-9">
            <div className="theme-icon-wrapper">
                {/* The key prop ensures React re-renders the icon, triggering the animation */}
                {theme === 'dark' ? <Sun key="sun" className="h-6 w-6" /> : <Moon key="moon" className="h-6 w-6" />}
            </div>
        </Button>
    );
};

export default ThemeToggle;