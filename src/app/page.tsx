import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Bangun Masa Depan <br /> Lebih Cepat.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10">
          Solusi pengembangan web modern dengan performa tinggi dan desain minimalis. 
          Fokus pada pengalaman pengguna yang elegan.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-zinc-200 transition">
            Dapatkan Akses
          </button>
          <button className="border border-zinc-800 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-900 transition">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>

      {/* Feature Section Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-10 w-10 bg-zinc-800 rounded-lg"></div>
              <h3 className="text-xl font-semibold">Fitur Unggulan {i}</h3>
              <p className="text-zinc-500">
                Deskripsi singkat mengenai layanan yang ditawarkan untuk meningkatkan produktivitas Anda.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}