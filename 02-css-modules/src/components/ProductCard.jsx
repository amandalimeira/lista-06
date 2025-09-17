import React from 'react';
import Button from './Button';
import Skeleton from './Skeleton';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, loading, onAdd, buttonVariant }) {
  if (loading) {
    return (
      <div className={styles.productCard} tabIndex={0} aria-busy="true">
        <Skeleton width="100%" height="0" className={styles.skeletonAspect} />
        <div className={styles.body}>
          <Skeleton width="80%" height="1.5em" style={{ marginBottom: 8 }} />
          <Skeleton width="40%" height="1.2em" />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.productCard} tabIndex={0}>
      <div className={styles.imgWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.img}
          loading="lazy"
          width={300}
          height={300}
          style={{ aspectRatio: '1/1' }}
        />
        {product.tag && <span className={styles[`tag${product.tag === 'Promo' ? 'Promo' : ''}`]}>{product.tag}</span>}
      </div>
      <div className={styles.body}>
        <div className={styles.title} title={product.title}>{product.title}</div>
        <div className={styles.priceRating}>
          <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
          <span className={styles.rating} aria-label={`Nota ${product.rating}`}>{'★'.repeat(Math.round(product.rating))}</span>
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
