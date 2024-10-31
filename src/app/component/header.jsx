"use client"; // This line makes the component a client component

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { FaMoon, FaSun, FaLaptop } from 'react-icons/fa'; // Import icons from react-icons

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to set initial theme based on user preference
  useEffect(() => {
    const isDark = window.localStorage.getItem('dark-mode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
    window.localStorage.setItem('dark-mode', !darkMode);
  };

  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900'>
      <div className='flex items-center'>
        <FaLaptop className="text-blue-600 text-2xl mr-2" /> {/* Computer icon */}
        <Link href="/" className="text-blue-500 text-xl font-bold tracking-wide uppercase hover:text-blue-700 transition-all duration-300 cursor-pointer">
          X
        </Link>
      </div>
      <div className='flex space-x-6 items-center'>
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