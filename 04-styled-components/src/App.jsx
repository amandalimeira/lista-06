
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import styled from 'styled-components';
const ProductGrid = styled.main`
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PRODUCTS = [
  { id: 1, title: 'Fone Bluetooth Headset', price: 199.9, rating: 4.7, tag: 'Novo', image: 'https://http2.mlstatic.com/D_Q_NP_805943-MLU76901590444_062024-O.webp' },
  { id: 2, title: 'Smartwatch Fitness', price: 349.0, rating: 4.3, tag: 'Promo', image: 'https://m.media-amazon.com/images/I/716UYkJVoiL._UF1000,1000_QL80_.jpg' },
  { id: 3, title: 'Câmera de Ação 4K', price: 499.9, rating: 4.8, tag: 'Novo', image: 'https://m.media-amazon.com/images/I/41-KmasXf-S._UF1000,1000_QL80_.jpg' },
  { id: 4, title: 'Teclado Mecânico RGB', price: 299.0, rating: 4.5, tag: 'Promo', image: 'https://m.media-amazon.com/images/I/61Tn5a431IL.jpg' },
  { id: 5, title: 'Mouse Gamer', price: 149.9, rating: 4.2, tag: 'Novo', image: 'https://m.media-amazon.com/images/I/51jgG71ECyL._UF1000,1000_QL80_.jpg' },
  { id: 6, title: 'Monitor 24" Full HD', price: 899.0, rating: 4.6, tag: 'Promo', image: 'https://m.media-amazon.com/images/I/51Of-32DGyL.jpg' },
];

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }
  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  function handleAdd(product) {
    setCart((c) => [...c, product]);
  }

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <div style={{ minHeight: '100vh', background: theme === 'dark' ? darkTheme.colors.bg : lightTheme.colors.bg, color: theme === 'dark' ? darkTheme.colors.text : lightTheme.colors.text }}>
        <Navbar cartCount={cart.length} theme={theme} toggleTheme={toggleTheme} />
        <ProductGrid aria-label="Lista de produtos">
          {(loading ? Array(6).fill(null) : PRODUCTS).map((product, i) => (
            <ProductCard
              key={product ? product.id : i}
              product={product}
              loading={loading}
              onAdd={() => handleAdd(product)}
              buttonVariant="solid"
            />
          ))}
        </ProductGrid>
      </div>
    </ThemeProvider>
  );
}
