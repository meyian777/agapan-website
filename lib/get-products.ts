// ✅ Versión sin Prisma — full local data y sin errores de build

const productsList = [
  {
    id: 1,
    name: 'Pan con Bocadillo',
    price: 2.50,
    description: 'Suave pan artesanal relleno con bocadillo, el contraste perfecto entre dulce y esponjoso.',
    imageUrl: '/images/pan-bocadillo.jpg',
    orders: 12,
  },
  {
    id: 2,
    name: 'Pandibono',
    price: 2.00,
    description: 'El clásico pandibono colombiano, crujiente por fuera y suave por dentro.',
    imageUrl: '/images/pan-dibono.jpg',
    orders: 25,
  },
  {
    id: 3,
    name: 'Pan con Jamón',
    price: 13.00,
    description: 'Pan suave horneado con jamón, ideal para desayunos y meriendas.',
    imageUrl: '/images/pan-jamon.jpg',
    orders: 10,
  },
  {
    id: 4,
    name: 'Pan de Masa Madre',
    price: 13.00,
    description: 'Hecho con fermentación natural, corteza crujiente y miga aireada, perfecto para los amantes del buen pan.',
    imageUrl: '/images/pan-masamadre.jpg',
    orders: 8,
  },
  {
    id: 5,
    name: 'Pan de Queso',
    price: 3.00,
    description: 'Delicioso pan artesanal con queso, esponjoso y con un sabor irresistible.',
    imageUrl: '/images/pan-queso.jpg',
    orders: 15,
  },
];

export async function getProducts() {
  const products = [...productsList].sort((a, b) => b.id - a.id);
  const recommendedProduct = [...productsList].sort((a, b) => b.orders - a.orders)[0];
  return products.map(p => ({
    ...p,
    isRecommended: p.id === recommendedProduct.id,
  }));
}