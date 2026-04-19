export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter">MODERN.WEB</div>
      <div className="space-x-8 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition">Fitur</a>
        <a href="#" className="hover:text-white transition">Tentang</a>
        <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-xs">
          Mulai Sekarang
        </button>
      </div>
    </nav>
  );
}