'use client'

import { useCart } from '@/context/CartContext'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: Props) {
  const { cart, removeFromCart, clearCart } = useCart()
  if (!isOpen) return null

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // 🔥 Generar mensaje dinámico para WhatsApp
  const orderMessage = cart
    .map(
      item =>
        `• ${item.name} (${item.quantity} × $${item.price.toFixed(2)})\n   ${item.description ?? ''}`
    )
    .join('\n\n')

  const whatsappText = encodeURIComponent(
    `Hi! I would like to make an order from AGAPAN 🥖:\n\n${orderMessage}\n\nTotal: $${totalPrice.toFixed(
      2
    )}\n\nThank you!`
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-[#fef8f2] text-[#3a503a] w-96 rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
        
        {/* Header */}
        <h2 className="text-2xl font-bold text-center border-b border-[#6e8c6e]/30 pb-3 mb-4">
          🛒 Your Cart
        </h2>

        {/* Listado de productos */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 italic">Your cart is empty</p>
        ) : (
          <ul className="space-y-4 max-h-[45vh] overflow-y-auto pr-2">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex flex-col bg-white rounded-lg shadow-sm p-3 border border-[#6e8c6e]/20"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    ✕
                  </button>
                </div>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-2 italic">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Total + Acciones */}
        {cart.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold border-t border-[#6e8c6e]/30 pt-3">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm font-medium"
                >
                  Clear
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 rounded-lg bg-[#6e8c6e] text-[#fef8f2] hover:bg-[#5c745c] font-medium"
                >
                  Close
                </button>
              </div>

              {/* WhatsApp order buttons con mensaje dinámico */}
              <a
                href={`https://wa.me/19045812039?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-center font-medium"
              >
                Make Your Order (Ian)
              </a>
              <a
                href={`https://wa.me/19045822072?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-center font-medium"
              >
                Make Your Order (Mari)
              </a>
            </div>
          </div>
        )}

        {/* Botón cerrar flotante */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
    </div>
  )
}