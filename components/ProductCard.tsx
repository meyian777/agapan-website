'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'

type Product = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description, // 👈 ahora se guarda
      quantity: 1,
    })
  }

  // aseguramos la ruta de la imagen
  const imageSrc =
    product.image && product.image.trim() !== ''
      ? product.image.startsWith('/')
        ? product.image
        : `/${product.image}`
      : ''

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform animate-fadeIn">
      {imageSrc && (
        <div className="w-[160px] h-[160px] relative">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      {product.description && (
        <p className="text-xs text-gray-500 mt-1 italic">{product.description}</p>
      )}
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
      >
        Add to Cart
      </button>
    </div>
  )
}