import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from '../Links';
// import { useTheme } from '../hooks/useTheme';
// import { ThemeToggle } from './ui/ThemeToggle';
import { useAnimatedLogo } from '../../hooks/useAnimatedLogo';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from '../ThemeToggleButton';
// import { LoadingScreen } from './loading/LoadingScreen';
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
    // { href: '#home', label: 'Home' },
    // { href: '#about', label: 'About' },
    // { href: '#skills', label: 'Skills' },
    // { href: '#projects', label: 'Projects' },
    // { href: '#github', label: 'GitHub' },
    // { href: '#leetcode', label: 'Leetcode' },
    // { href: '#badges', label: 'Badges' },
    // { href: '#blogs', label: 'Blogs' },
    // { href: '#experience', label: 'Experience' },
    // { href: '#certifications', label: 'Certifications' },
    // { href: '#education', label: 'Education' },
    { href: '#bio', label: 'Bio' },
    { href: '#publications', label: 'Publications' },
    { href: '#news', label: 'News' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#teaching', label: 'Teaching' },
  ];

  return (
    <>
      {/* <LoadingScreen isLoading={isLogoAnimating} /> */}
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
                    ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md outline-1 outline-blue-600' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <div className="cursor-pointer" onClick={handleLogoClick}>
            {/* <img src="/assets/favicon.png" alt="Logo" className="h-8 w-auto" /> */}
            
          <div className="relative text-lg text-white dark:text-white">
          Debajyoti Mazumder </div>
              {/* <div className="absolute p-7 inset-0 rounded-full border-4 border-blue-600 opacity-50 animate-borderPulse"> */}
              {/* </div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-5 items-center relative">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }} // Faster animation
                  />
                )}
              </Link>
            ))}

            <ThemeToggleButton />
            <Link
              href="/resume.pdf"
              className=" ml-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
            >
              Resume
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={` ml-2 p-2 rounded-lg ${ !isDarkMode ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-800  hover:bg-gray-700'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className={`w-5 h-5 ${ !isDarkMode ? 'text-black' : 'text-white'} `} /> : <Menu className={`w-5 h-5 ${ !isDarkMode ? 'text-black' : 'text-white'} `} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={`lg:hidden ${ !isDarkMode ? 'bg-white/95' : 'bg-gray-900/95'} rounded-b-xl shadow-lg`}>
            <div className={`px-4 pt-2 pb-3 space-y-1 ${isDarkMode ? 'text-black' : 'text-white'} `}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm text-center ${ !isDarkMode ? 'text-black hover:bg-gray-100' : 'text-gray-300  hover:bg-gray-800'}`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600  text-sm hover:bg-blue-700 ${ !isDarkMode ? 'text-white hover:text-white' : 'text-white hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                Resume
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}