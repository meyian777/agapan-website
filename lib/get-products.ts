
import { PrismaClient } from '@prisma/client';


const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 🥖 Productos base (sin cambios)
const productsList: Product[] = [
  {
    id: 1,
    name: 'Pan con Bocadillo',
    price: 2.5,
    description:
      'Suave pan artesanal relleno con bocadillo, el contraste perfecto entre dulce y esponjoso.',
    imageUrl: '/images/pan-bocadillo.jpg',
    orders: 12,
  },
  {
    id: 2,
    name: 'Pandibono',
    price: 2.0,
    description:
      'El clásico pandibono colombiano, crujiente por fuera y suave por dentro.',
    imageUrl: '/images/pan-dibono.jpg',
    orders: 25,
  },
  {
    id: 3,
    name: 'Pan con Jamón',
    price: 13.0,
    description:
      'Pan suave horneado con jamón, ideal para desayunos y meriendas.',
    imageUrl: '/images/pan-jamon.jpg',
    orders: 10,
  },
  {
    id: 4,
    name: 'Pan de Masa Madre',
    price: 13.0,
    description:
      'Hecho con fermentación natural, corteza crujiente y miga aireada, perfecto para los amantes del buen pan.',
    imageUrl: '/images/pan-masamadre.jpg',
    orders: 8,
  },
  {
    id: 5,
    name: 'Pan de Queso',
    price: 3.0,
    description:
      'Delicioso pan artesanal con queso, esponjoso y con un sabor irresistible.',
    imageUrl: '/images/pan-queso.jpg',
    orders: 15,
  },
];

// 🧩 Carga de productos
export async function getProducts() {
  try {
    let products: Product[] = [];

    // Intenta conectar con la base de datos
    try {
      await prisma.$connect();
      const dbProducts = await prisma.product.findMany();
      if (dbProducts && dbProducts.length > 0) {
        products = dbProducts;
      }
      await prisma.$disconnect();
    } catch (dbError) {
      console.warn('⚠️ Prisma no disponible, usando productos locales');
    }

    // Si no hay productos en la BD, usa los locales
    if (products.length === 0) {
      products = [...productsList];
    }

    // Ordena por ID descendente
    const sorted = [...products].sort((a, b) => b.id - a.id);

    // Encuentra el más vendido
    const recommended = [...products].sort((a, b) => b.orders - a.orders)[0];

    return sorted.map((p) => ({
      ...p,
      isRecommended: p.id === recommended.id,
    }));
  } catch (error) {
    console.error('❌ Error en getProducts:', error);
    return [];
  }
}