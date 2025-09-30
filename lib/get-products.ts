export async function getProducts() {
  return [
    {
      id: 'pan-jamon',
      name: 'Pan con Jamón',
      price: 2.5,
      description: 'Delicioso pan artesanal relleno con jamón ahumado.',
      image: '/images/pan-jamon.jpg',
    },
    {
      id: 'pan-queso',
      name: 'Pan de Queso',
      price: 3.00,
      description: 'Pan suave y esponjoso con queso feta griego fundido en su interior.',
      image: '/images/pan-queso.jpg',
    },
    {
      id: 'pan-masamadre',
      name: 'Pan de Masa Madre',
      price: 13.00,
      description: 'Pan rústico hecho con masa madre y fermentación natural.',
      image: '/images/pan-masamadre.jpg',
    },
    {
      id: 'pan-bocadillo',
      name: 'Pan de Bocadillo',
      price: 2.50,
      description: 'Suave pan artesanal relleno con bocadillo dulce.',
      image: '/images/pan-bocadillo.jpg', // 👈 asegúrate que el archivo en /public/images/ tenga este nombre
    },
    {
      id: 'pan-dibono',
      name: 'Pan Di Bono',
      price: 2.00,
      description: 'Tradicional pandebono colombiano con queso y almidón de yuca.',
      image: '/images/pan-dibono.jpg', // 👈 asegúrate que el archivo en /public/images/ tenga este nombre
    },
  ]
}