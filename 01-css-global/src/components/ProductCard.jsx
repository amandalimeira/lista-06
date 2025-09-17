import React from 'react';
import Button from './Button';
import Skeleton from './Skeleton';

export default function ProductCard({ product, loading, onAdd, buttonVariant }) {
  if (loading) {
    return (
      <div className="product-card" tabIndex={0} aria-busy="true">
        <Skeleton width="100%" height="0" className="product-card__img skeleton--aspect" />
        <div className="product-card__body">
          <Skeleton width="80%" height="1.5em" style={{ marginBottom: 8 }} />
          <Skeleton width="40%" height="1.2em" />
        </div>
      </div>
    );
  }
  return (
    <div className="product-card" tabIndex={0}>
      <div className="product-card__img-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__img"
          loading="lazy"
          width={300}
          height={300}
          style={{ aspectRatio: '1/1' }}
        />
        {product.tag && <span className={`product-card__tag product-card__tag--${product.tag.toLowerCase()}`}>{product.tag}</span>}
      </div>
      <div className="product-card__body">
        <div className="product-card__title" title={product.title}>{product.title}</div>
        <div className="product-card__price-rating">
          <span className="product-card__price">R$ {product.price.toFixed(2)}</span>
          <span className="product-card__rating" aria-label={`Nota ${product.rating}`}>{'★'.repeat(Math.round(product.rating))}</span>
        </div>
        <Button
          variant={buttonVariant}
          onClick={onAdd}
          aria-label={`Adicionar ${product.title} ao carrinho`}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}
