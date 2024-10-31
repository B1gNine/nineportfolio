import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-8 mb-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
          >
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.406.593 24 1.324 24h11.495V14.706H9.847v-3.736h2.971V8.548c0-2.948 1.768-4.555 4.426-4.555 1.26 0 2.343.093 2.658.135v3.08h-1.824c-1.432 0-1.71.682-1.71 1.679v2.201h3.42l-.446 3.736h-2.974V24h5.829c.731 0 1.324-.594 1.324-1.324V1.324C24 .593 23.406 0 22.676 0z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="big_6ent" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
          >
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.013 7.052.07 5.677.128 4.555.306 3.679 1.182c-.876.876-1.054 1.998-1.112 3.373C2.013 5.668 2 6.071 2 9.336s.013 3.668.07 4.948c.058 1.375.236 2.497 1.112 3.373.876.876 1.998 1.054 3.373 1.112 1.28.058 1.683.07 4.948.07s3.668-.013 4.948-.07c1.375-.058 2.497-.236 3.373-1.112.876-.876 1.054-1.998 1.112-3.373.058-1.28.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.058-1.375-.236-2.497-1.112-3.373-.876-.876-1.998-1.054-3.373-1.112C15.668.013 15.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
          >
            {/* Twitter Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.93 4.93 0 002.163-2.723c-.951.555-2.005.959-3.127 1.175a4.916 4.916 0 00-8.384 4.482 13.933 13.933 0 01-10.11-5.13c-.375.644-.588 1.391-.588 2.188a4.912 4.912 0 002.188 4.096 4.901 4.901 0 01-2.229-.616c-.054 1.959 1.376 3.792 3.409 4.199a4.935 4.935 0 01-2.224.084c.631 1.953 2.445 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.102c-.395 0-.779-.023-1.17-.069a13.951 13.951 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.415 0-.22-.005-.438-.015-.653a10.243 10.243 0 002.488-2.606z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
          >
            {/* LinkedIn Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 448 512">
              <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zm-46.14-338C24.4 110 0 85.62 0 54.75 0 24.53 24.4 0 54.14 0a54.12 54.12 0 1 1 0 108.25zm394.5 338h-92.6V302.4c0-34.7-.7-79.2-48.3-79.2-48.4 0-55.8 37.8-55.8 76.8V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.4 42.5-48.3 87.4-48.3 93.5 0 110.6 61.6 110.6 141.6V448z"></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400">Copyright ©️ 2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;