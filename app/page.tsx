import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Sekarang</h2>
            <p className="text-gray-400">Buku-buku yang paling banyak dibaca minggu ini.</p>
          </div>
          <button className="text-blue-500 hover:underline font-medium">Lihat Semua</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4">Dapatkan Update Terbaru</h2>
            <p className="text-blue-100">Berlangganan newsletter kami untuk mendapatkan info rilis buku terbaru dan diskon eksklusif.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 outline-none focus:bg-white/20 w-full md:w-64"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2024 VibeBooks. Built with passion for readers.
      </footer>
    </main>
  );
}