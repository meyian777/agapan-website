// components/SlideToast.tsx
'use client';

import { useEffect } from 'react';

export default function SlideToast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 2000); // se oculta después de 2s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 bg-[#517058] text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn z-[100]">
      {message}
    </div>
  );
}