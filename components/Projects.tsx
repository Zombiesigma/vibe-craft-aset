"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "E-Commerce AI", desc: "Next.js & OpenAI integration", tech: ["Next.js", "Tailwind", "Prisma"] },
  { title: "Crypto Dashboard", desc: "Real-time data visualization", tech: ["React", "Chart.js", "Firebase"] },
  { title: "Social Media App", desc: "Fullstack social platform", tech: ["Node.js", "MongoDB", "Socket.io"] },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center">
                <ExternalLink className="text-white/20 w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}