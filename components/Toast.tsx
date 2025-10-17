'use client';

import { useEffect } from 'react';

export default function SlideToast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Se cierra en 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 bg-[#517058] text-white px-6 py-3 rounded-lg shadow-lg animate-slideIn z-[100]">
      {message}
    </div>
  );
}