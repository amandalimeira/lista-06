import React from 'react';

export default function Skeleton({ width, height, style = {}, className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
}
