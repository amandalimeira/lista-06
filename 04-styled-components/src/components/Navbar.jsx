import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.space};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0.02em;
  outline: none;
  display: flex;
  align-items: center;
`;
const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  padding: 0.5em;
  transition: background ${({ theme }) => theme.transition};
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.focusRing};
  }
`;
const Cart = styled.div`
  position: relative;
  font-size: 1.5rem;
`;
const CartBadge = styled.span`
  position: absolute;
  top: -0.5em;
  right: -0.7em;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 0.75rem;
  border-radius: 999px;
  padding: 0.2em 0.5em;
  min-width: 1.5em;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 1px 4px #0002;
`;

export default function Navbar({ cartCount, theme, toggleTheme }) {
  return (
    <Nav aria-label="Main navigation">
      <Logo tabIndex={0} aria-label="Logo" role="button">
        <img src="/logo.png" alt="Logo da loja" style={{ height: 70 }} />
      </Logo>
      <ThemeToggle
        aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </ThemeToggle>
      <Cart aria-label="Carrinho">
        🛒<CartBadge aria-live="polite">{cartCount}</CartBadge>
      </Cart>
    </Nav>
  );
}
