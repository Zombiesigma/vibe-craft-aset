"use client";
import { Search, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <BookOpen className="text-blue-500" />
        <span className="text-xl font-bold tracking-tighter">VIBE<span className="text-blue-500">READER</span></span>
      </motion.div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Cari buku..." 
            className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-2 ring-blue-500 transition-all w-64"
          />
        </div>
        <User className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
      </div>
    </nav>
  );
}