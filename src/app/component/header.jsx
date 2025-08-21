"use client"; // Add this line at the top

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLaptop, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState('system'); // Default to 'system' mode
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const toggleThemeMenu = () => {
    setThemeMenuOpen(prevState => !prevState);
  };

  const setTheme = (mode) => {
    setDarkMode(mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);

    if (mode === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }

    setThemeMenuOpen(false); // Close theme menu after selection
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
  }, []);

  // Close menu after selecting an option in mobile view
  const handleMenuOptionClick = (url) => {
    setMenuOpen(false);
    window.location.href = url;
  };

  return (
    <div className={`sticky top-0 z-50 ${menuOpen ? 'bg-opacity-90' : ''}`}>
      <div className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900">
        <div className="flex items-center">
          <FaLaptop className="text-blue-600 text-2xl mr-2" />
          <Link href="/" className="text-blue-500 text-xl font-bold tracking-wide uppercase hover:text-blue-700 transition-all duration-300 cursor-pointer">
            X
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="text-gray-200 w-8 h-8 flex items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>

        <div className="hidden md:flex md:space-x-6 items-center">
          <Link href="/" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Home</Link>
          <Link href="/about" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">About</Link>
          <Link href="/contact" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Contact</Link>
          <Link href="/project" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Projects</Link>
          <Link href="/skills" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Skills</Link>

          <div className="relative">
            <button onClick={toggleThemeMenu} aria-label="Toggle Theme Menu" className="text-gray-200 text-xl flex items-center space-x-2">
              {darkMode === 'light' ? <FaSun /> : darkMode === 'dark' ? <FaMoon /> : <FaLaptop />}
            </button>
            {themeMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-gray-800 dark:bg-gray-900 rounded shadow-lg">
                <button onClick={() => setTheme('light')} className="flex items-center w-full p-2 text-gray-200 hover:bg-gray-700">
                  <FaSun className="mr-2" /> Light 
                </button>
                <button onClick={() => setTheme('dark')} className="flex items-center w-full p-2 text-gray-200 hover:bg-gray-700">
                  <FaMoon className="mr-2" /> Dark 
                </button>
                <button onClick={() => setTheme('system')} className="flex items-center w-full p-2 text-gray-200 hover:bg-gray-700">
                  <FaLaptop className="mr-2" /> System 
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-end p-6 md:hidden">
          <div className="relative bg-gray-800 dark:bg-gray-900 p-4 w-full max-w-xs space-y-4 rounded shadow-lg">
            <button
              onClick={toggleMenu}
              className="absolute top-1 right-1 text-gray-200 hover:text-gray-400"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <Link href="/" onClick={() => handleMenuOptionClick('/')} className="block text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Home</Link>
            <Link href="/about" onClick={() => handleMenuOptionClick('/about')} className="block text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">About</Link>
            <Link href="/contact" onClick={() => handleMenuOptionClick('/contact')} className="block text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Contact</Link>
            <Link href="/project" onClick={() => handleMenuOptionClick('/project')} className="block text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Projects</Link>
            <Link href="/skills" onClick={() => handleMenuOptionClick('/skills')} className="block text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Skills</Link>

            <div className="relative">
              <button onClick={toggleThemeMenu} aria-label="Toggle Theme Menu" className="text-gray-200 text-xl flex items-center space-x-2">
                {darkMode === 'light' ? <FaSun /> : darkMode === 'dark' ? <FaMoon /> : <FaLaptop />}
                <span className="text-sm">{darkMode.charAt(0).toUpperCase() + darkMode.slice(1)} </span>
              </button>
              {themeMenuOpen && (
                <div className="mt-2 w-full bg-gray-800 dark:bg-gray-900 rounded shadow-lg">
                  <button onClick={() => setTheme('light')} className="flex items-center w-full p-2 text-gray-200 hover:bg-gray-700">
                    <FaSun className="mr-2" /> Light 
                  </button>
                  <button onClick={() => setTheme('dark')} className="flex items-center w-full p-2 text-gray-200 hover:bg-gray-700">
                    <FaMoon className="mr-2" /> Dark 
                  </button>
                  <button onClick={() => setTheme('system')} className="flex items-center w-full p-2 text-gray-200 hover:bg-gray-700">
                    <FaLaptop className="mr-2" /> System 
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
