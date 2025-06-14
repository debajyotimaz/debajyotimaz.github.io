// components/ThemeToggleButton.tsx

import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from 'lucide-react';

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
    >
      {isDarkMode ? <SunIcon className='w-6 h-6 m-4 text-white' /> : <MoonIcon className='w-6 h-6 m-4 text-gray-900 text-white' />}
    </button>
  );
};

export default ThemeToggleButton;
