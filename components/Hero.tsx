"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark pt-20">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium mb-4">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Developer</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            I build exceptional digital experiences that are fast, accessible, and visually stunning.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium"
            >
              View Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/10 blur-[120px] rounded-full"
        />
      </div>
    </section>
  );
}