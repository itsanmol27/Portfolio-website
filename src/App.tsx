import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Server, ChevronDown } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-gray-900">Anmol</a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="container mx-auto px-6 py-24 text-center relative">
          <div className="">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Anmol Garg
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 mt-5 max-w-2xl mx-auto">
              Crafting exceptional digital experiences through innovative full-stack development
            </p>
            <div className="flex justify-center gap-8">
              <a target='_blank' href="https://github.com/itsanmol27" className="text-white hover:text-blue-300 transition-all transform hover:scale-110">
                <Github size={28} />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/itsanmol27/" className="text-white hover:text-blue-300 transition-all transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a target='_blank' href="mailto:anmolgarg.dev@gmail.com" className="text-white hover:text-blue-300 transition-all transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <ChevronDown size={32} />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 bg-white" id="about">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">About Me</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3"></div>
                <img
                  src="/image.jpg"
                  alt="Profile"
                  className="relative rounded-lg w-full object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Hello! 👋</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for building practical and impactful applications. My tech journey is driven by curiosity and a desire to constantly learn and create.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy diving into new technologies, contributing to open-source projects, and sharing my experiences through blog posts.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-gray-50" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Layout className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux & React Query</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js & Express</li>
                <li>Python & FastAPI</li>
                <li>Java Spring Boot</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Database & DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>PostgreSQL & MongoDB</li>
                <li>Redis & ElasticSearch</li>
                <li>Docker & Kubernetes</li>
                <li>AWS & Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-white" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "E-Commerce Application",
                description: "An e-commerce platform with product listings, shopping cart, and secure payment integration.",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500",
                tech: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
                code: "https://github.com/itsanmol27/VibeCart",
                demo: "https://anmol-garg-vibecart.vercel.app/"
              },
              {
                title: "Social Media Platform",
                description: "A real-time social media platform with user authentication, posts, comments, and media uploads.",
                image: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                tech: ["Next.js", "Node.js", "MongoDB", "Firebase"],
                code: "https://github.com/itsanmol27/VibeZone",
                demo: "https://anmol-garg-socialmedia.vercel.app/"
              },
              {
                title: "Multiplayer Chess Game",
                description: "A real-time multiplayer game of Chess with Websockets for matchmaking and messages.",
                image: "https://plus.unsplash.com/premium_photo-1672855191351-e26398f27e5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                tech: ["Next.js", "WebSockets", "Node.js"],
                code: "https://github.com/itsanmol27/Multiplayer-Chess",
                demo: "https://anmol-garg-chess.vercel.app/"
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a target='_blank' href={project.code} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <Code2 size={20} className="mr-2" />
                      View Code
                    </a>
                    <a target='_blank' href={project.demo} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-900 text-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Let's Build Something Amazing</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Anmol Garg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="anmol@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0"></div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a target='_blank' href="https://github.com/itsanmol27" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/itsanmol27/" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a target='_blank' href="mailto:anmolgarg.dev@gmail.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© 2024 Anmol Garg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;