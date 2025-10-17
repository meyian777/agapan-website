'use client';

import { useEffect } from 'react';

export default function Notification({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // ⏱️ Desaparece en 2 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 bg-[#517058] text-white px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
      {message}
    </div>
  );
}