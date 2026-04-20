import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Globe } from 'lucide-react';

export default function App() {
  const projects = [
    {
      title: "Neural Interface Dashboard",
      desc: "Visualisasi data real-time menggunakan React dan Three.js.",
      tech: ["React", "Three.js", "Tailwind"],
      link: "#"
    },
    {
      title: "E-Commerce Nexus",
      desc: "Platform belanja modern dengan sistem pembayaran terintegrasi.",
      tech: ["Next.js", "Stripe", "Prisma"],
      link: "#"
    },
    {
      title: "VibeCraft Analytics",
      desc: "Alat analisis sentimen pasar menggunakan AI.",
      tech: ["Python", "React", "TensorFlow"],
      link: "#"
    }
  ];

  return (
    <div className="bg-[#0d0f12] text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0f12]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black italic tracking-tighter text-white">VIBECRAFT.</span>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
          Neural Link Established
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 text-white drop-shadow-[0_0_30px_rgba(97,175,239,0.3)]">
          Creative <span className="text-blue-500">Developer</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">
          Membangun pengalaman digital masa depan melalui kode yang presisi dan estetika yang tajam. Spesialis dalam arsitektur Full-stack dan UI/UX modern.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-none font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
            Lihat Proyek
          </button>
          <button className="border border-white/20 px-8 py-3 rounded-none font-bold hover:bg-white/5 transition-all">
            Resume
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Selected Works</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group bg-[#16191d] border border-white/5 p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                <Code2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 rounded-sm">{t}</span>
                ))}
              </div>
              <a href={project.link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-blue-400">
                Live Preview <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 bg-white/2">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6">Expertise</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Menguasai ekosistem pengembangan web modern dengan fokus pada performa, aksesibilitas, dan skalabilitas.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500"></div> TypeScript</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500"></div> React / Next.js</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500"></div> Node.js</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500"></div> Tailwind CSS</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border border-white/5 flex flex-col items-center justify-center text-center">
              <Cpu className="text-blue-500 mb-4" />
              <span className="font-bold block text-white">Backend</span>
              <span className="text-xs text-slate-500">Robust APIs</span>
            </div>
            <div className="p-6 border border-white/5 flex flex-col items-center justify-center text-center">
              <Globe className="text-blue-500 mb-4" />
              <span className="font-bold block text-white">Frontend</span>
              <span className="text-xs text-slate-500">Pixel Perfect</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">Let's Connect.</h2>
            <p className="text-slate-500 tracking-widest uppercase text-xs">Available for new opportunities</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500 transition-colors text-white"><Github size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500 transition-colors text-white"><Linkedin size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500 transition-colors text-white"><Mail size={20} /></a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-slate-600">
          <p>© 2024 VibeCraft Nexus. All Rights Reserved.</p>
          <p>Built with React & Precision</p>
        </div>
      </footer>
    </div>
  );
}