import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "AGAPAN Artisan Bakery",
  description: "Artisan breads made with love by Mari & Ian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}