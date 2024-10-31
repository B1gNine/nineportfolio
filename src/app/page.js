export default function Home() {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      summary: "Learn how to create a cohesive design system effectively, considering user needs, accessibility, and scalability while ensuring a seamless and intuitive experience across different platforms and devices.",
      icon: "📐", // Design icon
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      category: "Figma, Icon Design",
      summary: "Design precise and scalable icons using Figma tools efficiently, focusing on maintaining consistency, applying best practices, and ensuring visual clarity to enhance user interface experiences.",
      icon: "🎨", // Figma icon
    },
  ];

  const works = [
    {
      title: "Designing Dashboards",
      category: "Dashboard",
      year: "2024",
      summary: "Creating intuitive and interactive dashboards for data visualization, enabling users to gain insights easily through well-organized metrics, user-friendly layouts, and engaging visual elements that enhance decision-making.",
      image: "dashboard.png", // Add your image path
    },
    {
      title: "Vibrant Portraits of 2020",
      category: "Illustration",
      year: "2014",
      summary: "Capturing emotions through colorful and lively digital portraits, utilizing a variety of styles and techniques that reflect individuality while connecting with the audience on an emotional level.",
      image: "apt.png", // Add your image path
    },
    {
      title: "36 Days of Malayalam type",
      category: "Typography",
      year: "2018",
      summary: "Exploring Malayalam typography through daily creative challenges, highlighting the beauty of the script while pushing boundaries in design and encouraging artistic expression within a structured format.",
      image: "a36.png", // Add your image path
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
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-600">
            Download Resume
          </button>
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
          <a href="#" className="text-blue-500 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition duration-300 ease-in-out hover:border-black dark:hover:border-white"
            >
              <span className="text-8xl mr-4">{post.icon}</span> {/* Bigger icons */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
                <p className="text-gray-400">{post.date}</p><p className="text-gray-600 dark:text-gray-400">{post.category}</p>
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
              <img src={work.image} alt={work.title} className="h-32 w-32 rounded mr-4 object-cover" />
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