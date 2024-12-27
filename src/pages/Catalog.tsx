import React, { useState } from 'react';
import { CategoryFilter } from '../components/catalog/CategoryFilter';
import { SortSelect } from '../components/catalog/SortSelect';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Шоколадный торт',
    description: 'Нежный бисквит с шоколадным кремом',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'cakes',
  },
  {
    id: '2',
    name: 'Макаронс',
    description: 'Ассорти из 12 штук разных вкусов',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43',
    category: 'pastries',
  },
  // Добавьте больше продуктов здесь
];

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-playfair font-bold mb-8">Каталог</h1>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
}