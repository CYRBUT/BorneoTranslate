
import React from 'react';
import { IconSun, IconMoon } from './Icon';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark dark:focus:ring-offset-gray-900 overflow-hidden"
      aria-label={isDarkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
    >
      <div className={`absolute transition-transform duration-500 ease-in-out ${isDarkMode ? 'transform -translate-y-12 rotate-45' : 'transform translate-y-0 rotate-0'}`}>
        <IconSun className="w-6 h-6 text-yellow-500" />
      </div>
      <div className={`absolute transition-transform duration-500 ease-in-out ${isDarkMode ? 'transform translate-y-0 rotate-0' : 'transform translate-y-12 rotate-45'}`}>
        <IconMoon className="w-6 h-6 text-indigo-400" />
      </div>
    </button>
  );
};

export default ThemeToggle;
