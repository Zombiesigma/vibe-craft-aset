export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  description: string;
  rating: number;
  price: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Art of Minimalism",
    author: "Elena Rose",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
    category: "Lifestyle",
    description: "Temukan keindahan dalam kesederhanaan dan cara mengoptimalkan hidup Anda.",
    rating: 4.8,
    price: "Rp 89.000"
  },
  {
    id: "2",
    title: "Digital Renaissance",
    author: "Marcus Thorne",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800",
    category: "Technology",
    description: "Bagaimana teknologi mengubah cara kita berpikir dan berkarya di era modern.",
    rating: 4.9,
    price: "Rp 120.000"
  },
  {
    id: "3",
    title: "Silent Echoes",
    author: "Sarah Jenkins",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    category: "Mystery",
    description: "Sebuah thriller psikologis yang akan membuat Anda terjaga sepanjang malam.",
    rating: 4.5,
    price: "Rp 75.000"
  },
  {
    id: "4",
    title: "Future of AI",
    author: "Dr. Aris",
    cover: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
    category: "Science",
    description: "Eksplorasi mendalam tentang kecerdasan buatan dan masa depan kemanusiaan.",
    rating: 5.0,
    price: "Rp 150.000"
  }
];