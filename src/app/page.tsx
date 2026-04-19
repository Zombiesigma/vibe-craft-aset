import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Projects />
      <section id="about" className="py-20 px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About My Process</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I don't just write code; I solve business problems. My approach focuses 
            on performance, accessibility, and clean architecture to ensure 
            long-term maintainability and user satisfaction.
          </p>
        </div>
      </section>
      <footer className="py-10 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-slate-500">© {new Date().getFullYear()} VibeCraft Nexus. All rights reserved.</p>
      </footer>
    </main>
  );
}