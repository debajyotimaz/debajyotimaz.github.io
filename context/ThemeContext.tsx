'use client';  // Indicates this is client-side code

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types for the context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // Initially, it's null to handle server/client rendering discrepancy

  // Use effect will run on the client side to handle theme preference
  useEffect(() => {
    // Only execute on the client side (to avoid issues with SSR)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Update theme on the client side and persist in localStorage
  useEffect(() => {
    if (isDarkMode !== null) {  // Only proceed if we have a theme preference
      const rootElement = document.documentElement;

      // Add a class for dark mode or light mode
      if (isDarkMode) {
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        rootElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      // Trigger smooth transition on theme change
      rootElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode !== null) {
      setIsDarkMode((prev) => !prev);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: isDarkMode ?? false, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
