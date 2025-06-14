import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Links';
import { useTheme } from '../../context/ThemeContext';

export function ActionButtons() {
  const { isDarkMode } = useTheme();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <a
        href="/resume.pdf"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
      >
        <FileText className="w-5 h-5" />
        <span>Resume</span>
      </a>
      <Link
        href="mailto:debajyoti22@iiserb.ac.in"
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base  ${ !isDarkMode ?  "text-white" : "dark:text-blue-400"} border-2  border-blue-600 transition-transform duration-300 transform hover:scale-105`}
      >
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </Link>
    </div>
  );
}