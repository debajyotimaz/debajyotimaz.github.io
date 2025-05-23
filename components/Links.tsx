import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className = '', onClick }: LinkProps) {
  const { isDarkMode } = useTheme();
//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     // const target = document.querySelector(href);
//     // if (target) {
//     //   target.scrollIntoView({ behavior: 'smooth' });
//     // }
//     onClick?.();
//   };

  return (
    <a
      href={href}
    //   onClick={handleClick}
    onClick={onClick}
      className={`${ !isDarkMode ? 'text-gray-700' : 'text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}