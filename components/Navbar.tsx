"use client";
import { motion } from "framer-motion";
import { BookOpen, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center"
    >
      <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
        <BookOpen className="text-blue-500" />
        <span>VIBE<span className="text-blue-500">BOOKS</span></span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <Link href="#" className="hover:text-white transition-colors">Library</Link>
        <Link href="#" className="hover:text-white transition-colors">Categories</Link>
        <Link href="#" className="hover:text-white transition-colors">Bestsellers</Link>
        <Link href="#" className="hover:text-white transition-colors">New Releases</Link>
      </div>

      <div className="flex gap-5 items-center">
        <Search className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center cursor-pointer">
          <User className="w-4 h-4" />
        </div>
      </div>
    </motion.nav>
  );
}