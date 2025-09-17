import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const buttonVariants = {
  solid: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
      background: #174ea6;
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: transparent;
    &:hover:not(:disabled) {
      background: #2563eb11;
    }
  `,
};

const StyledButton = styled.button`
  font: inherit;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  border: 2px solid transparent;
  font-weight: 600;
  cursor: pointer;
  transition: background ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition}, border ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition}, opacity ${({ theme }) => theme.transition};
  outline: none;
  min-width: 100px;
  min-height: 2.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  ${({ variant }) => buttonVariants[variant]}
  &:focus {
    box-shadow: ${({ theme }) => theme.focusRing};
  }
  &:disabled, &[aria-busy="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  width: 1em;
  height: 1em;
  border: 2px solid #fff;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
`;

export default function Button({ variant = 'solid', disabled, loading, children, ...props }) {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? <Spinner aria-label="Carregando" /> : children}
    </StyledButton>
  );
}
