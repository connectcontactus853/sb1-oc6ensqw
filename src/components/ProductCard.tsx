import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-4">
        <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{product.price} ₽</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-pink-700 transition"
          >
            <Plus className="w-5 h-5" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
}