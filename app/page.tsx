"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import ReaderModal from "@/components/ReaderModal";
import { books, Book } from "@/data/books";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6 md:px-12">
      <Navbar />
      
      <header className="max-w-7xl mx-auto mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
        >
          PERPUSTAKAAN <span className="text-blue-600">DIGITAL.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Eksplorasi koleksi eBook eksklusif dengan pengalaman membaca yang imersif dan futuristik.
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <BookCard book={book} onClick={setSelectedBook} />
          </motion.div>
        ))}
      </div>

      <ReaderModal 
        book={selectedBook} 
        onClose={() => setSelectedBook(null)} 
      />
    </main>
  );
}