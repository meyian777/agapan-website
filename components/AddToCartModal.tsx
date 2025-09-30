'use client'

import { useCart } from '@/context/CartContext'

type Props = {
  onClose: () => void
}

export default function CartModal({ onClose }: Props) {
  const { cart, removeFromCart, clearCart } = useCart()
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <ul className="space-y-3">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <>
            <div className="mt-4 font-bold text-right">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={clearCart}
                className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Clear
              </button>
              <button
                onClick={onClose}
                className="px-3 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}