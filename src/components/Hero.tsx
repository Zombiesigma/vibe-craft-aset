import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 bg-slate-900 text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Building <span className="text-blue-500">Scalable</span> Digital Experiences.
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl mb-8">
        I am a Full-Stack Developer specializing in high-performance applications 
        and intuitive user interfaces. Currently engineering at the intersection of 
        design and technology.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
          View My Work
        </a>
        <a href="#contact" className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;