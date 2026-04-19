export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  content: string[];
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Art of Coding",
    author: "Vibe AI",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400",
    description: "Panduan mendalam tentang estetika dalam pemrograman modern.",
    content: ["Bab 1: Filosofi Vibe...", "Bab 2: Struktur Kode...", "Bab 3: Implementasi Visual..."]
  },
  {
    id: "2",
    title: "Digital Minimalism",
    author: "Nexus Dev",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400",
    description: "Membangun aplikasi dengan fokus pada pengalaman pengguna yang bersih.",
    content: ["Bab 1: Mengurangi Noise...", "Bab 2: Fokus pada Fungsi...", "Bab 3: Simplicity is Key..."]
  },
  {
    id: "3",
    title: "The Future of Web",
    author: "Aurora Bright",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400",
    description: "Eksplorasi teknologi web yang akan datang di dekade berikutnya.",
    content: ["Bab 1: Web 3.0...", "Bab 2: AI Integration...", "Bab 3: Spatial UI..."]
  }
];