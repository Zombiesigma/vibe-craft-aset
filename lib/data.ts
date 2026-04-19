export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  rating: number;
  description: string;
  content: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Art of Minimalism",
    author: "Leo Babauta",
    category: "Lifestyle",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    description: "Learn how to simplify your life and focus on what matters most.",
    content: "Minimalism is not about having nothing, it's about making room for everything that matters..."
  },
  {
    id: "2",
    title: "Digital Fortress",
    author: "Dan Brown",
    category: "Thriller",
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    description: "A high-stakes chase through the world of cryptography and national security.",
    content: "When the NSA's invincible code-breaking machine encounters a mysterious code..."
  },
  {
    id: "3",
    title: "Beyond the Stars",
    author: "Elena Vance",
    category: "Sci-Fi",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop",
    description: "An epic journey across galaxies to find a new home for humanity.",
    content: "The engines hummed with a low frequency that vibrated through the hull of the ship..."
  }
];