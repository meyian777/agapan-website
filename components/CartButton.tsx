'use client'

import { useCart } from '@/context/CartContext'

type Props = {
  onClick: () => void
}

export default function CartButton({ onClick }: Props) {
  const { cart } = useCart()
  const totalItems = (cart ?? []).reduce((sum, item) => sum + item.quantity, 0)

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 px-4 py-2 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 z-50"
    >
      🛒 {totalItems}
    </button>
  )
}