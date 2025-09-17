import React from "react";
import logo from "../assets/react.svg";

export default function Navbar({ theme, setTheme, cartCount }) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark shadow-sm">
      {/* Logo à esquerda */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo DigiTec" className="w-8 h-8" />
        <span className="font-bold text-lg tracking-tight">DigiTec</span>
      </div>

      {/* Botão de alternância de tema ao centro (mobile: à direita) */}
      <button
        aria-label="Alternar tema"
        className="rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark transition-colors mx-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title={theme === "dark" ? "Tema claro" : "Tema escuro"}
      >
        <span className="block dark:hidden">
          {/* Ícone de lua (tema claro) */}
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        </span>
        <span className="hidden dark:block">
          {/* Ícone de sol (tema escuro) */}
          <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-7.05l-1.41 1.41M6.34 17.66l-1.41 1.41M17.66 17.66l1.41 1.41M6.34 6.34L4.93 4.93" /></svg>
        </span>
      </button>

      {/* Carrinho à direita */}
      <div className="flex items-center relative">
        <button aria-label="Ver carrinho" className="p-2 rounded-full hover:bg-bgSecondary dark:hover:bg-bgSecondary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
          {/* Ícone de carrinho */}
          <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h2l3.6 7.59a1 1 0 0 0 .83.41H19a1 1 0 0 0 .92-.63l3.24-7.26A1 1 0 0 0 22.24 0H6.21" /></svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5 py-0.5 min-w-[1.2em] text-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
