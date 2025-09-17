import React from 'react';
import styles from './Skeleton.module.css';

export default function Skeleton({ width, height, style = {}, className = '' }) {
  return (
    <div
      className={styles.skeleton + ' ' + className}
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
}
