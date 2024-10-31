// src/app/component/About.jsx

"use client"; // Ensure this is a client component

import React from 'react';




const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center flex-grow">
        <div className="md:w-2/3 md:pr-8">
          <h1 className="text-3xl font-bold text-center md:text-left mb-8 text-gray-800 dark:text-white">About Me</h1>
          <p className="text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            Hi! I’m Kareem, a passionate web developer. I specialize in creating beautiful and functional web applications. My journey began in high school, fueled by curiosity about how websites work. I started with HTML and CSS, gradually expanding my skills.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            Currently, I work at X, crafting innovative solutions for clients. I focus on building responsive and user-friendly applications. I believe great design enhances user experience and engagement. Collaboration is essential; I enjoy working with designers and fellow developers.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            I take pride in writing clean, maintainable code. Continuous learning is a core value of mine. I regularly explore new technologies and trends in the industry. I also contribute to open-source projects, finding it rewarding to give back.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            When I’m not coding, I love outdoor activities. Photography is another passion of mine, allowing me to capture moments creatively. I enjoy attending tech meetups to network and learn from others. Sharing knowledge with fellow developers inspires me.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            I’m excited about the future of web development and all the opportunities it presents. If you’d like to connect or collaborate, feel free to reach out. Let’s create something amazing together!
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <img
            src="bless.jpg" // Update with your image path
            alt="Kareem"
            className="rounded-full h-49 w-49 object-cover"
          />
        </div>
      </div>

      
    </div>
  );
};

export default About;