
import React from "react";
import Button from "./Button";

// Exemplo de fallback para loading
function SkeletonCard() {
  return (
    <div className="animate-pulse bg-card-light dark:bg-card-dark rounded-lg p-4 flex flex-col gap-4 shadow-md min-h-[320px]">
      <div className="bg-skeleton aspect-square w-full rounded-md" />
      <div className="h-6 bg-skeleton w-3/4 rounded" />
      <div className="h-4 bg-skeleton w-1/2 rounded" />
      <div className="h-4 bg-skeleton w-1/3 rounded" />
      <div className="flex-1" />
      <div className="h-10 bg-skeleton w-full rounded" />
    </div>
  );
}

export default function ProductCard({ product, loading, onAddToCart, variant }) {
  if (loading) return <SkeletonCard />;

  const price = product.price != null ? `R$ ${product.price.toFixed(2).replace('.', ',')}` : "R$ 0,00";
  const rating = product.rating || 0;
  const tag = product.tag || "";

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg p-4 flex flex-col gap-3 shadow-md min-h-[340px]">
      {/* Imagem 1:1 com espaço reservado */}
      <div className="w-full aspect-square bg-skeleton rounded-md mb-2 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Tag e rating */}
      <div className="flex items-center justify-between mb-1">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${tag === "Promo" ? "bg-tagPromo text-white" : "bg-primary/10 text-primary"}`}>
          {tag}
        </span>
        <span className="flex items-center gap-1 text-rating font-medium text-sm">
          <span aria-label="Nota" className="text-yellow-400">★</span>
          {rating}
        </span>
      </div>

      {/* Título 2 linhas com ellipsis */}
      <h2
        className="font-semibold text-base text-text-light dark:text-text-dark leading-tight line-clamp-2 h-[2.7em]"
        title={product.title}
        style={{ WebkitLineClamp: 2 }}
      >
        {product.title}
      </h2>

      {/* Preço */}
      <div className="text-lg font-bold text-primary dark:text-primary-dark mb-1">{price}</div>

      <div className="flex-1" />

      {/* Botão Adicionar com variantes */}
      <Button
        variant={variant}
        aria-label={`Adicionar ${product.title} ao carrinho`}
        onClick={() => onAddToCart(product)}
      >
        Adicionar
      </Button>
    </div>
  );
}
