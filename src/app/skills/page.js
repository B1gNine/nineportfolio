// pages/skills.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiJqueryLogo } from 'react-icons/di';

const Skills = () => {
  return (
    <div className="max-w-10xl mx-auto px-4 py-10 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            icon: <FaHtml5 className="h-16 w-16 text-orange-600 mb-4" />,
            title: "HTML5",
            summary: "Building responsive and semantic web structures.",
          },
          {
            icon: <FaCss3Alt className="h-16 w-16 text-blue-600 mb-4" />,
            title: "CSS3",
            summary: "Styling and enhancing the visual appeal of web applications.",
          },
          {
            icon: <FaJs className="h-16 w-16 text-yellow-500 mb-4" />,
            title: "JavaScript",
            summary: "Creating interactive and dynamic web experiences.",
          },
          {
            icon: <FaReact className="h-16 w-16 text-blue-500 mb-4" />,
            title: "React.js",
            summary: "Building user interfaces with reusable components.",
          },
          {
            icon: <FaNodeJs className="h-16 w-16 text-green-600 mb-4" />,
            title: "Node.js",
            summary: "Server-side development with scalable applications.",
          },
          {
            icon: <SiNextdotjs className="h-16 w-16 text-gray-800 mb-4" />,
            title: "Next.js",
            summary: "Building server-rendered React applications with ease.",
          },
          {
            icon: <SiMongodb className="h-16 w-16 text-green-600 mb-4" />,
            title: "MongoDB",
            summary: "NoSQL database for modern web applications.",
          },
          {
            icon: <FaDatabase className="h-16 w-16 text-blue-600 mb-4" />,
            title: "SQL",
            summary: "Managing relational databases and data queries.",
          },
          {
            icon: <FaGitAlt className="h-16 w-16 text-red-600 mb-4" />,
            title: "Git",
            summary: "Version control for collaborative development.",
          },
          {
            icon: <SiTailwindcss className="h-16 w-16 text-teal-600 mb-4" />,
            title: "Tailwind CSS",
            summary: "Utility-first CSS framework for rapid UI development.",
          },
          {
            icon: <SiTypescript className="h-16 w-16 text-blue-600 mb-4" />,
            title: "TypeScript",
            summary: "Superset of JavaScript that adds static types.",
          },
          {
            icon: <DiJqueryLogo className="h-16 w-16 text-blue-500 mb-4" />,
            title: "jQuery",
            summary: "Simplifying HTML document traversing and event handling.",
          },
        ].map((skill, index) => (
          <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
            {skill.icon}
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.title}</h2>
            <p className="text-center text-gray-700 dark:text-gray-300">{skill.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;