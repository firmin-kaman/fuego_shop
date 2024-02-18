/* eslint-disable react-refresh/only-export-components */
import React from 'react'

// Images of products
import productImage1 from '../../Images/smartphone.png';
import productImage2 from '../../Images/laptop.png';
import productImage3 from '../../Images/headphones.png';
import productImage4 from '../../Images/smartwatch.png';
import productImage5 from '../../Images/veloelectrique.png';
import productImage6 from '../../Images/shirts-2-1920.png';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number | string;
}


export const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    description: 'Un smartphone dernier cri avec des fonctionnalités avancées.',
    imageUrl: productImage1,
    price: 899.99.toFixed(2),
  },
  {
    id: 2,
    name: 'Ordinateur Portable ABC',
    description: 'Un ordinateur portable puissant pour toutes vos tâches informatiques.',
    imageUrl: productImage2,
    price: 1299.99,
  },
  {
    id: 3,
    name: 'Casque Audio Bluetooth',
    description: 'Un casque audio sans fil avec une qualité audio exceptionnelle.',
    imageUrl: productImage3,
    price: 99.99,
  },
  {
    id: 4,
    name: 'Montre Connectée',
    description: 'Une montre connectée élégante avec suivi d`activité et notifications.',
    imageUrl: productImage4,
    price: 199.99,
  },
  {
    id: 5,
    name: 'Vélo electrique',
    description: 'Un vélo élégant avec une autonomie de 4h. parfais pour les petites balades.',
    imageUrl: productImage5,
    price: 368.99,
  },
  {
    id: 6,
    name: 'T-shirt',
    description: 'Un T-shirt soyeux pour homme, femme et enfants.',
    imageUrl: productImage6,
    price: 45.99,
  },
];

const ProductData: React.FC = () => {
  return (
    <div>ProductData</div>
  )
}

export default ProductData
