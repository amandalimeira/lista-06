import React from 'react';

export default function Navbar({ cartCount, theme, toggleTheme }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
    <div className="navbar__logo" tabIndex={0} aria-label="Logo" role="button">
      <img src="/logo.png" alt="Logo da loja" style={{ height: 50 }} />
    </div>
      <button
        className="navbar__theme-toggle"
        aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
      <div className="navbar__cart" aria-label="Carrinho">
        🛒<span className="navbar__cart-badge" aria-live="polite">{cartCount}</span>
      </div>
    </nav>
  );
}
