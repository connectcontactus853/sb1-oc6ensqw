import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const popularProducts: Product[] = [
  {
    id: '1',
    name: 'Шоколадный торт',
    description: 'Нежный бисквит с шоколадным кремом',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'cakes',
    popular: true
  },
  {
    id: '2',
    name: 'Макаронс-',
    description: 'Ассорти из 12 штук разных вкусов',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43',
    category: 'pastries',
    popular: true
  },
  {
    id: '3',
    name: 'Чизкейк',
    description: 'Классический нью-йоркский чизкейк',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50',
    category: 'cakes',
    popular: true
  }
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486427944299-d1955d23e34d)'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Сладкие Мечты
            </h1>
            <p className="text-xl text-white mb-8">
              Изысканные десерты ручной работы для особенных моментов
            </p>
            <Link
              to="/catalog"
              className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
            >
              Смотреть каталог
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">
            О нас
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Мы создаем изысканные десерты с любовью и вниманием к каждой детали.
            Используем только натуральные ингредиенты высочайшего качества,
            чтобы каждый кусочек приносил настоящее наслаждение.
          </p>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Популярные десерты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}