import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ cartCount, theme, toggleTheme }) {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.logo} tabIndex={0} aria-label="Logo" role="button">
        <img src="/logo.png" alt="Logo da loja" style={{ height: 50}} />
      </div>
      <button
        className={styles.themeToggle}
        aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
      <div className={styles.cart} aria-label="Carrinho">
        🛒<span className={styles.cartBadge} aria-live="polite">{cartCount}</span>
      </div>
    </nav>
  );
}
