'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

import ProductsGrid from "@/components/ProductsGrid";
import CartButton from "@/components/CartButton";
import CartModal from "@/components/CartModal";
import Footer from "@/components/Footer"; 
import { getProducts } from "@/lib/get-products";

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);
  const [recommended, setRecommended] = useState<any | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const { products, recommendedProduct } = await getProducts();
      setProducts(products);
      setRecommended(recommendedProduct);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {/* VIDEO DE FONDO */}
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

      {/* OVERLAY */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#6e8c6e]/70 z-[-1]" />

      {/* HERO */}
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
          <h1 className="text-6xl tracking-[0.4em] uppercase agapan-hover">
            <span className="letter">A</span>
            <span className="letter">G</span>
            <span className="letter">A</span>
            <span className="letter">P</span>
            <span className="letter">A</span>
            <span className="letter">N</span>
          </h1>
          <p className="text-4xl italic font-[Great_Vibes] artisan-hover">
            Artisan Bakery
          </p>
        </div>
      </header>

      {/* SECCIÓN VERDE */}
      <section className="relative z-10 py-16 px-6 bg-[#6e8c6e]/80 text-[#fef8f2] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Baking with Purpose</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At AGAPAN, every loaf tells a story — of heritage, love, and authenticity.
          Our bakery is built on tradition, perfected with time, and always infused with care.
        </p>
        <div className="mt-8 max-w-3xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            But bread is more than food. In the Bible, bread carries a profound meaning: it
            represents life, provision, and God’s love for humanity.
          </p>
          <p className="italic">
            Jesus was born in Bethlehem — <span className="mx-2 font-serif text-xl">בֵּית לֶחֶם</span> (*Beit Leḥem*),
            which means “House of Bread.” Placed in a manger, He became
            <span className="font-semibold"> “the Bread of Life” </span> (John 6:35).
          </p>
          <p className="font-semibold text-xl md:text-2xl" style={{ fontFamily: 'serif' }}>
            “Let all that you do be done in love.” (1 Corinthians 16:14)
          </p>
        </div>
      </section>

      {/* RECOMENDADO DE LA SEMANA */}
      <section className="relative z-10 bg-transparent py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#fef8f2]">
          Recommended of the Week
        </h2>
        <p className="recommended-text text-lg mb-6 max-w-xl mx-auto text-center italic opacity-90">
  This section updates automatically each week based on our most ordered product 🍞
</p>

        {recommended ? (
          <ProductsGrid items={[recommended]} />
        ) : (
          <p className="text-center text-[#fef8f2]/80 italic">
            Loading this week’s favorite...
          </p>
        )}
      </section>

      {/* TODOS LOS PRODUCTOS */}
      <section className="relative z-10 bg-[#6e8c6e]/80 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#fef8f2]">
          All Products
        </h2>
        <ProductsGrid items={products} />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOTÓN DEL CARRITO */}
      <div className="fixed top-4 right-4 z-50">
        <CartButton onClick={() => setIsCartOpen(true)} />
      </div>

      {/* MODAL DEL CARRITO */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}