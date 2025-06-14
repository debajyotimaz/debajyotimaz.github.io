import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from '../Links';
import { useAnimatedLogo } from '../../hooks/useAnimatedLogo';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from '../ThemeToggleButton';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();
  const { isLogoAnimating, handleLogoClick } = useAnimatedLogo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: '#bio', label: 'Bio' },
    { href: '#news', label: 'News' },
    { href: '#education', label: 'Education' },
    { href: '#publications', label: 'Publications' },
    { href: '#projects', label: 'Projects' },
    { href: '#teaching', label: 'Teaching' },
  ];

  return (
    <>
      <nav
        className={` sticky top-2  transform  z-50  rounded-2xl transition-all duration-300
                    ${isScrolled 
                      ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border border-gray-200/20 dark:border-gray-700/20' 
                      : 'bg-transparent'
                    }`}
      >
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <div className="cursor-pointer flex items-center" onClick={handleLogoClick}>
            <div className="text-lg font-medium text-gray-900 dark:text-white">
              Debajyoti Mazumder
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-105"
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggleButton />
              <Link
                href="/resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Resume
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-xl shadow-lg border-t border-gray-200/20 dark:border-gray-700/20"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}