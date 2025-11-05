'use client'
export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react'
import { getProducts } from '@/lib/get-products'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/context/CartContext'

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    async function fetch() {
      const data = await getProducts()
      console.log('📦 Productos cargados:', data) // 👈 importante
      setProducts(data)
    }
    fetch()
  }, [])

  return (
    <main className="min-h-screen bg-[#fef8f2] text-[#3a503a] px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Productos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <ProductCard product={product} />
            <button
              onClick={() => addToCart(product.id)}
              className="mt-4 w-full bg-[#3a503a] text-white py-2 rounded hover:bg-[#2e402e] transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}