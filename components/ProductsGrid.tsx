'use client'

import ProductCard from './ProductCard'

type Product = {
  id: string
  name: string
  price: number
  image?: string
}

export default function ProductsGrid({ items }: { items: Product[] }) {
  if (!items || items.length === 0) {
    return (
      <p className="text-center text-gray-500 italic mt-6">
        No products available
      </p>
    )
  }

  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {items.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}