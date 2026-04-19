"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[400px] rounded-3xl overflow-hidden flex items-center px-12"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-40"
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Featured Collection
            </motion.span>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-black mb-6 leading-tight"
            >
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Infinite Universe</span> of Stories
            </motion.h1>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              Start Reading Now
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Library Grid */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Your Library</h2>
          <div className="flex gap-4">
            {["All", "Trending", "Sci-Fi", "Business"].map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}