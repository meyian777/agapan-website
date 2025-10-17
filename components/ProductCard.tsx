'use client';

import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#fef8f2] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-[#3a503a]">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">${product.price}</p>
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
              quantity: 1,
            })
          }
          className="w-full bg-[#517058] text-white py-2 rounded hover:bg-[#405944] transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}