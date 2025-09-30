'use client';

import { useState } from 'react';
import CartModal from './CartModal';
import CartButton from './CartButton';

export default function CartProviderWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CartButton onClick={() => setIsOpen(true)} />
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}