import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-playfair font-bold text-pink-600">
            Сладкие Мечты
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition">Главная</Link>
            <Link to="/catalog" className="text-gray-700 hover:text-pink-600 transition">Каталог</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-pink-600 transition">Контакты</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-pink-600 transition">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link
              to="/contacts"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}