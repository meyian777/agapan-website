'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';
import { getRandomVerse } from '@/lib/bible-verses';

export default function CartModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const buildMessage = () => {
    const verse = getRandomVerse();
    const productsList = items
      .map((item) => `• ${item.quantity}x ${item.name} - $${item.price * item.quantity}`)
      .join('%0A');

    return `¡Hola! Me gustaría hacer un pedido:%0A%0A${productsList}%0A%0ATotal: $${total.toFixed(
      2
    )}%0A%0A🙏 Gracias por su atención.%0A📖 ${verse}`;
  };

  const openWhatsApp = (phone: string) => {
    const url = `https://wa.me/1${phone}?text=${buildMessage()}`;
    window.open(url, '_blank');
    clearCart();
    onClose();
  };

  return (
    <div className="cart-panel slide-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#8B5E3C]">Tu Carrito</h2>
        <button onClick={onClose} className="remove-btn text-2xl">
          ×
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md shadow"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="qty-btn"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="qty-input"
                    />
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Eliminar ${item.name}`}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <p className="text-lg font-semibold">
              Total: <span className="text-[#8B5E3C]">${total.toFixed(2)}</span>
            </p>

            {!showWhatsApp ? (
              <button
                className="confirm-btn w-full mt-4 pulse"
                onClick={() => setShowWhatsApp(true)}
              >
                Confirmar Pedido
              </button>
            ) : (
              <div className="space-y-2 mt-4">
                <button
                  className="whatsapp-mari w-full flex items-center justify-center gap-2"
                  onClick={() => openWhatsApp('9045822072')}
                >
                  {/* Ícono oficial WhatsApp */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.002 3C9.374 3 4 8.373 4 15c0 2.648.771 5.104 2.105 7.166L4 29l7.063-2.067A11.93 11.93 0 0 0 16.002 27c6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 2c5.523 0 10 4.478 10 10s-4.477 10-10 10a9.93 9.93 0 0 1-5.166-1.396l-.365-.219-4.105 1.201 1.219-3.896-.239-.375A9.932 9.932 0 0 1 6 15c0-5.522 4.477-10 10-10zm5.188 13.906c-.281-.14-1.676-.828-1.938-.922-.261-.097-.451-.14-.64.14-.187.28-.739.922-.906 1.11-.167.187-.347.21-.628.07-.281-.14-1.186-.437-2.258-1.39-.834-.743-1.395-1.66-1.562-1.94-.167-.28-.018-.432.122-.57.126-.125.28-.327.42-.49.14-.163.187-.28.28-.467.093-.187.047-.35-.023-.49-.07-.14-.64-1.543-.877-2.11-.23-.55-.465-.474-.64-.483-.167-.009-.357-.011-.547-.011s-.5.07-.762.35c-.261.28-1.0.98-1.0 2.388 0 1.408 1.025 2.77 1.168 2.958.14.187 2.02 3.083 4.89 4.324.684.295 1.218.472 1.635.605.686.218 1.31.187 1.805.113.551-.082 1.676-.684 1.91-1.343.234-.66.234-1.223.163-1.344-.07-.122-.258-.187-.539-.328z"/>
                  </svg>
                  WhatsApp Mari
                </button>

                <button
                  className="whatsapp-ian w-full flex items-center justify-center gap-2"
                  onClick={() => openWhatsApp('9045812039')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.002 3C9.374 3 4 8.373 4 15c0 2.648.771 5.104 2.105 7.166L4 29l7.063-2.067A11.93 11.93 0 0 0 16.002 27c6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 2c5.523 0 10 4.478 10 10s-4.477 10-10 10a9.93 9.93 0 0 1-5.166-1.396l-.365-.219-4.105 1.201 1.219-3.896-.239-.375A9.932 9.932 0 0 1 6 15c0-5.522 4.477-10 10-10zm5.188 13.906c-.281-.14-1.676-.828-1.938-.922-.261-.097-.451-.14-.64.14-.187.28-.739.922-.906 1.11-.167.187-.347.21-.628.07-.281-.14-1.186-.437-2.258-1.39-.834-.743-1.395-1.66-1.562-1.94-.167-.28-.018-.432.122-.57.126-.125.28-.327.42-.49.14-.163.187-.28.28-.467.093-.187.047-.35-.023-.49-.07-.14-.64-1.543-.877-2.11-.23-.55-.465-.474-.64-.483-.167-.009-.357-.011-.547-.011s-.5.07-.762.35c-.261.28-1.0.98-1.0 2.388 0 1.408 1.025 2.77 1.168 2.958.14.187 2.02 3.083 4.89 4.324.684.295 1.218.472 1.635.605.686.218 1.31.187 1.805.113.551-.082 1.676-.684 1.91-1.343.234-.66.234-1.223.163-1.344-.07-.122-.258-.187-.539-.328z"/>
                  </svg>
                  WhatsApp Ian
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}