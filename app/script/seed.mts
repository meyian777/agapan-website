import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

console.log("🚀 Iniciando el seed de productos AGAPAN...");

async function main() {
  try {
    await prisma.product.deleteMany();
    console.log("🧹 Productos anteriores eliminados");

    const result = await prisma.product.createMany({
      data: [
        {
          name: "Pan agridulce",
          description: "Pan artesanal relleno de queso feta.",
          price: 2.5,
          imageUrl: "/images/pan-queso.jpg",
          stock: 100,
          category: "Agri-Dulce"
        },
        {
          name: "Pan de Jamon",
          description: "Pan suave con jamón cocido.",
          price: 3.0,
          imageUrl: "/images/pan-jamon.jpg",
          stock: 80,
          category: "Salado"
        },
        {
          name: "Pan Masa Madre",
          description: "Fermentación natural con masa madre.",
          price: 13.0,
          imageUrl: "/images/pan-masamadre.jpg",
          stock: 100,
          category: "Saludable"
        }
      ]
    });

    console.log("✅ Productos insertados:", result);
  } catch (error) {
    console.error("❌ Error en main():", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();