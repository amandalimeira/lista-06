import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Skeleton from './Skeleton';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: box-shadow ${({ theme }) => theme.transition}, border ${({ theme }) => theme.transition}, background ${({ theme }) => theme.transition};
  outline: none;
  min-width: 0;
  &:focus {
    box-shadow: 0 0 0 3px #2563eb66, ${({ theme }) => theme.colors.shadow};
  }
  &:hover {
    box-shadow: 0 4px 24px #2563eb33, ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  background: #e5e7eb;
  border-radius: ${({ theme }) => theme.radius} ${({ theme }) => theme.radius} 0 0;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: ${({ theme }) => theme.radius} ${({ theme }) => theme.radius} 0 0;
  background: #e5e7eb;
  transition: opacity ${({ theme }) => theme.transition};
`;
const Tag = styled.span`
  position: absolute;
  top: 0.7em;
  left: 0.7em;
  background: ${({ promo, theme }) => promo ? theme.colors.tagPromo : theme.colors.primary};
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.2em 0.7em;
  box-shadow: 0 1px 4px #0002;
  letter-spacing: 0.02em;
`;
const Body = styled.div`
  padding: ${({ theme }) => theme.space};
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  max-height: 2.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const PriceRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
`;
const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
const Rating = styled.span`
  color: ${({ theme }) => theme.colors.rating};
  font-size: 1rem;
  letter-spacing: 0.05em;
`;

export default function ProductCard({ product, loading, onAdd, buttonVariant }) {
  if (loading) {
    return (
      <Card tabIndex={0} aria-busy="true">
        <Skeleton width="100%" height="0" aspect />
        <Body>
          <Skeleton width="80%" height="1.5em" style={{ marginBottom: 8 }} />
          <Skeleton width="40%" height="1.2em" />
        </Body>
      </Card>
    );
  }
  return (
    <Card tabIndex={0}>
      <ImgWrapper>
        <Img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={300}
          height={300}
          style={{ aspectRatio: '1/1' }}
        />
        {product.tag && <Tag promo={product.tag === 'Promo'}>{product.tag}</Tag>}
      </ImgWrapper>
      <Body>
        <Title title={product.title}>{product.title}</Title>
        <PriceRating>
          <Price>R$ {product.price.toFixed(2)}</Price>
          <Rating aria-label={`Nota ${product.rating}`}>{'★'.repeat(Math.round(product.rating))}</Rating>
        </PriceRating>
        <Button
          variant={buttonVariant}
          onClick={onAdd}
          aria-label={`Adicionar ${product.title} ao carrinho`}
        >
          Adicionar
        </Button>
      </Body>
    </Card>
  );
}
