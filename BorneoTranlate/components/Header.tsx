
import React from 'react';
import { IconNews } from './Icon';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onNewsClick: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewsClick, isDarkMode, onToggleDarkMode }) => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-40 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Borneo Translate
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={onNewsClick}
            className="flex items-center gap-2 px-4 py-2 bg-primary-light hover:bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark dark:focus:ring-offset-gray-900"
          >
            <IconNews className="h-5 w-5" />
            <span className="hidden sm:inline">Berita</span>
          </button>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;