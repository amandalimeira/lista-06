import React from 'react';
import styles from './Button.module.css';

export default function Button({ variant = 'solid', disabled, loading, children, ...props }) {
  return (
    <button
      className={styles.btn + ' ' + styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? <span className={styles.spinner} aria-label="Carregando" /> : children}
    </button>
  );
}
