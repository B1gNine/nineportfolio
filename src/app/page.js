export default function Home() {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      summary: "Learn how to create a cohesive design system effectively, considering user needs, accessibility, and scalability while ensuring a seamless and intuitive experience across different platforms and devices.",
      icon: "📐",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      category: "Figma, Icon Design",
      summary: "Design precise and scalable icons using Figma tools efficiently, focusing on maintaining consistency, applying best practices, and ensuring visual clarity to enhance user interface experiences.",
      icon: "🎨",
    },
    {
      title: "Understanding CSS Grid",
      date: "20 Mar 2020",
      category: "CSS, Layout",
      summary: "Master CSS Grid to create complex, responsive web layouts that are flexible and visually appealing, making it easier to structure your HTML elements.",
      icon: "🔲",
    },
    {
      title: "JavaScript ES6 Features",
      date: "25 Apr 2020",
      category: "JavaScript, ES6",
      summary: "Dive into ES6 syntax and features such as arrow functions, promises, and destructuring to write cleaner and more efficient JavaScript code.",
      icon: "💻",
    },
    {
      title: "Accessibility in Web Development",
      date: "15 May 2020",
      category: "Accessibility",
      summary: "Learn best practices for creating accessible web applications that provide a better experience for users with disabilities.",
      icon: "♿",
    },
    {
      title: "Optimizing Web Performance",
      date: "10 Jun 2020",
      category: "Performance",
      summary: "Understand techniques to optimize web performance, including lazy loading, caching, and code-splitting to improve load times.",
      icon: "🚀",
    },
    {
      title: "React Hooks: An Introduction",
      date: "18 Jul 2020",
      category: "React, Hooks",
      summary: "Get started with React Hooks, an essential tool for managing state and side effects in functional components.",
      icon: "⚛️",
    },
    {
      title: "TypeScript for JavaScript Developers",
      date: "22 Aug 2020",
      category: "TypeScript",
      summary: "Explore TypeScript and learn how to add type safety to your JavaScript code, making it more reliable and easier to maintain.",
      icon: "📘",
    },
    {
      title: "Building a REST API with Node.js",
      date: "30 Sep 2020",
      category: "Node.js, API",
      summary: "Learn how to build a RESTful API using Node.js and Express, allowing seamless communication between the frontend and backend.",
      icon: "🌐",
    },
    {
      title: "Intro to Git and GitHub",
      date: "10 Oct 2020",
      category: "Version Control",
      summary: "Master the basics of Git and GitHub, essential tools for version control and collaborative development.",
      icon: "🐙",
    },
  ];

  const works = [
    {
      title: "Designing Dashboards",
      category: "Dashboard",
      year: "2024",
      summary: "Creating intuitive and interactive dashboards for data visualization, enabling users to gain insights easily through well-organized metrics, user-friendly layouts, and engaging visual elements that enhance decision-making.",
      image: "dashboard.png",
    },
    {
      title: "Vibrant Portraits of 2020",
      category: "Illustration",
      year: "2014",
      summary: "Capturing emotions through colorful and lively digital portraits, utilizing a variety of styles and techniques that reflect individuality while connecting with the audience on an emotional level.",
      image: "apt.png",
    },
    {
      title: "36 Days of Malayalam type",
      category: "Typography",
      year: "2018",
      summary: "Exploring Malayalam typography through daily creative challenges, highlighting the beauty of the script while pushing boundaries in design and encouraging artistic expression within a structured format.",
      image: "a36.png",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
      {/* Profile Section */}
      <section className="flex items-center justify-between bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Hi, I am Kareem, A Web Developer
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            I craft seamless digital experiences that not only look stunning but also drive results. With a passion for coding and a keen eye for design, I bring ideas to life through innovative web solutions. Let’s build something amazing together!
          </p>
          <a
            href="/Kareem_Olatunji_Resume.pdf" // Path to your resume file in the public folder
            download="Kareem_Olatunji_Resume.pdf"
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-600 inline-block"
          >
            Download Resume
          </a>
        </div>
        <div>
          <img
            className="rounded-full h-32 w-32 object-cover"
            src="bless.jpg"
            alt="Profile"
          />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recent Posts</h2>
          <a href="/all-posts" className="text-blue-500 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 4).map((post, index) => ( // Show only first 4 posts
            <div 
              key={index} 
              className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition duration-300 ease-in-out hover:border-black dark:hover:border-white"
            >
              <span className="text-8xl mr-4">{post.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
                <p className="text-gray-400">{post.date}</p>
                <p className="text-gray-600 dark:text-gray-400">{post.category}</p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="flex bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition duration-300 ease-in-out hover:border-black dark:hover:border-white"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{work.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{work.category}</p>
                <p className="text-gray-400">{work.year}</p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">{work.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
