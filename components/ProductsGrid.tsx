'use client';

import ProductCard from './ProductCard';

export default function ProductsGrid({ items }: { items: any[] }) {
  if (!items || items.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No hay productos disponibles en este momento.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
