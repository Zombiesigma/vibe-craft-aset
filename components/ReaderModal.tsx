"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Book } from "@/data/books";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ReaderModal({ book, onClose }: { book: Book | null; onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!book) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-10"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-8 h-8" />
        </button>

        <div className="max-w-4xl w-full h-full flex flex-col items-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex-1 w-full bg-[#111] rounded-2xl border border-white/10 p-8 md:p-16 shadow-2xl overflow-y-auto"
          >
            <div className="max-w-prose mx-auto">
              <span className="text-blue-500 text-sm font-mono mb-4 block">Halaman {currentPage + 1}</span>
              <h2 className="text-3xl font-bold mb-8">{book.title}</h2>
              <p className="text-xl leading-relaxed text-gray-300">
                {book.content[currentPage] || "Konten sedang dimuat..."}
              </p>
            </div>
          </motion.div>

          <div className="mt-8 flex gap-4 items-center">
            <button 
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-3 bg-white/5 rounded-full disabled:opacity-30 hover:bg-white/10"
            >
              <ChevronLeft />
            </button>
            <span className="font-mono">{currentPage + 1} / {book.content.length}</span>
            <button 
              disabled={currentPage === book.content.length - 1}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-3 bg-white/5 rounded-full disabled:opacity-30 hover:bg-white/10"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}