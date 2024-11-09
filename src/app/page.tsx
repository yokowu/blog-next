export default function Home() {
  // Mock data for blog posts
  const blogPosts = [
    { id: 1, title: "Understanding Next.js", excerpt: "Learn the basics of Next.js and how to get started with it." },
    { id: 2, title: "Tailwind CSS Tips", excerpt: "Enhance your styling with these Tailwind CSS tips and tricks." },
    { id: 3, title: "JavaScript ES6 Features", excerpt: "Explore the new features introduced in ES6 and how to use them." },
    { id: 4, title: "React Hooks Deep Dive", excerpt: "Understand how React Hooks work and how to use them effectively." },
    { id: 5, title: "CSS Grid Layout", excerpt: "Learn how to create complex layouts easily with CSS Grid." },
    { id: 6, title: "TypeScript for Beginners", excerpt: "Get started with TypeScript and learn its basic features." },
    { id: 7, title: "Building REST APIs with Node.js", excerpt: "A comprehensive guide to building RESTful APIs using Node.js." },
    { id: 8, title: "GraphQL vs REST", excerpt: "Compare GraphQL and REST to understand their differences and use cases." },
    { id: 9, title: "Optimizing React Performance", excerpt: "Tips and best practices for optimizing React performance." },
    { id: 10, title: "Serverless Architecture", excerpt: "Exploring the benefits of serverless architecture and how it can improve your applications." },
    { id: 11, title: "The Future of AI in Web Development", excerpt: "How AI is changing the landscape of web development and what it means for the future." },
    { id: 12, title: "Building a Chatbot with RAG", excerpt: "Learn how to build a chatbot using Retrieval Augmented Generation (RAG)." },
    { id: 13, title: "Cybersecurity in the Digital Age", excerpt: "Understanding the importance of cybersecurity in the digital age and how to protect yourself online." },
    { id: 14, title: "The Impact of AI on SEO", excerpt: "How AI is changing the way we optimize websites for search engines." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className="logo bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white">
              <span className="text-2xl font-extrabold">Y</span>
            </div>
            <div className="text-xl font-bold">Yoko&apos;s Blog</div>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Posts
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 text-purple-600">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-300 to-indigo-300 text-white shadow-md">
        <div className="container mx-auto text-center p-4">
          <p>© {new Date().getFullYear()} Yoko&apos;s Blog</p>
          <a
            className="hover:text-gray-200"
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            陕ICP备2024053216号-1
          </a>
        </div>
      </footer>
    </div>
  );
}
