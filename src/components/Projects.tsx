import React from 'react';

const projects = [
  {
    title: "VibeCraft Dashboard",
    description: "A real-time analytics engine built with Next.js and WebSockets.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js"],
    link: "#"
  },
  {
    title: "Nexus Core API",
    description: "High-throughput RESTful API designed for distributed systems.",
    tech: ["Go", "PostgreSQL", "Docker"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-white dark:bg-slate-950">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{t}</span>
              ))}
            </div>
            <a href={project.link} className="text-blue-600 font-medium hover:underline">Case Study →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;