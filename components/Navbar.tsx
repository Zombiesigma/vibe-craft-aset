"use client";
import { motion } from "framer-motion";
import { BookOpen, Search, User, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BookOpen className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tighter">VIBE<span className="text-blue-500">READER</span></span>
      </div>

      <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full w-96">
        <Search className="w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search your library..." 
          className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-white/20" />
      </div>
    </motion.nav>
  );
}