"use client";
import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import { Book } from "@/lib/data";

export default function BookCard({ book }: { book: Book }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white p-4 rounded-full shadow-xl shadow-blue-500/40"
          >
            <Play fill="currentColor" className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          <Star className="w-3 h-3 fill-current" />
          <span className="text-xs font-bold">{book.rating}</span>
          <span className="text-gray-500 text-[10px] ml-auto uppercase tracking-widest">{book.category}</span>
        </div>
        <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-blue-400 transition-colors">{book.title}</h3>
        <p className="text-gray-400 text-sm">{book.author}</p>
      </div>
    </motion.div>
  );
}