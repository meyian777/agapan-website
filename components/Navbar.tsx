'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import CartModal from './CartModal';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#6e8c6e] text-[#fef8f2] shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo AGAPAN"
                width={40}
                height={40}
                className="rounded shadow"
              />
            </Link>
            <span className="text-xl tracking-widest uppercase font-semibold">
              AGAPAN
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="#productos" className="hover:underline">
              Productos
            </Link>
          </div>

          {/* Botón carrito */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:scale-110 transition"
          >
            <ShoppingCart size={28} />
          </button>
        </div>
      </nav>

      {/* Carrito conectado */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}