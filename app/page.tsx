'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

import ProductsGrid from "@/components/ProductsGrid";
import CartButton from "@/components/CartButton";
import CartModal from "@/components/CartModal";
import { getProducts } from "@/lib/get-products";

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {/* VIDEO DE FONDO – Solo visible detrás de 'Recommended of the week' */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-[100vh] h-full object-cover z-[-2]"
      >
        <source src="/media/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY VERDE excepto sobre "Recommended" */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#6e8c6e]/70 z-[-1]" />

      {/* HERO PRINCIPAL */}
      <header className="relative z-10 flex flex-col md:flex-row items-center justify-between py-16 px-8 space-y-4 md:space-y-0">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="AGAPAN Logo"
            width={200}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="text-right text-[#fef8f2] space-y-2">
          <h1 className="text-6xl tracking-[0.4em] uppercase">AGAPAN</h1>
          <p className="text-4xl italic font-[Great_Vibes]">Artisan Bakery</p>
        </div>
      </header>

     {/* SECCIÓN VERDE */}
<section className="relative z-10 py-16 px-6 bg-[#6e8c6e]/80 text-[#fef8f2] text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Baking with Purpose</h2>
  <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
    At AGAPAN, every loaf tells a story — of heritage, love, and authenticity.
    Our bakery is built on tradition, perfected with time, and always infused with care.
  </p>

  {/* 🔥 NUEVO TEXTO BÍBLICO */}
  <div className="mt-8 max-w-3xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
    <p>
      But bread is more than food. In the Bible, bread carries a profound meaning: it
      represents life, provision, and God’s love for humanity. We honor this sacred symbolism
      by also crafting <span className="font-bold">unleavened bread</span>, following the
      example of Scripture.
    </p>
    <p className="italic">
      Jesus was born in Bethlehem — which in Hebrew, 
      <span className="mx-2 font-serif text-xl">בֵּית לֶחֶם</span> (*Beit Leḥem*), 
      means “House of Bread.” Placed in a manger, He became what Scripture calls 
      <span className="font-semibold"> “the Bread of Life” </span> (John 6:35).
    </p>
    <p className="font-semibold text-xl md:text-2xl" style={{ fontFamily: 'serif' }}>
      “Let all that you do be done in love.” (1 Corinthians 16:14)
    </p>
  </div>
</section>

    {/* RECOMENDADOS */}
<section className="relative z-10 bg-transparent py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-6 text-[#fef8f2]">
    Recommended of the week
  </h2>
  <p className="text-[#fef8f2] mb-6 max-w-xl mx-auto text-center">
    Our most beloved breads. Made with natural ingredients and a lot of dedication.
  </p>
  <ProductsGrid items={products.filter(p => p.id === 'pan-dibono')} />
</section>

      {/* TODOS LOS PRODUCTOS */}
      <section className="relative z-10 bg-[#6e8c6e]/80 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#fef8f2]">
          All Products
        </h2>
        <ProductsGrid items={products} />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#6e8c6e] text-[#fef8f2] py-6 px-4 text-center space-y-3 font-[Great_Vibes]">
        <p className="text-lg">Follow us on social media</p>
        <a
          href="https://www.instagram.com/agapan.artisanbakery/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 justify-center hover:text-[#ffffff] transition"
        >
          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.5 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
          </svg>
          @agapanbakery
        </a>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/19045812039"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            WhatsApp Ian
          </a>
          <a
            href="https://wa.me/19045822072"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            WhatsApp Mari
          </a>
        </div>
        <p className="text-sm mt-2">© 2023 AGAPAN – Made with love by Mari & Ian</p>
      </footer>

      {/* 🔥 INTEGRACIÓN DEL CARRITO */}
      <CartButton onClick={() => setIsCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}