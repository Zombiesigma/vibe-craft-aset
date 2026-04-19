"use client";
import { motion } from "framer-motion";
import { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <motion.div
      layoutId={`card-${book.id}`}
      whileHover={{ scale: 1.05, y: -10 }}
      onClick={() => onClick(book)}
      className="cursor-pointer group"
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/5">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">{book.author}</p>
          <h3 className="font-bold text-lg">{book.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}