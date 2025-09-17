import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonAnim = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const SkeletonDiv = styled.div`
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnim} 1.2s ease-in-out infinite;
  border-radius: 8px;
  min-height: 1em;
  min-width: 1em;
  display: block;
  ${({ aspect }) => aspect && 'aspect-ratio: 1/1; width: 100%; height: auto;'}
`;

export default function Skeleton({ width, height, style = {}, aspect = false }) {
  return (
    <SkeletonDiv
      style={{ width, height, ...style }}
      aspect={aspect}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
}
