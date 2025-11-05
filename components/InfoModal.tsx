'use client';

import { useState } from 'react';

export default function InfoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70]">
      <div className="relative bg-[#fef8f2] rounded-3xl shadow-2xl max-w-lg w-[90%] p-8 animate-fadeIn border-[3px] border-[#8B5E3C]/70 text-[#3a503a] font-[Montserrat]">
        
        {/* ✨ Título principal con estilo artesanal */}
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-6 tracking-wide">
          Menú <span className="text-[#6E452A] font-serif italic">AGAPAN</span>
        </h2>

        {/* 🥖 Decoración superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-[#8B5E3C] via-[#d4a373] to-[#8B5E3C] rounded-full" />

        {/* 🥐 Sección de individuales */}
        <div className="space-y-3">
          <h3 className="font-semibold text-2xl text-[#8B5E3C] mt-2">🥐 Individuales</h3>
          <ul className="pl-4 space-y-1 text-lg">
            <li>Pan de queso & bocadillo — <span className="text-[#6E452A] font-semibold">$2.50</span></li>
            <li>Pan Agridulce — <span className="text-[#6E452A] font-semibold">$3.00</span></li>
            <li>Pandebono — <span className="text-[#6E452A] font-semibold">$2.00</span></li>
          </ul>
        </div>

        {/* 🍞 Sección familiares */}
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-2xl text-[#8B5E3C]">🍞 Familiares</h3>
          <ul className="pl-4 space-y-1 text-lg">
            <li>Pan tres quesos — <span className="text-[#6E452A] font-semibold">$14.00</span></li>
            <li>Pan jamón & queso — <span className="text-[#6E452A] font-semibold">$15.00</span></li>
            <li>Pan masa madre — <span className="text-[#6E452A] font-semibold">$14.00</span></li>
          </ul>
        </div>

        {/* 🚗 Sección delivery */}
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-2xl text-[#8B5E3C]">🚗 Delivery AGAPAN</h3>
          <ul className="pl-4 space-y-1 text-lg">
            <li>Hasta 15 min → <span className="text-[#6E452A] font-semibold">$5.00</span></li>
            <li>De 15 a 20 min → <span className="text-[#6E452A] font-semibold">$9.00</span></li>
            <li>De 20 a 30 min → <span className="text-[#6E452A] font-semibold">$13.00</span></li>
          </ul>

          <div className="mt-4 bg-[#8B5E3C]/10 rounded-xl py-3 px-4 text-center italic text-[#8B5E3C] font-medium shadow-inner">
            ✨ Delivery <span className="font-semibold">GRATIS</span> en compras mayores a <span className="font-semibold">$40</span> ✨
          </div>
        </div>

        {/* 🪶 Botón Cerrar */}
        <button
          onClick={onClose}
          className="mt-8 w-full bg-gradient-to-r from-[#8B5E3C] to-[#6E452A] text-white py-3 rounded-lg font-bold tracking-wide shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5"
        >
          Cerrar Menú
        </button>
      </div>
    </div>
  );
}