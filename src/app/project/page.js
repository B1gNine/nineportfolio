// components/Project.js
import { FaShoppingCart, FaBlog, FaUserTie, FaComments, FaCode, FaDatabase, FaCloud, FaPaintBrush } from 'react-icons/fa';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce application built with Next.js, Node.js, and MongoDB.",
    technologies: "Next.js, Node.js, MongoDB, Tailwind CSS",
    link: "#",
    icon: <FaShoppingCart className="inline mr-2 text-xl" />,
  },
  {
    title: "Blog Website",
    description: "A personal blog website where users can create, edit, and delete posts.",
    technologies: "React, Express.js, PostgreSQL",
    link: "#",
    icon: <FaBlog className="inline mr-2 text-xl" />,
  },
  {
    title: "Portfolio Website",
    description: "An interactive portfolio to showcase projects and skills.",
    technologies: "Next.js, Tailwind CSS",
    link: "#",
    icon: <FaUserTie className="inline mr-2 text-xl" />,
  },
  {
    title: "Real-time Chat App",
    description: "A real-time chat application using WebSocket for instant messaging.",
    technologies: "React, Node.js, Socket.io",
    link: "#",
    icon: <FaComments className="inline mr-2 text-xl" />,
  },
  {
    title: "Code Snippet Manager",
    description: "A tool for saving and organizing code snippets for quick access.",
    technologies: "React, Node.js, MongoDB",
    link: "#",
    icon: <FaCode className="inline mr-2 text-xl" />,
  },
  {
    title: "Database Management System",
    description: "A web application for managing and visualizing database records.",
    technologies: "React, PostgreSQL, Express.js",
    link: "#",
    icon: <FaDatabase className="inline mr-2 text-xl" />,
  },
  {
    title: "Cloud Storage Solution",
    description: "A secure platform for storing and sharing files in the cloud.",
    technologies: "Node.js, AWS, React",
    link: "#",
    icon: <FaCloud className="inline mr-2 text-xl" />,
  },
  {
    title: "Design Collaboration Tool",
    description: "A web app for designers to collaborate and share their work.",
    technologies: "React, Tailwind CSS, Firebase",
    link: "#",
    icon: <FaPaintBrush className="inline mr-2 text-xl" />,
  },
];

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.icon}
                {project.title}
              </h2>
              <p className="mb-2 text-gray-600 dark:text-gray-400">{project.description}</p>
              <p className="font-medium text-gray-600 dark:text-gray-400">{project.technologies}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-4 inline-block">
                View Projects
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}