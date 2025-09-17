import React from 'react';

export default function Button({ variant = 'solid', disabled, loading, children, ...props }) {
  return (
    <button
      className={`btn btn--${variant}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? <span className="btn__spinner" aria-label="Carregando" /> : children}
    </button>
  );
}
