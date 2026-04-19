"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Book } from "@/lib/data";

export default function BookCard({ book }: { book: Book }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-4 transition-all hover:border-blue-500/50"
    >
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
        <img 
          src={book.cover} 
          alt={book.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 text-xs">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          {book.rating}
        </div>
      </div>
      
      <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-blue-400 transition-colors">
        {book.title}
      </h3>
      <p className="text-gray-500 text-sm mb-3">{book.author}</p>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="font-semibold text-blue-400">{book.price}</span>
        <button className="text-xs bg-white/10 hover:bg-blue-600 px-3 py-1.5 rounded-lg transition-colors">
          Detail
        </button>
      </div>
    </motion.div>
  );
}