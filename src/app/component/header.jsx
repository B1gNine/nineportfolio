"use client"; // Add this line at the top

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLaptop, FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Check saved theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="sticky top-0 flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900">
      <div className="flex items-center">
        <FaLaptop className="text-blue-600 text-2xl mr-2" />
        <Link href="/" className="text-blue-500 text-xl font-bold tracking-wide uppercase hover:text-blue-700 transition-all duration-300 cursor-pointer">
          X
        </Link>
      </div>
      <div className="flex space-x-6 items-center">
        <Link href="/" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Home</Link>
        <Link href="/about" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">About</Link>
        <Link href="/contact" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Contact</Link>
        <Link href="/project" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Projects</Link>
        <Link href="/skills" className="text-gray-200 font-semibold hover:border-b-2 hover:border-gray-400 transition duration-200">Skills</Link>

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {darkMode ? (
            <FaSun className="text-yellow-500 text-xl" />
          ) : (
            <FaMoon className="text-gray-200 text-xl" />
          )}
        </button>
      </div>
    </div>
  );
}

