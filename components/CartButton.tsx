'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartButton({ onClick }: { onClick: () => void }) {
  const { items } = useCart();
  const [glow, setGlow] = useState(false);

  // ✨ Detecta cuando se agrega producto y activa la animación Glow
  useEffect(() => {
    if (items.length > 0) {
      setGlow(true);
      const timeout = setTimeout(() => setGlow(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [items]);

  // Cantidad total de productos
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className={`cart-button ${glow ? 'cart-glow' : ''}`}
      aria-label="Abrir carrito"
    >
      <ShoppingCart className="w-6 h-6" />
      {totalQty > 0 && (
        <span className="cart-badge">{totalQty}</span>
      )}
    </button>
  );
}