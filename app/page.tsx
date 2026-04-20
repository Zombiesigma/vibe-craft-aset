import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      
      {/* Skills Section Placeholder */}
      <section id="skills" className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Framer Motion"].map((skill) => (
              <div key={skill} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">I'm currently looking for new opportunities. My inbox is always open!</p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/20"
          >
            Say Hello
          </a>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VibeDev. Built with Next.js & Framer Motion.
      </footer>
    </main>
  );
}