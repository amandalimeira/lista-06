
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, title: 'Fone Bluetooth Headset', price: 199.9, rating: 4.7, tag: 'Novo', image: 'https://http2.mlstatic.com/D_Q_NP_805943-MLU76901590444_062024-O.webp' },
  { id: 2, title: 'Smartwatch Fitness', price: 349.0, rating: 4.3, tag: 'Promo', image: 'https://m.media-amazon.com/images/I/716UYkJVoiL._UF1000,1000_QL80_.jpg' },
  { id: 3, title: 'Câmera de Ação 4K', price: 499.9, rating: 4.8, tag: 'Novo', image: 'https://m.media-amazon.com/images/I/41-KmasXf-S._UF1000,1000_QL80_.jpg' },
  { id: 4, title: 'Teclado Mecânico RGB', price: 299.0, rating: 4.5, tag: 'Promo', image: 'https://m.media-amazon.com/images/I/61Tn5a431IL.jpg' },
  { id: 5, title: 'Mouse Gamer', price: 149.9, rating: 4.2, tag: 'Novo', image: 'https://m.media-amazon.com/images/I/51jgG71ECyL._UF1000,1000_QL80_.jpg' },
  { id: 6, title: 'Monitor 24" Full HD', price: 899.0, rating: 4.6, tag: 'Promo', image: 'https://m.media-amazon.com/images/I/51Of-32DGyL.jpg' },
];

function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
}


export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  function handleAddToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <div className="min-h-screen bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark transition-colors">
      <Navbar theme={theme} setTheme={setTheme} cartCount={cart.length} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Produtos em destaque</h1>
        <section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          aria-label="Lista de produtos"
        >
          {(loading
            ? Array.from({ length: 6 })
            : products
          ).map((item, i) => (
            <ProductCard
              key={item?.id || i}
              product={item}
              loading={loading}
              onAddToCart={handleAddToCart}
              variant={i % 3 === 0 ? 'solid' : i % 3 === 1 ? 'outline' : 'ghost'}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
